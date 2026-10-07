import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, navItems } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

function NavAnchor({
  href,
  children,
  onClick,
}: {
  href: string;
  children: string;
  onClick?: () => void;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/" || pathname === "/portfolio";

  if (onHome) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="text-sm text-muted transition-colors duration-150 hover:text-fg"
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to="/portfolio"
      hash={href.slice(1)}
      onClick={onClick}
      className="text-sm text-muted transition-colors duration-150 hover:text-fg"
    >
      {children}
    </Link>
  );
}

function ProjectsCta({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/" || pathname === "/portfolio";
  const label = "مشاهده پروژه‌ها";

  if (onHome) {
    return (
      <Button asChild size="sm" className={className}>
        <a href="#projects" onClick={onClick}>
          {label}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild size="sm" className={className}>
      <Link to="/portfolio" hash="projects" onClick={onClick}>
        {label}
      </Link>
    </Button>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/95">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" aria-label={company.nameFa} onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="ناوبری اصلی">
          {navItems.map((item) => (
            <NavAnchor key={item.href} href={item.href}>
              {item.label}
            </NavAnchor>
          ))}
          <ProjectsCta />
        </nav>
        <button
          type="button"
          className="relative flex size-11 items-center justify-center rounded-sm text-fg lg:hidden"
          aria-expanded={open}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>
      <div
        className={cn(
          "border-t border-border bg-bg lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-3 py-3">
          {navItems.map((item) => (
            <NavAnchor key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </NavAnchor>
          ))}
          <ProjectsCta className="mt-1 w-full" onClick={() => setOpen(false)} />
        </Container>
      </div>
    </header>
  );
}
