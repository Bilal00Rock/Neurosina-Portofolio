import { cn } from "@/lib/utils";
import { company } from "@/data/site";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center text-fg", className)}>
      <span className="flex flex-col leading-none">
        <span className="text-sm font-medium tracking-tight">{company.nameFa}</span>
        <span className="mt-1 text-xs tracking-label text-muted" dir="ltr">
          {company.nameEn}
        </span>
      </span>
    </span>
  );
}
