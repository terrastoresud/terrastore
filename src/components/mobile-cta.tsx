"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { whatsappHref } from "@/lib/site-config";

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const on = window.scrollY > 420;
      setVisible(on);
      root.classList.toggle("has-mobile-cta", on);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      root.classList.remove("has-mobile-cta");
    };
  }, []);

  if (!visible) return null;

  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 shadow-[0_-10px_30px_rgba(28,25,22,0.06)] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-[1.35fr_1fr] gap-2">
        <Link href="/contact" className="btn inline-flex justify-center btn-primary" data-track="quote_cta">
          Demander une étude
        </Link>
        {whatsapp ? (
          <a href={whatsapp} className="btn inline-flex justify-center gap-2 btn-secondary" data-track="whatsapp_click">
            <Icon name="chat" />
            WhatsApp
          </a>
        ) : null}
      </div>
    </div>
  );
}
