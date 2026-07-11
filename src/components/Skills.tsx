import { skills } from "../data/content";

const skillGroups = Object.entries(skills);

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-rose uppercase">
            Skills
          </p>
          <h2 className="font-serif text-4xl font-semibold text-navy md:text-5xl">
            Tools & expertise
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map(([group, items]) => (
            <div
              key={group}
              className="rounded-2xl border border-rose-light/40 bg-white/70 p-6 shadow-sm transition-all hover:shadow-md md:p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-navy">
                {group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-rose-light/60 bg-cream px-3.5 py-1.5 text-sm text-navy/70 transition-all hover:border-rose hover:bg-blush-light hover:text-navy"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
