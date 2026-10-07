import { Link } from "@tanstack/react-router";
import { company, navItems } from "@/data/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-normal text-muted">
            {company.legalName} با نام تجاری {company.nameFa}؛ هوش مصنوعی، داده و
            مهندسی نرم‌افزار برای ساخت محصولات واقعی.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-label text-subtle">بخش‌ها</p>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to="/portfolio"
                  hash={item.href.slice(1)}
                  className="text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/projects" className="text-sm text-muted transition-colors hover:text-fg">
                نسخه قابل ادغام
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-label text-subtle">ماژول نمونه‌کار</p>
          <p className="mt-3 text-sm leading-normal text-muted">
            این Prototype یک نمونه از بخشی است که می‌تواند به سایت نوروسینا اضافه شود.
          </p>
        </div>
      </Container>
    </footer>
  );
}
