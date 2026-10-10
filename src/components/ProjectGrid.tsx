import { projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectGrid({
  heading = true,
}: {
  heading?: boolean;
}) {
  return (
    <section id="projects" className="border-b border-border py-20 sm:py-24">
      <Container>
        {heading ? (
          <SectionHeader
            kicker="۰۳ / PROJECTS"
            title="محصولات واقعی، مسیر کامل"
            description="در اینجا پروژه‌های منتخب و مسیر ساخت آن‌ها را، بر پایه اطلاعات موجود، معرفی می‌کنیم."
          />
        ) : null}
        <div className={heading ? "mt-12 grid gap-5 lg:grid-cols-2" : "grid gap-5 lg:grid-cols-2"}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
