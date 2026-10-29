import type { Comparison } from "@/content/types";
import { frTypo } from "@/lib/typography";

export function ComparisonTable({ table }: { table: Comparison }) {
  return (
    <div className="table-wrap">
      <table className="cmp">
        <caption className="px-1 py-3 text-left text-sm text-muted">{frTypo(table.caption)}</caption>
        <thead>
          <tr>
            <th scope="col">Critère</th>
            {table.columns.map((column) => (
              <th scope="col" key={column}>
                {frTypo(column)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{frTypo(row.label)}</th>
              {row.cells.map((cell, index) => (
                <td key={`${row.label}-${index}`}>{frTypo(cell)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
