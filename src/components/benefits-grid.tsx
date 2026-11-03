import { IconWell, type IconName } from "@/components/icon";
import { frTypo } from "@/lib/typography";

export function BenefitsGrid({
  title,
  items,
}: {
  title: string;
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
      <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="min-w-0">
            <p className="flex items-center gap-3 text-lg font-medium">
              <IconWell name={item.icon} />
              {frTypo(item.title)}
            </p>
            <p className="mt-3 max-w-[36ch] leading-7 text-muted">{frTypo(item.text)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
