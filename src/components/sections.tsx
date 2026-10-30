import Link from "next/link";
import type { ContentBlock, Inline, PageSection } from "@/content/types";
import { ComparisonTable } from "@/components/comparison-table";
import { Media } from "@/components/media";
import { frTypo } from "@/lib/typography";

function InlineText({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <span key={index}>{frTypo(part)}</span>
        ) : (
          <Link key={index} href={part.href} className="underline decoration-line underline-offset-4">
            {frTypo(part.label)}
          </Link>
        ),
      )}
    </>
  );
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "paragraphs") {
    return (
      <div className="space-y-4">
        {block.items.map((paragraph, index) => (
          <p key={index} className="measure leading-8 text-muted">
            <InlineText parts={paragraph} />
          </p>
        ))}
      </div>
    );
  }
  if (block.type === "subhead") {
    return <h3 className="pt-2 text-xl font-medium">{frTypo(block.text)}</h3>;
  }
  if (block.type === "points") {
    return (
      <ul className="grid gap-6 sm:grid-cols-2">
        {block.items.map((item) => (
          <li key={item.title} className="border-t border-line pt-4">
            <p className="font-medium">{frTypo(item.title)}</p>
            <p className="mt-2 leading-7 text-muted">{frTypo(item.text)}</p>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "bullets") {
    return (
      <ul className="measure list-disc space-y-2 pl-5 leading-7 text-muted">
        {block.items.map((item) => (
          <li key={item}>{frTypo(item)}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "comparison") return <ComparisonTable table={block} />;
  if (block.type === "note") {
    return (
      <aside className="border-l-2 border-mark bg-sand px-5 py-4">
        <p className="font-medium">{frTypo(block.title)}</p>
        <p className="mt-2 leading-7 text-muted">{frTypo(block.text)}</p>
      </aside>
    );
  }
  return (
    <ol className="grid gap-5 md:grid-cols-2">
      {block.items.map((step, index) => (
        <li key={step.title} className="border-t border-line pt-4">
          <p className="text-xs tracking-[0.14em] text-accent">0{index + 1}</p>
          <p className="mt-2 font-medium">{frTypo(step.title)}</p>
          <p className="mt-2 leading-7 text-muted">{frTypo(step.text)}</p>
        </li>
      ))}
    </ol>
  );
}

export function Sections({ sections }: { sections: PageSection[] }) {
  let imageOrdinal = 0;
  return (
    <div className="space-y-14 md:space-y-20">
      {sections.map((section, index) => {
        const hasImage = Boolean(section.imageId);
        const flip = hasImage ? imageOrdinal++ % 2 === 0 : false;
        const textClass = hasImage
          ? flip
            ? "min-w-0 lg:col-span-7 lg:col-start-6"
            : "min-w-0 lg:col-span-7"
          : "min-w-0 md:col-span-2 lg:col-span-12";
        const imageClass = flip
          ? "min-w-0 md:order-first lg:order-none lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:sticky lg:top-28 lg:self-start"
          : "min-w-0 lg:col-span-5 lg:sticky lg:top-28 lg:self-start";
        return (
          <section
            key={section.id}
            aria-labelledby={section.id}
            className="rise grid gap-8 border-t border-line pt-10 md:grid-cols-2 md:items-start md:gap-10 md:pt-12 lg:grid-cols-12 lg:gap-14"
          >
            <div className={textClass}>
              <p className="index">
                <span className="rule" aria-hidden="true" />
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 id={section.id} className="mt-4 max-w-[22ch] text-3xl leading-tight font-medium md:text-4xl">
                {frTypo(section.heading)}
              </h2>
              <div className="mt-6 space-y-6">
                {section.blocks.map((block, blockIndex) => (
                  <Block key={`${section.id}-${blockIndex}`} block={block} />
                ))}
              </div>
            </div>
            {section.imageId ? (
              <div className={imageClass}>
                <Media
                  id={section.imageId}
                  plate={!flip}
                  className={flip ? "quiet" : undefined}
                  sizes="(min-width: 1024px) 460px, (min-width: 768px) 46vw, 100vw"
                />
              </div>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
