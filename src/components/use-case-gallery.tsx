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
  const scrollerRef = useRef<HTMLUListElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(() => {
    setOpenIndex((current) => (current === null ? current : (current - 1 + items.length) % items.length));
  }, [items.length]);
  const showNext = useCallback(() => {
    setOpenIndex((current) => (current === null ? current : (current + 1) % items.length));
  }, [items.length]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    function onScroll() {
      if (!scroller) return;
      const children = [...scroller.children] as HTMLElement[];
      if (!children.length) return;
      const mid = scroller.scrollLeft + scroller.clientWidth / 2;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      children.forEach((child, index) => {
        const center = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = index;
        }
      });
      setActiveSlide(best);
    }

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => scroller.removeEventListener("scroll", onScroll);
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
        const dialog = document.getElementById("use-case-lightbox");
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

  function scrollToSlide(index: number) {
    const scroller = scrollerRef.current;
    const child = scroller?.children[index] as HTMLElement | undefined;
    if (!scroller || !child) return;
    scroller.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  }

  return (
    <section className="rise border-t border-line py-10 md:py-16" aria-labelledby={headingId}>
      <p className="index">
        <span className="rule" aria-hidden="true" />
        En images
      </p>
      <h2 id={headingId} className="mt-4 max-w-[24ch] text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
        {frTypo(title)}
      </h2>
      {lede ? <p className="mt-4 max-w-[48rem] leading-7 text-muted md:leading-8">{frTypo(lede)}</p> : null}

      <div className="mt-4 flex items-center justify-between gap-3 sm:hidden">
        <p className="text-sm text-muted">
          {items.length} photos · glisser
        </p>
        <p className="tabular-nums text-sm font-medium text-ink" aria-live="polite">
          {activeSlide + 1}/{items.length}
        </p>
      </div>

      <ul ref={scrollerRef} className="use-case-gallery mt-5 sm:mt-10">
        {items.map((item, index) => {
          const image = imageAsset(item.imageId);
          if (!image.src) return null;
          return (
            <li key={item.imageId} className="use-case-gallery-item">
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => setOpenIndex(index)}
                aria-haspopup="dialog"
                aria-label={`Agrandir : ${image.alt}`}
              >
                <span className="frame plate relative block overflow-hidden aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
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

      <div className="mt-4 flex items-center justify-center gap-2 sm:hidden" aria-hidden="true">
        {items.map((item, index) => (
          <button
            key={item.imageId}
            type="button"
            className="flex h-11 w-3 items-center justify-center"
            onClick={() => scrollToSlide(index)}
            tabIndex={-1}
          >
            <span
              className={`block h-2 w-2 rounded-full transition-colors ${index === activeSlide ? "bg-ink" : "bg-line"}`}
            />
          </button>
        ))}
      </div>

      {openIndex !== null && activeImage?.src
        ? createPortal(
            <div
              id="use-case-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={activeImage.alt}
              className="lightbox fixed inset-0 z-[60] flex flex-col bg-[rgba(28,25,22,0.94)] text-inverse"
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
                  onClick={(event) => {
                    event.stopPropagation();
                    close();
                  }}
                >
                  Fermer
                </button>
              </div>

              <div
                className="relative flex min-h-0 flex-1 flex-col"
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
                <figure className="relative mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col px-4 sm:px-10">
                  <div className="relative mx-auto h-[min(58vh,640px)] w-full flex-1 sm:h-[min(72vh,720px)]">
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </div>
                  <figcaption className="mt-3 text-center text-sm leading-6 text-[#ddd6cc] sm:mt-4">
                    {frTypo(activeImage.alt)}
                  </figcaption>
                </figure>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-inverse/15 px-4 py-3 sm:hidden">
                  <button
                    type="button"
                    className="btn inline-flex min-h-11 min-w-11 items-center justify-center border border-inverse/40 px-4 text-inverse"
                    onClick={showPrev}
                    aria-label="Image précédente"
                  >
                    ‹
                  </button>
                  <p className="tabular-nums text-sm text-[#ddd6cc]">
                    {openIndex + 1}/{items.length}
                  </p>
                  <button
                    type="button"
                    className="btn inline-flex min-h-11 min-w-11 items-center justify-center border border-inverse/40 px-4 text-inverse"
                    onClick={showNext}
                    aria-label="Image suivante"
                  >
                    ›
                  </button>
                </div>

                <button
                  type="button"
                  className="absolute top-1/2 left-2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center border border-inverse/40 bg-ink/40 text-inverse sm:inline-flex sm:left-4"
                  onClick={showPrev}
                  aria-label="Image précédente"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="absolute top-1/2 right-2 z-10 hidden min-h-11 min-w-11 -translate-y-1/2 items-center justify-center border border-inverse/40 bg-ink/40 text-inverse sm:inline-flex sm:right-4"
                  onClick={showNext}
                  aria-label="Image suivante"
                >
                  ›
                </button>

                <div className="hidden gap-2 overflow-x-auto px-4 pb-4 sm:flex sm:justify-center sm:px-10 sm:pb-6">
                  {items.map((item, index) => {
                    const thumb = imageAsset(item.imageId);
                    if (!thumb.src) return null;
                    const selected = index === openIndex;
                    return (
                      <button
                        key={item.imageId}
                        type="button"
                        className={`relative h-14 w-20 shrink-0 overflow-hidden border ${selected ? "border-inverse" : "border-inverse/25 opacity-70"}`}
                        onClick={() => setOpenIndex(index)}
                        aria-label={`Voir photo ${index + 1}`}
                        aria-current={selected ? "true" : undefined}
                      >
                        <Image src={thumb.src} alt="" fill sizes="80px" className="object-cover" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
