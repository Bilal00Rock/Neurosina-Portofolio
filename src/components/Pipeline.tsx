import { ArrowLeft } from "lucide-react";
import type { PipelineStep } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

export function Pipeline({
  steps,
  className,
}: {
  steps: PipelineStep[];
  className?: string;
}) {
  return (
    <Reveal>
      <ol
        className={cn(
          "grid gap-3 sm:grid-cols-2 lg:grid-cols-none lg:flex lg:flex-wrap lg:items-stretch",
          className,
        )}
      >
        {steps.map((step, index) => (
          <li key={step.id} className="flex min-w-0 items-stretch gap-3 lg:flex-1">
            <div className="flex min-w-0 flex-1 flex-col justify-center rounded-md bg-surface px-4 py-4 shadow-border">
              <span className="text-2xs font-medium tracking-label text-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 text-sm font-medium text-fg">{step.labelFa}</span>
              <span className="mt-1 text-xs text-muted" dir="ltr">
                {step.labelEn}
              </span>
            </div>
            {index < steps.length - 1 ? (
              <span className="hidden items-center text-subtle lg:flex" aria-hidden="true">
                <ArrowLeft className="size-4" />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
