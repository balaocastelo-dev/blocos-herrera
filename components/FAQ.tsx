type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title: string;
  items: FAQItem[];
};

export default function FAQ({ title, items }: FAQProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-gray-900">
                <span className="flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span className="text-gray-400 transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-3 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
