"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper p-3 sm:hidden">
      <Link href="/contact" className="btn inline-flex btn-primary w-full" data-track="quote_cta">
        Demander une étude
      </Link>
    </div>
  );
}
