import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/pages/Portfolio";
import { company, createSeoHead } from "@/data/site";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioRoute,
  head: () =>
    createSeoHead(
      `${company.nameEn} | پروژه‌های منتخب`,
      company.description,
      "/portfolio",
    ),
});

function PortfolioRoute() {
  return <Portfolio mode="full" />;
}
