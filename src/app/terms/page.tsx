import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Skylogix Technologies",
    description: "Read our Terms and Conditions regarding the use of our website and services.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar />
            <PageHeader
                title="Terms & Conditions"
                description="Last Updated: February 19, 2026"
                breadcrumb={[{ label: "Terms" }]}
            />

            <SectionWrapper className="bg-background">
                <div className="prose prose-invert max-w-4xl mx-auto space-y-8 text-gray-300">
                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Skylogix Technologies ("we," "us" or "our"), concerning your access to and use of the skylogix.tech website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                        </p>
                        <p>
                            You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site and its original content, features, and functionality are owned by Skylogix Technologies and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                        <p>
                            The source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">3. Services and Engagement</h2>
                        <p>
                            Skylogix Technologies provides software development, consulting, and AI solutions. Specific services will be governed by individual Master Services Agreements (MSA) or Statements of Work (SOW) signed by both parties. In the event of a conflict between these Terms and a specific SOW/MSA, the specific agreement shall control.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">4. Payment Terms</h2>
                        <p>
                            Payment terms for our services will be detailed in the specific SOW/MSA. Unless otherwise stated in writing, invoices are due upon receipt. We reserve the right to suspend services for non-payment. All prices are exclusive of applicable taxes, which will be charged in addition to the fees.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">5. Limitation of Liability</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our services, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">6. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and defined following the laws of India. Skylogix Technologies and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">7. Contact Us</h2>
                        <p>
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
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
