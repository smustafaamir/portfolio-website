import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navLinks } from "@/lib/nav-links";
import { sectionX } from "@/lib/section-spacing";
import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

const pillClassName =
  "rounded-full border border-hairline bg-surface/95 backdrop-blur-sm supports-[backdrop-filter]:bg-surface/90";

function HeaderAvatar() {
  return (
    <a
      href="#"
      className="rounded-full outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-navy"
      aria-label="Mustafa Amir — back to top"
    >
      <Avatar className="size-9 bg-surface">
        <AvatarImage src="/headshot.png" alt="" className="object-cover" />
        <AvatarFallback className="bg-surface text-xs font-medium text-muted-foreground">
          MA
        </AvatarFallback>
      </Avatar>
    </a>
  );
}

export function Header() {
  return (
    <header className="pointer-events-none sticky top-0 z-50 w-full shrink-0 pt-[var(--site-header-top-inset)]">
      <div
        className={cn(
          "pointer-events-auto mx-auto w-full max-w-[1100px]",
          sectionX
        )}
      >
        <div
          className={cn(
            pillClassName,
            "flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 lg:hidden"
          )}
        >
          <HeaderAvatar />
          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>

        <div
          className={cn(
            pillClassName,
            "relative hidden items-center px-4 py-2.5 lg:flex lg:px-5"
          )}
        >
          <div className="flex shrink-0 items-center">
            <HeaderAvatar />
          </div>

          <nav
            aria-label="Primary"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 xl:gap-x-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex shrink-0 items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
