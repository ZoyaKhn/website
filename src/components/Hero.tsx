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
              href={personal.resumePath}
              download
              className="rounded-full bg-navy px-7 py-3 text-sm font-medium text-cream shadow-md transition-all hover:-translate-y-0.5 hover:bg-navy-light hover:shadow-lg"
            >
              View Resume
            </a>
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
          <div className="group relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blush via-rose-light to-blush opacity-60 transition-opacity group-hover:opacity-80" />
            <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl border border-rose-light/60 bg-white/80 shadow-lg backdrop-blur-sm md:h-72 md:w-72">
              <div className="text-center">
                <div className="mx-auto mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blush to-rose-light">
                  <span className="font-serif text-4xl font-semibold text-navy">ZK</span>
                </div>
                <p className="text-sm font-medium text-navy/50">Photo placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
