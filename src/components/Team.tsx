import { contributorNote, disciplines } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Team() {
  return (
    <section id="team" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeader
          kicker="۰۴ / OUR APPROACH"
          title="از شناخت مسئله تا محصول نهایی"
          description="هر پروژه با شناخت نیاز و محدودیت‌های واقعی آغاز می‌شود. سپس معماری، طراحی و توسعه متناسب با هدف پروژه پیش می‌رود تا نتیجه، راهکاری قابل استفاده و قابل نگهداری باشد."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.id} delay={index * 0.03}>
                <article className="h-full rounded-md bg-surface p-5 shadow-border">
                  <Icon
                    className="size-4 text-accent"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-sm font-medium text-fg">
                    {item.fa}
                  </h3>

                  <p
                    className="mt-1 text-xs tracking-label text-muted"
                    dir="ltr"
                  >
                    {item.en}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-subtle">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        {contributorNote ? (
          <Reveal className="mt-8 rounded-md border border-border bg-bg-elevated px-5 py-4">
            <p className="text-xs tracking-label text-accent">
              PROJECT COLLABORATION
            </p>

            <p className="mt-2 text-sm leading-7 text-muted">
              {contributorNote}
            </p>
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}