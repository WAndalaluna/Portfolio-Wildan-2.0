export function CertificateCard({ certificate }) {
  return (
    <li className="rounded-xl border border-[color:var(--panel-border)] bg-[color:var(--panel-bg)] p-4 sm:p-5 shadow-[0_10px_30px_rgba(15,23,42,0.10)] transition hover:-translate-y-0.5 hover:border-[color:var(--color-border-strong)]">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <h4 className="text-[color:var(--color-text)] font-semibold tracking-tight">
            {certificate.title}
          </h4>
          <p className="mt-1 text-sm text-[color:var(--color-text-dim)]">
            {certificate.issuer}
            {certificate.year ? ` • ${certificate.year}` : ""}
          </p>
        </div>

        {certificate.href ? (
          <a
            href={certificate.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill whitespace-nowrap self-start"
          >
            View
          </a>
        ) : null}
      </div>

      {certificate.description ? (
        <p className="mt-3 text-sm text-[color:var(--color-text-dim)] leading-relaxed">
          {certificate.description}
        </p>
      ) : null}
    </li>
  );
}
