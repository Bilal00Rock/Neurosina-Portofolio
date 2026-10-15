import type { MediaItem } from "@/data/projects";
import { cn } from "@/lib/utils";

function Frame({
  item,
  priority = false,
  className,
}: {
  item: MediaItem;
  priority?: boolean;
  className?: string;
}) {
  const frame = item.frame ?? "plain";

  if (frame === "mobile") {
    return (
      <figure className={cn("mx-auto w-full max-w-56", className)}>
        <div className="rounded-xl bg-fg p-2 shadow-border">
          <div className="overflow-hidden rounded-lg bg-surface">
            <div className="mx-auto mt-2 mb-1 h-1 w-12 rounded-full bg-subtle/40" />
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-9/19 w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              loading={priority ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        </div>
        {item.caption ? (
          <figcaption className="mt-3 text-center text-sm text-muted">
            {item.caption}
          </figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure className={cn("group", className)}>
      <div
        className={cn(
          "overflow-hidden bg-surface shadow-border",
          frame === "plain" ? "rounded-md" : "rounded-md",
        )}
      >
        {frame === "browser" || frame === "desktop" ? (
          <div className="flex items-center gap-2 border-b border-border px-3 py-2">
            <span className="size-2 rounded-full bg-border-strong" />
            <span className="size-2 rounded-full bg-border-strong" />
            <span className="size-2 rounded-full bg-border-strong" />
            <span className="ms-auto text-2xs tracking-label text-subtle" dir="ltr">
              {frame === "desktop" ? "DESKTOP" : "WEB"}
            </span>
          </div>
        ) : null}
        <img
          src={item.src}
          alt={item.alt}
          className="aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
      {item.caption ? (
        <figcaption className="mt-3 text-sm text-muted">{item.caption}</figcaption>
      ) : null}
    </figure>
  );
}

export function MediaHero({ item }: { item: MediaItem }) {
  return <Frame item={item} priority className="w-full" />;
}

export function MediaGallery({ items }: { items: MediaItem[] }) {
  if (items.length === 0) return null;

  const mobiles = items.filter((item) => item.frame === "mobile");
  const rest = items.filter((item) => item.frame !== "mobile");

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className={cn("grid gap-6", mobiles.length ? "lg:col-span-8" : "lg:col-span-12")}>
        {rest.map((item) => (
          <Frame key={item.src + item.kind} item={item} />
        ))}
      </div>
      {mobiles.length ? (
        <div className="grid justify-items-center gap-6 lg:col-span-4">
          {mobiles.map((item) => (
            <Frame key={item.src + item.kind} item={item} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
