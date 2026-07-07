import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { sectionX } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { HeroDitherLoader } from "./hero-dither-loader";

export function Hero() {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-0 flex-1 w-full items-center overflow-hidden py-12 md:py-16",
        sectionX
      )}
      aria-labelledby="hero-name"
    >
      <HeroDitherLoader />

      <div className="relative mx-auto flex w-full max-w-[1100px] flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-6 md:gap-8">
          <TypographyH1 id="hero-name">Mustafa Amir</TypographyH1>
          <TypographyLead className="max-w-[42rem] text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.2] text-balance text-foreground">
            I am an engineer who builds intelligent systems at scale.
          </TypographyLead>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="h-11 px-6">
            <a href="mailto:dev.mustafaamir@hotmail.com">Contact me</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 border-white/35 bg-white/15 px-6 text-ink hover:bg-white/25 hover:text-ink dark:border-input dark:bg-input/30 dark:text-foreground dark:hover:bg-input/50 dark:hover:text-foreground"
          >
            <a
              href="https://github.com/smustafaamir"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/button:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:group-hover/button:translate-x-0.5"
              />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
