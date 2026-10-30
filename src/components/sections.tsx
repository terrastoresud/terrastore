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
      <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
        {block.items.map((item) => (
          <li key={item.title}>
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
      <aside className="border-l border-mark pl-5">
        <p className="font-medium">{frTypo(block.title)}</p>
        <p className="mt-2 leading-7 text-muted">{frTypo(block.text)}</p>
      </aside>
    );
  }
  return (
    <ol className="grid gap-x-10 gap-y-6 md:grid-cols-2">
      {block.items.map((step, index) => (
        <li key={step.title}>
          <p className="text-[0.68rem] font-medium tracking-[0.18em] text-accent">0{index + 1}</p>
          <p className="mt-2 font-medium">{frTypo(step.title)}</p>
          <p className="mt-2 leading-7 text-muted">{frTypo(step.text)}</p>
        </li>
      ))}
    </ol>
  );
}

export function Sections({ sections }: { sections: PageSection[] }) {
  return (
    <div>
      {sections.map((section, index) => (
          <section key={section.id} aria-labelledby={section.id} className="rise border-t border-line py-12 md:py-16">
            <p className="index">
              <span className="rule" aria-hidden="true" />
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 id={section.id} className="mt-4 max-w-[22ch] text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
              {frTypo(section.heading)}
            </h2>
            {section.imageId ? (
              <Media id={section.imageId} plate className="mt-8" sizes="(min-width: 1024px) 1120px, 100vw" />
            ) : null}
            <div className="mt-8 space-y-6">
              {section.blocks.map((block, blockIndex) => (
                <Block key={`${section.id}-${blockIndex}`} block={block} />
              ))}
            </div>
          </section>
      ))}
    </div>
  );
}
