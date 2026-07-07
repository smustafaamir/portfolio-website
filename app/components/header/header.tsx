import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { navLinks } from "@/lib/nav-links";
import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme-toggle";

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
    <header className="sticky top-0 z-50 w-full shrink-0 border-b border-hairline bg-paper/90 backdrop-blur-sm supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-4 sm:px-8 md:px-16">
        <div className="flex items-center justify-between lg:hidden">
          <HeaderAvatar />
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>

        <div className="hidden items-center lg:grid lg:grid-cols-[minmax(0,25%)_minmax(0,50%)_minmax(0,25%)]">
          <div className="flex items-center lg:justify-start">
            <HeaderAvatar />
          </div>

          <nav aria-label="Primary" className="lg:col-start-2">
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
