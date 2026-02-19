import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookie Policy | Skylogix Technologies",
    description: "Understand how we use cookies to improve your experience.",
};

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <PageHeader
                title="Cookie Policy"
                description="Last Updated: February 19, 2026"
                breadcrumb={[{ label: "Cookie Policy" }]}
            />

            <SectionWrapper className="bg-background">
                <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">1. What Are Cookies?</h2>
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site. They allow us to recognize your device and store some information about your preferences or past actions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">2. How We Use Cookies</h2>
                        <p>We use cookies for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Essential Cookies:</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.</li>
                            <li><strong>Analytical/Performance Cookies:</strong> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily. We typically use Google Analytics for this purpose.</li>
                            <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalise our content for you and remember your preferences.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">3. Third-Party Cookies</h2>
                        <p>
                            Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.
                        </p>
                        <p>
                            Specifically, we use <strong>Google Analytics 4 (GA4)</strong> to analyze website traffic. Google Analytics stores cookies on your device to generate anonymous reports and statistics. You can view Google's privacy policy <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">here</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Managing Cookies</h2>
                        <p>
                            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
                        </p>
                        <p>
                            To opt out of being tracked by Google Analytics across all websites, visit <a href="http://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://tools.google.com/dlpage/gaoptout</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Contact Us</h2>
                        <p>
                            If you have any questions about our use of cookies, please contact us at <a href="mailto:contact@skylogix.tech" className="text-primary hover:underline">contact@skylogix.tech</a>.
                        </p>
                    </section>
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
