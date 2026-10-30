"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { Icon, type IconName } from "@/components/icon";
import { primaryNav, solutionGroups, type NavLink } from "@/content/navigation";
import { phoneHref, siteConfig, whatsappHref } from "@/lib/site-config";

function groupIcon(title: string): IconName | null {
  if (title.startsWith("Carport")) return "carport";
  if (title.startsWith("Parasol")) return "parasol";
  if (title.startsWith("Store")) return "store";
  if (title.startsWith("Pergola")) return "pergola";
  return null;
}

export function MobileNav({ cta }: { cta: NavLink }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.querySelector("header")?.setAttribute("inert", "");
    document.getElementById("contenu")?.setAttribute("inert", "");
    document.querySelector("footer")?.setAttribute("inert", "");
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.querySelector("header")?.removeAttribute("inert");
      document.getElementById("contenu")?.removeAttribute("inert");
      document.querySelector("footer")?.removeAttribute("inert");
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center border border-line px-3 text-sm"
        aria-expanded={open}
        aria-controls="menu-mobile"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Fermer" : "Menu"}
      </button>
      {open
        ? createPortal(
        <div
          id="menu-mobile"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="menu-sheet fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <p id={titleId} className="flex items-center gap-3 text-[0.72rem] font-medium tracking-[0.32em]">
              <span className="rule" aria-hidden="true" />
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
            <ul className="menu-links space-y-1">
              {primaryNav.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex min-h-12 items-baseline gap-4 text-2xl"
                    onClick={() => setOpen(false)}
                  >
                    <span aria-hidden="true" className="w-8 text-sm tracking-[0.14em] text-accent">0{index + 1}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-line">
              {solutionGroups.map((group) => {
                const icon = groupIcon(group.title);
                return (
                <div key={group.title} className="border-b border-line py-4">
                  <p className="flex items-center gap-2.5 text-[0.68rem] font-medium tracking-[0.18em] text-accent uppercase">
                    {icon ? <Icon name={icon} className="size-5 text-ink" /> : null}
                    {group.title}
                  </p>
                  <ul className="mt-1">
                    {group.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex min-h-11 items-center text-base"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                );
              })}
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
        </div>,
          document.body,
        )
        : null}
    </div>
  );
}
