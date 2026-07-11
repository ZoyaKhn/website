import { personal } from "../data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute -top-20 right-0 h-96 w-96 rounded-full bg-blush/60 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-rose-light/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-widest text-rose uppercase">
            University of Toronto · Mechanical Engineering
          </p>

          <h1 className="font-serif text-5xl leading-tight font-semibold text-navy md:text-6xl lg:text-7xl">
            {personal.name}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed font-light text-navy/70">
            {personal.tagline}
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-navy/60">
            {personal.intro}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="rounded-full border border-rose-muted/50 bg-white/60 px-7 py-3 text-sm font-medium text-navy transition-all hover:-translate-y-0.5 hover:border-rose hover:bg-blush-light hover:shadow-md"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-transparent px-7 py-3 text-sm font-medium text-rose transition-all hover:-translate-y-0.5 hover:text-navy"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto md:mx-0">
          <div className="relative w-full max-w-sm rounded-3xl border border-rose-light/50 bg-white/75 p-6 shadow-lg backdrop-blur-sm">
            <p className="text-xs font-medium tracking-widest text-rose uppercase">
              Portfolio
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-navy/50">Focus</p>
                <p className="mt-1 font-serif text-2xl font-semibold text-navy">
                  Engineering, analytics, and strategy
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[["Projects", "10+"],["Competitions", "Award-winning"],["Tools", "Multi-disciplinary"],["Impact", "Measured"]].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-blush-light/60 px-4 py-3">
                    <p className="text-[11px] font-medium tracking-wider text-rose uppercase">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


