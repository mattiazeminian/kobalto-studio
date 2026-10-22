import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/src/content/site";

export function ProjectGallery({ projects }: { projects: Project[] }) {
  return (
    <section
      className="project-gallery"
      id="progetti"
      aria-label="Progetti selezionati"
    >
      {projects.map((project, index) => (
        <article className="project-card" id={project.slug} key={project.slug}>
          <Link
            href={`/progetti/${project.slug}`}
            aria-label={`Scopri il progetto ${project.title}`}
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 1100px) 100vw, calc(100vw - 449px)"
              priority={index === 0}
            />
            <span className="project-caption">
              <span>{project.title}</span>
              <small>{project.category}</small>
            </span>
          </Link>
        </article>
      ))}
    </section>
  );
}
