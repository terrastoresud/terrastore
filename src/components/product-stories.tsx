"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { imageAsset } from "@/content/images";
import type { StoryItem } from "@/content/types";
import { frTypo } from "@/lib/typography";

export function ProductStories({
  title,
  lede,
  items,
}: {
  title: string;
  lede?: string;
  items: StoryItem[];
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
    <section className="rise border-t border-line py-10 sm:py-12 md:py-16" aria-labelledby={headingId}>
      <p className="index">
        <span className="rule" aria-hidden="true" />
        Configurations
      </p>
      <h2 id={headingId} className="mt-3 max-w-[24ch] text-[1.55rem] leading-[1.15] font-medium sm:mt-4 sm:text-[1.7rem] md:text-4xl">
        {frTypo(title)}
      </h2>
      {lede ? (
        <p className="mt-3 max-w-[48rem] text-[0.98rem] leading-7 text-muted sm:mt-4 sm:leading-8">{frTypo(lede)}</p>
      ) : null}

      <div className="mt-10 space-y-14 sm:mt-12 sm:space-y-16 md:space-y-20">
        {items.map((item, index) => {
          const image = imageAsset(item.imageId);
          if (!image.src) return null;
          const reverse = index % 2 === 1;
          return (
            <article
              key={item.imageId}
              id={`config-${item.imageId}`}
              className={`story-block grid items-start gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-12 ${
                reverse ? "story-block-reverse" : ""
              }`}
            >
              <div className={`min-w-0 lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                <button
                  type="button"
                  className="group block w-full text-left"
                  onClick={() => setOpenIndex(index)}
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
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      style={{ objectPosition: image.objectPosition }}
                      loading={index < 2 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                  </span>
                </button>
                <p className="mt-2 text-[0.78rem] leading-5 text-muted">{frTypo(image.caption || image.alt)}</p>
              </div>

              <div className={`min-w-0 lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                <p className="flex items-baseline gap-3 text-[0.68rem] font-medium tracking-[0.16em] text-accent uppercase">
                  <span className="tabular-nums text-muted" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{frTypo(item.category)}</span>
                </p>
                <h3 className="mt-2 text-[1.35rem] leading-[1.2] font-medium sm:text-[1.5rem]">{frTypo(item.title)}</h3>
                <div className="mt-4 space-y-3">
                  {item.text.map((paragraph) => (
                    <p key={paragraph} className="text-[0.98rem] leading-7 text-muted">
                      {frTypo(paragraph)}
                    </p>
                  ))}
                </div>
                {item.details?.length ? (
                  <dl className="story-details mt-5 divide-y divide-line border-y border-line">
                    {item.details.map((detail) => (
                      <div key={detail.label} className="grid grid-cols-[7.5rem_1fr] gap-3 py-2.5 sm:grid-cols-[8.5rem_1fr]">
                        <dt className="text-sm font-medium">{frTypo(detail.label)}</dt>
                        <dd className="text-sm leading-6 text-muted">{frTypo(detail.value)}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {openIndex !== null && activeImage?.src
        ? createPortal(
            <div
              id="story-lightbox"
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
                  <div className="relative mx-auto h-[min(68vh,700px)] w-full">
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
                    <span className="font-medium text-inverse">{frTypo(active!.title)}</span>
                    <span className="mt-1 block">{frTypo(activeImage.alt)}</span>
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
