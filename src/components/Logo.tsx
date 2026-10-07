import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-fg", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-7 shrink-0"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="7" className="fill-accent" />
        <path
          d="M5 16.5 C9 9.5 12.5 23.5 16 16.5 S23 9.5 27 16.5"
          fill="none"
          stroke="currentColor"
          className="text-accent-fg"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="27" cy="16.5" r="1.35" className="fill-accent-fg" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-medium tracking-tight">نوروسینا</span>
        <span className="mt-0.5 text-xs tracking-label text-muted" dir="ltr">
          NEUROSINA
        </span>
      </span>
    </span>
  );
}
