import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="bg-blush-light/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-rose uppercase">
            Experience
          </p>
          <h2 className="font-serif text-4xl font-semibold text-navy md:text-5xl">
            Where I've made an impact
          </h2>
        </div>

        <div className="space-y-6">
          {experience.map((job) => (
            <article
              key={job.company}
              className="group rounded-2xl border border-rose-light/40 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-navy">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-base font-medium text-rose">
                    {job.role}
                  </p>
                  <p className="text-sm text-navy/50">{job.team}</p>
                </div>
                <div className="text-sm text-navy/50 md:text-right">
                  <p>{job.period}</p>
                  <p>{job.location}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy transition-colors group-hover:bg-navy/10"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              <ul className="mt-5 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-navy/70"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
