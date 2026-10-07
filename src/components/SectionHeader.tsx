import { cn } from "@/lib/utils";

export function SectionHeader({
  kicker,
  title,
  description,
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <header className={cn("max-w-2xl", className)}>
      {kicker ? (
        <p className="text-xs font-medium tracking-label text-accent">{kicker}</p>
      ) : null}
      <h2 className="mt-3 text-title text-fg">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-normal text-muted">{description}</p>
      ) : null}
    </header>
  );
}
