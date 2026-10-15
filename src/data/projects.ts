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
    storyLine: "ثبت روزانه وضعیت بیمار و ارائه گزارش برای پزشک",
    shortDescription:
      "سامانه‌ای برای پایش سلامت بیماران مبتلا به صرع، ثبت اطلاعات روزانه و آماده‌سازی گزارش‌های ساختاریافته برای پزشک.",
    englishDescription: "Health Monitoring System for Epileptic Patients",
    roleFa: "توسعه فرانت‌اند و طراحی تجربه کاربری",
    roleEn: "Frontend Development and UI/UX",
    technologies: ["React.js", "TypeScript", "Figma"],
    cover: "/projects/pineu/pineu-cover.png",
    media: [
      {
        src: "/projects/pineu/pineu-cover.png",
        alt: "رابط پایش سلامت Pineu",
        kind: "cover",
        caption: "نمای کلی سامانه پایش سلامت",
        frame: "browser",
      },
      {
        src: "/projects/pineu/pineu-dashboard.png",
        alt: "گزارش ساختاریافته پزشک در Pineu",
        kind: "dashboard",
        caption: "گزارش اطلاعات بیمار برای مرور پزشک",
        frame: "browser",
      },
      {
        src: "/projects/pineu/pineu-mobile.png",
        alt: "نمونه رابط ثبت روزانه سلامت",
        kind: "web",
        caption: "رابط ثبت اطلاعات روزانه",
        frame: "mobile",
      },
    ],
    caseStudy: {
      overview:
        "Pineu سامانه‌ای برای پایش سلامت بیماران مبتلا به صرع است. این محصول به ثبت منظم اطلاعات روزانه بیمار کمک می‌کند و امکان ارائه گزارش‌های ساختاریافته برای بررسی پزشک را فراهم می‌سازد.",
      challenge:
        "پیگیری وضعیت بیمار به اطلاعاتی نیاز دارد که در طول زمان و به‌صورت منظم ثبت شده باشند. وقتی این داده‌ها پراکنده باشند، مرور وضعیت بیمار و دنبال‌کردن تغییرات آن دشوارتر می‌شود.",
      solution:
        "Pineu با تمرکز بر طراحی رابط و تجربه کاربری، ثبت اطلاعات روزانه، گردش‌کارهای بیمار و تهیه گزارش برای پزشک را در یک وب‌اپلیکیشن گرد هم می‌آورد.",
      productExperience: {
        body:
          "رابط سامانه بر سه بخش اصلی تمرکز دارد: ثبت اطلاعات روزانه، پیگیری وضعیت بیمار و دسترسی به گزارش‌هایی که پزشک بتواند آن‌ها را مرور کند.",
        highlights: [
          "ثبت اطلاعات روزانه سلامت",
          "پشتیبانی از گردش‌کارهای بیمار",
          "تهیه گزارش‌های ساختاریافته برای پزشک",
        ],
      },
      technology:
        "رابط کاربری با React.js و TypeScript پیاده‌سازی شده و طراحی تجربه محصول در Figma انجام شده است.",
      webApplication:
        "Pineu به‌صورت وب‌اپلیکیشن ارائه شده است. بخش‌های ثبت اطلاعات، پیگیری وضعیت بیمار و مشاهده گزارش‌ها در یک محیط واحد قرار دارند تا دسترسی به اطلاعات موردنیاز ساده‌تر باشد.",
      dashboard:
        "بخش گزارش، اطلاعات ثبت‌شده درباره وضعیت بیمار را به شکلی ساختاریافته در اختیار پزشک قرار می‌دهد و مرور آن‌ها را آسان‌تر می‌کند.",
      delivered:
        "سامانه‌ای برای ثبت منظم اطلاعات سلامت و ارائه گزارش‌های قابل مرور برای پزشک.",
    },
  },

   {
    slug: "scratch-catch",
    name: "Scratch Catch",
    categoryFa: "بینایی ماشین و خودرو",
    categoryEn: "Damage Detection",
    storyLine: "ثبت وضعیت خودرو و تشخیص خسارت از روی تصاویر",
    shortDescription:
      "پلتفرمی برای شرکت‌های اجاره خودرو که ثبت تصاویر قبل و بعد از تحویل، مدیریت مشتریان و تشخیص خسارت با هوش مصنوعی را کنار هم قرار می‌دهد.",
    englishDescription: "Car Rental Damage Detection & Reporting Platform",
    roleFa: "توسعه فرانت‌اند و توسعه هوش مصنوعی",
    roleEn: "Frontend Developer & AI Developer",
    technologies: ["React.js", "Ionic React", "TypeScript", "PyTorch", "YOLO"],
    cover: "/projects/scratch-catch/scratch-cover.png",
    media: [
      {
        src: "/projects/scratch-catch/scratch-cover.png",
        alt: "پلتفرم Scratch Catch برای گزارش وضعیت خودرو",
        kind: "cover",
        caption: "نمای کلی پلتفرم",
        frame: "browser",
      },
      {
        src: "/projects/scratch-catch/scratch-web.png",
        alt: "داشبورد گزارش وضعیت خودروهای اجاره‌ای",
        kind: "web",
        caption: "مدیریت خودروها و گزارش‌های وضعیت",
        frame: "browser",
      },
      {
        src: "/projects/scratch-catch/scratch-mobile.png",
        alt: "اپلیکیشن موبایل بارگذاری تصویر قبل و بعد",
        kind: "mobile",
        caption: "ثبت تصاویر هنگام تحویل خودرو",
        frame: "mobile",
      },
      {
        src: "/projects/scratch-catch/scratch-ai-result.png",
        alt: "نمونه تشخیص خسارت روی تصویر خودرو",
        kind: "ai-result",
        caption: "نمونه خروجی تشخیص خسارت",
        frame: "plain",
      },
    ],
    caseStudy: {
      overview:
        "Scratch Catch برای شرکت‌های اجاره خودرو طراحی شده است تا وضعیت خودروها را پیش و پس از تحویل ثبت کنند، اطلاعات مشتریان را مدیریت کنند و از تشخیص خسارت مبتنی بر هوش مصنوعی کمک بگیرند.",
      challenge:
        "ثبت‌نشدن دقیق وضعیت خودرو هنگام تحویل و بازگشت می‌تواند بررسی اختلاف‌ها درباره خسارت را دشوار کند. تصاویر و اطلاعات پراکنده نیز مقایسه وضعیت خودرو را زمان‌بر می‌کنند.",
      solution:
        "این پلتفرم امکان ثبت تصاویر قبل و بعد از تحویل، مدیریت مشتریان و تهیه گزارش وضعیت خودرو را فراهم می‌کند. قابلیت تشخیص خسارت با استفاده از YOLO و PyTorch نیز بخشی از این فرایند است.",
      productExperience: {
        body:
          "امکانات محصول برای نیازهای روزمره شرکت‌های اجاره خودرو طراحی شده‌اند؛ از ثبت وضعیت خودرو در زمان تحویل گرفته تا بررسی تصاویر و مدیریت اطلاعات مشتریان.",
        highlights: [
          "ثبت وضعیت خودروهای اجاره‌ای",
          "بارگذاری و مقایسه تصاویر قبل و بعد",
          "مدیریت اطلاعات مشتریان",
          "ارائه اشتراک ماهانه",
          "تشخیص خسارت خودرو با هوش مصنوعی",
        ],
      },
      technology:
        "بخش وب با React.js و TypeScript و نسخه موبایل با Ionic React توسعه یافته است. برای تشخیص خسارت نیز از PyTorch و YOLO استفاده شده است.",
      dataAiPipeline: {
        intro:
          "در مسیر تشخیص خسارت، تصویر خودرو بررسی می‌شود و نتیجه تشخیص می‌تواند در تهیه گزارش وضعیت آن مورد استفاده قرار گیرد.",
        steps: [
          { id: "image", labelFa: "تصویر خودرو", labelEn: "Vehicle Image" },
          { id: "ai", labelFa: "پردازش تصویر", labelEn: "AI Processing" },
          { id: "detect", labelFa: "تشخیص خسارت", labelEn: "Damage Detection" },
          { id: "report", labelFa: "گزارش وضعیت", labelEn: "Condition Report" },
        ],
      },
      webApplication:
        "نسخه وب برای مدیریت مشتریان، دسترسی به گزارش‌ها و پیگیری وضعیت خودروها استفاده می‌شود و اطلاعات موردنیاز تیم عملیاتی را در یک محیط در دسترس قرار می‌دهد.",
      mobileApplication:
        "نسخه موبایل با Ionic React طراحی شده و امکان ثبت تصاویر قبل و بعد از تحویل خودرو را در محل فراهم می‌کند.",
      dashboard:
        "بخش گزارش، اطلاعات ثبت‌شده و نتایج بررسی وضعیت خودرو را برای پیگیری و مستندسازی خسارت در اختیار شرکت اجاره قرار می‌دهد.",
      delivered:
        "پلتفرمی وب و موبایل برای ثبت وضعیت خودرو، مدیریت مشتریان و کمک به شناسایی خسارت با هوش مصنوعی.",
    },
  },
    {
    slug: "image-enhancement",
    name: "AI Image Enhancement",
    categoryFa: "بهبود تصویر",
    categoryEn: "Image Enhancement",
    storyLine: "رفع تاری و تنظیم تصویر در یک برنامه دسکتاپ",
    shortDescription:
      "نرم‌افزاری دسکتاپ برای بهبود تصویر با یادگیری عمیق، همراه با ابزارهایی برای تنظیم نویز، برش، بزرگ‌نمایی، کنتراست و روشنایی.",
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
        caption: "نمای اصلی برنامه",
        frame: "desktop",
      },
      {
        src: "/projects/image-enhancement/enhance-app.webp",
        alt: "ابزارهای رفع تاری و تنظیم تصویر",
        kind: "desktop",
        caption: "ابزارهای ویرایش و بهبود تصویر",
        frame: "desktop",
      },
      {
        src: "/projects/image-enhancement/enhance-before-after.webp",
        alt: "مقایسه تصویر قبل و بعد از رفع تاری",
        kind: "before-after",
        caption: "مقایسه نتیجه پیش و پس از بهبود تصویر",
        frame: "plain",
      },
    ],
    caseStudy: {
      overview:
        "AI Image Enhancement یک نرم‌افزار دسکتاپ برای رفع تاری و بهبود تصاویر است. کاربر می‌تواند از قابلیت‌های مبتنی بر یادگیری عمیق در کنار ابزارهای معمول ویرایش تصویر استفاده کند.",
      challenge:
        "تصاویر تار یا نویزی همیشه به اصلاح نیاز دارند، اما استفاده از یک مدل به‌تنهایی لزوماً همه نیازهای ویرایش را پوشش نمی‌دهد. به همین دلیل، دسترسی به قابلیت بهبود تصویر و ابزارهای تنظیم آن در یک برنامه اهمیت دارد.",
      solution:
        "این نرم‌افزار قابلیت رفع تاری با یادگیری عمیق را با ابزارهایی مانند تنظیم نویز، برش، بزرگ‌نمایی و تغییر کنتراست و روشنایی ترکیب می‌کند.",
      productExperience: {
        body:
          "کاربر می‌تواند تصویر را وارد برنامه کند، از قابلیت رفع تاری استفاده کند و در ادامه با ابزارهای ویرایش، نتیجه را مطابق نیاز خود تنظیم کند.",
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
        "این برنامه با Python، PyTorch، OpenCV و PyQt توسعه یافته است. PyTorch برای قابلیت‌های مبتنی بر یادگیری عمیق و OpenCV برای پردازش تصویر به کار می‌روند.",
      dataAiPipeline: {
        intro:
          "فرایند کار با تصویر ورودی آغاز می‌شود، از مرحله پردازش و بهبود می‌گذرد و با امکان انجام تنظیمات تکمیلی ادامه پیدا می‌کند.",
        steps: [
          { id: "input", labelFa: "تصویر ورودی", labelEn: "Input Image" },
          { id: "cv", labelFa: "پردازش تصویر", labelEn: "OpenCV" },
          { id: "model", labelFa: "مدل یادگیری عمیق", labelEn: "Deep Learning" },
          { id: "enhance", labelFa: "تصویر بهبودیافته", labelEn: "Enhanced Image" },
          { id: "tools", labelFa: "تنظیمات تکمیلی", labelEn: "Adjustments" },
        ],
      },
      delivered:
        "برنامه‌ای دسکتاپ برای رفع تاری و بهبود تصویر، همراه با ابزارهای تنظیم و ویرایش.",
    },
  },
    {
    slug: "crm",
    name: "CRM System",
    categoryFa: "نرم‌افزار سازمانی",
    categoryEn: "Enterprise Software",
    storyLine: "ثبت اطلاعات مشتریان و پیگیری درخواست‌های خدمات",
    shortDescription:
      "نرم‌افزاری دسکتاپ برای مدیریت اطلاعات مشتریان، ثبت سوابق تعامل، پیگیری درخواست‌های خدمات و تهیه گزارش عملکرد.",
    englishDescription: "Customer Relationship Management",
    roleFa: "توسعه‌دهنده فول‌استک",
    roleEn: "Full-Stack Developer",
    technologies: ["C#", ".NET", "SQL Server", "Windows Forms"],
    cover: "/projects/crm/crm-cover.png",
    media: [
      {
        src: "/projects/crm/crm-cover.png",
        alt: "سامانه دسکتاپ مدیریت ارتباط با مشتری",
        kind: "cover",
        caption: "نمای اصلی نرم‌افزار CRM",
        frame: "desktop",
      },
      {
        src: "/projects/crm/crm-dashboard.png",
        alt: "گزارش عملکرد و سوابق خدمت در CRM",
        kind: "dashboard",
        caption: "مرور سوابق مشتریان و گزارش عملکرد",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "CRM System نرم‌افزاری برای ثبت و مدیریت اطلاعات مشتریان، پیگیری تعاملات و رسیدگی به درخواست‌های خدمات است. این برنامه دسترسی به سوابق و گزارش‌های مرتبط را در یک محیط دسکتاپ فراهم می‌کند.",
      challenge:
        "وقتی اطلاعات مشتریان، سوابق خدمات و گفتگوها در فایل‌ها یا محل‌های مختلف نگهداری شوند، پیدا کردن اطلاعات موردنیاز و پیگیری درخواست‌ها دشوارتر می‌شود. این پروژه با هدف سامان‌دهی این اطلاعات در یک برنامه واحد شکل گرفته است.",
      solution:
        "نرم‌افزار با استفاده از C#، .NET، SQL Server و Windows Forms، امکانات ثبت مشتری، پیگیری تعاملات، مدیریت درخواست‌های خدمات و مشاهده گزارش‌ها را در یک محیط دسکتاپ ارائه می‌کند.",
      productExperience: {
        body:
          "کاربر می‌تواند اطلاعات مشتریان را ثبت کند، سوابق تعامل را مرور کند و درخواست‌های خدمات را پیگیری کند؛ بدون اینکه برای هر بخش به ابزار جداگانه‌ای نیاز داشته باشد.",
        highlights: [
          "ثبت و مدیریت اطلاعات مشتریان",
          "پیگیری تعاملات و سوابق",
          "مدیریت درخواست‌های خدمات",
          "تهیه گزارش‌های عملکرد",
          "ذخیره‌سازی اطلاعات در SQL Server",
        ],
      },
      technology:
        "این برنامه با C# و .NET توسعه یافته است. رابط کاربری با Windows Forms ساخته شده و SQL Server برای نگهداری اطلاعات مورد استفاده قرار می‌گیرد.",
      dashboard:
        "بخش گزارش‌ها امکان مرور اطلاعات مربوط به عملکرد، سوابق تعامل و درخواست‌های خدمات را فراهم می‌کند.",
      delivered:
        "نرم‌افزاری دسکتاپ برای مدیریت اطلاعات مشتریان، پیگیری خدمات و مرور سوابق مرتبط.",
    },
  },
  
   {
    slug: "brokala",
    name: "Brokala Perfume",
    categoryFa: "فروشگاه اینترنتی",
    categoryEn: "E-commerce",
    storyLine: "جست‌وجو و خرید آنلاین عطر و ادکلن",
    shortDescription:
      "فروشگاه اینترنتی عطر و ادکلن با امکان مشاهده محصولات، بررسی قیمت‌ها و تخفیف‌ها و ثبت سفارش آنلاین.",
    englishDescription: "Online Perfume and Fragrance Store",
    roleFa: "توسعه‌دهنده وب‌سایت",
    roleEn: "Website Developer",
    technologies: [
      "WordPress",
      "WooCommerce",
      "Elementor",
      "Bootstrap",
      "PHP",
      "MySQL",
      "jQuery",
      "Backbone.js",
      "Marionette.js",
    ],
    cover: "/projects/brokala/brokala-cover.png",
    media: [
      {
        src: "/projects/brokala/brokala-cover.png",
        alt: "صفحه اصلی وب‌سایت بروکالا پرفیوم",
        kind: "cover",
        caption: "صفحه اصلی فروشگاه بروکالا پرفیوم",
        frame: "desktop",
      },
      {
        src: "/projects/brokala/brokala-dashboard.png",
        alt: "صفحه محصول در فروشگاه بروکالا پرفیوم",
        kind: "dashboard",
        caption: "صفحه معرفی محصول",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "Brokala Perfume فروشگاهی اینترنتی برای عرضه عطر و ادکلن است. کاربران می‌توانند محصولات را مرور کنند، جزئیات و قیمت آن‌ها را ببینند و سفارش خود را به‌صورت آنلاین ثبت کنند.",
      challenge:
        "در یک فروشگاه عطر و ادکلن، دسترسی به محصولات و مقایسه گزینه‌ها نقش مهمی در انتخاب خریدار دارد. نمایش منظم محصولات، اطلاعات هر کالا و قیمت آن‌ها به کاربر کمک می‌کند تصمیم آگاهانه‌تری بگیرد.",
      solution:
        "فروشگاه امکانات اصلی خرید آنلاین، از جمله نمایش و دسته‌بندی محصولات، جست‌وجو، مشاهده اطلاعات و قیمت کالا، فهرست علاقه‌مندی‌ها و سبد خرید را ارائه می‌کند.",
      productExperience: {
        body:
          "کاربر می‌تواند محصولات عطر و ادکلن را جست‌وجو و مرور کند، اطلاعات و تخفیف‌های هر محصول را بررسی کند و کالاهای موردنظرش را به فهرست علاقه‌مندی‌ها یا سبد خرید اضافه کند.",
        highlights: [
          "مشاهده محصولات عطر و ادکلن",
          "جست‌وجو و دسته‌بندی محصولات",
          "بررسی قیمت و تخفیف‌ها",
          "فهرست علاقه‌مندی‌ها",
          "سبد خرید و ثبت سفارش",
        ],
      },
      technology:
        "فروشگاه بر پایه WordPress و WooCommerce ساخته شده است. فناوری‌های شناسایی‌شده در آن شامل PHP، MySQL، Elementor، Bootstrap، jQuery و کتابخانه‌های مرتبط با رابط کاربری وب هستند.",
      delivered:
        "فروشگاهی آنلاین برای مرور محصولات عطر و ادکلن، بررسی قیمت‌ها و ثبت سفارش.",
    },
  },
  {
    slug: "visual-perception",
    name: "Visual Perception System",
    categoryFa: "بینایی ماشین و هوش مصنوعی",
    categoryEn: "Computer Vision & AI",
    storyLine: "تشخیص خطوط مسیر و علائم ترافیکی از تصاویر جاده",
    shortDescription:
      "سیستمی برای تحلیل تصاویر جاده با هدف تشخیص خطوط مسیر و علائم ترافیکی با کمک بینایی ماشین.",
    englishDescription:
      "A visual perception system for lane and traffic signal detection.",
    roleFa: "توسعه‌دهنده سیستم بینایی ماشین",
    roleEn: "Computer Vision Developer",
    cover: "/projects/visual-perception/visual-perception cover.jpg",
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
    ],
    media: [
      {
        src: "/projects/visual-perception/visual-perception cover.jpg",
        alt: "نمونه تشخیص خطوط و علائم ترافیکی",
        kind: "cover",
        caption: "نمونه خروجی تحلیل تصویر جاده",
        frame: "desktop",
      },
      {
        src: "/projects/visual-perception/visual-perception second.jpg",
        alt: "نمونه تشخیص خطوط مسیر",
        kind: "dashboard",
        caption: "نمونه تشخیص خطوط مسیر",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "Visual Perception System پروژه‌ای در حوزه بینایی ماشین است که بر تحلیل تصاویر جاده و شناسایی خطوط مسیر و علائم ترافیکی تمرکز دارد.",
      challenge:
        "برای تحلیل صحنه جاده، سیستم باید بتواند اطلاعات بصری مهمی مانند خطوط مسیر و علائم ترافیکی را از تصویر ورودی شناسایی کند. تغییر شرایط جاده و نورپردازی نیز می‌تواند این کار را دشوارتر کند.",
      solution:
        "این پروژه با هدف استفاده از روش‌های بینایی ماشین برای پردازش تصاویر جاده و استخراج اطلاعات مربوط به خطوط مسیر و علائم ترافیکی طراحی شده است.",
      productExperience: {
        body:
          "سیستم تصاویر جاده را به‌عنوان ورودی دریافت می‌کند و بر شناسایی خطوط مسیر و علائم ترافیکی تمرکز دارد.",
        highlights: [
          "تحلیل تصاویر جاده",
          "تشخیص خطوط مسیر",
          "شناسایی علائم ترافیکی",
          "پردازش تصویر",
          "استخراج اطلاعات بصری از تصویر",
        ],
      },
      technology:
        "این پروژه در حوزه بینایی ماشین قرار دارد و Python و OpenCV در فهرست فناوری‌های آن ذکر شده‌اند. جزئیات بیشتر پیاده‌سازی باید با کد و مستندات مخزن تطبیق داده شود.",
      dataAiPipeline: {
        intro:
          "نمای کلی فرایند از دریافت تصویر جاده تا تحلیل بصری و ارائه نتایج مربوط به خطوط مسیر و علائم ترافیکی را نشان می‌دهد.",
        steps: [
          {
            id: "input",
            labelFa: "تصویر ورودی",
            labelEn: "Input Image",
          },
          {
            id: "preprocess",
            labelFa: "پیش‌پردازش تصویر",
            labelEn: "Image Preprocessing",
          },
          {
            id: "lane",
            labelFa: "تشخیص خطوط مسیر",
            labelEn: "Lane Detection",
          },
          {
            id: "signal",
            labelFa: "تشخیص علائم ترافیکی",
            labelEn: "Traffic Signal Detection",
          },
          {
            id: "output",
            labelFa: "نتیجه تحلیل",
            labelEn: "Perception Output",
          },
        ],
      },
      delivered:
        "پروژه‌ای برای تحلیل تصاویر جاده و شناسایی خطوط مسیر و علائم ترافیکی با روش‌های بینایی ماشین.",
    },
  },

  {
    slug: "mailreader",
    name: "MailReader",
    categoryFa: "نرم‌افزار دسکتاپ",
    categoryEn: "Desktop Application",
    storyLine: "دریافت، مدیریت و خواندن ایمیل‌ها در یک برنامه دسکتاپ",
    shortDescription:
      "برنامه‌ای دسکتاپ برای اتصال به سرویس‌های ایمیل، دریافت پیام‌ها و مشاهده محتوای آن‌ها با پشتیبانی از IMAP و POP3.",
    englishDescription:
      "A desktop email client supporting IMAP, POP3, and optional Microsoft Graph integration.",
    roleFa: "توسعه‌دهنده نرم‌افزار دسکتاپ",
    roleEn: "Desktop Software Developer",
    cover: "/projects/mailreader/MailReader_cover.png",
    technologies: [
      "C#",
      ".NET Framework 4.6.2",
      "Windows Forms",
      "MailKit",
      "MimeKit",
      "Newtonsoft.Json",
      "Microsoft Graph",
    ],
    media: [{
        src: "/projects/mailreader/MailReader_cover.png",
        alt: "MailReader",
        kind: "dashboard",
        caption: "MailReader",
        frame: "desktop",
      },],
    caseStudy: {
      overview:
        "MailReader یک برنامه دسکتاپ برای دریافت و خواندن ایمیل‌هاست. این برنامه از پروتکل‌های IMAP و POP3 پشتیبانی می‌کند و امکان استفاده اختیاری از Microsoft Graph را نیز در نظر گرفته است.",
      challenge:
        "دسترسی به ایمیل‌ها از طریق سرویس‌ها و حساب‌های مختلف به تنظیمات اتصال و روشی مناسب برای دریافت و نمایش پیام‌ها نیاز دارد. هدف MailReader فراهم‌کردن این قابلیت‌ها در قالب یک برنامه دسکتاپ است.",
      solution:
        "برنامه بخش‌های مربوط به اتصال به سرویس ایمیل، مدیریت تنظیمات و نمایش پیام‌ها را در کنار هم قرار می‌دهد تا کاربر بتواند صندوق ورودی را بررسی کند و پیام‌های موردنظرش را بخواند.",
      productExperience: {
        body:
          "کاربر می‌تواند تنظیمات اتصال را مشخص کند، ایمیل‌های دریافتی را مرور کند و برای مشاهده جزئیات، پیام موردنظرش را باز کند. برنامه همچنین از به‌روزرسانی صندوق ورودی و دریافت خودکار پیام‌های جدید از طریق IMAP IDLE پشتیبانی می‌کند.",
        highlights: [
          "پشتیبانی از پروتکل‌های IMAP و POP3",
          "دریافت خودکار ایمیل‌های جدید از طریق IMAP IDLE",
          "به‌روزرسانی دستی و خودکار صندوق ورودی",
          "مدیریت تنظیمات اتصال",
          "مشاهده جزئیات و محتوای ایمیل‌ها",
          "پشتیبانی اختیاری از Microsoft Graph",
        ],
      },
      
      technology:
        "MailReader با C# و Windows Forms بر پایه .NET Framework 4.6.2 توسعه یافته است. این برنامه از MailKit و MimeKit برای کار با ایمیل و از Newtonsoft.Json برای پردازش داده‌های JSON استفاده می‌کند. یکپارچه‌سازی با Microsoft Graph نیز به‌صورت اختیاری در نظر گرفته شده است.",
      delivered:
        "برنامه‌ای دسکتاپ برای اتصال به سرویس‌های ایمیل، دریافت پیام‌ها و خواندن آن‌ها با تنظیمات قابل پیکربندی.",
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
