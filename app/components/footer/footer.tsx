import { sectionX } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";

const footerLinks = [
  {
    href: "https://github.com/smustafaamir",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/mustafaamir2003/",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:dev.mustafaamir@hotmail.com",
    label: "Email",
    external: false,
  },
  {
    href: "/Mustafa-Amir-CV.pdf",
    label: "Resume",
    external: true,
  },
] as const;

function FooterLink({
  className,
  external,
  ...props
}: React.ComponentProps<"a"> & { external?: boolean }) {
  return (
    <a
      className={cn(
        "font-sans text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink transition-colors duration-200 ease-out hover:text-ink-navy hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-navy",
        className
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      {...props}
    />
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("w-full pb-16 pt-16 md:pt-20", sectionX)}>
      <div className="mx-auto w-full max-w-[1100px] space-y-4 border-t border-hairline pt-8 md:space-y-3 md:pt-10">
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            &copy; {currentYear} Mustafa Amir
          </p>
          <FooterLink href="#" className="shrink-0">
            Back to top
          </FooterLink>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            Designed &amp; Engineered by Mustafa Amir
          </p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {footerLinks.map(({ href, label, external }) => (
                <li key={href}>
                  <FooterLink href={href} external={external}>
                    {label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
