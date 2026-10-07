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
  nameFa: "نوروسینا",
  nameEn: "NeuroSina",
  legalName: "نواندیشان اَوان سینا",
  kicker: "NEUROSINA / PROJECT PORTFOLIO",
  tagline: "هوش مصنوعی، داده و مهندسی نرم‌افزار برای ساخت محصولات واقعی",
  description:
    "مروری بر پروژه‌های نرم‌افزاری، هوش مصنوعی و پلتفرم‌های هوشمندی که در نوروسینا طراحی و توسعه داده شده‌اند.",
};

export const navItems = [
  { href: "#capabilities", label: "توانمندی‌ها" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#team", label: "از ایده تا اجرا" },
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
    id: "collect",
    en: "Data Collection",
    fa: "گردآوری داده",
    description: "ثبت داده از فرآیند واقعی محصول؛ نقطه شروع هر سامانه هوشمند.",
    icon: Database,
  },
  {
    id: "process",
    en: "Data Processing",
    fa: "پردازش داده",
    description: "پالایش و سازماندهی داده تا برای محصول و مدل قابل استفاده شود.",
    icon: Filter,
  },
  {
    id: "dataset",
    en: "Dataset Creation",
    fa: "ساخت مجموعه داده",
    description: "تبدیل داده پردازش‌شده به مجموعه‌ای منسجم برای توسعه قابلیت هوشمند.",
    icon: Layers,
  },
  {
    id: "ai",
    en: "AI / ML",
    fa: "هوش مصنوعی",
    description: "به‌کارگیری مدل برای تبدیل داده به تشخیص، بهبود یا تصمیم.",
    icon: BrainCircuit,
  },
  {
    id: "backend",
    en: "Backend",
    fa: "زیرساخت نرم‌افزاری",
    description: "منطق کسب‌وکار و اتصال اجزا؛ جایی که مدل به سامانه وصل می‌شود.",
    icon: Server,
  },
  {
    id: "web",
    en: "Web Application",
    fa: "وب‌اپلیکیشن",
    description: "رابط وب که قابلیت فنی را به محصول قابل‌استفاده تبدیل می‌کند.",
    icon: Globe,
  },
  {
    id: "mobile",
    en: "Mobile Application",
    fa: "اپلیکیشن موبایل",
    description: "تجربه همراه برای ثبت، مشاهده و پیگیری در محل استفاده.",
    icon: Smartphone,
  },
  {
    id: "dashboard",
    en: "Dashboard & Analytics",
    fa: "داشبورد و تحلیل",
    description: "نمایش وضعیت، گزارش‌ها و بینش عملیاتی برای تصمیم‌گیری.",
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
    fa: "طراحی سامانه",
    description: "معماری مسیر محصول از مسئله تا تحویل.",
    icon: Waypoints,
  },
  {
    id: "ux",
    en: "UI/UX",
    fa: "تجربه و رابط کاربری",
    description: "طراحی جریانی که کاربر واقعاً بتواند با آن کار کند.",
    icon: PenTool,
  },
  {
    id: "frontend",
    en: "Frontend",
    fa: "فرانت‌اند",
    description: "پیاده‌سازی رابط‌های وب دقیق، پایدار و قابل نگهداری.",
    icon: Globe,
  },
  {
    id: "backend",
    en: "Backend",
    fa: "بک‌اند",
    description: "منطق داده، قواعد کسب‌وکار و اتصال سرویس‌ها.",
    icon: Server,
  },
  {
    id: "ai",
    en: "AI / Machine Learning",
    fa: "هوش مصنوعی",
    description: "مدل‌هایی که داده را به قابلیت محصول تبدیل می‌کنند.",
    icon: BrainCircuit,
  },
  {
    id: "data",
    en: "Data Processing",
    fa: "پردازش داده",
    description: "آماده‌سازی داده برای پایش، آموزش و استنتاج.",
    icon: Database,
  },
  {
    id: "mobile",
    en: "Mobile Development",
    fa: "توسعه موبایل",
    description: "تجربه همراه، هم‌تراز با محصول وب.",
    icon: Smartphone,
  },
  {
    id: "analytics",
    en: "Dashboard & Analytics",
    fa: "داشبورد و تحلیل",
    description: "گزارش و نمایش وضعیت برای تیم عملیاتی و متخصص.",
    icon: ClipboardList,
  },
];

export type TechItem = {
  name: string;
  group: "وب و موبایل" | "هوش مصنوعی" | "نرم‌افزار سازمانی" | "طراحی و ابزار";
};

export const techStack: TechItem[] = [
  { name: "React.js", group: "وب و موبایل" },
  { name: "TypeScript", group: "وب و موبایل" },
  { name: "Ionic React", group: "وب و موبایل" },
  { name: "Python", group: "هوش مصنوعی" },
  { name: "PyTorch", group: "هوش مصنوعی" },
  { name: "OpenCV", group: "هوش مصنوعی" },
  { name: "YOLO", group: "هوش مصنوعی" },
  { name: "C#", group: "نرم‌افزار سازمانی" },
  { name: ".NET", group: "نرم‌افزار سازمانی" },
  { name: "SQL Server", group: "نرم‌افزار سازمانی" },
  { name: "Windows Forms", group: "نرم‌افزار سازمانی" },
  { name: "Figma", group: "طراحی و ابزار" },
  { name: "Git", group: "طراحی و ابزار" },
  { name: "Docker", group: "طراحی و ابزار" },
];

export const contributorNote =
  "جزئیات نقش افراد در هر پروژه در این بخش قابل ثبت است و هنوز تکمیل نشده است.";

