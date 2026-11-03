"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { imageAsset, type ImageId } from "@/content/images";
import { frTypo } from "@/lib/typography";

export type GalleryEntry = {
  imageId: ImageId;
  category: string;
};

export function UseCaseGallery({
  title,
  lede,
  items,
}: {
  title: string;
  lede?: string;
  items: GalleryEntry[];
}) {
  const headingId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) => (current === null ? current : (current - 1 + items.length) % items.length));
  }, [items.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) => (current === null ? current : (current + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Tab") {
        const dialog = document.getElementById("voile-lightbox");
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, showPrev, showNext]);

  if (!items.length) return null;

  const active = openIndex === null ? null : items[openIndex];
  const activeImage = active ? imageAsset(active.imageId) : null;

  return (
    <section className="rise border-t border-line py-12 md:py-16" aria-labelledby={headingId}>
      <p className="index">
        <span className="rule" aria-hidden="true" />
        En images
      </p>
      <h2 id={headingId} className="mt-4 max-w-[24ch] text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
        {frTypo(title)}
      </h2>
      {lede ? <p className="mt-4 max-w-[48rem] leading-8 text-muted">{frTypo(lede)}</p> : null}
      <ul className="voile-gallery mt-10">
        {items.map((item, index) => {
          const image = imageAsset(item.imageId);
          if (!image.src) return null;
          return (
            <li key={item.imageId} className="voile-gallery-item">
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => setOpenIndex(index)}
                aria-haspopup="dialog"
                aria-label={`Agrandir : ${image.alt}`}
              >
                <span
                  className="frame plate relative block overflow-hidden"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    style={{ objectPosition: image.objectPosition }}
                    loading="lazy"
                  />
                </span>
                <span className="mt-3 block text-[0.68rem] font-medium tracking-[0.16em] text-accent uppercase">
                  {frTypo(item.category)}
                </span>
                {image.caption ? (
                  <span className="mt-1 block text-sm leading-6 text-muted">{frTypo(image.caption)}</span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>

      {openIndex !== null && activeImage?.src
        ? createPortal(
            <div
              id="voile-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={activeImage.alt}
              className="lightbox fixed inset-0 z-[60] flex flex-col bg-[rgba(28,25,22,0.92)] text-inverse"
              onClick={close}
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6">
                <p className="min-w-0 truncate text-sm text-[#ddd6cc]">
                  {frTypo(active!.category)} · {openIndex + 1}/{items.length}
                </p>
                <button
                  ref={closeRef}
                  type="button"
                  className="btn inline-flex min-h-11 border border-inverse px-4 text-inverse hover:bg-inverse hover:text-ink"
                  onClick={close}
                >
                  Fermer
                </button>
              </div>
              <div
                className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-10"
                onClick={(event) => event.stopPropagation()}
                onTouchStart={(event) => {
                  touchStartX.current = event.changedTouches[0]?.clientX ?? null;
                }}
                onTouchEnd={(event) => {
                  if (touchStartX.current === null) return;
                  const delta = (event.changedTouches[0]?.clientX ?? 0) - touchStartX.current;
                  touchStartX.current = null;
                  if (Math.abs(delta) < 48) return;
                  if (delta > 0) showPrev();
                  else showNext();
                }}
              >
                <button
                  type="button"
                  className="absolute left-2 z-10 inline-flex min-h-11 min-w-11 items-center justify-center border border-inverse/40 bg-ink/40 text-inverse sm:left-4"
                  onClick={showPrev}
                  aria-label="Image précédente"
                >
                  ‹
                </button>
                <figure className="relative mx-auto h-full w-full max-w-5xl">
                  <div className="relative mx-auto h-[min(72vh,720px)] w-full">
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <figcaption className="mt-4 text-center text-sm leading-6 text-[#ddd6cc]">
                    {frTypo(activeImage.alt)}
                  </figcaption>
                </figure>
                <button
                  type="button"
                  className="absolute right-2 z-10 inline-flex min-h-11 min-w-11 items-center justify-center border border-inverse/40 bg-ink/40 text-inverse sm:right-4"
                  onClick={showNext}
                  aria-label="Image suivante"
                >
                  ›
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
