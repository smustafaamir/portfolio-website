import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#stack", label: "Stack" },
] as const;

function NavLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "font-sans text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink transition-colors duration-200 ease-out hover:text-ink-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-navy",
        className
      )}
      {...props}
    />
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shrink-0 border-b border-hairline bg-paper/90 backdrop-blur-sm supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-4 lg:grid-cols-[minmax(0,25%)_minmax(0,50%)_minmax(0,25%)] lg:items-center">
          <div className="flex items-center lg:justify-start">
            <a
              href="#"
              className="rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-navy"
              aria-label="Mustafa Amir — back to top"
            >
              <Avatar className="size-9 bg-surface">
                <AvatarImage
                  src="/headshot.png"
                  alt=""
                  className="object-cover"
                />
                <AvatarFallback className="bg-surface text-xs font-medium text-muted-foreground">
                  MA
                </AvatarFallback>
              </Avatar>
            </a>
          </div>

          <nav
            aria-label="Primary"
            className="col-span-2 lg:col-span-1 lg:col-start-2"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end lg:col-start-3">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
