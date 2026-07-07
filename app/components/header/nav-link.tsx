import { cn } from "@/lib/utils";

export const navLinkClassName =
  "font-sans text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-ink transition-colors duration-200 ease-out hover:text-ink-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-navy";

export function NavLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return <a className={cn(navLinkClassName, className)} {...props} />;
}
