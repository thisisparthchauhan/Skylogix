/**
 * Image Alt Text Guide
 * 
 * This file serves as a central reference and helper for generating SEO-friendly
 * and accessible alt text for images across the Skylogix website.
 */

export const AltTextGuide = {
    // General
    logo: "Skylogix Technologies logo - Global IT Services",

    // Dynamic Generators
    teamMember: (name: string, role: string) =>
        `${name}, ${role} at Skylogix Technologies`,

    serviceIcon: (serviceName: string) =>
        `${serviceName} development service icon`,

    caseStudyProject: (title: string, industry: string) =>
        `${title} - ${industry} case study project by Skylogix Technologies`,

    techLogo: (techName: string) =>
        `${techName} technology logo`,

    blogPostParams: (title: string) =>
        `Blog post cover: ${title}`,

    // Decorative (Should use empty string, but OptimizedImage requires string)
    // In OptimizedImage, if alt is truly decorative, pass "decorative" or describe the aesthetic
    decorative: "Decorative abstract background",

    // Specific Sections
    heroStats: "Skylogix global reach and statistics visualization",
    processStep: (step: string) => `Development process step: ${step}`,
};

/**
 * Validates if an alt text meets basic SEO quality standards.
 * @param alt The alt string to check
 * @returns boolean
 */
export function isAltTextOptimized(alt: string): boolean {
    if (!alt) return false;
    if (alt.length < 5) return false; // Too short
    if (["image", "photo", "picture", "icon", "logo"].includes(alt.toLowerCase())) return false; // Too generic
    return true;
}
