import { cn } from "@/lib/utils";

export function TypographyH1({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.1] tracking-tight text-balance text-ink",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH2({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b border-border pb-2 font-serif text-3xl font-semibold tracking-tight text-balance first:mt-0",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH3({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 font-sans text-2xl font-semibold tracking-tight text-balance",
        className
      )}
      {...props}
    />
  );
}

export function TypographyP({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
}

export function TypographyLead({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props} />
  );
}

export function TypographyMuted({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

export function TypographySmall({
  className,
  ...props
}: React.ComponentProps<"small">) {
  return (
    <small
      className={cn("text-sm leading-none font-medium", className)}
      {...props}
    />
  );
}
