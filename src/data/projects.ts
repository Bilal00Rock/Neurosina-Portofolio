export type MediaKind =
  | "cover"
  | "dashboard"
  | "web"
  | "mobile"
  | "ai-result"
  | "before-after"
  | "desktop";

export type MediaItem = {
  src: string;
  alt: string;
  kind: MediaKind;
  caption?: string;
  frame?: "browser" | "mobile" | "desktop" | "plain";
};

export type PipelineStep = {
  id: string;
  labelFa: string;
  labelEn: string;
};

export type CaseStudy = {
  overview: string;
  challenge: string;
  solution: string;
  productExperience: {
    body: string;
    highlights: string[];
  };
  technology: string;
  dataAiPipeline?: {
    intro: string;
    steps: PipelineStep[];
  };
  webApplication?: string;
  mobileApplication?: string;
  dashboard?: string;
  delivered: string;
};

export type Project = {
  slug: string;
  name: string;
  categoryFa: string;
  categoryEn: string;
  storyLine: string;
  shortDescription: string;
  englishDescription: string;
  roleFa: string;
  roleEn: string;
  technologies: string[];
  cover?: string;
  media: MediaItem[];
  caseStudy: CaseStudy;
  status?: "placeholder" | "in-progress" | "completed";
  links?: {
    liveDemo?: string;
    sourceCode?: string;
    officialWebsite?: { label: string; url: string };
  };
};

const pendingProjectDetails =
  "این اطلاعات هنوز دریافت نشده است و پس از تأیید جزئیات پروژه تکمیل می‌شود.";

export const projects: Project[] = [
  {
    slug: "pineu",
    name: "Pineu",
    categoryFa: "پایش سلامت",
    categoryEn: "Health Monitoring",
    storyLine: "از داده روزانه بیمار تا گزارش ساختاریافته برای پزشک",
    shortDescription:
      "سامانه پایش سلامت بیماران مبتلا به صرع؛ ثبت داده‌های روزانه، گردش‌کار بیمار و گزارش‌های ساختاریافته برای پزشک.",
    englishDescription: "Health Monitoring System for Epileptic Patients",
    roleFa: "توسعه فرانت‌اند و طراحی تجربه کاربری",
    roleEn: "Frontend Development and UI/UX",
    technologies: ["React.js", "TypeScript", "Figma"],
    cover: "/projects/pineu/pineu-cover.webp",
    media: [
      {
        src: "/projects/pineu/pineu-cover.webp",
        alt: "رابط پایش سلامت Pineu",
        kind: "cover",
        caption: "نمای کلی سامانه پایش",
        frame: "browser",
      },
      {
        src: "/projects/pineu/pineu-dashboard.webp",
        alt: "گزارش ساختاریافته پزشک در Pineu",
        kind: "dashboard",
        caption: "گزارش ساختاریافته برای مرور پزشک",
        frame: "browser",
      },
      {
        src: "/projects/pineu/pineu-mobile.webp",
        alt: "نمونه رابط ثبت روزانه سلامت",
        kind: "web",
        caption: "نمونه تجربه ثبت داده روزانه",
        frame: "mobile",
      },
    ],
    caseStudy: {
      overview:
        "Pineu سامانه پایش سلامت برای بیماران مبتلا به صرع است. هدف محصول این است که داده‌های سلامت روزانه به‌صورت منظم ثبت شود، مسیر بیمار شفاف بماند و پزشک بتواند گزارش ساختاریافته‌ای از وضعیت در اختیار داشته باشد.",
      challenge:
        "پایش صرع به ثبت پیوسته وضعیت روزانه وابسته است. اگر این اطلاعات پراکنده یا فاقد ساختار باشد، تصویر روشنی از روند بیمار شکل نمی‌گیرد و پیگیری درمان دشوار می‌شود. مسئله اصلی، تبدیل ثبت روزانه به یک جریان قابل‌اتکا برای بیمار و پزشک بود.",
      solution:
        "با تمرکز بر طراحی رابط و تجربه کاربری، Pineu ثبت داده‌های سلامت روزانه، گردش‌کارهای بیمار و تهیه گزارش‌های ساختاریافته را در یک وب‌اپلیکیشن منسجم جمع می‌کند. مسیر محصول از شناخت مسئله شروع می‌شود و به رابطی می‌رسد که واقعاً قابل استفاده است.",
      productExperience: {
        body: "تجربه محصول حول سه جریان اصلی شکل گرفته است؛ بدون افزودن لایه‌هایی که در این نسخه از سامانه تأیید نشده‌اند.",
        highlights: [
          "پایش داده‌های سلامت روزانه",
          "گردش‌کارهای بیمار",
          "گزارش‌های ساختاریافته برای پزشک",
        ],
      },
      technology:
        "رابط کاربری با React.js و TypeScript پیاده‌سازی شده و تجربه محصول در Figma طراحی شده است. در این معرفی، ادعایی فراتر از این لایه مطرح نمی‌شود.",
      webApplication:
        "Pineu به‌صورت وب‌اپلیکیشن ارائه شده است. جریان‌های ثبت داده، پیگیری مسیر بیمار و مشاهده گزارش در یک محیط واحد طراحی شده‌اند تا فاصله میان داده و تصمیم پزشک کاهش یابد.",
      dashboard:
        "گزارش‌های ساختاریافته، وضعیت روزانه را برای مرور پزشک سازماندهی می‌کنند. این بخش به‌جای داشبورد آماری تبلیغاتی، بر خوانایی و نظم اطلاعات تمرکز دارد.",
      delivered:
        "خروجی این کار، یک سامانه قابل‌استفاده برای پایش سلامت روزانه و تهیه گزارش پزشک است؛ محصولی واقعی با مسیر کاربری مشخص، نه یک طرح مفهومی.",
    },
  },
  {
    slug: "scratch-catch",
    name: "Scratch Catch",
    categoryFa: "بینایی ماشین و خودرو",
    categoryEn: "Damage Detection",
    storyLine: "از تصویر خودرو تا گزارش خسارت قابل استناد",
    shortDescription:
      "پلتفرم تشخیص و گزارش خسارت خودروهای اجاره‌ای؛ ثبت وضعیت قبل و بعد، مدیریت مشتری و تشخیص خسارت با هوش مصنوعی.",
    englishDescription: "Car Rental Damage Detection & Reporting Platform",
    roleFa: "توسعه فرانت‌اند و توسعه هوش مصنوعی",
    roleEn: "Frontend Developer & AI Developer",
    technologies: ["React.js", "Ionic React", "TypeScript", "PyTorch", "YOLO"],
    cover: "/projects/scratch-catch/scratch-cover.webp",
    media: [
      {
        src: "/projects/scratch-catch/scratch-cover.webp",
        alt: "پلتفرم Scratch Catch برای گزارش وضعیت خودرو",
        kind: "cover",
        caption: "نمای محصول وب",
        frame: "browser",
      },
      {
        src: "/projects/scratch-catch/scratch-web.webp",
        alt: "داشبورد گزارش وضعیت خودروهای اجاره‌ای",
        kind: "web",
        caption: "مدیریت وضعیت ناوگان و گزارش‌ها",
        frame: "browser",
      },
      {
        src: "/projects/scratch-catch/scratch-mobile.webp",
        alt: "اپلیکیشن موبایل بارگذاری تصویر قبل و بعد",
        kind: "mobile",
        caption: "ثبت تصویر در محل تحویل خودرو",
        frame: "mobile",
      },
      {
        src: "/projects/scratch-catch/scratch-ai-result.webp",
        alt: "نمونه تشخیص خسارت روی تصویر خودرو",
        kind: "ai-result",
        caption: "خروجی تشخیص خسارت روی تصویر",
        frame: "plain",
      },
    ],
    caseStudy: {
      overview:
        "Scratch Catch پلتفرمی برای شرکت‌های اجاره خودرو است تا وضعیت خودرو را قبل و بعد از تحویل مستند کنند، مشتریان را مدیریت کنند و برای تهیه گزارش وضعیت از تشخیص خسارت مبتنی بر هوش مصنوعی استفاده کنند.",
      challenge:
        "اختلاف بر سر خسارت خودرو معمولاً از نبود مستندات قابل مقایسه ناشی می‌شود. تصاویر پراکنده و بررسی دستی، هم زمان‌بر است و هم گزارش یکپارچه‌ای برای شرکت باقی نمی‌گذارد. مسئله، تبدیل تصویر به سند وضعیت بود.",
      solution:
        "پلتفرم، بارگذاری تصاویر قبل و بعد، مدیریت مشتریان و اشتراک ماهانه را با لایه تشخیص خسارت مبتنی بر YOLO و PyTorch در قالب وب و موبایل ترکیب می‌کند. مدل در خدمت گزارش است، نه به‌عنوان یک آزمایش جداگانه.",
      productExperience: {
        body: "محصول برای استفاده عملیاتی شرکت اجاره طراحی شده است؛ از ثبت وضعیت تا گزارش خسارت.",
        highlights: [
          "گزارش وضعیت خودرو برای شرکت اجاره",
          "بارگذاری تصویر قبل و بعد",
          "مدیریت مشتریان",
          "اشتراک ماهانه",
          "تشخیص خسارت خودرو با هوش مصنوعی",
        ],
      },
      technology:
        "وب‌اپلیکیشن با React.js و TypeScript، تجربه موبایل با Ionic React، و لایه تشخیص خسارت با PyTorch و YOLO پیاده‌سازی شده است.",
      dataAiPipeline: {
        intro:
          "مسیر هوشمند محصول از تصویر شروع می‌شود و به گزارش وضعیت می‌رسد. این همان مسیری است که در محصول پیاده شده است.",
        steps: [
          { id: "image", labelFa: "تصویر", labelEn: "Image" },
          { id: "ai", labelFa: "پردازش هوش مصنوعی", labelEn: "AI Processing" },
          { id: "detect", labelFa: "تشخیص خسارت", labelEn: "Damage Detection" },
          { id: "report", labelFa: "گزارش وضعیت", labelEn: "Condition Report" },
        ],
      },
      webApplication:
        "نسخه وب برای مدیریت مشتریان، مشاهده گزارش‌ها و پیگیری وضعیت خودرو طراحی شده است تا تیم عملیاتی شرکت اجاره تصویر روشنی از ناوگان داشته باشد.",
      mobileApplication:
        "نسخه موبایل با Ionic React امکان ثبت تصویر قبل و بعد را در محل تحویل خودرو فراهم می‌کند؛ جایی که داده واقعی محصول تولید می‌شود.",
      dashboard:
        "گزارش وضعیت، خروجی نهایی مسیر تصویر تا تشخیص است و مبنای مستندسازی خسارت برای شرکت اجاره قرار می‌گیرد.",
      delivered:
        "خروجی، یک پلتفرم وب و موبایل است که ثبت وضعیت خودرو را به گزارش خسارت متصل می‌کند و مدل تشخیص را داخل محصول قرار می‌دهد.",
    },
  },
  {
    slug: "image-enhancement",
    name: "AI Image Enhancement",
    categoryFa: "بهبود تصویر",
    categoryEn: "Image Enhancement",
    storyLine: "از تصویر تار تا خروجی قابل استفاده در یک برنامه دسکتاپ",
    shortDescription:
      "نرم‌افزار دسکتاپ برای رفع تاری و بهبود تصویر با یادگیری عمیق؛ همراه با تنظیم نویز، برش، بزرگ‌نمایی، کنتراست و روشنایی.",
    englishDescription: "AI-powered Image Deblurring & Enhancement Application",
    roleFa: "توسعه‌دهنده نرم‌افزار",
    roleEn: "Software Developer",
    technologies: ["Python", "PyTorch", "OpenCV", "PyQt", "Deep Learning Models"],
    cover: "/projects/image-enhancement/enhance-cover.webp",
    media: [
      {
        src: "/projects/image-enhancement/enhance-cover.webp",
        alt: "برنامه دسکتاپ بهبود تصویر",
        kind: "cover",
        caption: "محیط برنامه دسکتاپ",
        frame: "desktop",
      },
      {
        src: "/projects/image-enhancement/enhance-app.webp",
        alt: "ابزارهای رفع تاری و تنظیم تصویر",
        kind: "desktop",
        caption: "ابزارهای بهبود و تنظیم",
        frame: "desktop",
      },
      {
        src: "/projects/image-enhancement/enhance-before-after.webp",
        alt: "مقایسه تصویر قبل و بعد از رفع تاری",
        kind: "before-after",
        caption: "نمونه قبل و بعد",
        frame: "plain",
      },
    ],
    caseStudy: {
      overview:
        "این محصول یک برنامه دسکتاپ برای رفع تاری و بهبود تصویر است. مدل‌های یادگیری عمیق در کنار ابزارهای کلاسیک پردازش تصویر قرار گرفته‌اند تا کاربر بتواند تصویر را اصلاح و تنظیم کند.",
      challenge:
        "تصاویر تار یا نویزی در کار واقعی نیاز به اصلاح دارند. اگر مدل در حد آزمایش باقی بماند، ارزش عملی ایجاد نمی‌کند. مسئله این بود که قابلیت بهبود تصویر به نرم‌افزاری قابل کار تبدیل شود.",
      solution:
        "برنامه، رفع تاری مبتنی بر هوش مصنوعی را با حذف یا افزودن نویز، برش، بزرگ‌نمایی و تنظیم کنتراست و روشنایی در یک محیط دسکتاپ مبتنی بر PyQt جمع می‌کند. مدل بخشی از مسیر کار است، نه مقصد جداگانه.",
      productExperience: {
        body: "تجربه کاربری حول اصلاح تصویر و کنترل‌های دقیق تنظیمات شکل گرفته است.",
        highlights: [
          "رفع تاری تصویر با هوش مصنوعی",
          "افزودن و حذف نویز",
          "برش تصویر",
          "بزرگ‌نمایی",
          "تنظیم کنتراست",
          "تنظیم روشنایی",
        ],
      },
      technology:
        "نرم‌افزار با Python، PyTorch، OpenCV و PyQt توسعه داده شده و از مدل‌های یادگیری عمیق برای بهبود تصویر استفاده می‌کند. معماری دقیق مدل در این معرفی ذکر نمی‌شود.",
      dataAiPipeline: {
        intro:
          "مسیر محصول از تصویر ورودی تا خروجی بهبودیافته است؛ همان جریانی که کاربر در برنامه می‌بیند.",
        steps: [
          { id: "input", labelFa: "تصویر ورودی", labelEn: "Input Image" },
          { id: "cv", labelFa: "پردازش تصویر", labelEn: "OpenCV" },
          { id: "model", labelFa: "مدل یادگیری عمیق", labelEn: "Deep Learning" },
          { id: "enhance", labelFa: "تصویر بهبودیافته", labelEn: "Enhanced Image" },
          { id: "tools", labelFa: "ابزارهای تنظیم", labelEn: "Adjustments" },
        ],
      },
      delivered:
        "خروجی، یک برنامه دسکتاپ قابل استفاده است که مدل بهبود تصویر را در اختیار کاربر قرار می‌دهد؛ از رفع تاری تا تنظیمات نهایی.",
    },
  },
  {
    slug: "crm",
    name: "CRM System",
    categoryFa: "نرم‌افزار سازمانی",
    categoryEn: "Enterprise Software",
    storyLine: "از اطلاعات پراکنده مشتری تا سامانه یکپارچه خدمات",
    shortDescription:
      "سامانه مدیریت ارتباط با مشتری برای ثبت مشتریان، پیگیری تعاملات، مدیریت درخواست خدمت و گزارش عملکرد.",
    englishDescription: "Customer Relationship Management",
    roleFa: "توسعه‌دهنده فول‌استک",
    roleEn: "Full-Stack Developer",
    technologies: ["C#", ".NET", "SQL Server", "Windows Forms"],
    cover: "/projects/crm/crm-cover.webp",
    media: [
      {
        src: "/projects/crm/crm-cover.webp",
        alt: "سامانه دسکتاپ مدیریت ارتباط با مشتری",
        kind: "cover",
        caption: "محیط دسکتاپ CRM",
        frame: "desktop",
      },
      {
        src: "/projects/crm/crm-dashboard.webp",
        alt: "گزارش عملکرد و سوابق خدمت در CRM",
        kind: "dashboard",
        caption: "سوابق تعامل و گزارش عملکرد",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "این سامانه مدیریت ارتباط با مشتری، نرم‌افزاری دسکتاپ برای ثبت مشتریان، پیگیری تعاملات، مدیریت درخواست‌های خدمت و تهیه گزارش عملکرد است.",
      challenge:
        "بدون یک سامانه یکپارچه، اطلاعات مشتری و سابقه خدمت در فایل‌ها و گفتگوهای پراکنده باقی می‌ماند. مسئله، ایجاد منبع واحد برای ارتباط با مشتری و پیگیری خدمات بود.",
      solution:
        "محصول با C#، .NET، SQL Server و Windows Forms، هم منطق سمت سرور و هم رابط کاربری را پوشش می‌دهد تا ثبت مشتری، پیگیری تعامل و گزارش عملکرد در یک سامانه دسکتاپ انجام شود.",
      productExperience: {
        body: "سامانه برای کار روزمره تیم خدمت طراحی شده و جریان‌های اصلی ارتباط با مشتری را پوشش می‌دهد.",
        highlights: [
          "مدیریت مشتریان",
          "پیگیری تعاملات",
          "مدیریت درخواست خدمت",
          "گزارش‌های عملکرد",
          "منطق رابط کاربری و بک‌اند",
        ],
      },
      technology:
        "سامانه با C# و .NET روی SQL Server و Windows Forms پیاده‌سازی شده است. این معرفی محدود به همین فناوری‌های تأییدشده است.",
      dashboard:
        "گزارش‌های عملکرد، وضعیت خدمت و تعاملات را برای مرور مدیریتی سازماندهی می‌کنند.",
      delivered:
        "خروجی، یک سامانه دسکتاپ کامل برای مدیریت مشتری و خدمات است؛ از ثبت اطلاعات تا گزارش عملکرد.",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return {};
  return {
    prev: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}
