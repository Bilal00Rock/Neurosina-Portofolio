import { ArrowLeft } from "lucide-react";
import { capabilities } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeader
          kicker="۰۲ / CAPABILITIES"
          title="از داده تا محصول"
          description="ما از داده و شناخت مسئله تا ساخت نرم‌افزار قابل استفاده پیش می‌رویم؛ هوش مصنوعی در این مسیر بخشی از محصول است."
        />

        <div className="mt-10 overflow-x-auto pb-2">
          <ol className="flex min-w-max items-center gap-2 text-xs text-muted">
            {capabilities.map((item, index) => (
              <li key={item.id} className="flex items-center gap-2">
                <span className="rounded-xs bg-surface px-2.5 py-1 shadow-border">
                  <span className="text-fg">{item.fa}</span>
                </span>
                {index < capabilities.length - 1 ? (
                  <ArrowLeft className="size-3.5 shrink-0 text-subtle" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.id} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-md bg-surface p-5 shadow-border">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex size-9 items-center justify-center rounded-sm bg-accent-soft text-accent">
                      <Icon className="size-4" strokeWidth={1.75} />
                    </span>
                    <span className="text-xs tracking-label text-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-medium text-fg">{item.fa}</h3>
                  <p className="mt-1 text-xs tracking-label text-accent" dir="ltr">
                    {item.en}
                  </p>
                  <p className="mt-3 text-sm leading-normal text-muted">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
