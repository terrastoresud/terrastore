import type { Faq } from "@/content/types";
import { frTypo } from "@/lib/typography";

export function FaqList({ items }: { items: Faq[] }) {
  if (!items.length) return null;
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-line">
          <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-6 py-4 text-left text-lg font-medium text-ink">
            <span>{frTypo(item.question)}</span>
            <span aria-hidden="true" className="text-mark text-xl leading-none group-open:hidden">
              +
            </span>
            <span aria-hidden="true" className="hidden text-mark text-xl leading-none group-open:inline">
              –
            </span>
          </summary>
          <p className="faq-copy measure pb-5 leading-7">{frTypo(item.answer)}</p>
        </details>
      ))}
    </div>
  );
}
