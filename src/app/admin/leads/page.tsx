"use client";

import { useState } from "react";
import { Search, Calculator, Mail, MessageSquare, Briefcase, Zap, Star } from "lucide-react";

const leadsData = [
    { id: "LD-501", name: "Innovate AI", contact: "john@innovate.ai", type: "Estimator", source: "Google Ads", score: 95, date: "Today, 10:24 AM", details: "Looking for: Mobile App (React Native), Budget: $50k+, Timeline: urgent" },
    { id: "LD-502", name: "Green Earth Co", contact: "contact@greenearth.com", type: "Contact Form", source: "Organic Search", score: 75, date: "Yesterday, 3:15 PM", details: "Need help redesigning our corporate website to better reflect sustainability." },
    { id: "LD-503", name: "Alex Mercer", contact: "alex.mercer99@gmail.com", type: "Newsletter", source: "Blog Post", score: 30, date: "Oct 24, 2024", details: "Subscribed to 'Top 10 AI Integrations' newsletter." },
    { id: "LD-504", name: "Fintech Startup", contact: "ceo@fintechstart.io", type: "Estimator", source: "Direct", score: 88, date: "Oct 23, 2024", details: "Looking for: Backend Architecture (Node.js), Budget: $25k-$50k, Timeline: 2-3 months" },
    { id: "LD-505", name: "Marketing Hub", contact: "hello@markethub.net", type: "Book a Call", source: "LinkedIn", score: 85, date: "Oct 22, 2024", details: "Requires custom CRM integration with existing marketing tools." }
];

export default function LeadsManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeTab, setActiveTab] = useState("All Leads");

    const tabs = ["All Leads", "Estimator", "Contact Forms", "Newsletter", "Book a Call"];

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex flex-col justify-between items-start gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Leads Center</h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Review contact submissions, estimator data, and newsletter signups.</p>
                </div>
            </div>

            {/* Quick Filter Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                ? "bg-white text-[#0A0F2C]"
                                : "bg-white/5 text-[#8A9BB5] hover:text-white hover:bg-white/10"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Leads List */}
            <div className="grid gap-4">
                {leadsData.map((lead) => (
                    <div key={lead.id} className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all">
                        <div className="flex flex-col lg:flex-row gap-6">

                            {/* Score & Type col */}
                            <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:w-[150px] shrink-0 border-b lg:border-b-0 border-white/5 pb-4 lg:pb-0">
                                <div className="text-center w-16 h-16 rounded-full flex flex-col items-center justify-center border-4 border-[#00C2FF]/30 shrink-0 relative">
                                    <span className="text-xl font-bold text-white leading-none">{lead.score}</span>
                                    {lead.score > 80 && (
                                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#EF4444] rounded-full flex items-center justify-center shadow-lg shadow-red-500/50">
                                            <Zap size={10} className="text-white fill-current" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1.5 text-sm font-medium text-white bg-white/5 px-2.5 py-1 rounded w-fit">
                                        {lead.type === 'Estimator' && <Calculator size={14} className="text-[#00C2FF]" />}
                                        {lead.type === 'Contact Form' && <MessageSquare size={14} className="text-[#4F8EF7]" />}
                                        {lead.type === 'Newsletter' && <Mail size={14} className="text-purple-400" />}
                                        {lead.type === 'Book a Call' && <Briefcase size={14} className="text-emerald-400" />}
                                        {lead.type}
                                    </div>
                                    <p className="text-xs text-[#8A9BB5] mt-2">{lead.source}</p>
                                </div>
                            </div>

                            {/* Main Content */}
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                            {lead.name}
                                        </h3>
                                        <a href={`mailto:${lead.contact}`} className="text-sm text-[#4F8EF7] hover:underline">
                                            {lead.contact}
                                        </a>
                                    </div>
                                    <span className="text-xs text-[#8A9BB5] whitespace-nowrap">{lead.date}</span>
                                </div>

                                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/5">
                                    <p className="text-sm text-[#C8D5E8] leading-relaxed">
                                        {lead.details}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex lg:flex-col gap-2 shrink-0 border-t lg:border-t-0 border-white/5 pt-4 lg:pt-0">
                                <button className="flex-1 lg:flex-none py-2 px-4 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] rounded-lg text-sm font-medium text-white hover:brightness-110 shadow-lg shadow-blue-500/20 transition-all">
                                    Reply via Email
                                </button>
                                <button className="flex-1 lg:flex-none py-2 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium text-white transition-colors">
                                    Convert to Booking
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
