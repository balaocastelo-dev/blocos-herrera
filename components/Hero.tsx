import Link from "next/link";

type HeroProps = {
  h1: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badges?: string[];
};

export default function Hero({ h1, subtitle, primaryCta, secondaryCta, badges }: HeroProps) {
  const isPrimaryExternal = primaryCta.href.startsWith("http");
  const isSecondaryExternal = secondaryCta?.href?.startsWith("http");

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(234,88,12,0.12),transparent_45%),radial-gradient(circle_at_85%_35%,rgba(17,24,39,0.08),transparent_45%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-16 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
              {h1}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-gray-600 md:text-xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {isPrimaryExternal ? (
                <a
                  href={primaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-orange-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-orange-700"
                >
                  {primaryCta.label}
                </a>
              ) : (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center rounded-2xl bg-orange-600 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-orange-700"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta ? (
                isSecondaryExternal ? (
                  <a
                    href={secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-base font-bold text-gray-900 shadow-sm transition hover:border-gray-300"
                  >
                    {secondaryCta.label}
                  </a>
                ) : (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-4 text-base font-bold text-gray-900 shadow-sm transition hover:border-gray-300"
                  >
                    {secondaryCta.label}
                  </Link>
                )
              ) : null}
            </div>
            {badges?.length ? (
              <ul className="mt-8 flex flex-wrap gap-3">
                {badges.map((badge) => (
                  <li
                    key={badge}
                    className="rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-xs font-semibold tracking-wide text-orange-900"
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-700">
                {`Herrera`}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                Atendimento direto e orçamento rápido pelo WhatsApp
              </p>
              <p className="text-gray-600">
                Envie a lista de materiais, a cidade e o prazo. Retornamos com a cotação e as
                opções de entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
