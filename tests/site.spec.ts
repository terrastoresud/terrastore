import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();

function contentSlugs(file: string): string[] {
  const text = readFileSync(path.join(root, file), "utf8");
  return [...text.matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

function routes(): string[] {
  const pages = readdirSync(path.join(root, "src/content/pages"))
    .filter((name) => name.endsWith(".ts"))
    .flatMap((name) => contentSlugs(path.join("src/content/pages", name)));
  const guides = contentSlugs("src/content/guides.ts").map((slug) => `/conseils/${slug}`);
  return ["/", "/conseils", "/contact", "/realisations", ...pages.map((slug) => `/${slug}`), ...guides];
}

test("robots and sitemap stay closed while indexing is off", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).not.toContain("<loc>");
});

test("unknown URL returns 404", async ({ request }) => {
  const response = await request.get("/page-inexistante");
  expect(response.status()).toBe(404);
  expect(await response.text()).toContain("Cette page");
});

test("contact API refuses to pretend a message was sent", async ({ request }) => {
  const response = await request.post("/api/contact", {
    data: {
      name: "Amina",
      phone: "0611223344",
      city: "Agadir",
      projectType: "Carport",
      dimensions: "5 m",
      message: "Deux voitures devant le portail, photo à suivre.",
      consent: true,
      company: "",
    },
  });
  expect(response.status()).toBe(503);
  const body = await response.json();
  expect(body.ok).toBe(false);
  expect(body.code).toBe("unconfigured");
});

test("pages expose one heading, a canonical and safe copy", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "full crawl once");
  test.setTimeout(180000);
  const titles = new Set<string>();
  for (const route of routes()) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBeLessThan(400);
    const title = await page.title();
    expect(titles.has(title), title).toBe(false);
    titles.add(title);
    expect(await page.locator("h1").count(), route).toBe(1);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical, route).toBeTruthy();
    const robots = await page.locator('meta[name="robots"]').getAttribute("content");
    expect(robots).toContain("noindex");
    const html = await page.content();
    expect(html.toLowerCase()).not.toContain("lorem ipsum");
    expect(html).not.toContain("example@");
    expect(html).not.toContain("+212000000000");
    expect(html).not.toContain("06XXXXXXXX");
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    for (let index = 0; index < count; index += 1) {
      const raw = await scripts.nth(index).textContent();
      expect(() => JSON.parse(raw || ""), route).not.toThrow();
    }
  }
});

test("homepage, menu and form", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Carports, parasols et stores");
  await expect(async () => {
    if (!page.url().endsWith("/contact")) {
      const headerCta = page.locator("header").getByRole("link", { name: "Demander une étude" });
      const cta = (await headerCta.isVisible())
        ? headerCta
        : page.getByRole("main").getByRole("link", { name: "Demander une étude" });
      await cta.click();
    }
    await expect(page).toHaveURL(/\/contact$/, { timeout: 4000 });
  }).toPass({ timeout: 20000 });
  await page.getByRole("button", { name: "Envoyer la demande" }).click();
  await expect(page.locator("#name-error")).toBeVisible();

  if (testInfo.project.name === "mobile") {
    await page.goto("/");
    await page.getByRole("button", { name: "Menu" }).click();
    await page.locator("#menu-mobile").getByRole("link", { name: "Carports", exact: true }).click();
    await expect(page).toHaveURL(/\/carport-aluminium$/);
  }
});

test("no horizontal overflow on priority pages", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "viewports are set explicitly");
  for (const width of [360, 1280]) {
    await page.setViewportSize({ width, height: 800 });
    for (const route of ["/", "/carport-aluminium", "/parasols", "/store-banne", "/contact"]) {
      await page.goto(route);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow, `${route}@${width}`).toBeLessThanOrEqual(1);
    }
  }
});

test("critical pages have no serious accessibility violations", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "axe once");
  for (const route of ["/", "/carport-aluminium", "/contact"]) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const serious = results.violations.filter((item) => item.impact === "serious" || item.impact === "critical");
    expect(serious, `${route} ${serious.map((item) => item.id).join(",")}`).toEqual([]);
  }
});
