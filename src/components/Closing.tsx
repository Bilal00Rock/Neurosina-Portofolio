import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/site";

export function Closing() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-label text-accent" dir="ltr">
              {company.nameEn.toUpperCase()}
            </p>
            <p className="mt-4 text-title text-fg">
              ساخت محصول یعنی رساندن داده، مدل و نرم‌افزار به دست کاربر.
            </p>
            <p className="mt-4 max-w-2xl text-muted">
              در این مجموعه، نمونه‌هایی از کار ما روی سامانه‌های نرم‌افزاری، محصولات
              هوشمند و ابزارهای دیجیتال را می‌بینید.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
