import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Subpage } from "@/components/Subpage";
import { projects } from "@/src/content/site";

export const metadata: Metadata = {
  title: "Progetti di Web e Product Design",
  description:
    "Una selezione di siti web e interfacce progettati da Kobalto Studio a Verona.",
  alternates: { canonical: "/progetti" },
  openGraph: {
    title: "Progetti di Web e Product Design — Kobalto Studio",
    description:
      "Una selezione di siti web e interfacce progettati da Kobalto Studio a Verona.",
    url: "/progetti",
    locale: "it_IT",
    images: [
      {
        url: "/assets/projects/bemind/hero.webp",
        alt: "Progetto BeMind di Kobalto Studio",
      },
    ],
  },
};
export default function ProjectsPage() {
  return (
    <Subpage
      title="Progetti"
      intro="Siti e interfacce, raccontati attraverso il lavoro che abbiamo fatto."
    >
      <div className="project-index">
        {projects.map((project) => (
          <Link href={`/progetti/${project.slug}`} key={project.slug}>
            <Image
              src={project.image}
              alt={project.alt}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
            />
            <span>{project.title}</span>
          </Link>
        ))}
      </div>
    </Subpage>
  );
}
