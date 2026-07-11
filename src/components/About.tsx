import { about, languages, personal } from "../data/content";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-rose uppercase">
            About
          </p>
          <h2 className="font-serif text-4xl font-semibold text-navy md:text-5xl">
            Engineering meets strategy
          </h2>
        </div>

        <div className="rounded-2xl border border-rose-light/50 bg-white/70 p-8 shadow-sm transition-shadow hover:shadow-md md:p-12">
          <p className="text-base leading-relaxed text-navy/75 md:text-lg md:leading-relaxed">
            {about}
          </p>

          <div className="mt-8 rounded-xl border border-rose-light/30 bg-blush-light/40 px-6 py-5">
            <p className="text-xs font-medium tracking-wider text-rose uppercase">
              Objective
            </p>
            <p className="mt-2 text-sm leading-relaxed text-navy/70 italic md:text-base">
              {personal.objective}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Degree", value: "BASc Mechanical Engineering" },
              { label: "Minor", value: "Engineering Business (Rotman)" },
              { label: "Recognition", value: "Dean's Honour List (2x)" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl bg-blush-light/60 px-5 py-4 transition-colors hover:bg-blush/50"
              >
                <p className="text-xs font-medium tracking-wider text-rose uppercase">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-navy">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-3 text-xs font-medium tracking-wider text-rose uppercase">
              Languages
            </p>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="rounded-full border border-rose-light/50 bg-cream px-4 py-2 transition-colors hover:border-rose hover:bg-blush-light"
                >
                  <span className="text-sm font-medium text-navy">
                    {lang.name}
                  </span>
                  <span className="ml-2 text-xs text-navy/50">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
