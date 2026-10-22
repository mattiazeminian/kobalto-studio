import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Subpage } from "@/components/Subpage";
import { projects } from "@/src/content/site";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — progetto ${project.category}`,
    description: project.description,
    alternates: { canonical: `/progetti/${slug}` },
    openGraph: {
      title: `${project.title} — Kobalto Studio`,
      description: project.description,
      type: "article",
      images: [{ url: project.image, alt: project.alt }],
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <Subpage title={project.title} intro={project.description}>
      <p>{project.category} / Kobalto Studio, Verona</p>
      <div className="project-detail-image">
        <Image
          src={project.image}
          alt={project.alt}
          fill
          sizes="(max-width: 900px) 100vw, 900px"
          priority
        />
      </div>
      {project.details?.map((detail) => (
        <div className="project-detail-image" key={detail.src}>
          <Image
            src={detail.src}
            alt={detail.alt}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
      ))}
      <p>
        <Link href="/progetti">Torna ai progetti</Link>
      </p>
    </Subpage>
  );
}
