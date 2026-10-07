import { createFileRoute } from "@tanstack/react-router";
import { getProject } from "@/data/projects";
import { ProjectDetails } from "@/pages/ProjectDetails";

export const Route = createFileRoute("/projects_/$slug")({
  component: ProjectDetailsRoute,
  head: ({ params }) => {
    const project = getProject(params.slug);
    return {
      meta: [
        {
          title: project ? `${project.name} | نوروسینا` : "نوروسینا",
        },
      ],
    };
  },
});

function ProjectDetailsRoute() {
  const { slug } = Route.useParams();
  return <ProjectDetails slug={slug} />;
}
