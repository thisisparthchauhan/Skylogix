export interface Testimonial {
    id: string;
    quote: string;
    role: string;
    company: string;
    region: string;
    service: string;
    rating: number;
    avatar: string;
    avatarColor: string;
}

export const testimonials: Testimonial[] = [
    {
        id: "t1",
        quote: "They delivered our fintech mobile app 2 weeks ahead of schedule. The code quality was exceptional, and their adherence to strict NDA and security protocols gave us complete peace of mind.",
        role: "CTO",
        company: "FinTech Startup",
        region: "USA",
        service: "Mobile App Development",
        rating: 5,
        avatar: "JD",
        avatarColor: "#4F8EF7",
    },
    {
        id: "t2",
        quote: "Integration of AI diagnostic tools into our platform was seamless. The team's communication was transparent throughout, and the AI model accuracy exceeded our initial benchmarks.",
        role: "Product Manager",
        company: "HealthTech Company",
        region: "UK",
        service: "AI Software Development",
        rating: 5,
        avatar: "AS",
        avatarColor: "#10B981",
    },
    {
        id: "t3",
        quote: "Our new website is not just beautiful; it's a conversion machine. Since the redesign, our bounce rate dropped by 40% and online sales have increased significantly.",
        role: "CEO",
        company: "E-Commerce Brand",
        region: "Australia",
        service: "Website Development",
        rating: 5,
        avatar: "MK",
        avatarColor: "#F59E0B",
    },
    {
        id: "t4",
        quote: "We needed a scalable backend to handle our rapid user growth. Skylogix architected a robust microservices solution that has handled our 10x traffic spike without a hitch.",
        role: "Co-Founder",
        company: "SaaS Platform",
        region: "Germany",
        service: "Backend Services",
        rating: 5,
        avatar: "DR",
        avatarColor: "#EC4899",
    },
    {
        id: "t5",
        quote: "The cross-platform app performance is indistinguishable from native. They met every single milestone on our aggressive roadmap, keeping our launch on track.",
        role: "Head of Engineering",
        company: "Logistics Company",
        region: "USA",
        service: "Mobile App Development",
        rating: 5,
        avatar: "PL",
        avatarColor: "#8B5CF6",
    },
    {
        id: "t6",
        quote: "Their design team has a true eye for premium aesthetics. User feedback on our new interface has been overwhelmingly positive, citing it as 'intuitive' and 'modern'.",
        role: "Director",
        company: "Real Estate Platform",
        region: "UAE",
        service: "UI/UX Design",
        rating: 5,
        avatar: "FA",
        avatarColor: "#06B6D4",
    },
    {
        id: "t7",
        quote: "Implementing the ChatGPT API transformed our student support system. Response times are instant now, and the context-aware answers are incredibly helpful for our users.",
        role: "CTO",
        company: "EdTech Startup",
        region: "Canada",
        service: "AI Integrations",
        rating: 5,
        avatar: "RB",
        avatarColor: "#EF4444",
    },
    {
        id: "t8",
        quote: "They built our MVP in record time using no-code tools, allowing us to validate our market fit early. A cost-effective solution with zero compromise on functionality.",
        role: "VP Engineering",
        company: "HR Tech Company",
        region: "Netherlands",
        service: "No-Code Development",
        rating: 5,
        avatar: "LK",
        avatarColor: "#14B8A6",
    },
    {
        id: "t9",
        quote: "Their guidance on our tech stack selection saved us months of potential refactoring. A truly strategic partner who understands both technology and business goals.",
        role: "Founder",
        company: "Legal Tech Startup",
        region: "UK",
        service: "IT Consulting",
        rating: 5,
        avatar: "SJ",
        avatarColor: "#6366F1",
    },
];
