export function SkillCategoryCard({ category }) {
  return (
    <li className="h-full flex flex-col rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] p-4 sm:p-5 shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5 hover:border-[color:var(--color-border-strong)]">
      <h4 className="text-[color:var(--color-text)] font-semibold tracking-tight">{category.title}</h4>
      <p className="mt-2 text-sm text-[color:var(--color-text-dim)] leading-relaxed">{category.items.join(", ")}</p>
    </li>
  );
}
