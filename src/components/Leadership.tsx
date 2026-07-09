import { leadership } from "../data/content";

export default function Leadership() {
  return (
    <section id="leadership" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-rose uppercase">
            Leadership
          </p>
          <h2 className="font-serif text-4xl font-semibold text-navy md:text-5xl">
            Building communities
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {leadership.map((role) => (
            <article
              key={role.org}
              className="group flex flex-col rounded-2xl border border-rose-light/40 bg-white/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4">
                <span className="inline-block rounded-full bg-blush px-3 py-1 text-xs font-semibold tracking-wider text-navy uppercase">
                  {role.org}
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-navy">
                {role.title}
              </h3>
              <p className="mt-1 text-sm text-navy/50">{role.fullName}</p>
              <p className="mt-1 text-xs text-rose">{role.period}</p>

              <ul className="mt-5 flex-1 space-y-2">
                {role.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm leading-relaxed text-navy/70"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-rose-muted" />
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
