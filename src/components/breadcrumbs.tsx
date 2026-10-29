import Link from "next/link";
import { frTypo } from "@/lib/typography";

type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;
  return (
    <nav aria-label="Fil d'Ariane" className="text-sm text-muted">
      <ol className="flex flex-wrap items-baseline gap-y-1">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.href} className="inline max-w-full min-w-0">
              {last ? (
                <span aria-current="page" className="text-ink">
                  {frTypo(item.name)}
                </span>
              ) : (
                <Link href={item.href} className="underline-offset-4 hover:underline">
                  {frTypo(item.name)}
                </Link>
              )}
              {index < items.length - 1 ? <span aria-hidden="true">{" / "}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
