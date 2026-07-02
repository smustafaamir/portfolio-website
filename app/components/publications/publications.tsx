import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography";
import { sectionBlock, sectionX } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const publications: {
  id: string;
  authors: string;
  title: string;
  venue: string;
  year?: string;
  statusNote?: string;
  doiUrl?: string;
  pdfUrl?: string;
}[] = [
  {
    id: "assic-2026-yolov8",
    authors: "Mustafa Amir and Kohila Malar Kalesamy",
    title:
      "YOLOv8-Based Instance Segmentation for Accurate Organ and Lesion Delineation in Radiological Images",
    venue:
      "2026 International Conference on Advancements in Smart, Secure and Intelligent Computing (ASSIC), Kalinga Institute of Industrial Technology (KIIT) — IEEE Xplore",
    statusNote:
      "Submitted — DOI and PDF will be shared after the conference.",
  },
  {
    id: "fhir-localised",
    authors: "Mustafa Amir",
    title:
      "Building Localised Fast Healthcare Interoperability Resource (FHIR) Systems that Provide Low-Latency Access to Medical Resources in Rural Communities at Scale",
    venue: "ResearchGate",
    doiUrl: "https://doi.org/10.13140/RG.2.2.36229.67047",
    pdfUrl:
      "https://drive.google.com/file/d/12HWtaIewYP5bTuUPWFEKSE5TESy3B3XR/view?usp=sharing",
  },
];

type Publication = (typeof publications)[number];

const externalLinkClassName =
  "group/link inline-flex items-center gap-1 font-sans text-sm font-medium text-ink underline-offset-4 hover:text-ink-navy hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-navy";

function ExternalLink({
  href,
  label,
  publicationTitle,
}: {
  href: string;
  label: string;
  publicationTitle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={externalLinkClassName}
    >
      {label}
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:translate-x-px"
      />
      <span className="sr-only"> for {publicationTitle}</span>
    </a>
  );
}

function PublicationEntry({
  publication,
  className,
}: {
  publication: Publication;
  className?: string;
}) {
  const venueLine = publication.year
    ? `${publication.venue}, ${publication.year}`
    : publication.venue;

  return (
    <article className={cn("w-full space-y-3", className)}>
      <p className="w-full font-sans text-base leading-relaxed text-foreground md:text-lg">
        {publication.authors}
      </p>
      <TypographyH3 className="w-full text-pretty text-xl text-ink md:text-2xl">
        {publication.title}
      </TypographyH3>
      <p className="w-full font-sans text-base leading-relaxed text-pretty text-muted-foreground md:text-lg">
        {venueLine}
      </p>
      {publication.statusNote ? (
        <TypographyP className="w-full text-base leading-relaxed text-pretty text-muted-foreground md:text-lg [&:not(:first-child)]:mt-0">
          {publication.statusNote}
        </TypographyP>
      ) : null}
      {publication.doiUrl || publication.pdfUrl ? (
        <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
          {publication.doiUrl ? (
            <ExternalLink
              href={publication.doiUrl}
              label="DOI"
              publicationTitle={publication.title}
            />
          ) : null}
          {publication.pdfUrl ? (
            <ExternalLink
              href={publication.pdfUrl}
              label="PDF"
              publicationTitle={publication.title}
            />
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

export function Publications() {
  return (
    <section
      id="research"
      className={cn("w-full", sectionX, sectionBlock)}
      aria-labelledby="publications-heading"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <TypographyH2
          id="publications-heading"
          className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium italic text-ink"
        >
          Publications & Research
        </TypographyH2>

        <div className="mt-8 md:mt-10">
          {publications.map((publication, index) => (
            <PublicationEntry
              key={publication.id}
              publication={publication}
              className={cn(
                index > 0 &&
                  "mt-8 border-t border-hairline pt-8 md:mt-10 md:pt-10"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
