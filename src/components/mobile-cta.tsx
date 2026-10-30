"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";
import { phoneHref, whatsappHref } from "@/lib/site-config";

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => {
      const on = window.scrollY > 560;
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

  const tel = phoneHref();
  const whatsapp = whatsappHref("Bonjour Terrastore, je souhaite étudier un projet.");

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 p-3 shadow-[0_-10px_30px_rgba(28,25,22,0.06)] backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        {tel ? (
          <a href={tel} className="btn inline-flex gap-2 btn-secondary" data-track="phone_click">
            <Icon name="phone" />
            Appeler
          </a>
        ) : null}
        {whatsapp ? (
          <a href={whatsapp} className="btn inline-flex gap-2 btn-primary" data-track="whatsapp_click">
            <Icon name="chat" />
            WhatsApp
          </a>
        ) : null}
      </div>
    </div>
  );
}
