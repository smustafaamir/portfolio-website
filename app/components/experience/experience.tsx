import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { sectionBlock, sectionX } from "@/lib/section-spacing";
import { ExperienceMedia } from "./experience-media";

const experiences = [
  {
    id: "experience-one",
    period: "2025 – 2025",
    location: "Petaling Jaya, Selangor",
    company: "Continental AG",
    role: "R&D Application Development Intern",
    highlights: [
      "Designed and shipped a fully interactive task management dashboard in React & TypeScript, building custom drag-and-drop logic optimized for complex state transitions and large datasets.",
      "Re-architected component hierarchy to eliminate prop drilling, implementing centralized state via Context & reducer patterns to support scalable feature expansion.",
      "Integrated with Spring Boot microservices through REST APIs, implementing optimistic updates, rollback handling, and local persistence to ensure resilience under intermittent network conditions.",
      "Operated within an existing CI/CD pipeline (GitHub Enterprise + Jenkins), writing unit tests and enforcing code review standards to maintain production reliability.",
      "Coordinated across distributed teams in Germany, Slovakia, and Malaysia, aligning release timelines for international stakeholders.",
    ],
    media: [
      {
        id: "exp-one-media-1",
        label: "I ❤️ Continental :)",
        src: "/continental-pics/IMG_3964.JPG",
        alt: "Continental AG internship",
      },
      {
        id: "exp-one-media-2",
        label: "A day at the Continental CST PJ Plant — home of the CraneMaster",
        src: "/continental-pics/IMG_4039.jpg",
        alt: "Continental AG internship",
      },
    ],
  },
  {
    id: "experience-two",
    period: "2022 – 2023",
    location: "Kuala Lumpur (and a couple of other places)",
    company: "Katalog",
    role: "Technical Co-founder",
    highlights: [
      "Led product strategy and development of a social platform connecting users with curated F&B establishments, looking at RM150,000 in potential funding pre exit.",
      "Built and shipped the full-stack product from zero to production: React Native client, TypeScript/Next.js admin dashboard, and a Node.js + GraphQL API deployed on AWS (Lambda, DynamoDB, S3, CloudFront)",
      "Containerised deployment using Docker for consistent development and production environments",
      "Onboarded 54 restaurant partners for initial trials, grew user base to 500 active trial users, developed and tested subscriptionbased revenue model (MRR).",
    ],
    media: [
      {
        id: "exp-two-media-1",
        label: "Guerilla marketing in full swing",
        src: "/katalog-pics/DSC01567.jpg",
        alt: "Katalog",
      },
      {
        id: "exp-two-media-2",
        label: "The team ❤️",
        src: "/katalog-pics/Copy of GSH_1890 copy.jpg",
        alt: "Katalog",
      },
      {
        id: "exp-two-media-3",
        label: "Early days — out and about in Chinatown, canvassing cafés",
        src: "/katalog-pics/Sequence 01_6.mp4",
        type: "video",
        alt: "Katalog product demo",
      },
    ],
  },
] as const;

function MetadataLabel({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-sans text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

function ExperienceEntry({
  experience,
  className,
}: {
  experience: (typeof experiences)[number];
  className?: string;
}) {
  return (
    <article
      className={cn(
        "grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,25%)_minmax(0,75%)] lg:gap-x-12",
        className
      )}
    >
      <div className="flex flex-col gap-3 lg:pt-1">
        <div className="flex flex-col gap-1">
          <MetadataLabel>{experience.period}</MetadataLabel>
          <MetadataLabel>{experience.location}</MetadataLabel>
        </div>
      </div>

      <div className="min-w-0 space-y-10">
        <div className="space-y-2">
          <TypographyH3 className="text-xl text-ink md:text-2xl">
            {experience.company}
          </TypographyH3>
          <TypographyP className="text-base leading-relaxed text-pretty text-foreground md:text-lg [&:not(:first-child)]:mt-0">
            {experience.role}
          </TypographyP>
        </div>

        <div className="space-y-3">
          <TypographyH3 className="text-xl text-ink md:text-2xl">
            Highlights
          </TypographyH3>
          <div className="space-y-4">
            {experience.highlights.map((highlight) => (
              <TypographyP
                key={highlight}
                className="text-base leading-7 text-pretty text-foreground md:text-lg [&:not(:first-child)]:mt-0"
              >
                {highlight}
              </TypographyP>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <TypographyH3 className="text-xl text-ink md:text-2xl">
            Media
          </TypographyH3>
          <ExperienceMedia items={experience.media} />
        </div>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className={cn("w-full", sectionX, sectionBlock)}
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <TypographyH2
          id="experience-heading"
          className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium italic text-ink"
        >
          Experience
        </TypographyH2>

        <div className="mt-8 space-y-10 md:mt-10 md:space-y-0">
          {experiences.map((experience, index) => (
            <ExperienceEntry
              key={experience.id}
              experience={experience}
              className={cn(
                index > 0 &&
                  "border-t border-hairline pt-10 md:mt-10 md:pt-10"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
