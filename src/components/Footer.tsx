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
            {company.description}
          </p>
          {company.contactEmail ? (
            <a
              className="mt-3 inline-block text-sm text-accent underline-offset-4 hover:underline"
              href={`mailto:${company.contactEmail}`}
            >
              {company.contactEmail}
            </a>
          ) : null}
          {company.socialLinks.length ? (
            <ul className="mt-3 flex flex-wrap gap-4">
              {company.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
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
            این نمونه‌کار، پروژه‌ها و مسیر ساخت آن‌ها را در یک مجموعه گردآوری می‌کند.
          </p>
        </div>
      </Container>
    </footer>
  );
}
