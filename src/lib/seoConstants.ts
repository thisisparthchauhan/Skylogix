export interface SiteConfig {
    name: string;
    url: string;
    description: string;
    tagline: string;
    email: string;
    phone: string;
    linkedin: string;
    twitter: string;
    address: {
        city: string;
        state: string;
        country: string;
        countryCode: string;
    };
    foundedYear: number;
    teamSize: number;
}

export const SITE_CONFIG: SiteConfig = {
    name: "Skylogix Technologies",
    url: "https://skylogix.vercel.app",
    description: "Skylogix Technologies is a global IT services and consulting firm specializing in secure, scalable, and AI-driven digital solutions for businesses worldwide.",
    tagline: "Global IT Services & Consulting",
    email: "contact@skylogix.tech",
    phone: "+91-XXXXXXXXXX", // Placeholder as requested
    linkedin: "https://linkedin.com/company/skylogix-technologies",
    twitter: "@skylogixtech",
    address: {
        city: "Ahmedabad",
        state: "Gujarat",
        country: "India",
        countryCode: "IN"
    },
    foundedYear: 2021,
    teamSize: 10
};

export const DEFAULT_OG_IMAGE = "/og-image.png";

export interface PageSEO {
    title: string;
    description: string;
    keywords?: string[];
    canonical: string;
}

export const PAGE_METADATA: Record<string, PageSEO> = {
    home: {
        title: "Global IT Services & AI Solutions Partner | Skylogix Technologies",
        description: "Skylogix delivers scalable software, custom mobile apps, and AI solutions for global enterprises. We turn complex business challenges into digital success stories.",
        keywords: ["custom software development", "AI solutions company", "global IT partner", "digital transformation agency", "enterprise software solutions"],
        canonical: "/"
    },
    about: {
        title: "About Skylogix | Global Innovation & Engineering Excellence",
        description: "Meet Skylogix Technologies – a team of passionate technologists building the future. Learn about our remote-first culture, global reach, and commitment to quality code.",
        keywords: ["about skylogix", "IT company india", "remote software team", "skilled developers", "tech innovation culture"],
        canonical: "/about"
    },
    services: {
        title: "Comprehensive IT & AI Development Services | Skylogix",
        description: "From Mobile Apps to AI Integrations, explore our full range of engineering services designed to scale your business and drive digital transformation.",
        keywords: ["IT services list", "full stack development", "mobile app services", "cloud infrastructure", "AI implementation"],
        canonical: "/services"
    },
    caseStudies: {
        title: "Success Stories & Digital Transformation Case Studies | Skylogix",
        description: "See how we've helped businesses across 12+ countries achieve their goals through custom software development, AI implementation, and strategic IT consulting.",
        keywords: ["software case studies", "client success stories", "digital transformation results", "fintech case study", "healthcare IT solutions"],
        canonical: "/case-studies"
    },
    contact: {
        title: "Contact Skylogix | Start Your Digital Transformation",
        description: "Ready to build something great? Contact Skylogix Technologies today for a consultation. Let's discuss your project, timeline, and goals for success.",
        keywords: ["contact software company", "hire developers", "project consultation", "IT support contact", "get a quote"],
        canonical: "/contact"
    },
    bookACall: {
        title: "Schedule a Free Consultation | Skylogix Technologies",
        description: "Book a 30-minute discovery call with our experts. We'll discuss your technical needs, project scope, and how we can help you succeed in the digital landscape.",
        keywords: ["book tech consultation", "free software discovery call", "schedule IT meeting", "talk to CTO"],
        canonical: "/book-a-call"
    },
    estimate: {
        title: "Project Cost Estimator | Calculate Your App Development Cost",
        description: "Get a quick, transparent estimate for your software project. Use our AI-powered calculator to plan your budget for mobile, web, or AI development.",
        keywords: ["app cost calculator", "software development estimate", "project budget planner", "development cost estimators"],
        canonical: "/estimator"
    },
    team: {
        title: "Meet Our Team | Expert Engineers & Designers | Skylogix",
        description: "The people behind the code. Meet the diverse, global team of engineers, designers, and strategists driving innovation at Skylogix Technologies.",
        keywords: ["software engineering team", "hire dedicated developers", "Meet the experts", "tech leadership", "skilled IT workforce"],
        canonical: "/team"
    },
    blog: {
        title: "Tech Insights & Industry Trends | Skylogix Blog",
        description: "Stay ahead with the latest insights on AI, software architecture, mobile development trends, and digital transformation strategies from our experts.",
        keywords: ["tech blog", "software development trends", "AI insights", "industry news", "developer tutorials"],
        canonical: "/blog"
    },
    testimonials: {
        title: "Client Reviews & Testimonials | Trusted by Global Businesses",
        description: "Don't just take our word for it. Read what clients from the US, UK, and beyond say about working with the expert team at Skylogix Technologies.",
        keywords: ["client reviews", "clutch reviews", "customer testimonials", "trusted IT partner"],
        canonical: "/testimonials"
    },
    privacyPolicy: {
        title: "Privacy Policy | Skylogix Technologies",
        description: "Read about how we collect, use, and protect your data. Your privacy is important to us.",
        canonical: "/privacy-policy"
    },
    terms: {
        title: "Terms and Conditions | Skylogix Technologies",
        description: "The terms and conditions for using Skylogix Technologies services and website.",
        canonical: "/terms"
    },
    cookiePolicy: {
        title: "Cookie Policy | Skylogix Technologies",
        description: "Information about how we use cookies to improve your experience on our website.",
        canonical: "/cookie-policy"
    },
    nda: {
        title: "Non-Disclosure Agreement (NDA) | Skylogix Technologies",
        description: "Our commitment to confidentiality and protecting your intellectual property.",
        canonical: "/nda"
    }
};

export interface ServiceSEO {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    canonical: string;
}

export const SERVICES_SEO: ServiceSEO[] = [
    {
        slug: "mobile-app-development",
        title: "Mobile App Development",
        metaTitle: "Custom Mobile App Development Services | iOS & Android",
        metaDescription: "Build high-performance, engaging mobile apps for iOS and Android. Our expert developers use React Native and Flutter to deliver seamless user experiences.",
        primaryKeyword: "mobile app development services",
        secondaryKeywords: ["iOS app development", "Android app development", "flutter development", "react native services"],
        canonical: "/services/mobile-app-development"
    },
    {
        slug: "backend-services",
        title: "Backend Services",
        metaTitle: "Scalable Backend Development & Cloud Infrastructure",
        metaDescription: "Power your applications with robust, secure backend solutions. We specialize in Node.js, Python, and cloud architecture on AWS and Azure.",
        primaryKeyword: "backend development services",
        secondaryKeywords: ["API development", "cloud infrastructure", "database management", "serverless architecture"],
        canonical: "/services/backend-services"
    },
    {
        slug: "website-development",
        title: "Website Development",
        metaTitle: "Modern Web Development & Enterprise Web Apps",
        metaDescription: "Create stunning, responsive websites and web applications. Utilizing Next.js and React to build fast, SEO-friendly, and scalable digital platforms.",
        primaryKeyword: "web development services",
        secondaryKeywords: ["Next.js development", "enterprise web apps", "frontend development", "responsive web design"],
        canonical: "/services/website-development"
    },
    {
        slug: "ui-ux-design",
        title: "UI/UX Design",
        metaTitle: "Creative UI/UX Design | User-Centric Digital Experiences",
        metaDescription: "Transform ideas into intuitive designs. Our UI/UX experts craft engaging interfaces and user journeys that drive conversion and retention.",
        primaryKeyword: "UI/UX design services",
        secondaryKeywords: ["user interface design", "user experience strategy", "prototyping", "figma design"],
        canonical: "/services/ui-ux-design"
    },
    {
        slug: "ai-software-development",
        title: "AI Software Development",
        metaTitle: "Custom AI Software Development & Machine Learning Solutions",
        metaDescription: "Leverage the power of Artificial Intelligence. We build custom AI models, predictive analytics tools, and intelligent automation systems for business growth.",
        primaryKeyword: "AI software development",
        secondaryKeywords: ["machine learning solutions", "AI engineering", "custom AI models", "predictive analytics"],
        canonical: "/services/ai-software-development"
    },
    {
        slug: "ai-integrations",
        title: "AI Integrations",
        metaTitle: "Seamless AI Integration Services | ChatGPT & LLMs",
        metaDescription: "Integrate advanced AI capabilities into your existing software. Expert implementation of OpenAI APIs, LLMs, and intelligent chatbots to enhance efficiency.",
        primaryKeyword: "AI integration services",
        secondaryKeywords: ["ChatGPT integration", "LLM implementation", "AI chatbots", "OpenAI API"],
        canonical: "/services/ai-integrations"
    },
    {
        slug: "no-code-development",
        title: "No-Code Development",
        metaTitle: "Rapid No-Code Development Services | Bubble & Webflow",
        metaDescription: "Launch your MVP fast with low-code/no-code solutions. We build scalable applications using Bubble, Webflow, and other modern rapid development platforms.",
        primaryKeyword: "no-code development",
        secondaryKeywords: ["Bubble development", "Webflow experts", "MVP development", "rapid prototyping"],
        canonical: "/services/no-code-development"
    },
    {
        slug: "app-maintenance",
        title: "App Maintenance",
        metaTitle: "Reliable App Maintenance & Support Services",
        metaDescription: "Keep your applications running smoothly. Comprehensive maintenance packages including bug fixes, security updates, and performance optimization.",
        primaryKeyword: "app maintenance services",
        secondaryKeywords: ["software support", "security updates", "performance monitoring", "bug fixing"],
        canonical: "/services/app-maintenance"
    },
    {
        slug: "it-consulting",
        title: "IT Consulting",
        metaTitle: "Strategic IT Consulting & Digital Advisory",
        metaDescription: "Navigate the digital landscape with confidence. Our IT consultants provide strategic guidance on technology stack, digital transformation, and software architecture.",
        primaryKeyword: "IT consulting services",
        secondaryKeywords: ["technology advisory", "digital transformation strategy", "software architecture consulting", "tech roadmap"],
        canonical: "/services/it-consulting"
    },
    {
        slug: "tech-support",
        title: "Tech Support",
        metaTitle: "24/7 Technical Support & IT Operations",
        metaDescription: "Ensure business continuity with our dedicated technical support. 24/7 monitoring, troubleshooting, and IT operations management for global enterprises.",
        primaryKeyword: "technical support services",
        secondaryKeywords: ["IT operations", "24/7 support", "helpdesk services", "infrastructure monitoring"],
        canonical: "/services/tech-support"
    },
    {
        slug: "mentorship",
        title: "Mentorship",
        metaTitle: "Developer Mentorship & Corporate Training Programs",
        metaDescription: "Upskill your team with our expert mentorship programs. Corporate training in React, Node.js, AI, and modern software engineering best practices.",
        primaryKeyword: "developer mentorship",
        secondaryKeywords: ["corporate IT training", "coding mentorship", "software engineering training", "tech team upskilling"],
        canonical: "/services/mentorship"
    }
];

export const TARGET_MARKETS = [
    "United States",
    "United Kingdom",
    "Germany",
    "France",
    "Australia",
    "UAE",
    "Saudi Arabia",
    "Canada",
    "Netherlands",
    "Singapore"
];
