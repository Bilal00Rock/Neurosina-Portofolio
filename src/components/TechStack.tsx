import { techStack } from "@/data/site";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const groups = ["وب و موبایل", "هوش مصنوعی", "نرم‌افزار سازمانی", "طراحی و ابزار"] as const;

export function TechStack() {
  return (
    <section id="tech" className="border-b border-border py-20 sm:py-24">
      <Container>
        <SectionHeader
          kicker="۰۵ / TECHNOLOGY"
          title="فناوری‌های تأییدشده"
          description="فقط فناوری‌هایی که در پروژه‌های فعلی به‌کار رفته‌اند. این دیوار فناوری قابل گسترش است، اما چیزی به آن افزوده نشده که مستند نباشد."
        />
        <div className="mt-12 space-y-8">
          {groups.map((group) => (
            <Reveal key={group}>
              <div>
                <h3 className="text-xs font-medium tracking-label text-muted">{group}</h3>
                <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                  {techStack
                    .filter((item) => item.group === group)
                    .map((item) => (
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
          ))}
        </div>
      </Container>
    </section>
  );
}
