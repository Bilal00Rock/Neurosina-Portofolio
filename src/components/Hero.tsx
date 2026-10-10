import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { company } from "@/data/site";
import { easeOutExpo, reveal, stagger } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { HeroViz } from "@/components/HeroViz";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduced ? false : "hidden"}
            animate="visible"
            variants={stagger}
          >
            <motion.p
              variants={reveal}
              className="w-fit text-xs font-medium tracking-label text-accent"
              dir="ltr"
            >
              {company.nameEn.toUpperCase()} / PROJECT PORTFOLIO
            </motion.p>
            <motion.h1
              variants={reveal}
              className="mt-5 max-w-xl text-display text-fg"
            >
              {company.tagline}
            </motion.h1>
            <motion.p
              variants={reveal}
              className="mt-6 max-w-lg text-base leading-normal text-muted sm:text-lg"
            >
              {company.description}
            </motion.p>
            <motion.div variants={reveal} className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#projects">
                  مشاهده پروژه‌ها
                  <ArrowLeft className="size-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#capabilities">درباره توانمندی‌ها</a>
              </Button>
            </motion.div>
            <motion.p
              variants={reveal}
              className="mt-8 max-w-md text-sm leading-normal text-subtle"
            >
              محصولات واقعی در مسیر داده، هوش مصنوعی، وب، موبایل و نرم‌افزار سازمانی
              — نه طرح‌های مفهومی.
            </motion.p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: easeOutExpo }}
          >
            <HeroViz />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export function EmbeddedIntro() {
  return (
    <section className="border-b border-border pt-24 pb-12">
      <Container>
        <p className="text-xs font-medium tracking-label text-accent" dir="ltr">
          {company.nameEn.toUpperCase()} / PROJECTS
        </p>
        <h1 className="mt-4 max-w-2xl text-display text-fg">پروژه‌های منتخب</h1>
        <p className="mt-4 max-w-xl text-muted">
          این بخش برای نمایش مجموعه‌ای از پروژه‌های نرم‌افزاری و دیجیتال طراحی شده است.
        </p>
        <div className="mt-6">
          <Button asChild variant="secondary">
            <Link to="/portfolio">مشاهده نسخه کامل نمونه‌کار</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
