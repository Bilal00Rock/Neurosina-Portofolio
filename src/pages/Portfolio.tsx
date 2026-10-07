import { AppShell } from "@/components/AppShell";
import { Capabilities } from "@/components/Capabilities";
import { Closing } from "@/components/Closing";
import { EmbeddedIntro, Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Team } from "@/components/Team";
import { TechStack } from "@/components/TechStack";

export function Portfolio({ mode = "full" }: { mode?: "full" | "embedded" }) {
  return (
    <AppShell>
      {mode === "full" ? <Hero /> : <EmbeddedIntro />}
      {mode === "full" ? <Capabilities /> : null}
      <ProjectGrid heading={mode === "full"} />
      {mode === "full" ? <Team /> : null}
      {mode === "full" ? <TechStack /> : null}
      {mode === "full" ? <Closing /> : null}
    </AppShell>
  );
}
