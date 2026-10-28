import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects, experiments, and things I have built.",
};

export default function Projects() {
  return (
    <section>
      <header className="page-heading">
        <h1>Projects</h1>
        <p>
          A collection of side projects and experiments, from useful little
          tools to larger applications.
        </p>
      </header>
      <div className="project-list">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="project-link"
          >
            <div className="project-title">
              <h2>
                {project.title} <span aria-hidden="true">↗</span>
              </h2>
              <span className="project-year">{project.year}</span>
            </div>
            <p>{project.description}</p>
            <div className="tech-list">
              {project.technologies.slice(0, 3).map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
