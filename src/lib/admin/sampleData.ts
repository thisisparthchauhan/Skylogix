export const sessions = [
    { id: "1", user: "John Doe", email: "john@example.com", device: "Desktop", browser: "Chrome", location: "New York, USA", ip: "192.168.1.1", started: "10 mins ago", duration: "10m 12s", status: "Active" },
    { id: "2", user: "Jane Smith", email: "jane@example.com", device: "Mobile", browser: "Safari", location: "London, UK", ip: "192.168.1.4", started: "1 hour ago", duration: "45m 00s", status: "Ended" },
    { id: "3", user: "Ahmed Ali", email: "ahmed@example.com", device: "Desktop", browser: "Firefox", location: "Dubai, UAE", ip: "192.168.1.10", started: "3 hours ago", duration: "12m 30s", status: "Expired" },
    { id: "4", user: "Sarah Connor", email: "sarah@example.com", device: "Tablet", browser: "Chrome", location: "Sydney, Australia", ip: "192.168.1.15", started: "5 mins ago", duration: "5m 00s", status: "Active" },
    { id: "5", user: "Michael Chen", email: "michael@example.com", device: "Mobile", browser: "Chrome", location: "Toronto, Canada", ip: "192.168.1.20", started: "Yesterday", duration: "1h 20m", status: "Ended" },
];

export const consultations = [
    { id: "1", clientName: "Acme Corp", email: "contact@acme.com", phone: "+1 555-0100", date: "Oct 24, 2024", duration: "30 min", service: "App Development", budget: "$15K - $30K", status: "Scheduled" },
    { id: "2", clientName: "TechNova", email: "hello@technova.io", phone: "+44 20 7946", date: "Oct 22, 2024", duration: "45 min", service: "IT Consulting", budget: "$5K - $15K", status: "Completed" },
    { id: "3", clientName: "GlobalTrade", email: "info@globaltrade.net", phone: "+971 50 123", date: "Oct 20, 2024", duration: "30 min", service: "Cloud Migration", budget: "$30K+", status: "Cancelled" },
    { id: "4", clientName: "Startup Inc", email: "founder@startup.co", phone: "+1 555-0199", date: "Oct 19, 2024", duration: "15 min", service: "MVP Development", budget: "Under $5K", status: "No-Show" },
    { id: "5", clientName: "EduPlatform", email: "admin@edu.org", phone: "+61 2 9876", date: "Oct 18, 2024", duration: "60 min", service: "Dedicated Team", budget: "$50K+", status: "Completed" },
];

export const projectRequests = [
    { id: "1", client: "David Miller", company: "FinanceFlow", service: "Fintech App", budget: "$50K+", timeline: "Q1 2025", source: "Referral", stage: "New", value: "$65,000", date: "Oct 25, 2024" },
    { id: "2", client: "Emma Wilson", company: "HealthTrack", service: "Healthcare Portal", budget: "$30K - $50K", timeline: "ASAP", source: "Google Search", stage: "Contacted", value: "$40,000", date: "Oct 24, 2024" },
    { id: "3", client: "Liam Brown", company: "E-Shop Plus", service: "E-Commerce", budget: "$15K - $30K", timeline: "Next Month", source: "Estimator", stage: "Discussing", value: "$22,500", date: "Oct 22, 2024" },
    { id: "4", client: "Olivia Jones", company: "LogiChain", service: "Logistics SaaS", budget: "$50K+", timeline: "Flexible", source: "Contact Form", stage: "Proposal", value: "$85,000", date: "Oct 20, 2024" },
    { id: "5", client: "Noah Davis", company: "FoodieApp", service: "Mobile App", budget: "$5K - $15K", timeline: "3 Months", source: "Social Media", stage: "Won/Lost", value: "$12,000", date: "Oct 15, 2024" },
];

export const estimatorLeads = [
    { id: "1", name: "Alice Green", email: "alice@startup.io", service: "Mobile App Development", platform: "iOS + Android", featuresCount: 6, timeline: "Standard (4-8 weeks)", budgetRange: "$15K - $30K", date: "Oct 25, 2024", status: "Not Contacted" },
    { id: "2", name: "Bob White", email: "bob@corporate.com", service: "Web Application", platform: "React + Node.js", featuresCount: 12, timeline: "Expedited (2-4 weeks)", budgetRange: "$50K+", date: "Oct 24, 2024", status: "Contacted" },
    { id: "3", name: "Charlie Black", email: "charlie@localbiz.net", service: "CMS Website", platform: "WordPress", featuresCount: 3, timeline: "Standard (4-8 weeks)", budgetRange: "Under $5K", date: "Oct 23, 2024", status: "Contacted" },
    { id: "4", name: "Diana Prince", email: "diana@agency.co", service: "Custom SaaS", platform: "Next.js + Supabase", featuresCount: 8, timeline: "Flexible", budgetRange: "$30K - $50K", date: "Oct 21, 2024", status: "Not Contacted" },
    { id: "5", name: "Evan Wright", email: "evan@ecommerce.org", service: "E-Commerce Store", platform: "Shopify Advanced", featuresCount: 5, timeline: "Standard (4-8 weeks)", budgetRange: "$5K - $15K", date: "Oct 20, 2024", status: "Contacted" },
];

export const newsletterSubs = [
    { id: "1", email: "user1@example.com", name: "Mark Taylor", source: "Footer Form", date: "Oct 25, 2024", lastSent: "Oct 20, 2024", status: "Active" },
    { id: "2", email: "user2@domain.com", name: "Lisa Wong", source: "Blog Post", date: "Oct 24, 2024", lastSent: "Oct 20, 2024", status: "Active" },
    { id: "3", email: "user3@test.org", name: "James Bond", source: "Lead Magnet", date: "Oct 22, 2024", lastSent: "Never", status: "Unsubscribed" },
    { id: "4", email: "user4@company.net", name: "Anna Smith", source: "Estimator", date: "Oct 21, 2024", lastSent: "Oct 20, 2024", status: "Active" },
    { id: "5", email: "user5@startup.io", name: "Tom Hardy", source: "Contact Form", date: "Oct 19, 2024", lastSent: "Oct 20, 2024", status: "Bounced" },
];

export const revenueEntries = [
    { id: "1", source: "TechNova App", category: "Project Income", amount: 15000, date: "Oct 24, 2024", client: "TechNova", invoice: "INV-2024-045", status: "Received" },
    { id: "2", source: "GlobalTrade Consulting", category: "IT Consulting", amount: 2500, date: "Oct 22, 2024", client: "GlobalTrade", invoice: "INV-2024-044", status: "Received" },
    { id: "3", source: "EduPlatform Support", category: "Maintenance Retainer", amount: 1200, date: "Oct 20, 2024", client: "EduPlatform", invoice: "INV-2024-043", status: "Pending" },
    { id: "4", source: "Startup Inc UI/UX", category: "Design Services", amount: 4500, date: "Oct 15, 2024", client: "Startup Inc", invoice: "INV-2024-042", status: "Overdue" },
    { id: "5", source: "LogiChain Backend", category: "Project Income", amount: 25000, date: "Oct 10, 2024", client: "LogiChain", invoice: "INV-2024-041", status: "Received" },
];

export const expenseEntries = [
    { id: "1", category: "Salaries", description: "October Payroll", amount: 45000, date: "Oct 31, 2024", paidTo: "Employees", receipt: "yes", recurring: "Monthly" },
    { id: "2", category: "Software & Tools", description: "AWS Hosting", amount: 1250, date: "Oct 25, 2024", paidTo: "Amazon Web Services", receipt: "yes", recurring: "Monthly" },
    { id: "3", category: "Marketing", description: "Google Ads Q4", amount: 3500, date: "Oct 20, 2024", paidTo: "Google", receipt: "yes", recurring: "No" },
    { id: "4", category: "Infrastructure", description: "New MacBooks", amount: 8400, date: "Oct 15, 2024", paidTo: "Apple Store", receipt: "yes", recurring: "No" },
    { id: "5", category: "Software & Tools", description: "Vercel Enterprise", amount: 400, date: "Oct 10, 2024", paidTo: "Vercel", receipt: "yes", recurring: "Monthly" },
];

export const invoices = [
    { id: "INV-2024-045", client: "TechNova", amount: "$15,000", issueDate: "Oct 20, 2024", dueDate: "Nov 20, 2024", status: "Paid" },
    { id: "INV-2024-046", client: "EduPlatform", amount: "$1,200", issueDate: "Oct 22, 2024", dueDate: "Nov 01, 2024", status: "Sent" },
    { id: "INV-2024-047", client: "Startup Inc", amount: "$4,500", issueDate: "Sep 15, 2024", dueDate: "Oct 15, 2024", status: "Overdue" },
    { id: "INV-2024-048", client: "GlobalTrade", amount: "$2,500", issueDate: "Oct 25, 2024", dueDate: "Nov 10, 2024", status: "Draft" },
    { id: "INV-2024-049", client: "LogiChain", amount: "$25,000", issueDate: "Oct 01, 2024", dueDate: "Nov 01, 2024", status: "Paid" },
];
