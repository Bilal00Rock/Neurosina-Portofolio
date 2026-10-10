import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { easeOutExpo } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const reduced = useReducedMotion();
  const coverMedia = project.media.find((media) => media.src === project.cover);

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: easeOutExpo }}
      className="group h-full"
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-md bg-surface shadow-border",
          "transition-[box-shadow,transform] duration-300 ease-out",
          "hover:-translate-y-1 hover:shadow-border-hover",
        )}
      >
        <div className="relative overflow-hidden">
          {project.cover ? (
            <img
              src={project.cover}
              alt={coverMedia?.alt ?? `${project.name} project cover`}
              className="aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              role="img"
              aria-label={`${project.name}: تصویر پروژه هنوز ارائه نشده است`}
              className="flex aspect-video items-center justify-center bg-accent-soft px-5 text-center"
            >
              <div>
                <p className="text-xs tracking-label text-accent" dir="ltr">
                  {project.name}
                </p>
                <p className="mt-2 text-sm text-muted">تصویر اصلی هنوز ارائه نشده است</p>
              </div>
            </div>
          )}
          <span className="absolute top-3 right-3 rounded-xs bg-bg/90 px-2 py-1 text-2xs tracking-label text-muted">
            {project.categoryFa}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="text-xs tracking-label text-accent" dir="ltr">
            {project.categoryEn}
          </p>
          <h3 className="mt-2 text-xl font-medium tracking-tight" dir="ltr">
            {project.name}
          </h3>
          <p className="mt-2 text-sm leading-normal text-muted">{project.storyLine}</p>
          <p className="mt-3 text-sm leading-normal text-subtle">
            {project.shortDescription}
          </p>
          {project.status === "placeholder" ? (
            <p className="mt-3 text-xs text-accent">جزئیات پروژه در انتظار تکمیل</p>
          ) : null}
          <ul className="mt-4 flex flex-wrap gap-1.5" dir="ltr">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-xs bg-bg px-2 py-1 text-2xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-fg">
            مشاهده پروژه
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
