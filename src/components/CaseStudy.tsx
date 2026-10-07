import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getAdjacentProjects, type Project } from "@/data/projects";
import { easeOutExpo } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { MediaGallery, MediaHero } from "@/components/MediaGallery";
import { Pipeline } from "@/components/Pipeline";
import { Reveal } from "@/components/Reveal";

type TocItem = { id: string; n: string; label: string };

function buildToc(project: Project): TocItem[] {
  const { caseStudy } = project;
  const items: TocItem[] = [
    { id: "overview", n: "01", label: "کلیات" },
    { id: "challenge", n: "02", label: "چالش" },
    { id: "solution", n: "03", label: "راه‌حل" },
    { id: "experience", n: "04", label: "تجربه محصول" },
    { id: "technology", n: "05", label: "فناوری" },
  ];
  if (caseStudy.dataAiPipeline) {
    items.push({ id: "pipeline", n: "06", label: "مسیر داده و هوش مصنوعی" });
  }
  if (caseStudy.webApplication) {
    items.push({ id: "web", n: "07", label: "وب‌اپلیکیشن" });
  }
  if (caseStudy.mobileApplication) {
    items.push({ id: "mobile", n: "08", label: "اپلیکیشن موبایل" });
  }
  if (caseStudy.dashboard) {
    items.push({ id: "dashboard", n: "09", label: "داشبورد و گزارش" });
  }
  items.push({ id: "delivered", n: "10", label: "خروجی" });
  return items;
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-10 sm:py-12">
      <p className="text-xs tracking-label text-accent">
        {number} / {title}
      </p>
      <div className="mt-4 max-w-2xl text-base leading-normal text-muted">{children}</div>
    </section>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const reduced = useReducedMotion();
  const toc = buildToc(project);
  const adjacent = getAdjacentProjects(project.slug);
  const { caseStudy } = project;
  const hero = project.media[0];
  const gallery = project.media.slice(1);

  return (
    <article className="pt-16">
      <div className="border-b border-border bg-bg-elevated">
        <Container className="py-12 sm:py-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOutExpo }}
          >
            <Link
              to="/portfolio"
              hash="projects"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
            >
              <ArrowRight className="size-4" />
              بازگشت به پروژه‌ها
            </Link>
            <p className="mt-8 text-xs tracking-label text-accent" dir="ltr">
              {project.categoryEn}
            </p>
            <h1 className="mt-3 text-display" dir="ltr">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-normal text-muted">
              {project.englishDescription}
            </p>
            <p className="mt-3 max-w-2xl text-base leading-normal text-fg">
              {project.shortDescription}
            </p>
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <div>
                <dt className="text-xs tracking-label text-subtle">نقش</dt>
                <dd className="mt-1 text-fg">{project.roleFa}</dd>
                <dd className="text-muted" dir="ltr">
                  {project.roleEn}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-label text-subtle">حوزه</dt>
                <dd className="mt-1 text-fg">{project.categoryFa}</dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-1.5" dir="ltr">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-xs bg-surface px-2.5 py-1 text-xs text-muted shadow-border"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </div>

      <Container className="py-10 sm:py-12">
        {hero ? <MediaHero item={hero} /> : null}
      </Container>

      <Container className="grid gap-10 pb-16 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav className="sticky top-24 space-y-1" aria-label="بخش‌های مطالعه موردی">
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-baseline gap-3 px-2 py-1.5 text-sm text-muted transition-colors hover:text-fg"
              >
                <span className="text-2xs tracking-label text-subtle">{item.n}</span>
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="lg:col-span-9">
          <Section id="overview" number="01" title="کلیات">
            <p>{caseStudy.overview}</p>
          </Section>
          <Section id="challenge" number="02" title="چالش">
            <p>{caseStudy.challenge}</p>
          </Section>
          <Section id="solution" number="03" title="راه‌حل">
            <p>{caseStudy.solution}</p>
          </Section>
          <Section id="experience" number="04" title="تجربه محصول">
            <p>{caseStudy.productExperience.body}</p>
            <ul className="mt-5 space-y-2">
              {caseStudy.productExperience.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-fg">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>
          <Section id="technology" number="05" title="فناوری">
            <p>{caseStudy.technology}</p>
          </Section>
          {caseStudy.dataAiPipeline ? (
            <Section id="pipeline" number="06" title="مسیر داده و هوش مصنوعی">
              <p className="mb-6">{caseStudy.dataAiPipeline.intro}</p>
              <Pipeline steps={caseStudy.dataAiPipeline.steps} />
            </Section>
          ) : null}
          {caseStudy.webApplication ? (
            <Section id="web" number="07" title="وب‌اپلیکیشن">
              <p>{caseStudy.webApplication}</p>
            </Section>
          ) : null}
          {caseStudy.mobileApplication ? (
            <Section id="mobile" number="08" title="اپلیکیشن موبایل">
              <p>{caseStudy.mobileApplication}</p>
            </Section>
          ) : null}
          {caseStudy.dashboard ? (
            <Section id="dashboard" number="09" title="داشبورد و گزارش">
              <p>{caseStudy.dashboard}</p>
            </Section>
          ) : null}
          <Section id="delivered" number="10" title="خروجی">
            <p>{caseStudy.delivered}</p>
          </Section>

          {gallery.length ? (
            <div className="border-t border-border pt-10">
              <p className="mb-6 text-xs tracking-label text-accent">محصول در عمل</p>
              <MediaGallery items={gallery} />
            </div>
          ) : null}

          <div className="mt-12 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
            {adjacent.prev ? (
              <Link
                to="/projects/$slug"
                params={{ slug: adjacent.prev.slug }}
                className="rounded-md bg-surface p-5 shadow-border transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="inline-flex items-center gap-2 text-xs text-muted">
                  <ArrowRight className="size-3.5" />
                  پروژه قبلی
                </span>
                <span className="mt-2 block font-medium" dir="ltr">
                  {adjacent.prev.name}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {adjacent.next ? (
              <Link
                to="/projects/$slug"
                params={{ slug: adjacent.next.slug }}
                className="rounded-md bg-surface p-5 text-left shadow-border transition-transform duration-200 hover:-translate-y-0.5 sm:text-end"
              >
                <span className="inline-flex items-center gap-2 text-xs text-muted">
                  پروژه بعدی
                  <ArrowLeft className="size-3.5" />
                </span>
                <span className="mt-2 block font-medium" dir="ltr">
                  {adjacent.next.name}
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </article>
  );
}

export function ProjectNotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="text-xs tracking-label text-accent">۴۰۴</p>
      <h1 className="mt-3 text-title">این پروژه در مجموعه فعلی نیست.</h1>
      <p className="mt-3 max-w-md text-muted">
        اطلاعات پروژه‌ها از فایل داده خوانده می‌شود. اگر نام پروژه را می‌دانید، از فهرست
        اصلی انتخاب کنید.
      </p>
      <Button asChild className="mt-6">
        <Link to="/portfolio" hash="projects">
          بازگشت به پروژه‌ها
        </Link>
      </Button>
    </div>
  );
}
