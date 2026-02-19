export interface ServiceOption {
    id: string;
    label: string;
    icon: string;
    basePrice: number;
}

export interface PlatformOption {
    id: string;
    label: string;
    icon: string;
    priceMultiplier: number;
}

export interface FeatureOption {
    id: string;
    label: string;
    icon: string;
    addOnCost: number;
}

export interface TimelineOption {
    id: string;
    label: string;
    icon: string;
    multiplier: number;
    description: string;
}

export interface EstimateResult {
    low: number;
    high: number;
    budgetRange: string;
}

// 1. Services Data
export const ServicesData: ServiceOption[] = [
    { id: "mobile-app", label: "Mobile App", icon: "📱", basePrice: 8000 },
    { id: "web-app", label: "Website/Web App", icon: "💻", basePrice: 5000 },
    { id: "backend-api", label: "Backend/API", icon: "⚙️", basePrice: 6000 },
    { id: "ai-software", label: "AI Software", icon: "🤖", basePrice: 15000 },
    { id: "ui-ux", label: "UI/UX Design", icon: "🎨", basePrice: 3000 },
    { id: "no-code", label: "No-Code Solution", icon: "🚀", basePrice: 2000 },
    { id: "consulting", label: "IT Consulting", icon: "💡", basePrice: 2500 },
    { id: "maintenance", label: "App Maintenance", icon: "🔧", basePrice: 1500 },
];

// 2. Platforms Data (Keyed by Service ID)
export const PlatformsData: Record<string, PlatformOption[]> = {
    "mobile-app": [
        { id: "ios", label: "iOS (Swift)", icon: "🍎", priceMultiplier: 1.2 },
        { id: "android", label: "Android (Kotlin)", icon: "🤖", priceMultiplier: 1.1 },
        { id: "cross-platform", label: "Cross-Platform (Flutter/RN)", icon: "🔄", priceMultiplier: 1.0 },
        { id: "hybrid", label: "Hybrid / PWA", icon: "🌐", priceMultiplier: 0.9 },
    ],
    "web-app": [
        { id: "nextjs", label: "Next.js / React (Custom)", icon: "⚛️", priceMultiplier: 1.1 },
        { id: "wordpress", label: "WordPress / CMS", icon: "📝", priceMultiplier: 0.8 },
        { id: "full-stack", label: "Full Stack (MERN/T3)", icon: "📚", priceMultiplier: 1.3 },
        { id: "simple-static", label: "Static Site", icon: "⚡", priceMultiplier: 0.7 },
    ],
    "backend-api": [
        { id: "nodejs", label: "Node.js / Express", icon: "🟢", priceMultiplier: 1.0 },
        { id: "python", label: "Python / Django / FastAPI", icon: "🐍", priceMultiplier: 1.1 },
        { id: "go", label: "Go / Microservices", icon: "🐹", priceMultiplier: 1.3 },
        { id: "serverless", label: "Serverless (AWS/Firebase)", icon: "☁️", priceMultiplier: 0.9 },
    ],
    "ai-software": [
        { id: "llm-integration", label: "LLM Integration (GPT/Claude)", icon: "🧠", priceMultiplier: 1.2 },
        { id: "custom-model", label: "Custom Model Training", icon: "📊", priceMultiplier: 1.5 },
        { id: "data-analysis", label: "Data Analysis / ML", icon: "📈", priceMultiplier: 1.1 },
        { id: "chatbot", label: "AI Chatbot", icon: "💬", priceMultiplier: 0.9 },
    ],
    "ui-ux": [
        { id: "figma", label: "Figma High-Fidelity", icon: "🎨", priceMultiplier: 1.0 },
        { id: "prototype", label: "Interactive Prototype", icon: "👆", priceMultiplier: 1.2 },
        { id: "wireframe", label: "Wireframing & Flow", icon: "📐", priceMultiplier: 0.7 },
        { id: "audit", label: "UX Audit", icon: "🔍", priceMultiplier: 0.8 },
    ],
    "no-code": [
        { id: "bubble", label: "Bubble.io", icon: "🔵", priceMultiplier: 1.1 },
        { id: "webflow", label: "Webflow", icon: "🌊", priceMultiplier: 1.0 },
        { id: "framer", label: "Framer", icon: "🖼️", priceMultiplier: 0.9 },
        { id: "shopify", label: "Shopify", icon: "🛍️", priceMultiplier: 1.0 },
    ],
    "consulting": [
        { id: "strategy", label: "Digital Strategy", icon: "♟️", priceMultiplier: 1.2 },
        { id: "tech-stack", label: "Tech Stack Review", icon: "🧱", priceMultiplier: 1.0 },
        { id: "hiring", label: "Hiring / Team Setup", icon: "👥", priceMultiplier: 1.1 },
        { id: "security", label: "Security Audit", icon: "🔒", priceMultiplier: 1.3 },
    ],
    "maintenance": [
        { id: "monthly", label: "Monthly Retainer", icon: "📅", priceMultiplier: 1.0 },
        { id: "quarterly", label: "Quarterly Review", icon: "🗓️", priceMultiplier: 0.9 },
        { id: "annual", label: "Annual Contract", icon: "📆", priceMultiplier: 0.8 },
        { id: "hourly", label: "Hourly / On-Demand", icon: "⏱️", priceMultiplier: 1.2 },
    ],
};

// 3. Features Data
export const FeaturesData: FeatureOption[] = [
    { id: "user-auth", label: "User Auth", icon: "🔐", addOnCost: 1500 },
    { id: "payment", label: "Payment Integration", icon: "💳", addOnCost: 2000 },
    { id: "admin", label: "Admin Dashboard", icon: "📊", addOnCost: 2500 },
    { id: "push-notif", label: "Push Notifications", icon: "🔔", addOnCost: 800 },
    { id: "chat", label: "In-App Chat", icon: "💬", addOnCost: 2200 },
    { id: "maps", label: "Maps/Geolocation", icon: "🗺️", addOnCost: 1200 },
    { id: "analytics", label: "Analytics", icon: "📈", addOnCost: 1800 },
    { id: "ai-ml", label: "AI/ML Features", icon: "🤖", addOnCost: 4000 },
    { id: "multi-lang", label: "Multi-language", icon: "🌐", addOnCost: 1000 },
    { id: "social-login", label: "Social Login", icon: "👤", addOnCost: 700 },
    { id: "search", label: "Advanced Search", icon: "🔍", addOnCost: 1200 },
    { id: "subscription", label: "Subscription System", icon: "🔁", addOnCost: 2500 },
];

// 4. Timelines Data
export const TimelinesData: TimelineOption[] = [
    { id: "rush", label: "Rush (< 4 weeks)", icon: "⚡", multiplier: 1.4, description: "Prioritized development for tight deadlines." },
    { id: "standard", label: "Standard (4-8 weeks)", icon: "📅", multiplier: 1.0, description: "Balanced pace for optimal quality." },
    { id: "relaxed", label: "Relaxed (8-16 weeks)", icon: "🧘", multiplier: 0.85, description: "Cost-effective option for flexible timelines." },
    { id: "flexible", label: "Flexible (16+ weeks)", icon: "⏳", multiplier: 0.75, description: "Lowest cost for long-term projects." },
];

// 5. Calculation Logic
export function calculateEstimate(
    serviceId: string,
    platformId: string,
    featureIds: string[],
    timelineId: string
): EstimateResult {
    const service = ServicesData.find((s) => s.id === serviceId);
    const platforms = PlatformsData[serviceId] || [];
    const platform = platforms.find((p) => p.id === platformId);
    const timeline = TimelinesData.find((t) => t.id === timelineId);

    // Default fallback if IDs are invalid
    if (!service) return { low: 0, high: 0, budgetRange: "$0" };

    const basePrice = service.basePrice;
    const platformMultiplier = platform ? platform.priceMultiplier : 1.0;
    const timelineMultiplier = timeline ? timeline.multiplier : 1.0;

    // Calculate Feature Costs
    const featureCost = featureIds.reduce((total, fId) => {
        const feature = FeaturesData.find((f) => f.id === fId);
        return total + (feature ? feature.addOnCost : 0);
    }, 0);

    // Core Formula
    // (Base Price * Platform Multiplier + Feature Costs) * Timeline Multiplier
    const estimatedTotal = (basePrice * platformMultiplier + featureCost) * timelineMultiplier;

    // Range +/- 
    const low = Math.round(estimatedTotal * 0.85 / 100) * 100; // Round to nearest 100
    const high = Math.round(estimatedTotal * 1.2 / 100) * 100;

    return {
        low,
        high,
        budgetRange: getBudgetLabel(low, high),
    };
}

// 6. Budget Label Helper
export function getBudgetLabel(low: number, high: number): string {
    if (low === 0 && high === 0) return "$0";

    const format = (n: number) => {
        return n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${n}`;
    };

    return `${format(low)} - ${format(high)}`;
}
