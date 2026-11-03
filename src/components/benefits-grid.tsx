import { IconWell, type IconName } from "@/components/icon";
import { frTypo } from "@/lib/typography";

export function BenefitsGrid({
  title,
  lede,
  items,
}: {
  title: string;
  lede?: string;
  items: { icon: IconName; title: string; text: string }[];
}) {
  if (!items.length) return null;
  return (
    <section className="rise border-t border-line py-12 md:py-16" aria-labelledby="atouts-titre">
      <p className="index">
        <span className="rule" aria-hidden="true" />
        Atouts
      </p>
      <h2 id="atouts-titre" className="mt-4 max-w-[22ch] text-[1.7rem] leading-[1.15] font-medium md:text-4xl">
        {frTypo(title)}
      </h2>
      {lede ? <p className="mt-4 max-w-[48rem] leading-8 text-muted">{frTypo(lede)}</p> : null}
      <ul className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="min-w-0 border-t border-line pt-5">
            <p className="flex items-center gap-3 font-medium">
              <IconWell name={item.icon} />
              {frTypo(item.title)}
            </p>
            <p className="mt-3 max-w-[34ch] leading-7 text-muted">{frTypo(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
