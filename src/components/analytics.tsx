"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const STORAGE_KEY = "terrastore-analytics-consent";

function safeId(id: string): boolean {
  return /^(G|GT|AW)-[A-Za-z0-9-]+$/.test(id);
}

export function Analytics({ gaId }: { gaId: string | null }) {
  const [consent, setConsent] = useState<"unknown" | "granted" | "denied">("unknown");

  useEffect(() => {
    if (!gaId || !safeId(gaId)) return;
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "granted" || stored === "denied") setConsent(stored);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [gaId]);

  useEffect(() => {
    if (consent !== "granted" || !gaId) return;
    function onClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest("[data-track]");
      const name = target?.getAttribute("data-track");
      const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
      if (!name || !gtag) return;
      gtag("event", name);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent, gaId]);

  if (!gaId || !safeId(gaId)) return null;

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="terrastore-ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {consent === "unknown" ? (
        <div className="fixed inset-x-0 bottom-16 z-40 border-t border-line bg-paper p-4 sm:bottom-0">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[70ch] text-sm leading-6">
              Une mesure d’audience peut être activée pour comprendre les demandes de devis. Elle ne se charge qu’avec votre accord.
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                className="btn inline-flex btn-secondary"
                onClick={() => {
                  window.localStorage.setItem(STORAGE_KEY, "denied");
                  setConsent("denied");
                }}
              >
                Refuser
              </button>
              <button
                type="button"
                className="btn inline-flex btn-primary"
                onClick={() => {
                  window.localStorage.setItem(STORAGE_KEY, "granted");
                  setConsent("granted");
                }}
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
