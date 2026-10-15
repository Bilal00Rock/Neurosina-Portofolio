
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

export const projects: Project[] = [
  // --------------------------------------------------
  // Pineu — Health Monitoring
  // --------------------------------------------------
  {
    slug: "pineu",
    name: "Pineu",
    categoryFa: "پایش سلامت",
    categoryEn: "Health Monitoring",
    storyLine: "ثبت وضعیت روزانه بیمار و مرور سوابق سلامت",
    shortDescription:
      "سامانه‌ای برای ثبت اطلاعات روزانه بیماران مبتلا به صرع و دسترسی پزشک به سوابق و گزارش‌های آن‌ها.",
    englishDescription:
      "A health monitoring platform for recording daily patient information and reviewing medical reports.",
    roleFa: "طراحی تجربه کاربری و توسعه فرانت‌اند و بک‌اند",
    roleEn: "UI/UX Design, Frontend & Backend Development",
    technologies: [
      "React.js",
      "TypeScript",
      "Figma",
      "ASP.NET Core",
      "MariaDB",
      "C#",
    ],
    cover: "/projects/pineu/pineu-cover.png",
    media: [
      {
        src: "/projects/pineu/pineu-cover.png",
        alt: "نمای اصلی سامانه Pineu",
        kind: "cover",
        caption: "نمای کلی سامانه پایش سلامت",
        frame: "browser",
      },
      {
        src: "/projects/pineu/pineu-dashboard.png",
        alt: "گزارش‌های سلامت بیمار در Pineu",
        kind: "dashboard",
        caption: "گزارش اطلاعات بیمار برای بررسی پزشک",
        frame: "browser",
      },
      {
        src: "/projects/pineu/prinue-1.png",
        alt: "فهرست اطلاعات بیماران در Pineu",
        kind: "dashboard",
        caption: "مرور اطلاعات ثبت‌شده بیماران",
        frame: "browser",
      },
      {
        src: "/projects/pineu/prinue-3.png",
        alt: "بخش اطلاعات و سوابق بیماران",
        kind: "dashboard",
        caption: "نمای فهرست و سوابق بیمار",
        frame: "browser",
      },
      {
        src: "/projects/pineu/mobile1.png",
        alt: "رابط موبایل Pineu",
        kind: "mobile",
        caption: "نمای موبایل سامانه",
        frame: "mobile",
      },
      {
        src: "/projects/pineu/mobile.png",
        alt: "فرم ثبت اطلاعات روزانه سلامت",
        kind: "mobile",
        caption: "ثبت اطلاعات روزانه بیمار",
        frame: "mobile",
      },
      {
        src: "/projects/pineu/mobile2.png",
        alt: "یکی از صفحات موبایل Pineu",
        kind: "mobile",
        caption: "نمای دیگری از رابط موبایل",
        frame: "mobile",
      },
    ],
    caseStudy: {
      overview:
        "Pineu سامانه‌ای برای ثبت وضعیت روزانه بیماران مبتلا به صرع و نگهداری سوابق مرتبط با سلامت آن‌هاست. اطلاعات ثبت‌شده در قالب گزارش‌هایی در دسترس قرار می‌گیرند تا پزشک بتواند آن‌ها را مرور کند.",
      challenge:
        "پیگیری وضعیت بیمار به اطلاعاتی نیاز دارد که در طول زمان ثبت شده و به‌راحتی قابل دسترسی باشند. پیدا کردن سوابق و بررسی تغییرات زمانی دشوارتر می‌شود، اگر اطلاعات به شکل منظم نگهداری نشوند.",
      solution:
        "در Pineu، ثبت اطلاعات روزانه، مرور سوابق و مشاهده گزارش‌ها در قالب یک سامانه وب ارائه شده است. طراحی رابط نیز بر دسترسی ساده به اطلاعات و تفکیک بخش‌های مختلف تمرکز دارد.",
      productExperience: {
        body:
          "بخش‌های اصلی سامانه برای ثبت اطلاعات بیمار، مرور سوابق و مشاهده گزارش‌ها در نظر گرفته شده‌اند تا کاربران بتوانند اطلاعات موردنیاز خود را از یک محیط مشخص دنبال کنند.",
        highlights: [
          "ثبت اطلاعات روزانه سلامت",
          "مرور سوابق ثبت‌شده بیمار",
          "مشاهده گزارش‌های ساختاریافته",
          "دسترسی به اطلاعات برای بررسی پزشک",
        ],
      },
      technology:
        "فرانت‌اند با React.js و TypeScript توسعه یافته و طراحی رابط در Figma انجام شده است. در بخش بک‌اند نیز از C#، ASP.NET Core و MariaDB استفاده شده است.",
      webApplication:
        "نسخه وب Pineu بخش‌های ثبت اطلاعات، مرور سوابق و مشاهده گزارش‌ها را در اختیار کاربران قرار می‌دهد.",
      dashboard:
        "بخش گزارش‌ها، اطلاعات ثبت‌شده بیمار را به شکل منظم نمایش می‌دهد تا مرور سوابق و دسترسی به داده‌های موردنیاز ساده‌تر باشد.",
      delivered:
        "سامانه‌ای وب برای ثبت اطلاعات روزانه سلامت و مرور سوابق بیماران مبتلا به صرع.",
    },
  },

  // --------------------------------------------------
  // Scratch Catch — Vehicle Damage Detection
  // --------------------------------------------------
  {
    slug: "scratch-catch",
    name: "Scratch Catch",
    categoryFa: "بینایی ماشین و خودرو",
    categoryEn: "Vehicle Damage Detection",
    storyLine: "ثبت وضعیت خودرو و بررسی خسارت پیش و پس از اجاره",
    shortDescription:
      "پلتفرمی برای شرکت‌های اجاره خودرو با امکانات ثبت تصاویر، مدیریت مشتریان و تشخیص خسارت از روی تصاویر خودرو.",
    englishDescription:
      "A web and mobile platform for vehicle condition reporting and image-based damage detection.",
    roleFa: "توسعه وب، موبایل، بک‌اند و بینایی ماشین",
    roleEn: "Web, Mobile, Backend & Computer Vision Development",
    technologies: [
      "React.js",
      "Ionic React",
      "TypeScript",
      "PyTorch",
      "YOLO",
      "ASP.NET Core",
      "MariaDB",
    ],
    cover: "/projects/scratch-catch/scratch-cover.png",
    media: [
      {
        src: "/projects/scratch-catch/scratch-cover.png",
        alt: "نمای اصلی پلتفرم Scratch Catch",
        kind: "cover",
        caption: "معرفی پلتفرم مدیریت وضعیت خودرو",
        frame: "browser",
      },
      {
        src: "/projects/scratch-catch/scratch-web.png",
        alt: "پنل مدیریت خودروها در Scratch Catch",
        kind: "web",
        caption: "پنل وب مدیریت خودروها و گزارش‌ها",
        frame: "browser",
      },
      {
        src: "/projects/scratch-catch/scratch-mobile.png",
        alt: "رابط موبایل ثبت تصاویر خودرو",
        kind: "mobile",
        caption: "ثبت تصاویر خودرو هنگام تحویل",
        frame: "mobile",
      },
      {
        src: "/projects/scratch-catch/scratch-ai-result.png",
        alt: "نمونه خروجی تشخیص خسارت خودرو",
        kind: "ai-result",
        caption: "نمونه تحلیل تصویر خودرو",
        frame: "plain",
      },
    ],
    caseStudy: {
      overview:
        "Scratch Catch برای مدیریت فرایند ثبت وضعیت خودروهای اجاره‌ای طراحی شده است. این پلتفرم مدیریت مشتریان و گزارش‌ها را با امکان ثبت تصاویر قبل و بعد از تحویل و قابلیت تشخیص خسارت ترکیب می‌کند.",
      challenge:
        "ثبت وضعیت بدنه خودرو در زمان تحویل و بازگشت، به مستندسازی دقیق نیاز دارد. مقایسه تصاویر و پیگیری گزارش‌ها می‌تواند به بررسی تفاوت‌های ظاهری و خسارت‌های احتمالی کمک کند.",
      solution:
        "پلتفرم شامل پنل وب برای مدیریت اطلاعات و گزارش‌ها و رابط موبایل برای ثبت تصاویر در محل است. قابلیت بینایی ماشین نیز برای شناسایی نواحی آسیب‌دیده از تصاویر خودرو در نظر گرفته شده است.",
      productExperience: {
        body:
          "کاربران می‌توانند اطلاعات خودرو و مشتریان را مدیریت کنند، تصاویر مربوط به وضعیت خودرو را ثبت کنند و گزارش‌های موجود را برای پیگیری وضعیت اجاره مرور کنند.",
        highlights: [
          "ثبت وضعیت خودروهای اجاره‌ای",
          "بارگذاری تصاویر قبل و بعد از تحویل",
          "مدیریت اطلاعات مشتریان و خودروها",
          "مشاهده گزارش‌های وضعیت خودرو",
          "تشخیص تصویری خسارت با YOLO و PyTorch",
          "پشتیبانی از مدل اشتراک ماهانه",
        ],
      },
      technology:
        "پنل وب با React.js و TypeScript و رابط موبایل با Ionic React توسعه یافته است. بک‌اند بر پایه ASP.NET Core و MariaDB پیاده‌سازی شده و قابلیت تشخیص خسارت از PyTorch و YOLO استفاده می‌کند.",
      dataAiPipeline: {
        intro:
          "در بخش تشخیص خسارت، تصاویر خودرو به سیستم داده می‌شوند و خروجی مدل برای بررسی وضعیت ظاهری خودرو مورد استفاده قرار می‌گیرد.",
        steps: [
          {
            id: "image",
            labelFa: "تصویر خودرو",
            labelEn: "Vehicle Image",
          },
          {
            id: "ai",
            labelFa: "پردازش تصویر",
            labelEn: "Image Processing",
          },
          {
            id: "detect",
            labelFa: "تشخیص خسارت",
            labelEn: "Damage Detection",
          },
          {
            id: "report",
            labelFa: "گزارش وضعیت",
            labelEn: "Condition Report",
          },
        ],
      },
      webApplication:
        "پنل وب برای مدیریت مشتریان و خودروها، دسترسی به گزارش‌ها و پیگیری اطلاعات ثبت‌شده استفاده می‌شود.",
      mobileApplication:
        "رابط موبایل امکان ثبت تصاویر خودرو در محل تحویل و بازگشت را فراهم می‌کند تا مستندسازی وضعیت خودرو مستقیماً در فرایند اجاره انجام شود.",
      dashboard:
        "گزارش‌های وضعیت خودرو، اطلاعات ثبت‌شده و نتایج بررسی تصاویر را برای پیگیری و مستندسازی در دسترس قرار می‌دهند.",
      delivered:
        "پلتفرمی وب و موبایل برای ثبت وضعیت خودروهای اجاره‌ای و کمک به بررسی خسارت با بینایی ماشین.",
    },
  },

  // --------------------------------------------------
  // AI Image Enhancement
  // --------------------------------------------------
  {
    slug: "image-enhancement",
    name: "AI Image Enhancement",
    categoryFa: "پردازش و بهبود تصویر",
    categoryEn: "Image Processing & Enhancement",
    storyLine: "رفع تاری و ویرایش تصویر در یک نرم‌افزار دسکتاپ",
    shortDescription:
      "برنامه‌ای دسکتاپ برای بهبود تصاویر با یادگیری عمیق، همراه با ابزارهای کاهش نویز، برش و تنظیم روشنایی و کنتراست.",
    englishDescription:
      "A desktop application for deep learning-based image deblurring and image editing.",
    roleFa: "توسعه نرم‌افزار دسکتاپ و پردازش تصویر",
    roleEn: "Desktop Application & Image Processing Development",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "PyQt",
      "Deep Learning",
    ],
    cover: "/projects/image-enhancement/enhance-cover.webp",
    media: [
      {
        src: "/projects/image-enhancement/enhance-cover.webp",
        alt: "صفحه اصلی نرم‌افزار بهبود تصویر",
        kind: "cover",
        caption: "محیط اصلی برنامه",
        frame: "desktop",
      },
      {
        src: "/projects/image-enhancement/enhance-app.webp",
        alt: "ابزارهای ویرایش تصویر در برنامه",
        kind: "desktop",
        caption: "ابزارهای پردازش و تنظیم تصویر",
        frame: "desktop",
      },
      {
        src: "/projects/image-enhancement/enhance-before-after.webp",
        alt: "مقایسه تصویر پیش و پس از پردازش",
        kind: "before-after",
        caption: "مقایسه تصویر اولیه با نتیجه بهبود",
        frame: "plain",
      },
    ],
    caseStudy: {
      overview:
        "AI Image Enhancement یک نرم‌افزار دسکتاپ برای رفع تاری و بهبود تصاویر است. این برنامه قابلیت پردازش مبتنی بر یادگیری عمیق را در کنار ابزارهای معمول ویرایش تصویر قرار می‌دهد.",
      challenge:
        "برای اصلاح تصاویر تار یا نویزی، علاوه بر پردازش خودکار، ابزارهایی برای تنظیم نتیجه نیز موردنیاز است. کاربر باید بتواند تصویر خروجی را بررسی کند و تغییرات تکمیلی را در همان برنامه انجام دهد.",
      solution:
        "در این نرم‌افزار، قابلیت رفع تاری مبتنی بر یادگیری عمیق با ابزارهای پردازش تصویر ترکیب شده است تا کاربر بتواند تصاویر را بهبود دهد و تنظیمات دلخواه خود را اعمال کند.",
      productExperience: {
        body:
          "کاربر تصویر را وارد برنامه می‌کند، نتیجه پردازش را بررسی می‌کند و در صورت نیاز با ابزارهای ویرایش، ظاهر تصویر را تنظیم می‌کند.",
        highlights: [
          "رفع تاری با مدل یادگیری عمیق",
          "کاهش و تنظیم نویز",
          "برش تصویر",
          "بزرگ‌نمایی تصویر",
          "تنظیم روشنایی و کنتراست",
          "مقایسه نتیجه قبل و بعد",
        ],
      },
      technology:
        "برنامه با Python و PyQt توسعه یافته است. PyTorch برای اجرای قابلیت‌های یادگیری عمیق و OpenCV برای پردازش و ویرایش تصویر به کار می‌روند.",
      dataAiPipeline: {
        intro:
          "تصویر ورودی پردازش می‌شود، از مرحله بهبود عبور می‌کند و سپس برای بررسی و تنظیمات تکمیلی در اختیار کاربر قرار می‌گیرد.",
        steps: [
          {
            id: "input",
            labelFa: "تصویر ورودی",
            labelEn: "Input Image",
          },
          {
            id: "cv",
            labelFa: "پردازش تصویر",
            labelEn: "Image Processing",
          },
          {
            id: "model",
            labelFa: "مدل یادگیری عمیق",
            labelEn: "Deep Learning Model",
          },
          {
            id: "enhance",
            labelFa: "نتیجه بهبود",
            labelEn: "Enhanced Image",
          },
          {
            id: "tools",
            labelFa: "تنظیمات نهایی",
            labelEn: "Final Adjustments",
          },
        ],
      },
      delivered:
        "نرم‌افزار دسکتاپ بهبود تصویر با قابلیت رفع تاری و ابزارهای تکمیلی ویرایش.",
    },
  },

  // --------------------------------------------------
  // CRM System
  // --------------------------------------------------
  {
    slug: "crm",
    name: "CRM System",
    categoryFa: "نرم‌افزار سازمانی",
    categoryEn: "Enterprise Software",
    storyLine: "مدیریت مشتریان و پیگیری سوابق خدمات",
    shortDescription:
      "نرم‌افزار دسکتاپ برای ثبت اطلاعات مشتریان، نگهداری سوابق تعاملات و مدیریت درخواست‌های خدمات.",
    englishDescription:
      "A desktop CRM application for customer records, service requests, and interaction history.",
    roleFa: "توسعه نرم‌افزار دسکتاپ و پایگاه داده",
    roleEn: "Desktop Application & Database Development",
    technologies: ["C#", ".NET", "SQL Server", "Windows Forms"],
    cover: "/projects/crm/crm-cover.png",
    media: [
      {
        src: "/projects/crm/crm-cover.png",
        alt: "صفحه اصلی نرم‌افزار CRM",
        kind: "cover",
        caption: "محیط اصلی مدیریت مشتریان",
        frame: "desktop",
      },
      {
        src: "/projects/crm/crm-dashboard.png",
        alt: "بخش سوابق و گزارش‌های CRM",
        kind: "dashboard",
        caption: "مرور اطلاعات مشتریان و گزارش‌ها",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "CRM System نرم‌افزاری برای ثبت اطلاعات مشتریان، نگهداری سوابق تعاملات و پیگیری درخواست‌های خدمات است. اطلاعات مشتری و سوابق مرتبط در یک برنامه دسکتاپ مدیریت می‌شوند.",
      challenge:
        "دسترسی به اطلاعات مشتریان و سوابق خدمات زمانی دشوار می‌شود که داده‌ها در محل‌های مختلف نگهداری شوند. داشتن سابقه مشخص از تعاملات و درخواست‌ها، پیگیری امور روزمره را ساده‌تر می‌کند.",
      solution:
        "این برنامه بخش‌های ثبت مشتریان، مرور سوابق، پیگیری درخواست‌های خدمات و مشاهده گزارش‌ها را در یک رابط دسکتاپ در اختیار کاربران قرار می‌دهد.",
      productExperience: {
        body:
          "کاربران می‌توانند اطلاعات مشتریان را ثبت و ویرایش کنند، سوابق مرتبط را مشاهده کنند و درخواست‌های خدمات را از طریق نرم‌افزار پیگیری کنند.",
        highlights: [
          "ثبت و مدیریت اطلاعات مشتریان",
          "نگهداری سوابق تعاملات",
          "پیگیری درخواست‌های خدمات",
          "مرور گزارش‌های عملکرد",
          "ذخیره اطلاعات در SQL Server",
        ],
      },
      technology:
        "این نرم‌افزار با C# و .NET توسعه یافته است. رابط کاربری با Windows Forms ساخته شده و SQL Server برای نگهداری اطلاعات استفاده می‌شود.",
      dashboard:
        "بخش گزارش‌ها دسترسی به سوابق مشتریان و اطلاعات مربوط به عملکرد و درخواست‌های خدمات را فراهم می‌کند.",
      delivered:
        "نرم‌افزار دسکتاپ CRM برای مدیریت اطلاعات مشتریان و پیگیری سوابق خدمات.",
    },
  },

  // --------------------------------------------------
  // Brokala Perfume
  // --------------------------------------------------
  {
    slug: "brokala",
    name: "Brokala Perfume",
    categoryFa: "فروشگاه اینترنتی",
    categoryEn: "E-commerce",
    storyLine: "معرفی عطر و ادکلن و ثبت سفارش آنلاین",
    shortDescription:
      "فروشگاه اینترنتی عطر و ادکلن با امکان جست‌وجوی محصولات، مشاهده قیمت‌ها و تخفیف‌ها و خرید آنلاین.",
    englishDescription:
      "An online perfume store for browsing fragrances, comparing prices, and placing orders.",
    roleFa: "طراحی و توسعه وب‌سایت فروشگاهی",
    roleEn: "E-commerce Website Development",
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
        alt: "صفحه اصلی فروشگاه بروکالا پرفیوم",
        kind: "cover",
        caption: "صفحه اصلی فروشگاه",
        frame: "desktop",
      },
      {
        src: "/projects/brokala/brokala-dashboard.png",
        alt: "صفحه محصول در بروکالا پرفیوم",
        kind: "web",
        caption: "نمایش اطلاعات و قیمت محصول",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "Brokala Perfume فروشگاه اینترنتی عطر و ادکلن است که کاربران از طریق آن می‌توانند محصولات را بررسی کنند، قیمت‌ها را ببینند و سفارش خود را آنلاین ثبت کنند.",
      challenge:
        "در یک فروشگاه تخصصی عطر، نمایش منظم محصولات و دسترسی به اطلاعات و قیمت هر کالا نقش مهمی در تجربه خرید دارد. فرایند انتخاب محصول نیز باید تا حد امکان ساده و روشن باشد.",
      solution:
        "فروشگاه بر پایه WordPress و WooCommerce پیاده‌سازی شده است و امکانات اصلی خرید آنلاین، از جست‌وجو و مرور محصولات تا سبد خرید و ثبت سفارش را ارائه می‌کند.",
      productExperience: {
        body:
          "خریداران می‌توانند محصولات را مرور کنند، اطلاعات و قیمت آن‌ها را بررسی کنند و کالاهای موردنظرشان را به فهرست علاقه‌مندی‌ها یا سبد خرید اضافه کنند.",
        highlights: [
          "نمایش و دسته‌بندی محصولات",
          "جست‌وجوی عطر و ادکلن",
          "مشاهده قیمت و تخفیف‌ها",
          "فهرست علاقه‌مندی‌ها",
          "سبد خرید و ثبت سفارش آنلاین",
        ],
      },
      technology:
        "فروشگاه با WordPress و WooCommerce ساخته شده است. در پیاده‌سازی آن از Elementor، PHP، MySQL، Bootstrap و کتابخانه‌های مرتبط با رابط کاربری وب نیز استفاده شده است.",
      delivered:
        "فروشگاه اینترنتی عطر و ادکلن با امکانات مرور محصولات و ثبت سفارش آنلاین.",
    },
  },

  // --------------------------------------------------
  // Visual Perception System
  // --------------------------------------------------
  {
    slug: "visual-perception",
    name: "Visual Perception System",
    categoryFa: "بینایی ماشین",
    categoryEn: "Computer Vision",
    storyLine: "تحلیل تصاویر جاده و شناسایی خطوط مسیر و علائم",
    shortDescription:
      "پروژه بینایی ماشین برای پردازش تصاویر جاده و شناسایی خطوط مسیر و علائم ترافیکی.",
    englishDescription:
      "A computer vision project focused on lane and traffic sign detection in road images.",
    roleFa: "توسعه سیستم بینایی ماشین",
    roleEn: "Computer Vision Development",
    technologies: ["Python", "OpenCV", "Computer Vision"],
    cover: "/projects/visual-perception/visual-perception cover.jpg",
    media: [
      {
        src: "/projects/visual-perception/visual-perception cover.jpg",
        alt: "نمونه خروجی تحلیل تصویر جاده",
        kind: "cover",
        caption: "نمونه تحلیل بصری صحنه جاده",
        frame: "desktop",
      },
      {
        src: "/projects/visual-perception/visual-perception second.jpg",
        alt: "نمونه تشخیص خطوط مسیر در تصویر",
        kind: "ai-result",
        caption: "نمونه تشخیص خطوط مسیر",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "Visual Perception System پروژه‌ای در حوزه بینایی ماشین است که بر استخراج اطلاعات بصری از تصاویر جاده، با تمرکز بر خطوط مسیر و علائم ترافیکی، کار می‌کند.",
      challenge:
        "تصاویر جاده حاوی اطلاعات بصری مختلفی هستند که برای تحلیل صحنه باید از یکدیگر تفکیک شوند. شناسایی خطوط مسیر و علائم ترافیکی از جمله بخش‌های این مسئله است.",
      solution:
        "در این پروژه از روش‌های پردازش تصویر و بینایی ماشین برای تحلیل تصاویر جاده و شناسایی عناصر موردنظر استفاده شده است.",
      productExperience: {
        body:
          "سیستم تصاویر جاده را دریافت می‌کند و نتایج تحلیل بصری را برای بررسی خطوط مسیر و علائم ترافیکی ارائه می‌دهد.",
        highlights: [
          "پردازش تصاویر جاده",
          "شناسایی خطوط مسیر",
          "تشخیص علائم ترافیکی",
          "نمایش نتایج تحلیل تصویر",
        ],
      },
      technology:
        "این پروژه با Python و OpenCV در حوزه بینایی ماشین پیاده‌سازی شده است.",
      dataAiPipeline: {
        intro:
          "فرایند کلی شامل دریافت تصویر جاده، پردازش تصویر و ارائه نتایج مربوط به خطوط مسیر و علائم ترافیکی است.",
        steps: [
          {
            id: "input",
            labelFa: "تصویر جاده",
            labelEn: "Road Image",
          },
          {
            id: "preprocess",
            labelFa: "پردازش تصویر",
            labelEn: "Image Processing",
          },
          {
            id: "lane",
            labelFa: "تشخیص خطوط مسیر",
            labelEn: "Lane Detection",
          },
          {
            id: "signal",
            labelFa: "شناسایی علائم",
            labelEn: "Traffic Sign Detection",
          },
          {
            id: "output",
            labelFa: "نتیجه تحلیل",
            labelEn: "Detection Results",
          },
        ],
      },
      delivered:
        "نمونه‌ای از کاربرد بینایی ماشین برای تحلیل تصاویر جاده و شناسایی خطوط مسیر و علائم ترافیکی.",
    },
  },

  // --------------------------------------------------
  // MailReader
  // --------------------------------------------------
  {
    slug: "mailreader",
    name: "MailReader",
    categoryFa: "نرم‌افزار دسکتاپ",
    categoryEn: "Desktop Application",
    storyLine: "دریافت و خواندن ایمیل‌ها در محیط ویندوز",
    shortDescription:
      "برنامه‌ای دسکتاپ برای اتصال به سرویس‌های ایمیل، دریافت پیام‌ها و مرور صندوق ورودی با پشتیبانی از IMAP و POP3.",
    englishDescription:
      "A Windows desktop email client with IMAP, POP3, and optional Microsoft Graph support.",
    roleFa: "توسعه نرم‌افزار دسکتاپ و یکپارچه‌سازی ایمیل",
    roleEn: "Desktop Application & Email Integration",
    technologies: [
      "C#",
      ".NET Framework 4.6.2",
      "Windows Forms",
      "MailKit",
      "MimeKit",
      "Newtonsoft.Json",
      "Microsoft Graph",
    ],
    cover: "/projects/mailreader/MailReader_cover.png",
    media: [
      {
        src: "/projects/mailreader/MailReader_cover.png",
        alt: "محیط نرم‌افزار MailReader",
        kind: "cover",
        caption: "محیط برنامه MailReader",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "MailReader یک برنامه ویندوزی برای اتصال به حساب‌های ایمیل، دریافت پیام‌ها و مشاهده محتوای آن‌هاست. این برنامه از پروتکل‌های IMAP و POP3 پشتیبانی می‌کند و امکان یکپارچه‌سازی اختیاری با Microsoft Graph را نیز دارد.",
      challenge:
        "دریافت ایمیل از طریق سرویس‌های مختلف به مدیریت تنظیمات اتصال و پردازش پیام‌ها نیاز دارد. علاوه بر دریافت دستی، دسترسی به پیام‌های جدید بدون تازه‌سازی مداوم صندوق ورودی نیز اهمیت دارد.",
      solution:
        "MailReader اتصال به سرویس ایمیل، دریافت پیام‌ها و نمایش محتوای آن‌ها را در یک برنامه دسکتاپ ارائه می‌دهد. قابلیت دریافت خودکار پیام‌های جدید نیز از طریق IMAP IDLE پیاده‌سازی شده است.",
      productExperience: {
        body:
          "کاربر می‌تواند تنظیمات اتصال را وارد کند، صندوق ورودی را به‌روزرسانی کند و پیام‌های دریافتی را برای مشاهده جزئیات باز کند.",
        highlights: [
          "پشتیبانی از پروتکل‌های IMAP و POP3",
          "دریافت خودکار پیام‌های جدید با IMAP IDLE",
          "به‌روزرسانی دستی و خودکار صندوق ورودی",
          "مدیریت تنظیمات اتصال",
          "نمایش محتوای ایمیل‌ها",
          "یکپارچه‌سازی اختیاری با Microsoft Graph",
        ],
      },
      technology:
        "MailReader با C# و Windows Forms بر پایه .NET Framework 4.6.2 توسعه یافته است. MailKit و MimeKit برای کار با ایمیل و Newtonsoft.Json برای پردازش داده‌های JSON استفاده می‌شوند. یکپارچه‌سازی Microsoft Graph نیز به‌صورت اختیاری در نظر گرفته شده است.",
      delivered:
        "برنامه‌ای دسکتاپ برای اتصال به سرویس‌های ایمیل، دریافت پیام‌ها و مدیریت صندوق ورودی.",
    },
  },

  // --------------------------------------------------
  // Rock Finance
  // --------------------------------------------------
  {
    slug: "rock-finance",
    name: "Rock Finance",
    categoryFa: "مدیریت مالی شخصی",
    categoryEn: "Personal Finance",
    storyLine: "مدیریت دخل‌وخرج و بررسی وضعیت مالی ماه‌های آینده",
    shortDescription:
      "اپلیکیشنی برای مدیریت حساب‌ها، درآمدها، هزینه‌ها، چک‌ها و وام‌ها؛ همراه با بودجه‌بندی، گزارش‌گیری و پیش‌بینی جریان نقدی.",
    englishDescription:
      "A personal finance app for tracking accounts, income, expenses, debts, cheques, and loans, with budgeting, cash flow forecasting, and financial scenario planning.",
    roleFa: "طراحی و توسعه اپلیکیشن و موتور محاسبات مالی",
    roleEn: "Application Development & Financial Calculation Engine",
    technologies: [
      "C#",
      ".NET 10",
      ".NET MAUI",
      "XAML",
      "SQLite",
      "Clean Architecture",
      "System.Text.Json",
      "OpenAI-compatible AI API",
      "xUnit",
    ],
    cover: "/projects/rock-finance/w2.png",
    media: [
      {
        src: "/projects/rock-finance/cover.png",
        alt: "نمای موبایل Rock Finance",
        kind: "cover",
        caption: "نمای موبایل اپلیکیشن مالی",
        frame: "mobile",
      },
      {
        src: "/projects/rock-finance/w2.png",
        alt: "داشبورد مالی Rock Finance",
        kind: "dashboard",
        caption: "داشبورد و نمای کلی وضعیت مالی",
        frame: "desktop",
      },
      {
        src: "/projects/rock-finance/emu4.png",
        alt: "یکی از صفحات موبایل Rock Finance",
        kind: "mobile",
        caption: "مدیریت اطلاعات مالی در موبایل",
        frame: "mobile",
      },
      {
        src: "/projects/rock-finance/emu7.png",
        alt: "نمای دیگری از اپلیکیشن Rock Finance",
        kind: "mobile",
        caption: "ابزارهای مدیریت مالی شخصی",
        frame: "mobile",
      },
      {
        src: "/projects/rock-finance/w7.png",
        alt: "نمای دسکتاپ Rock Finance",
        kind: "desktop",
        caption: "نمای گسترده اپلیکیشن مالی",
        frame: "desktop",
      },
    ],
    caseStudy: {
      overview:
        "Rock Finance برای مدیریت امور مالی شخصی طراحی شده است؛ از ثبت درآمد و هزینه گرفته تا پیگیری بدهی‌ها، چک‌ها، اقساط و اهداف مالی. علاوه بر ثبت تراکنش‌ها، برنامه وضعیت مالی ماه‌های آینده را بر اساس اطلاعات واردشده محاسبه می‌کند.",
      challenge:
        "دانستن میزان درآمد و هزینه‌های گذشته کافی نیست. اقساط وام، چک‌های سررسیدشده و پرداخت‌های آینده می‌توانند موجودی قابل استفاده را تغییر دهند. این پروژه بر ارائه تصویری روشن از وضعیت فعلی و تعهدات پیش رو تمرکز دارد.",
      solution:
        "Rock Finance تراکنش‌های انجام‌شده را از رویدادهای مالی برنامه‌ریزی‌شده جدا نگه می‌دارد. موتور محاسباتی برنامه با استفاده از اطلاعات ثبت‌شده، مانده حساب‌ها و جریان نقدی آینده را محاسبه می‌کند. همچنین می‌توان سناریوهای فرضی را تعریف و نتیجه آن‌ها را با برنامه پایه مقایسه کرد.",
      productExperience: {
        body:
          "کاربر می‌تواند حساب‌ها و تراکنش‌های خود را مدیریت کند، پرداخت‌های آینده را ثبت کند و گزارش‌های مالی را ببیند. بخش پیش‌بینی نیز وضعیت موجودی و تعهدات پیش رو را نمایش می‌دهد. دستیار هوشمند برای توضیح اطلاعات و آماده‌سازی سناریوهای فرضی در نظر گرفته شده است؛ محاسبات مالی را موتور داخلی برنامه انجام می‌دهد.",
        highlights: [
          "ثبت درآمد، هزینه و انتقال وجه",
          "مدیریت حساب‌های بانکی و نقدی",
          "ثبت دارایی‌های طلا و سکه",
          "برنامه‌ریزی بودجه و پرداخت‌های دوره‌ای",
          "پیگیری چک‌های دریافتی و پرداختی",
          "مدیریت بدهی‌ها و طلب‌ها",
          "بررسی اقساط و هزینه‌های وام",
          "تعریف و پیگیری اهداف مالی",
          "پیش‌بینی موجودی و جریان نقدی آینده",
          "هشدار درباره کمبود احتمالی موجودی",
          "ساخت و مقایسه سناریوهای مالی",
          "گزارش درآمد و هزینه در بازه‌های زمانی",
          "رابط فارسی و انگلیسی با تقویم شمسی",
          "حالت روشن و تاریک",
          "ورود و خروج اطلاعات با JSON و تهیه نسخه پشتیبان",
        ],
      },
      technology:
        "اپلیکیشن با C#، XAML و .NET MAUI توسعه یافته است. معماری چندلایه، منطق مالی را از رابط کاربری جدا می‌کند و داده‌ها با SQLite روی دستگاه نگهداری می‌شوند. ورود و خروج اطلاعات از طریق JSON انجام می‌شود. دستیار هوشمند از یک API سازگار با قالب OpenAI استفاده می‌کند، اما برای انجام محاسبات مالی به آن وابسته نیست. تست‌های خودکار نیز با xUnit نوشته شده‌اند.",
      dashboard:
        "داشبورد نمایی از حساب‌ها و وضعیت مالی ارائه می‌دهد. بخش گزارش‌ها برای بررسی درآمد و هزینه و بخش پیش‌بینی برای مرور مانده و تعهدات آینده استفاده می‌شود.",
      delivered:
        "اپلیکیشن مدیریت مالی شخصی با رابط فارسی و انگلیسی، ذخیره‌سازی محلی، گزارش‌گیری و پیش‌بینی جریان نقدی. قیمت طلا و سکه به‌صورت دستی مدیریت می‌شود و دستیار هوشمند نقش مکمل در تحلیل و ساخت سناریو دارد.",
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
