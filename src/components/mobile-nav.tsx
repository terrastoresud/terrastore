"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { primaryNav, solutionGroups, type NavLink } from "@/content/navigation";
import { phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";

export function MobileNav({ cta }: { cta: NavLink }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.getElementById("contenu")?.setAttribute("inert", "");
    document.querySelector("footer")?.setAttribute("inert", "");
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.getElementById("contenu")?.removeAttribute("inert");
      document.querySelector("footer")?.removeAttribute("inert");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center px-3 text-sm"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Fermer" : "Menu"}
      </button>
      {open ? (
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="menu-sheet fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <p id={titleId} className="text-sm tracking-[0.16em]">
              TERRASTORE
            </p>
            <button
              type="button"
              className="inline-flex min-h-11 items-center px-3"
              onClick={() => setOpen(false)}
            >
              Fermer
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-12 items-center text-2xl"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-6 border-t border-line pt-6">
              {solutionGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs tracking-[0.14em] text-accent uppercase">{group.title}</p>
                  <ul className="mt-2">
                    {group.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex min-h-11 items-center text-lg"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-line p-4">
            <div className="mb-3 flex items-center justify-between gap-4 text-sm">
              {tel && siteConfig.phone ? (
                <a className="inline-flex min-h-11 items-center underline" href={tel} data-track="phone_click">
                  {siteConfig.phone}
                </a>
              ) : null}
              {whatsapp ? (
                <a className="inline-flex min-h-11 items-center underline" href={whatsapp} data-track="whatsapp_click">
                  WhatsApp
                </a>
              ) : null}
            </div>
            <Link href={cta.href} className="btn inline-flex btn-primary w-full" data-track="quote_cta" onClick={() => setOpen(false)}>
              {cta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
