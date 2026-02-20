"use client";

import { useState } from "react";
import { Plus, GripVertical, Trash2 } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";

export default function FAQsEditor() {
    const [activeTab, setActiveTab] = useState("Home FAQs");

    const tabs = ["Home FAQs", "Services FAQs", "Contact FAQs", "Estimator FAQs"];

    // Sample initial items
    const [faqs, setFaqs] = useState([
        { id: 1, question: "What is your typical project timeline?", answer: "Most standard web applications take 4-8 weeks to complete from discovery to launch. Mobile apps typically take 8-12 weeks depending on features.", active: true },
        { id: 2, question: "Do you offer post-launch support?", answer: "Yes, we offer monthly maintenance retainers that cover security updates, bug fixes, and minor feature additions.", active: true },
        { id: 3, question: "What tech stack do you use?", answer: "We primarily build with React, Next.js, Node.js, and Supabase/PostgreSQL, deployed on Vercel or AWS.", active: true },
    ]);

    const handleSaveAll = () => {
        // Implement save logic across all FAQs in the active tab
        console.log("Saving FAQs...");
    };

    return (
        <div className="space-y-6 flex flex-col h-[calc(100vh-[104px])]">
            <PageHeader
                title="FAQs Editor"
                subtitle="Manage Frequently Asked Questions across different site pages."
                actions={
                    <button
                        onClick={handleSaveAll}
                        className="flex items-center gap-2 px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)]"
                    >
                        Save All Changes
                    </button>
                }
            />

            {/* Tabs */}
            <div className="flex items-center gap-2 border-b border-white/5 pb-px overflow-x-auto hide-scrollbar">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab
                                ? "border-[#4F8EF7] text-white"
                                : "border-transparent text-[#8A9BB5] hover:text-white"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Editor Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pb-6">
                <div className="space-y-4 max-w-4xl">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className="group bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-white/30 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="mt-2 cursor-grab text-white/20 group-hover:text-white/50 transition-colors shrink-0">
                                    <GripVertical size={20} />
                                </div>
                                <div className="flex-1 space-y-4">
                                    <input
                                        type="text"
                                        defaultValue={faq.question}
                                        placeholder="Question"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white font-medium focus:outline-none focus:border-[#4F8EF7] transition-all"
                                    />
                                    <textarea
                                        rows={3}
                                        defaultValue={faq.answer}
                                        placeholder="Answer"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-[#8A9BB5] focus:outline-none focus:border-[#4F8EF7] transition-all resize-none"
                                    />
                                </div>
                                <div className="flex flex-col items-center gap-4 shrink-0 pt-2">
                                    <label className="relative inline-flex items-center cursor-pointer" title="Toggle Active Status">
                                        <input type="checkbox" className="sr-only peer" defaultChecked={faq.active} />
                                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                                    </label>
                                    <button className="p-1.5 text-white/20 hover:text-red-400 hover:bg-red-400/10 rounded-md transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="w-full py-4 border-2 border-dashed border-white/10 hover:border-white/30 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex items-center justify-center gap-2 text-[#8A9BB5] hover:text-white text-sm font-medium">
                        <Plus size={16} /> Add New FAQ
                    </button>
                </div>
            </div>
        </div>
    );
}
