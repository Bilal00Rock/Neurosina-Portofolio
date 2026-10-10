import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/pages/Portfolio";
import { company, createSeoHead } from "@/data/site";

export const Route = createFileRoute("/projects")({
  component: ProjectsRoute,
  head: () =>
    createSeoHead(
      `${company.nameEn} | پروژه‌ها`,
      "نمونه‌هایی از پروژه‌های نرم‌افزاری، هوش مصنوعی و محصولات دیجیتال.",
      "/projects",
    ),
});

function ProjectsRoute() {
  return <Portfolio mode="embedded" />;
}
