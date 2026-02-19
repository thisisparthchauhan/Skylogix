import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Skylogix Technologies",
    description: "Our commitment to protecting your privacy. Read our GDPR-compliant Privacy Policy.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <PageHeader
                title="Privacy Policy"
                description="Last Updated: February 19, 2026"
                breadcrumb={[{ label: "Privacy Policy" }]}
            />

            <SectionWrapper className="bg-background">
                <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Introduction</h2>
                        <p>
                            Skylogix Technologies ("we," "our," or "us") respects your privacy and is committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit our website (regarding
                            our services as a software development and consulting firm) and tell you about your privacy rights and how the law protects you.
                        </p>
                        <p>
                            This policy applies to Skylogix Technologies, operating from India and serving clients globally.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                            <li><strong>Usage Data:</strong> includes information about how you use our website and services.</li>
                            <li><strong>Marketing and Communications Data:</strong> includes your preferences in receiving marketing from us and your communication preferences.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">3. How We Collect Your Data</h2>
                        <p>We use different methods to collect data from and about you including:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Direct interactions:</strong> You may give us your Identity and Contact Data by filling in forms (such as our "Contact Us" form) or by corresponding with us by post, phone, email or otherwise.</li>
                            <li><strong>Automated technologies or interactions:</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies and similar technologies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">4. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Data Retention</h2>
                        <p>
                            We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements. We may retain your personal data for a longer period in the event of a complaint or if we reasonably believe there is a prospect of litigation in respect to our relationship with you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">6. Your Legal Rights (GDPR)</h2>
                        <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Request access to your personal data.</li>
                            <li>Request correction of your personal data.</li>
                            <li>Request erasure of your personal data.</li>
                            <li>Object to processing of your personal data.</li>
                            <li>Request restriction of processing your personal data.</li>
                            <li>Request transfer of your personal data.</li>
                            <li>Right to withdraw consent.</li>
                        </ul>
                        <p className="mt-4">
                            If you wish to exercise any of the rights set out above, please contact us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">7. International Transfers</h2>
                        <p>
                            As a global company based in India, your data may be transferred to, and processed in, countries other than the country in which you are resident. These countries may have data protection laws that are different to the laws of your country. We have taken appropriate safeguards to require that your personal data will remain protected in accordance with this Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">8. Contact Details</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact our Data Protection Officer (DPO) via email at:</p>
                        <div className="mt-4 bg-white/5 border border-white/10 p-4 rounded-lg inline-block">
                            <p className="font-bold text-white">Skylogix Technologies</p>
                            <p>Email: <a href="mailto:contact@skylogix.tech" className="text-primary hover:underline">contact@skylogix.tech</a></p>
                        </div>
                    </section>
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
