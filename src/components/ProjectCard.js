export function ProjectCard({ project }) {
  return (
    <article className="project-card snap-start" aria-labelledby={`proj-${project.id}`} tabIndex={0}>
      <h3 id={`proj-${project.id}`} className="project-title">
        {project.title}
      </h3>
      <p className="project-sub">{project.subtitle}</p>
      <p className="project-desc">{project.description}</p>
      <ul className="project-tags" aria-label="Technologies">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-cta">
        <a
          href={project.cta.href}
          className={project.cta.variant === "accent" ? "btn-pill-accent" : "btn-pill"}
          rel="noopener noreferrer"
          target="_blank"
        >
          {project.cta.label}
        </a>
      </div>
    </article>
  );
}
