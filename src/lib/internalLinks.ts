export interface InternalLink {
    href: string;
    anchorText: string;
    description?: string;
    type: 'service' | 'case-study' | 'page';
}

export const linkMap: Record<string, InternalLink[]> = {
    // HOME PAGE LINKS
    'home': [
        { href: '/services/mobile-app-development', anchorText: 'mobile app development services', type: 'service' },
        { href: '/services/web-development', anchorText: 'custom web development', type: 'service' },
        { href: '/services/ai-based-software', anchorText: 'AI software solutions', type: 'service' },
        { href: '/case-studies', anchorText: 'view our latest projects', type: 'page' },
        { href: '/book-a-call', anchorText: 'book a free strategy call', type: 'page' },
        { href: '/estimate', anchorText: 'get a project estimate', type: 'page' },
        { href: '/team', anchorText: 'meet our expert team', type: 'page' }
    ],

    // ABOUT PAGE LINKS
    'about': [
        { href: '/services', anchorText: 'explore our services', type: 'page' },
        { href: '/case-studies', anchorText: 'see our success stories', type: 'page' },
        { href: '/team', anchorText: 'our leadership team', type: 'page' },
        { href: '/book-a-call', anchorText: 'partner with Skylogix', type: 'page' }
    ],

    // SERVICE PAGE SPECIFIC LINKS (Cross-linking)
    'mobile-app-development': [
        { href: '/case-studies/fintech-neo-banking-app', anchorText: 'fintech mobile app case study', type: 'case-study' },
        { href: '/services/ui-ux-design', anchorText: 'mobile UI/UX design', type: 'service' },
        { href: '/services/backend-services', anchorText: 'scalable backend infrastructure', type: 'service' }
    ],
    'web-development': [
        { href: '/case-studies/ecommerce-headless-cms', anchorText: 'headless commerce migration', type: 'case-study' },
        { href: '/case-studies/healthtech-telemedicine-portal', anchorText: 'telemedicine portal development', type: 'case-study' },
        { href: '/services/ui-ux-design', anchorText: 'web design services', type: 'service' },
        { href: '/services/no-code-development', anchorText: 'rapid MVP development', type: 'service' }
    ],
    'backend-services': [
        { href: '/case-studies/fintech-crypto-exchange', anchorText: 'high-frequency trading platform', type: 'case-study' },
        { href: '/services/web-development', anchorText: 'enterprise web applications', type: 'service' },
        { href: '/services/mobile-app-development', anchorText: 'mobile app backends', type: 'service' }
    ],
    'ui-ux-design': [
        { href: '/services/mobile-app-development', anchorText: 'mobile app design', type: 'service' },
        { href: '/services/web-development', anchorText: 'website design', type: 'service' },
        { href: '/case-studies/edtech-lms-platform', anchorText: 'educational platform design', type: 'case-study' }
    ],
    'ai-based-software': [
        { href: '/case-studies/ecommerce-ai-recommendation', anchorText: 'AI recommendation engine', type: 'case-study' },
        { href: '/services/ai-integrations', anchorText: 'AI model integration', type: 'service' },
        { href: '/services/backend-services', anchorText: 'data processing pipelines', type: 'service' }
    ],
    'ai-integrations': [
        { href: '/services/ai-based-software', anchorText: 'custom AI development', type: 'service' },
        { href: '/case-studies/saas-workflow-automation', anchorText: 'workflow automation case study', type: 'case-study' },
        { href: '/services/no-code-development', anchorText: 'automation tools', type: 'service' }
    ],
    'no-code-development': [
        { href: '/services/web-development', anchorText: 'custom software development', type: 'service' },
        { href: '/services/ai-integrations', anchorText: 'AI automation workflows', type: 'service' },
        { href: '/case-studies/saas-workflow-automation', anchorText: 'SaaS automation project', type: 'case-study' }
    ],
    'application-maintenance': [
        { href: '/services/tech-support', anchorText: '24/7 technical support', type: 'service' },
        { href: '/services/backend-services', anchorText: 'infrastructure optimization', type: 'service' },
        { href: '/services/web-development', anchorText: 'web application updates', type: 'service' }
    ],
    'it-consulting': [
        { href: '/services/mentorship', anchorText: 'team mentorship programs', type: 'service' },
        { href: '/case-studies/logistics-fleet-management', anchorText: 'digital transformation example', type: 'case-study' },
        { href: '/services/ai-integrations', anchorText: 'AI strategy consulting', type: 'service' }
    ],
    'tech-support': [
        { href: '/services/application-maintenance', anchorText: 'application maintenance', type: 'service' },
        { href: '/services/backend-services', anchorText: 'server management', type: 'service' },
        { href: '/contact', anchorText: 'contact support team', type: 'page' }
    ],
    'mentorship': [
        { href: '/services/it-consulting', anchorText: 'IT strategy consulting', type: 'service' },
        { href: '/team', anchorText: 'our expert mentors', type: 'page' },
        { href: '/services/web-development', anchorText: 'engineering best practices', type: 'service' }
    ],

    // CASE STUDY SPECIFIC LINKS (Linking back to services)
    'fintech-neo-banking-app': [
        { href: '/services/mobile-app-development', anchorText: 'mobile banking app development', type: 'service' },
        { href: '/case-studies/fintech-crypto-exchange', anchorText: 'crypto exchange platform', type: 'case-study' }
    ],
    'healthtech-telemedicine-portal': [
        { href: '/services/web-development', anchorText: 'HIPAA compliant web development', type: 'service' },
        { href: '/case-studies/edtech-lms-platform', anchorText: 'interactive web platform', type: 'case-study' }
    ],
    'ecommerce-ai-recommendation': [
        { href: '/services/ai-based-software', anchorText: 'AI software development', type: 'service' },
        { href: '/case-studies/ecommerce-headless-cms', anchorText: 'modern e-commerce solutions', type: 'case-study' }
    ],
    'edtech-lms-platform': [
        { href: '/services/web-development', anchorText: 'LMS development services', type: 'service' },
        { href: '/services/mobile-app-development', anchorText: 'educational app development', type: 'service' }
    ],
    'saas-workflow-automation': [
        { href: '/services/ai-integrations', anchorText: 'workflow automation services', type: 'service' },
        { href: '/services/no-code-development', anchorText: 'internal tool development', type: 'service' }
    ],
    'logistics-fleet-management': [
        { href: '/services/backend-services', anchorText: 'IoT backend infrastructure', type: 'service' },
        { href: '/services/web-development', anchorText: 'logistics dashboard development', type: 'service' }
    ],
    'fintech-crypto-exchange': [
        { href: '/services/backend-services', anchorText: 'high-concurrency backend', type: 'service' },
        { href: '/case-studies/fintech-neo-banking-app', anchorText: 'fintech solutions', type: 'case-study' }
    ],
    'ecommerce-headless-cms': [
        { href: '/services/web-development', anchorText: 'headless e-commerce development', type: 'service' },
        { href: '/case-studies/ecommerce-ai-recommendation', anchorText: 'e-commerce personalization', type: 'case-study' }
    ]
};
