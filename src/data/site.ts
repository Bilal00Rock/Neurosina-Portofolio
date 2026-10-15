import {
  BrainCircuit,
  ClipboardList,
  Database,
  Filter,
  Globe,
  LayoutDashboard,
  Layers,
  PenTool,
  Server,
  Smartphone,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

export const company = {
  nameFa: "استودیو ما",
  nameEn: "Our Studio",
  tagline: "از مسئله‌های واقعی تا راهکارهای نرم‌افزاری هوشمند",
  description:
    "ما در طراحی و توسعه نرم‌افزار، هوش مصنوعی و محصولات دیجیتال فعالیت می‌کنیم. از تحلیل مسئله و طراحی سامانه تا پردازش داده، توسعه زیرساخت و پیاده‌سازی محصول، تلاش می‌کنیم راهکارهایی کاربردی، قابل اتکا و متناسب با نیاز واقعی ارائه دهیم.",
  contactEmail: "",
  socialLinks: [] as { label: string; href: string }[],
  publicUrl: "",
};

export const seoDefaults = {
  title: `${company.nameEn} | توسعه نرم‌افزار و هوش مصنوعی`,
  description: company.description,
  image: "/og.jpg",
};

export function createSeoHead(
  title: string,
  description: string,
  path = "/",
) {
  const baseUrl = company.publicUrl.replace(/\/+$/, "");

  const canonicalUrl = baseUrl
    ? new URL(path, `${baseUrl}/`).toString()
    : undefined;

  const imageUrl = baseUrl
    ? new URL(seoDefaults.image, `${baseUrl}/`).toString()
    : undefined;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: company.nameEn },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      ...(canonicalUrl
        ? [{ property: "og:url", content: canonicalUrl }]
        : []),
      ...(imageUrl
        ? [{ property: "og:image", content: imageUrl }]
        : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(imageUrl
        ? [{ name: "twitter:image", content: imageUrl }]
        : []),
    ],
    links: canonicalUrl
      ? [{ rel: "canonical", href: canonicalUrl }]
      : [],
  };
}

export const navItems = [
  { href: "#capabilities", label: "توانمندی‌ها" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#team", label: "مسیر اجرا" },
  { href: "#tech", label: "فناوری‌ها" },
] as const;

export type Capability = {
  id: string;
  en: string;
  fa: string;
  description: string;
  icon: LucideIcon;
};

export const capabilities: Capability[] = [
  {
    id: "software",
    en: "Software Development",
    fa: "توسعه نرم‌افزار",
    description:
      "طراحی و پیاده‌سازی نرم‌افزارهای کاربردی متناسب با نیازها و فرآیندهای واقعی.",
    icon: Server,
  },
  {
    id: "ai",
    en: "Artificial Intelligence",
    fa: "هوش مصنوعی و یادگیری ماشین",
    description:
      "توسعه قابلیت‌های هوشمند برای تشخیص، تحلیل تصویر و استخراج اطلاعات از داده.",
    icon: BrainCircuit,
  },
  {
    id: "data",
    en: "Data Processing",
    fa: "پردازش و تحلیل داده",
    description:
      "آماده‌سازی، پالایش و سازمان‌دهی داده برای تحلیل و استفاده در محصولات نرم‌افزاری.",
    icon: Filter,
  },
  {
    id: "computer-vision",
    en: "Computer Vision",
    fa: "بینایی ماشین",
    description:
      "پردازش تصویر و استخراج اطلاعات بصری برای حل مسائل واقعی و خودکارسازی فرایندها.",
    icon: Layers,
  },
  {
    id: "backend",
    en: "Backend & APIs",
    fa: "توسعه بک‌اند و API",
    description:
      "پیاده‌سازی منطق کسب‌وکار، مدیریت داده و ارتباط میان سرویس‌ها و اجزای سامانه.",
    icon: Database,
  },
  {
    id: "web",
    en: "Web Development",
    fa: "توسعه وب",
    description:
      "ساخت وب‌سایت‌ها و اپلیکیشن‌های تحت وب با تمرکز بر تجربه کاربری و نگهداری‌پذیری.",
    icon: Globe,
  },
  {
    id: "mobile",
    en: "Mobile Applications",
    fa: "اپلیکیشن‌های موبایل",
    description:
      "توسعه تجربه‌های موبایلی برای دسترسی آسان به امکانات و خدمات محصول.",
    icon: Smartphone,
  },
  {
    id: "automation",
    en: "Business Automation",
    fa: "خودکارسازی فرایندها",
    description:
      "کاهش کارهای تکراری و بهبود گردش کار با ابزارهای نرم‌افزاری و یکپارچه‌سازی سیستم‌ها.",
    icon: Waypoints,
  },
  {
    id: "ecommerce",
    en: "E-commerce Solutions",
    fa: "راهکارهای تجارت الکترونیک",
    description:
      "طراحی و توسعه فروشگاه‌های اینترنتی و بهبود تجربه خرید و مدیریت محصولات.",
    icon: LayoutDashboard,
  },
];

export type Discipline = {
  id: string;
  en: string;
  fa: string;
  description: string;
  icon: LucideIcon;
};

export const disciplines: Discipline[] = [
  {
    id: "system",
    en: "System Design",
    fa: "طراحی و معماری سامانه",
    description:
      "تحلیل نیازمندی‌ها و طراحی ساختاری که اجزای محصول را به شکلی منسجم به هم متصل می‌کند.",
    icon: Waypoints,
  },
  {
    id: "ux",
    en: "UI/UX Design",
    fa: "طراحی رابط و تجربه کاربری",
    description:
      "طراحی جریان‌های قابل فهم و رابط‌هایی که استفاده از محصول را ساده‌تر می‌کنند.",
    icon: PenTool,
  },
  {
    id: "frontend",
    en: "Frontend Development",
    fa: "توسعه فرانت‌اند",
    description:
      "پیاده‌سازی رابط‌های تعاملی، واکنش‌گرا و قابل نگهداری برای وب و موبایل.",
    icon: Globe,
  },
  {
    id: "backend",
    en: "Backend Development",
    fa: "توسعه بک‌اند",
    description:
      "پیاده‌سازی منطق برنامه، APIها، ارتباط با پایگاه داده و یکپارچه‌سازی سرویس‌ها.",
    icon: Server,
  },
  {
    id: "ai",
    en: "AI & Machine Learning",
    fa: "هوش مصنوعی و یادگیری ماشین",
    description:
      "استفاده از مدل‌های یادگیری ماشین برای ایجاد قابلیت‌های هوشمند در محصولات.",
    icon: BrainCircuit,
  },
  {
    id: "vision",
    en: "Computer Vision",
    fa: "بینایی ماشین و پردازش تصویر",
    description:
      "تحلیل تصاویر، استخراج ویژگی‌های بصری و توسعه راهکارهای مبتنی بر تصویر.",
    icon: Layers,
  },
  {
    id: "data",
    en: "Data Engineering",
    fa: "آماده‌سازی و مدیریت داده",
    description:
      "سازمان‌دهی و آماده‌سازی داده برای استفاده در نرم‌افزارها و سامانه‌های هوشمند.",
    icon: Database,
  },
  {
    id: "desktop",
    en: "Desktop Applications",
    fa: "نرم‌افزارهای دسکتاپ",
    description:
      "توسعه ابزارهای ویندوزی و نرم‌افزارهای تخصصی برای نیازهای سازمانی و عملیاتی.",
    icon: ClipboardList,
  },
  {
    id: "analytics",
    en: "Dashboards & Analytics",
    fa: "داشبورد و تحلیل",
    description:
      "ارائه گزارش‌ها و نمایش اطلاعات برای پایش وضعیت و پشتیبانی از تصمیم‌گیری.",
    icon: LayoutDashboard,
  },
];

export type TechItem = {
  name: string;
  group:
    | "وب و موبایل"
    | "هوش مصنوعی و داده"
    | "نرم‌افزار سازمانی"
    | "فروشگاه اینترنتی"
    | "کتابخانه‌ها و یکپارچه‌سازی"
    | "زیرساخت و ابزار توسعه"
    | "طراحی محصول";
};

export const techStack: TechItem[] = [
  // Web and mobile
  { name: "React", group: "وب و موبایل" },
  { name: "TypeScript", group: "وب و موبایل" },
  { name: "JavaScript", group: "وب و موبایل" },
  { name: "Ionic React", group: "وب و موبایل" },
  { name: "Bootstrap", group: "وب و موبایل" },
  { name: "jQuery", group: "وب و موبایل" },
  { name: "Backbone.js", group: "وب و موبایل" },
  { name: "Marionette.js", group: "وب و موبایل" },

  // Artificial intelligence and data
  { name: "Python", group: "هوش مصنوعی و داده" },
  { name: "PyTorch", group: "هوش مصنوعی و داده" },
  { name: "OpenCV", group: "هوش مصنوعی و داده" },
  { name: "YOLO", group: "هوش مصنوعی و داده" },
  { name: "Deep Learning", group: "هوش مصنوعی و داده" },
  { name: "Computer Vision", group: "هوش مصنوعی و داده" },

  // Enterprise and desktop software
  { name: "C#", group: "نرم‌افزار سازمانی" },
  { name: ".NET", group: "نرم‌افزار سازمانی" },
  { name: "ASP.NET Core", group: "نرم‌افزار سازمانی" },
  { name: ".NET Framework 4.6.2", group: "نرم‌افزار سازمانی" },
  { name: "Windows Forms", group: "نرم‌افزار سازمانی" },
  { name: "PyQt", group: "نرم‌افزار سازمانی" },
  { name: "SQL Server", group: "نرم‌افزار سازمانی" },
  { name: "MariaDB", group: "نرم‌افزار سازمانی" },
  { name: "MySQL", group: "نرم‌افزار سازمانی" },

  // E-commerce
  { name: "WordPress", group: "فروشگاه اینترنتی" },
  { name: "WooCommerce", group: "فروشگاه اینترنتی" },
  { name: "Elementor", group: "فروشگاه اینترنتی" },
  { name: "PHP", group: "فروشگاه اینترنتی" },

  // Libraries and integrations
  { name: "MailKit", group: "کتابخانه‌ها و یکپارچه‌سازی" },
  { name: "MimeKit", group: "کتابخانه‌ها و یکپارچه‌سازی" },
  { name: "Newtonsoft.Json", group: "کتابخانه‌ها و یکپارچه‌سازی" },
  { name: "Microsoft Graph", group: "کتابخانه‌ها و یکپارچه‌سازی" },

  // Development tools and infrastructure
  { name: "Git", group: "زیرساخت و ابزار توسعه" },
  { name: "Docker", group: "زیرساخت و ابزار توسعه" },

  // Product design
  { name: "Figma", group: "طراحی محصول" },
];

export const contributorNote =
  "بسته به نیاز هر پروژه، تخصص‌های مرتبط در مراحل تحلیل، طراحی، توسعه و پیاده‌سازی با یکدیگر همراه می‌شوند.";