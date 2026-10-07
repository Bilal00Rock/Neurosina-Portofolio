import { AppShell } from "@/components/AppShell";
import { CaseStudy, ProjectNotFound } from "@/components/CaseStudy";
import { getProject } from "@/data/projects";

export function ProjectDetails({ slug }: { slug: string }) {
  const project = getProject(slug);
  if (!project) {
    return (
      <AppShell>
        <ProjectNotFound />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <CaseStudy project={project} />
    </AppShell>
  );
}
