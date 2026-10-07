import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/pages/Portfolio";

export const Route = createFileRoute("/projects")({
  component: ProjectsRoute,
  head: () => ({
    meta: [{ title: "پروژه‌های نوروسینا" }],
  }),
});

function ProjectsRoute() {
  return <Portfolio mode="embedded" />;
}
