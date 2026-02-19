import {
    Smartphone, Server, Globe, Palette, Brain, Bot,
    Zap, Wrench, Briefcase, Headphones, GraduationCap
} from "lucide-react";

// Map of services to their Lottie animation URLs
// Mobile App: https://lottie.host/99b6bed0-096d-4530-848f-305101290333/ExampleMobile.json (Placeholder)
// Backend: https://lottie.host/ExampleBackend.json
// ...

export const serviceData = [
    {
        slug: "mobile-app-development",
        icon: Smartphone,
        lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json", // Example: Mobile App
        title: "Mobile App Development",
        tagline: "Native & Cross-Platform Excellence",
        description: "We craft high-performance mobile applications that deliver seamless user experiences across iOS and Android devices.",
        offerings: [
            "iOS App Development (Swift/SwiftUI)",
            "Android App Development (Kotlin/Jetpack Compose)",
            "Cross-Platform Apps (React Native/Flutter)",
            "Mobile UI/UX Design"
        ],
        process: [
            { title: "Strategy", desc: "Market research and feature planning" },
            { title: "Design", desc: "Wireframing and prototyping" },
            { title: "Development", desc: "Agile sprints and coding" },
            { title: "Deployment", desc: "App Store & Play Store launch" }
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Supabase"]
    },
    {
        slug: "backend-services",
        icon: Server,
        lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_dn5u8y8e.json", // Example: Server
        title: "Backend Services",
        tagline: "Robust & Scalable Infrastructure",
        description: "Powering your applications with secure, high-performance server-side architectures and APIs.",
        offerings: [
            "API Development & Integration",
            "Database Design & Management",
            "Cloud Infrastructure Setup",
            "Microservices Architecture"
        ],
        process: [
            { title: "Architecture", desc: "System design and database modeling" },
            { title: "Development", desc: "API coding and logic implementation" },
            { title: "Optimization", desc: "Performance tuning and caching" },
            { title: "Security", desc: "Audits and compliance checks" }
        ],
        technologies: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis", "AWS"]
    },
    {
        slug: "web-development",
        icon: Globe,
        lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_fcfjwiyb.json", // Example: Web code
        title: "Website Development",
        tagline: "Modern, Fast, & SEO-Ready",
        description: "Building next-generation websites using the latest frameworks for speed, security, and conversion.",
        offerings: [
            "Enterprise Web Applications",
            "E-commerce Platforms",
            "SaaS Product Development",
            "Progressive Web Apps (PWA)"
        ],
        process: [
            { title: "Planning", desc: "Sitemap and requirement gathering" },
            { title: "UI Design", desc: "Pixel-perfect interface creation" },
            { title: "Frontend", desc: "Responsive implementation" },
            { title: "Launch", desc: "SEO checks and performance testing" }
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"]
    },
    {
        slug: "ui-ux-design",
        icon: Palette,
        lottieUrl: "https://assets8.lottiefiles.com/packages/lf20_49rdyysj.json", // Example: Design
        title: "UI/UX Design",
        tagline: "Designing for Impact",
        description: "Creating intuitive and engaging user interfaces that drive user satisfaction and business goals.",
        offerings: [
            "User Research & Personas",
            "Wireframing & Prototyping",
            "Visual Design Systems",
            "Usability Testing"
        ],
        process: [
            { title: "Empathize", desc: "User interviews and research" },
            { title: "Define", desc: "Problem statements and user flows" },
            { title: "Ideate", desc: "Creative sketching and exploration" },
            { title: "Prototype", desc: "High-fidelity interactive mockups" }
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Illustrator"]
    },
    {
        slug: "ai-based-software",
        icon: Brain,
        lottieUrl: "https://assets3.lottiefiles.com/packages/lf20_mJV72W.json", // Example: AI Brain
        title: "AI-Based Software Development",
        tagline: "Intelligence Built-In",
        description: "Leveraging machine learning and artificial intelligence to build smarter, predictive, and automated software solutions.",
        offerings: [
            "Predictive Analytics Tools",
            "Natural Language Processing (NLP)",
            "Computer Vision Applications",
            "Recommendation Engines"
        ],
        process: [
            { title: "Data Collection", desc: "Gathering and cleaning datasets" },
            { title: "Model Training", desc: "Selecting and training algorithms" },
            { title: "Integration", desc: "Embedding AI into software" },
            { title: "Refinement", desc: "Continuous learning and updates" }
        ],
        technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Python"]
    },
    {
        slug: "ai-integrations",
        icon: Bot,
        lottieUrl: "https://assets10.lottiefiles.com/packages/lf20_yMpiqC.json", // Example: Bot/Integration
        title: "AI Integrations",
        tagline: "Empower Your Workflows",
        description: "Seamlessly integrating powerful AI models like GPT-4, Claude, and customized agents into your existing business processes.",
        offerings: [
            "Chatbot Development",
            "Automated Customer Support",
            "Workflow Automation",
            "Intelligent Document Processing"
        ],
        process: [
            { title: "Assessment", desc: "Identifying automation opportunities" },
            { title: "Selection", desc: "Choosing the right AI models" },
            { title: "Integration", desc: "API connection and configuration" },
            { title: "Monitoring", desc: "Performance tracking and optimization" }
        ],
        technologies: ["LangChain", "OpenAI", "Pinecone", "Zapier", "AutoGPT"]
    },
    {
        slug: "no-code-development",
        icon: Zap,
        lottieUrl: "https://assets6.lottiefiles.com/packages/lf20_qpwbvdyw.json", // Example: Blocks
        title: "No-Code Development",
        tagline: "Speed to Market",
        description: "Rapidly building functional internal tools and MVPs using modern no-code and low-code platforms.",
        offerings: [
            "MVP Development",
            "Internal Dashboards",
            "Automated Workflows",
            "CMS Implementation"
        ],
        process: [
            { title: "Scope", desc: "Defining core features" },
            { title: "Build", desc: "Visual development" },
            { title: "Connect", desc: "Database and API integrations" },
            { title: "Deploy", desc: "Rapid launch and iteration" }
        ],
        technologies: ["Bubble", "Webflow", "FlutterFlow", "Airtable", "Make"]
    },
    {
        slug: "application-maintenance",
        icon: Wrench,
        lottieUrl: "https://assets4.lottiefiles.com/packages/lf20_j1adxtyb.json", // Example: Maintenance
        title: "Application Maintenance",
        tagline: "Keep Your Software Running",
        description: "Ensuring your applications remain secure, up-to-date, and performant with our dedicated support services.",
        offerings: [
            "Bug Fixes & Troubleshooting",
            "Performance Optimization",
            "Security Updates & Patches",
            "Feature Enhancements"
        ],
        process: [
            { title: "Audit", desc: "Health check of current application" },
            { title: "Plan", desc: "Maintenance schedule creation" },
            { title: "Execute", desc: "Regular updates and fixes" },
            { title: "Report", desc: "Monthly performance reports" }
        ],
        technologies: ["Git", "Docker", "Sentry", "New Relic", "Jira"]
    },
    {
        slug: "it-consulting",
        icon: Briefcase,
        lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_tloqj0w3.json", // Example: Consulting/Chart
        title: "IT Consulting",
        tagline: "Strategic Technology Growth",
        description: "Expert guidance to align your technology strategy with your business objectives for maximum ROI.",
        offerings: [
            "Digital Transformation Strategy",
            "Technology Stack Selection",
            "IT Infrastructure Audit",
            "Security Compliance Consulting"
        ],
        process: [
            { title: "Analyze", desc: "Deep dive into current systems" },
            { title: "Strategize", desc: "Roadmap development" },
            { title: "Advise", desc: "Best practice recommendations" },
            { title: "Support", desc: "Implementation guidance" }
        ],
        technologies: ["Cloud Architecture", "Agile Methodology", "DevOps", "Cybersecurity"]
    },
    {
        slug: "tech-support",
        icon: Headphones,
        lottieUrl: "https://assets5.lottiefiles.com/packages/lf20_puciaact.json", // Example: Support
        title: "Tech Support",
        tagline: "Reliable & Responsive",
        description: "24/7 technical assistance to resolve issues quickly and keep your business operations running smoothly.",
        offerings: [
            "L1/L2/L3 Support",
            "Server Monitoring",
            "Incident Management",
            "User Training"
        ],
        process: [
            { title: "Ticket", desc: "Issue logging" },
            { title: "Triage", desc: "Priority assignment" },
            { title: "Resolve", desc: "Technical fix implementation" },
            { title: "Review", desc: "Resolution confirmation" }
        ],
        technologies: ["Zendesk", "Jira Service Desk", "Slack", "PagerDuty"]
    },
    {
        slug: "mentorship",
        icon: GraduationCap,
        lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_3rw3x1mo.json", // Example: Graduation/Education
        title: "Mentorship",
        tagline: "Grow Your Team",
        description: "Empowering developers and tech teams with specialized training and mentorship programs.",
        offerings: [
            "Code Reviews & Best Practices",
            "Career Guidance for Developers",
            "Team Upskilling Workshops",
            "Technology Leadership Coaching"
        ],
        process: [
            { title: "Assess", desc: "Skill gap analysis" },
            { title: "Match", desc: "Mentor assignment" },
            { title: "Train", desc: "1-on-1 sessions and workshops" },
            { title: "Evaluate", desc: "Progress tracking" }
        ],
        technologies: ["Code Quality", "Soft Skills", "Architecture", "Project Management"]
    }
];
