export interface CaseStudy {
    slug: string;
    title: string;
    industry: "FinTech" | "HealthTech" | "E-commerce" | "EdTech" | "SaaS" | "Logistics";
    region: "USA" | "UK" | "Europe" | "Middle East" | "Australia";
    type: string;
    challenge: string;
    solution: string;
    results: string[];
    overview: string;
    fullChallenge: string;
    fullSolution: string;
    techStack: string[];
    testimonial: {
        quote: string;
        author: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "fintech-neo-banking-app",
        title: "Next-Gen Neo Banking Platform",
        industry: "FinTech",
        region: "USA",
        type: "Mobile App Development",
        challenge: "Existing legacy systems caused 4s+ load times and high user churn.",
        solution: "Built a React Native app with Rust backend for sub-second transactions.",
        results: ["40% Faster Load Time", "2x User Retention", "99.99% Uptime"],
        overview: "A leading US-based financial services provider needed to modernize their mobile banking experience to compete with digital-first challengers.",
        fullChallenge: "The client was struggling with a legacy codebase that made implementing new features slow and prone to bugs. User feedback explicitly cited slow transaction speeds and a clunky UI as reasons for leaving.",
        fullSolution: "We re-architected the core transaction engine using Rust for performance and built a sleek, intuitive mobile interface using React Native. We implemented biometric authentication and real-time fraud detection.",
        techStack: ["React Native", "Rust", "AWS", "PostgreSQL", "Redis"],
        testimonial: {
            quote: "Skylogix transformed our mobile presence. The new app is blazing fast and our customers love it.",
            author: "CTO, FinTech Company, USA",
        },
    },
    {
        slug: "healthtech-telemedicine-portal",
        title: "Secure Telemedicine Portal",
        industry: "HealthTech",
        region: "UK",
        type: "Web Platform",
        challenge: "Patient data privacy compliance (GDPR) and complex appointment scheduling.",
        solution: "HIPAA/GDPR compliant WebRTC video platform with AI-driven scheduling.",
        results: ["30% Reduced Admin Time", "10k+ Monthly Consultations", "Zero Data Breaches"],
        overview: "A UK healthcare network required a secure, compliant platform to facilitate remote doctor-patient consultations during high-demand periods.",
        fullChallenge: "Ensuring video quality while maintaining strict data encryption standards was the primary hurdle. Additionally, manual scheduling was causing significant administrative overhead.",
        fullSolution: "We developed a custom WebRTC video solution with end-to-end encryption. An AI-powered scheduling assistant was integrated to optimize doctor availability and reduce no-shows.",
        techStack: ["Next.js", "WebRTC", "Node.js", "MongoDB", "Socket.io"],
        testimonial: {
            quote: "The reliability and security of this platform have allowed us to expand our services nationwide.",
            author: "Director of Operations, HealthTech Firm, UK",
        },
    },
    {
        slug: "ecommerce-ai-recommendation",
        title: "AI-Powered E-commerce Engine",
        industry: "E-commerce",
        region: "Europe",
        type: "AI Solution",
        challenge: "Low conversion rates due to generic product recommendations.",
        solution: "Implemented a machine learning recommendation engine offering personalized suggestions.",
        results: ["15% Revenue Uplift", "25% Higher Cart Value", "2M+ Products Indexed"],
        overview: "A major European fashion retailer wanted to increase cross-selling opportunities by personalizing the shopping experience for every visitor.",
        fullChallenge: "The client had vast amounts of user data but no effective way to leverage it. Off-the-shelf tools were not flexible enough for their specific inventory structure.",
        fullSolution: "We built a custom recommendation engine using Python and TensorFlow that analyzes user behavior in real-time to suggest relevant products, significantly boosting cart additions.",
        techStack: ["Python", "TensorFlow", "FastAPI", "React", "Elasticsearch"],
        testimonial: {
            quote: "The ROI on this project was immediate. Our customers are finding exactly what they want, faster.",
            author: "Head of Digital, E-commerce Retailer, Germany",
        },
    },
    {
        slug: "edtech-lms-platform",
        title: "Interactive Learning Management System",
        industry: "EdTech",
        region: "Australia",
        type: "Web & Mobile",
        challenge: "Low student engagement in remote learning environments.",
        solution: "Gamified LMS with real-time collaboration tools and progress tracking.",
        results: ["50% Engagement Increase", "500+ Schools Onboarded", "Top Rated App"],
        overview: "An Australian education provider needed to revamp their digital learning environment to keep students motivated and connected.",
        fullChallenge: "Students were finding the existing platform static and boring. The lack of interactive features led to high drop-off rates in course completion.",
        fullSolution: "We introduced gamification elements like badges and leaderboards, along with real-time chat and collaborative whiteboards. The UI was redesigned to be vibrant and youth-friendly.",
        techStack: ["Flutter", "Firebase", "Vue.js", "Node.js", "GCP"],
        testimonial: {
            quote: "Engagement scores skyrocketed in the first month. It's learning reimagined.",
            author: "Founder, EdTech Startup, Australia",
        },
    },
    {
        slug: "saas-workflow-automation",
        title: "Enterprise Workflow Automation",
        industry: "SaaS",
        region: "USA",
        type: "SaaS Product",
        challenge: "Manual data entry across disconnected systems wasting 1000s of hours.",
        solution: "Unified integration hub connecting CRM, ERP, and Marketing tools.",
        results: ["$200K Annual Savings", "100+ Integrations", "Auto-Scaling Architecture"],
        overview: "A B2B SaaS company wanted to build a product that solves the fragmentation problem for enterprise tools.",
        fullChallenge: "Building a system that could reliably handle APIs from hundreds of different services with varying rate limits and data structures.",
        fullSolution: "We created a robust microservices architecture using Go for high concurrency. A visual workflow builder allows non-technical users to create complex automations.",
        techStack: ["Go", "React Flow", "Docker", "Kubernetes", "Kafka"],
        testimonial: {
            quote: "This platform has become the backbone of our clients' operations. Rock solid engineering.",
            author: "VP of Engineering, SaaS Enterprise, USA",
        },
    },
    {
        slug: "logistics-fleet-management",
        title: "IoT Fleet Management System",
        industry: "Logistics",
        region: "Middle East",
        type: "IoT & Web",
        challenge: "Inefficient route planning and fuel theft issues.",
        solution: "Real-time IoT tracking dashboard with AI route optimization.",
        results: ["18% Fuel Savings", "30% Delivery Speedup", "Real-time Alerts"],
        overview: "A logistics giant in the Middle East needed better visibility and control over their massive fleet of delivery trucks.",
        fullChallenge: "Tracking thousands of vehicles in real-time and analyzing gigabytes of sensor data to detect anomalies like fuel theft or unauthorized stops.",
        fullSolution: "We deployed IoT sensors on trucks feeding data to a central dashboard. AI algorithms optimize routes based on traffic and fuel consumption patterns.",
        techStack: ["AWS IoT", "Angular", "Python", "DynamoDB", "Serverless"],
        testimonial: {
            quote: "The visibility this system gives us is unprecedented. It paid for itself in fuel savings alone.",
            author: "COO, Logistics Firm, UAE",
        },
    },
    {
        slug: "fintech-crypto-exchange",
        title: "High-Frequency Crypto Exchange",
        industry: "FinTech",
        region: "Europe",
        type: "Web Platform",
        challenge: "Scalability issues during market volatility causing crashes.",
        solution: "Microservices architecture designed for extreme concurrency.",
        results: ["100k TPS Capacity", "Zero Downtime", "Bank-Grade Security"],
        overview: "A European crypto exchange needed to upgrade their matching engine to handle massive spikes in trading volume.",
        fullChallenge: "The previous monolithic architecture would freeze during high volatility. Security was also a paramount concern given the nature of the assets.",
        fullSolution: "We rewrote the matching engine in C++ for raw speed and wrapped it in a scalable Go microservices layer. Multi-layer security protocols were implemented.",
        techStack: ["Go", "C++", "gRPC", "Redis", "Cloudflare"],
        testimonial: {
            quote: "We threw our biggest traffic spike ever at it, and it didn't even blink.",
            author: "CEO, Crypto Exchange, Switzerland",
        },
    },
    {
        slug: "ecommerce-headless-cms",
        title: "Headless Commerce Migration",
        industry: "E-commerce",
        region: "USA",
        type: "Web Development",
        challenge: "Slow site speed hurting SEO and mobile conversions.",
        solution: "Migrated to a headless setup with Next.js and Shopify Plus.",
        results: ["98/100 Core Web Vitals", "45% Mobile Conversion Up", "Instant Page Loads"],
        overview: "A fast-growing D2C brand needed to break free from the constraints of their monolithic e-commerce platform.",
        fullChallenge: "The frontend was tightly coupled with the backend, making design changes risky and slow. Page load times were unacceptable on 4G networks.",
        fullSolution: "We decoupled the frontend using Next.js and Vercel for edge caching, while keeping Shopify Plus as the robust backend engine.",
        techStack: ["Next.js", "Shopify Plus", "GraphQL", "Vercel", "Tailwind CSS"],
        testimonial: {
            quote: "Our site feels like a native app now. The conversion jump on mobile was incredible.",
            author: "Marketing Director, D2C Brand, NYC",
        },
    },
];
