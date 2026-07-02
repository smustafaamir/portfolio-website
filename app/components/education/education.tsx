import {
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { sectionBlock, sectionX } from "@/lib/section-spacing";

const researchAchievement =
  "Conducted research on: (i) the implementation of a distributed FHIR-clinical diagnostics-exchange system, with a focus on the interaction between multiple site-local trial registries and a central FHIR server; (ii) the implementation of an automated (ML/DL-powered) system for delineation in medical imagery, with a focus on MRI scans (planar slices) of the brain with three distinct tumour classes.";

const courses = [
  "Introduction to Programming (Python & C)",
  "Object Oriented Programming (Java)",
  "Web Development (HTML, CSS, JS, ASP.NET & C#)",
  "Programming for Data Analytics (R)",
  "Database Management (MS SQL Server)",
  "Cloud Computing (AWS S3, ECS, EC2, VPC & API Gateway)",
] as const;

const inlineLinkClassName =
  "underline underline-offset-2 decoration-foreground/50 hover:text-ink-navy hover:decoration-ink-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-navy";

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

export function Education() {
  return (
    <section
      id="education"
      className={cn("w-full", sectionX, sectionBlock)}
      aria-labelledby="education-heading"
    >
      <div className="mx-auto w-full max-w-[1100px]">
        <TypographyH2
          id="education-heading"
          className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium italic text-ink"
        >
          Education
        </TypographyH2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 lg:grid-cols-[minmax(0,25%)_minmax(0,75%)] lg:gap-x-12">
          <div className="flex flex-col gap-3 lg:pt-1">
            <div className="flex flex-col gap-1">
              <MetadataLabel>2022 – 2026</MetadataLabel>
              <MetadataLabel>Bukit Jalil, Kuala Lumpur</MetadataLabel>
            </div>
          </div>

          <div className="min-w-0 space-y-10">
            <div className="space-y-2">
              <TypographyH3 className="text-xl md:text-2xl text-ink">
                Asia Pacific University of Technology and Innovation
              </TypographyH3>
              <TypographyP className="text-base leading-relaxed text-pretty text-foreground md:text-lg [&:not(:first-child)]:mt-0">
                BSc in Information Technology with a Specialization in Digital
                Transformation
              </TypographyP>
            </div>

            <div className="space-y-3">
              <TypographyH3 className="text-xl md:text-2xl text-ink">
                Key Achievements
              </TypographyH3>
              <div className="space-y-4">
                <TypographyP className="text-base leading-7 text-pretty text-foreground md:text-lg [&:not(:first-child)]:mt-0">
                  {researchAchievement}
                </TypographyP>
                <TypographyP className="text-base leading-7 text-pretty text-foreground md:text-lg [&:not(:first-child)]:mt-0">
                  Held a career talk between a small cohort of students and Lead
                  Product Designer from{" "}
                  <a
                    href="https://www.linkedin.com/company/coingecko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={inlineLinkClassName}
                  >
                    CoinGecko
                  </a>
                  ,{" "}
                  <a
                    href="https://www.linkedin.com/in/rohanmohana/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={inlineLinkClassName}
                  >
                    Rohan Mohana
                  </a>
                  .
                </TypographyP>
              </div>
            </div>

            <div className="space-y-3">
              <TypographyH3 className="text-xl md:text-2xl text-ink">
                Relevant Coursework
              </TypographyH3>
              <ul className="list-disc space-y-2 pl-5 font-sans text-base leading-7 text-foreground md:text-lg">
                {courses.map((course) => (
                  <li key={course} className="text-pretty">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
