import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { primaryNav, solutionGroups } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="mast sticky top-0 z-40">
      <div className="read-bar" aria-hidden="true" />
      <a href="#contenu" className="skip-link">
        Aller au contenu
      </a>
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Terrastore, accueil">
          <span className="rule" aria-hidden="true" />
          <span className="text-[0.72rem] font-medium tracking-[0.32em]">TERRASTORE</span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
          <details className="relative">
            <summary className="flex min-h-11 cursor-pointer items-center gap-2 text-sm">
              Solutions
              <span className="chevron" aria-hidden="true" />
            </summary>
            <div className="flyout absolute left-0 top-full z-20 mt-3 w-[40rem] bg-paper p-6">
              <div className="grid grid-cols-2 gap-6">
                {solutionGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs tracking-[0.14em] text-accent uppercase">{group.title}</p>
                    <ul className="mt-2 space-y-1">
                      {group.links.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="inline-flex min-h-10 items-center text-sm hover:underline">
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link href="/solutions" className="mt-4 inline-flex min-h-10 items-center text-sm underline">
                Voir toutes les solutions
              </Link>
            </div>
          </details>
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="ink-link inline-flex min-h-11 items-center text-sm transition-colors hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-primary hidden sm:inline-flex" data-track="quote_cta">
            Demander une étude
          </Link>
          <MobileNav cta={{ href: "/contact", label: "Demander une étude" }} />
        </div>
      </div>
    </header>
  );
}
