import { volunteering } from "../data/content";

export default function Volunteering() {
  return (
    <section id="volunteering" className="bg-blush-light/20 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium tracking-widest text-rose uppercase">
            Community
          </p>
          <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
            Giving back
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {volunteering.map((item) => (
            <article
              key={item.org}
              className="rounded-xl border border-rose-light/30 bg-white/60 p-5 transition-all hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-serif text-lg font-semibold text-navy">
                  {item.org}
                </h3>
                <span className="shrink-0 text-xs text-navy/40">{item.period}</span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-rose">{item.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
