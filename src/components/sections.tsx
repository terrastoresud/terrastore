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
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section key={section.id} aria-labelledby={section.id} className="grid gap-8 lg:grid-cols-12">
          <div className={section.imageId ? "min-w-0 lg:col-span-7" : "min-w-0 lg:col-span-12"}>
            <h2 id={section.id} className="max-w-[22ch] text-3xl leading-tight font-medium md:text-4xl">
              {frTypo(section.heading)}
            </h2>
            <div className="mt-6 space-y-6">
              {section.blocks.map((block, index) => (
                <Block key={`${section.id}-${index}`} block={block} />
              ))}
            </div>
          </div>
          {section.imageId ? (
            <div className="lg:col-span-5">
              <Media id={section.imageId} sizes="(min-width: 1024px) 420px, 100vw" />
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
