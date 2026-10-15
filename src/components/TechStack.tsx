import { techStack } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function TechStack() {
  const groups = [...new Set(techStack.map((item) => item.group))];

  return (
    <section id="tech" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeader
          kicker="۰۵ / TECHNOLOGY"
          title="فناوری‌های به‌کاررفته"
          description="فناوری‌هایی که در توسعه پروژه‌ها و راهکارهای نرم‌افزاری استفاده شده‌اند؛ از توسعه وب و نرم‌افزارهای سازمانی تا هوش مصنوعی و پردازش داده."
        />

        <div className="mt-12 space-y-8">
          {groups.map((group) => {
            const items = techStack.filter(
              (item) => item.group === group,
            );

            if (items.length === 0) return null;

            return (
              <Reveal key={group}>
                <div>
                  <h3 className="text-xs font-medium tracking-label text-muted">
                    {group}
                  </h3>

                  <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {items.map((item) => (
                      <li
                        key={item.name}
                        className="rounded-sm bg-surface px-4 py-3 text-sm text-fg shadow-border"
                        dir="ltr"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}