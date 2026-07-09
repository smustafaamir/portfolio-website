import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { sectionBlock, sectionX } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "openpulse",
    title: "OpenPulse",
    description:
      "Open-source, multi-tenant event intelligence platform. Ingest, query, and stream events with org-scoped auth, dashboards, and a live WebSocket feed.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    sourceUrl: "https://github.com/smustafaamir/OpenPulse",
    image: {
      src: "/openpulse/OpenPulse-alt-2.png",
      alt: "OpenPulse — open-source event intelligence platform",
    },
    featured: true,
  },
  {
    id: "cards",
    title: "Cards",
    description:
      "RAG-powered personal research assistant — search arXiv, PubMed, and CORE, curate a paper library, and chat with citations over your indexed collection.",
    stack: ["Next.js", "FastAPI", "Python", "ChromaDB", "Groq", "Docker"],
    sourceUrl: "https://github.com/smustafaamir/cards",
    image: {
      src: "/cards/Cards-alt.png",
      alt: "Cards — RAG-powered personal research assistant",
    },
    featured: true,
  },
  {
    id: "yolov8-fastapi",
    title: "YOLOv8 with FastAPI",
    description:
      "End-to-end pipeline that trains YOLOv8 on the BRISC 2025 brain tumor MRI dataset and serves models via FastAPI and Streamlit.",
    stack: ["Python", "PyTorch", "TensorFlow", "YOLOv8", "FastAPI"],
    sourceUrl: "https://github.com/smustafaamir/YOLOv8-with-FastAPI",
    image: {
      src: "/YOLOv8/YOLO.jpg",
      alt: "YOLOv8 brain tumor MRI segmentation — model output with glioma detection",
    },
  },
  {
    id: "drug-allergy-cds",
    title: "Drug-Allergy CDS",
    description:
      "FHIR webhook microservice that cross-references patient allergies against prescribed medications using RxNorm.",
    stack: ["TypeScript", "Express", "FHIR", "RxNorm", "Zod", "Docker"],
    sourceUrl: "https://github.com/smustafaamir/Drug-Allergy-CDS",
    image: {
      src: "/CDS/CDS.jpg",
      alt: "Drug-Allergy CDS — prescription allergy check demo interface",
    },
  },
] as const;

type Project = (typeof projects)[number];

const featuredProjects = projects.filter(
  (project): project is Project & { featured: true } =>
    "featured" in project && project.featured === true
);
const secondaryProjects = projects.filter(
  (project) => !("featured" in project && project.featured === true)
);

const sourceLinkClassName =
  "group/link inline-flex items-center gap-1 font-sans text-sm font-medium text-ink underline-offset-4 hover:text-ink-navy hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-navy";

function StackTags({ tags }: { tags: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Tech stack">
      {tags.map((tag) => (
        <li
          key={tag}
          className="font-mono text-[0.8125rem] text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function SourceLink({ href, title }: { href: string; title: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={sourceLinkClassName}
    >
      View source
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:translate-x-px"
      />
      <span className="sr-only"> for {title}</span>
    </a>
  );
}

function ProjectVisual({
  title,
  featured = false,
  image,
}: {
  title: string;
  featured?: boolean;
  image?: { src: string; alt: string };
}) {
  return (
    <div
      aria-hidden={image ? undefined : true}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        featured ? "aspect-[2/1] md:aspect-[21/9]" : "aspect-[16/9]",
        image ? "bg-ink" : "bg-muted/50 dark:bg-muted/20"
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            featured
              ? "(min-width: 768px) 1100px, 100vw"
              : "(min-width: 768px) 50vw, 100vw"
          }
          className="object-cover object-center"
        />
      ) : (
        <span className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-muted-foreground/70">
          {title}
        </span>
      )}
    </div>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden bg-surface">
      <ProjectVisual
        title={project.title}
        featured
        image={"image" in project ? project.image : undefined}
      />
      <div className="space-y-4 p-6 md:space-y-5 md:p-8">
        <div className="space-y-3">
          <TypographyH3 className="text-2xl text-balance text-ink md:text-3xl">
            {project.title}
          </TypographyH3>
          <TypographyP className="max-w-[65ch] text-base leading-7 text-pretty text-foreground md:text-lg [&:not(:first-child)]:mt-0">
            {project.description}
          </TypographyP>
        </div>
        <StackTags tags={project.stack} />
        <SourceLink href={project.sourceUrl} title={project.title} />
      </div>
    </article>
  );
}

function SecondaryProject({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden bg-surface">
      <ProjectVisual
        title={project.title}
        image={"image" in project ? project.image : undefined}
      />
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="space-y-2">
          <TypographyH3 className="text-xl text-balance text-ink md:text-2xl">
            {project.title}
          </TypographyH3>
          <TypographyP className="text-base leading-relaxed text-pretty text-foreground [&:not(:first-child)]:mt-0">
            {project.description}
          </TypographyP>
        </div>
        <StackTags tags={project.stack} />
        <div className="mt-auto pt-1">
          <SourceLink href={project.sourceUrl} title={project.title} />
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className={cn("w-full", sectionX, sectionBlock)}
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <TypographyH2
          id="projects-heading"
          className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium italic text-ink"
        >
          Projects
        </TypographyH2>

        <div className="mt-8 space-y-10 md:mt-10 md:space-y-12">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {secondaryProjects.map((project) => (
              <SecondaryProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
