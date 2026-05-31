import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "@/lib/site";

type CTAWhatsAppProps = {
  title: string;
  description: string;
  message: string;
};

export default function CTAWhatsApp({ title, description, message }: CTAWhatsAppProps) {
  return (
    <section className="rounded-3xl border border-orange-100 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
      <p className="mt-3 text-gray-600">{description}</p>
      <a
        href={buildWhatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-green-500 px-6 py-4 text-base font-bold text-white shadow-sm transition hover:bg-green-600"
      >
        Pedir orçamento no WhatsApp {WHATSAPP_DISPLAY}
      </a>
    </section>
  );
}
