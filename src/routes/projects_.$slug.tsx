import { createFileRoute } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { ProjectDetails } from "@/pages/ProjectDetails";
import { company, createSeoHead } from "@/data/site";

export const Route = createFileRoute("/projects_/$slug")({
  component: ProjectDetailsRoute,
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project
      ? `${project.name} | ${company.nameEn}`
      : `${company.nameEn} | پروژه`;
    return createSeoHead(
      title,
      project?.shortDescription ?? company.description,
      `/projects/${params.slug}`,
    );
  },
});

function ProjectDetailsRoute() {
  const { slug } = Route.useParams();
  return <ProjectDetails slug={slug} />;
}
