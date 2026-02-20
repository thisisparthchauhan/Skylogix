export interface TeamMember {
    id: string;
    name: string;
    role: string;
    department: string;
    bio: string;
    skills: string[];
    experience: string;
    linkedin: string;
    github?: string;
    avatar: string; // Initials
    avatarGradient: string;
    isLeadership: boolean;
    location: string;
}

export interface Department {
    id: string;
    label: string;
    count: number;
}

export const DepartmentsData: Department[] = [
    { id: "all", label: "All Members", count: 10 },
    { id: "leadership", label: "Leadership", count: 3 },
    { id: "engineering", label: "Engineering", count: 5 },
    { id: "design", label: "Design", count: 1 },
    { id: "business", label: "Business", count: 1 },
];

export const TeamMembersData: TeamMember[] = [
    // Leadership
    {
        id: "1",
        name: "Vaibhav Limbani",
        role: "Founder & CEO",
        department: "leadership",
        bio: "Visionary leader with a decade of experience in scaling tech startups. Passionate about AI-driven business transformation and building world-class engineering teams.",
        skills: ["Strategy", "Leadership", "AI Implementation", "Business Development"],
        experience: "12+ Years",
        linkedin: "#",
        avatar: "VL",
        avatarGradient: "from-blue-500 to-purple-600",
        isLeadership: true,
        location: "Vadodara, India"
    },
    {
        id: "2",
        name: "Pratik Parmar",
        role: "CTO",
        department: "leadership",
        bio: "Co - Founder, Software Developer",
        skills: ["System Architecture", "Cloud Native", "Cybersecurity", "React/Node"],
        experience: "10+ Years",
        linkedin: "#",
        github: "#",
        avatar: "PP",
        avatarGradient: "from-emerald-400 to-cyan-500",
        isLeadership: true,
        location: "Singapore"
    },
    {
        id: "3",
        name: "Parth Chauhan",
        role: "COO",
        department: "leadership",
        bio: "Technical architect obsessed with scalable systems and clean code. Previously led engineering at a Series B fintech startup",
        skills: ["SAAS Development", "Design Systems", "AGI", "Super Research"],
        experience: "6+ Years",
        linkedin: "#",
        avatar: "PC",
        avatarGradient: "from-pink-500 to-rose-500",
        isLeadership: true,
        location: "Ahmedabad, India"
    },

    // Core Team
    {
        id: "4",
        name: "Apurv Upadhyay",
        role: "Senior Full Stack Dev",
        department: "engineering",
        bio: "Full-stack wizard specializing in MERN stack and Next.js. Loves solving complex logical problems and optimizing database queries.",
        skills: ["Next.js", "TypeScript", "Node.js", "GraphQL"],
        experience: "6+ Years",
        linkedin: "#",
        github: "#",
        avatar: "AU",
        avatarGradient: "from-orange-400 to-red-500",
        isLeadership: false,
        location: "Mumbai, India"
    },
    {
        id: "5",
        name: "Mihir Gohel",
        role: "Mobile Developer",
        department: "engineering",
        bio: "Mobile enthusiast building buttery smooth cross-platform experiences. Expert in Flutter and React Native animations.",
        skills: ["Flutter", "React Native", "iOS/Android", "Dart"],
        experience: "5+ Years",
        linkedin: "#",
        github: "#",
        avatar: "MG",
        avatarGradient: "from-indigo-400 to-blue-600",
        isLeadership: false,
        location: "Tokyo, Japan"
    },
    {
        id: "6",
        name: "Kuldeep Meniya",
        role: "AI/ML Engineer",
        department: "engineering",
        bio: "Data scientist turned ML Engineer. Focuses on NLP, Large Language Models, and predictive analytics for enterprise solutions.",
        skills: ["Python", "TensorFlow", "NLP", "Computer Vision"],
        experience: "4+ Years",
        linkedin: "#",
        github: "#",
        avatar: "KM",
        avatarGradient: "from-teal-400 to-green-500",
        isLeadership: false,
        location: "Bengaluru, India"
    },
    {
        id: "7",
        name: "David Smith",
        role: "Backend Architect",
        department: "engineering",
        bio: "Backend specialist ensuring high availability and fault tolerance. Expert in microservices and distributed systems.",
        skills: ["Go", "Docker", "Kubernetes", "PostgreSQL"],
        experience: "7+ Years",
        linkedin: "#",
        github: "#",
        avatar: "DS",
        avatarGradient: "from-slate-500 to-gray-700",
        isLeadership: false,
        location: "London, UK"
    },
    {
        id: "8",
        name: "Nisarg Bhatt",
        role: "QA Engineer",
        department: "engineering",
        bio: "Detail-oriented QA ensuring zero-bug releases. Specialized in automated testing pipelines and performance testing.",
        skills: ["Selenium", "Cypress", "Jest", "CI/CD"],
        experience: "4+ Years",
        linkedin: "#",
        avatar: "NB",
        avatarGradient: "from-violet-500 to-purple-600",
        isLeadership: false,
        location: "Pune, India"
    },
    {
        id: "9",
        name: "Marco Rossi",
        role: "UI/UX Designer",
        department: "design",
        bio: "Creative designer with a knack for motion graphics and micro-interactions. Turns wireframes into delightful user experiences.",
        skills: ["Prototyping", "Motion Design", "Adobe XD", "Framer"],
        experience: "5+ Years",
        linkedin: "#",
        avatar: "MR",
        avatarGradient: "from-yellow-400 to-orange-500",
        isLeadership: false,
        location: "Milan, Italy"
    },
    {
        id: "10",
        name: "James Wilson",
        role: "Business Development",
        department: "business",
        bio: "Strategic thinker helping clients identify digital opportunities. focused on building long-term partnerships and value-driven growth.",
        skills: ["Sales Strategy", "Client Relations", "Market Analysis", "CRM"],
        experience: "9+ Years",
        linkedin: "#",
        avatar: "JW",
        avatarGradient: "from-cyan-500 to-blue-500",
        isLeadership: false,
        location: "New York, USA"
    }
];
