import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDA & Compliance | Skylogix Technologies",
    description: "Our commitment to confidentiality, IP protection, and secure development practices.",
};

export default function NdaPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <PageHeader
                title="NDA & Security Compliance"
                description="We take your intellectual property seriously. Read about our security protocols and confidentiality agreements."
                breadcrumb={[{ label: "Compliance" }]}
            />

            <SectionWrapper className="bg-background">
                <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Our Commitment to Confidentiality</h2>
                        <p>
                            At Skylogix Technologies, we understand that your intellectual property (IP) is your most valuable asset. We are committed to maintaining the strictest confidentiality standards for all client projects, trade secrets, and proprietary information.
                        </p>
                        <p>
                            We offer a standard Mutual Non-Disclosure Agreement (NDA) before any detailed discussions take place, ensuring your ideas are protected from the very first interaction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Intellectual Property (IP) Ownership</h2>
                        <p>
                            <strong>You Own What We Build.</strong>
                        </p>
                        <p>
                            Upon full payment for our services, Skylogix Technologies assigns all rights, title, and interest in the custom software, code, designs, and documentation developed specifically for you to your company. We do not claim ownership over client-specific deliverables.
                        </p>
                        <p>
                            We may retain the right to reuse generic code libraries, development tools, and methodologies that do not contain your specific business logic or proprietary data, as is standard industry practice.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">3. Data Security Practices</h2>
                        <p>
                            We implement robust security measures to protect your data during the development process:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Access Control:</strong> Code repositories and project documentation are accessible only to authorized team members on a need-to-know basis.</li>
                            <li><strong>Secure Infrastructure:</strong> We use industry-standard encrypted channels for communication and secure cloud environments for development and staging.</li>
                            <li><strong>Code Security:</strong> We follow best practices for secure coding (OWASP) to minimize vulnerabilities in your software.</li>
                            <li><strong>Employee Agreements:</strong> All Skylogix employees and contractors are bound by strict confidentiality agreements and IP assignment clauses.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Compliance Frameworks</h2>
                        <p>
                            We design software with compliance in mind. Depending on your industry, we can help ensure your software meets necessary regulatory standards, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>GDPR:</strong> For data privacy and protection in Europe.</li>
                            <li><strong>HIPAA:</strong> For healthcare applications (US).</li>
                            <li><strong>PCI-DSS:</strong> For fintech and payment processing applications.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Request an NDA</h2>
                        <p>
                            Ready to discuss your project? We are happy to sign an NDA before our discovery call.
                        </p>
                        <div className="mt-6">
                            <a
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Contact Us to Sign NDA
                            </a>
                        </div>
                    </section>
                </div>
            </SectionWrapper>
            <Footer />
        </main>
    );
}
