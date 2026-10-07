import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/pages/Portfolio";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioRoute,
  head: () => ({
    meta: [{ title: "نوروسینا | نمونه پروژه‌ها" }],
  }),
});

function PortfolioRoute() {
  return <Portfolio mode="full" />;
}
