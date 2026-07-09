import { useState } from "react";
import { projectCategories } from "../data/content";

function ProjectCard({
  title,
  role,
  period,
  description,
  tags,
  award,
}: {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  award?: string;
}) {
  return (
    <article className="group flex flex-col rounded-2xl border border-rose-light/40 bg-white/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-rose to-blush transition-all group-hover:w-16" />
        {award && (
          <span className="shrink-0 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
            {award}
          </span>
        )}
      </div>

      <h3 className="font-serif text-xl font-semibold text-navy">{title}</h3>
      <p className="mt-1 text-sm font-medium text-rose">{role}</p>
      <p className="text-xs text-navy/40">{period}</p>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-navy/70">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blush-light px-3 py-1 text-xs font-medium text-navy/60 transition-colors group-hover:bg-blush"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].id);
  const current = projectCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="projects" className="bg-blush-light/30 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium tracking-widest text-rose uppercase">
            Projects
          </p>
          <h2 className="font-serif text-4xl font-semibold text-navy md:text-5xl">
            Building & creating
          </h2>
          <p className="mt-4 max-w-2xl text-base text-navy/60">
            From mechanical design and structural engineering to consulting case
            studies and software — a portfolio of work across disciplines.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-navy text-cream shadow-md"
                  : "border border-rose-light/60 bg-white/70 text-navy/70 hover:border-rose hover:bg-blush-light hover:text-navy"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mb-8">
          <h3 className="font-serif text-2xl font-semibold text-navy">
            {current.label}
          </h3>
          <p className="mt-1 text-sm text-navy/50">{current.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {current.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
