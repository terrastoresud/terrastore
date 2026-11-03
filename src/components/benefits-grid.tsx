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
    <section className="rise border-t border-line py-10 sm:py-12 md:py-16" aria-labelledby="atouts-titre">
      <p className="index">
        <span className="rule" aria-hidden="true" />
        Atouts
      </p>
      <h2 id="atouts-titre" className="mt-3 max-w-[22ch] text-[1.55rem] leading-[1.15] font-medium sm:mt-4 sm:text-[1.7rem] md:text-4xl">
        {frTypo(title)}
      </h2>
      {lede ? <p className="mt-3 max-w-[48rem] text-[0.98rem] leading-7 text-muted sm:mt-4 sm:leading-8">{frTypo(lede)}</p> : null}
      <ul className="mt-8 grid gap-x-10 gap-y-7 sm:mt-10 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="min-w-0 border-t border-line pt-4 sm:pt-5">
            <p className="flex items-center gap-3 font-medium">
              <IconWell name={item.icon} />
              {frTypo(item.title)}
            </p>
            <p className="mt-2.5 max-w-[34ch] text-[0.95rem] leading-6 text-muted sm:mt-3 sm:leading-7">{frTypo(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
