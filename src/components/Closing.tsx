import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";

export function Closing() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-label text-accent">NEUROSINA</p>
            <p className="mt-4 text-title text-fg">
              ساخت محصول یعنی رساندن داده، مدل و نرم‌افزار به دست کاربر.
            </p>
            <p className="mt-4 max-w-2xl text-muted">
              این مجموعه نشان می‌دهد نوروسینا می‌تواند مسئله واقعی را به سامانه پایش،
              پلتفرم هوشمند، برنامه دسکتاپ و نرم‌افزار سازمانی تبدیل کند.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
