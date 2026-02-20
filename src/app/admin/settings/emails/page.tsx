"use client";

import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Save, CheckCircle2, Mail, Users, Calendar, Calculator, HelpCircle, Code } from "lucide-react";

const TEMPLATES = [
    { id: "contact_confirm", name: "Contact Form Confirmation", description: "Sent to user after they submit the contact form.", icon: Mail },
    { id: "contact_notify", name: "Contact Form Notification", description: "Internal alert sent to admins when a form is submitted.", icon: Users },
    { id: "booking_confirm", name: "Booking Confirmation", description: "Sent to user specifically after booking a consultation.", icon: Calendar },
    { id: "estimator_lead", name: "Estimator Results Email", description: "Sent to user with their estimated project cost.", icon: Calculator }
];

export default function EmailTemplates() {
    const [selectedTemplate, setSelectedTemplate] = useState(TEMPLATES[0]);
    const [subject, setSubject] = useState("Thank you for contacting Skylogix!");
    const [markdown, setMarkdown] = useState(`Hi {{name}},\n\nThank you for reaching out to Skylogix Technologies. We have received your message regarding **{{service}}** and our team will get back to you within 24 business hours.\n\nHere is a copy of your message:\n> {{message}}\n\nBest regards,\nThe Skylogix Team`);

    const [isSaving, setIsSaving] = useState(false);
    const [saveSuccess, setSaveSuccess] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setSaveSuccess(true);
            setTimeout(() => setSaveSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="space-y-6 pb-20 max-w-6xl">
            {/* Header & Action Bar */}
            <div className="sticky top-[64px] z-20 -mx-4 px-4 sm:-mx-8 sm:px-8 py-4 bg-[#060818]/90 backdrop-blur-md border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Email Templates</h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Manage transactional emails sent automatically by the system.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-white/30 rounded-lg text-sm transition-colors text-white whitespace-nowrap">
                        <Mail size={16} /> Send Test Email
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 text-white rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)] disabled:opacity-70 whitespace-nowrap"
                    >
                        {isSaving ? "Saving..." : saveSuccess ? <><CheckCircle2 size={16} /> Saved</> : <><Save size={16} /> Save Template</>}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

                {/* Sidebar Navigation */}
                <div className="space-y-4">
                    <h3 className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider px-2">System Emails</h3>
                    <div className="space-y-1">
                        {TEMPLATES.map(template => (
                            <button
                                key={template.id}
                                onClick={() => setSelectedTemplate(template)}
                                className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-all ${selectedTemplate.id === template.id
                                    ? "bg-[#4F8EF7]/10 border border-[#4F8EF7]/20"
                                    : "hover:bg-white/5 border border-transparent"
                                    }`}
                            >
                                <div className={`p-2 rounded-md shrink-0 ${selectedTemplate.id === template.id ? 'bg-[#4F8EF7]/20 text-[#4F8EF7]' : 'bg-white/5 text-[#8A9BB5]'}`}>
                                    <template.icon size={16} />
                                </div>
                                <div>
                                    <p className={`text-sm font-medium ${selectedTemplate.id === template.id ? 'text-white' : 'text-[#8A9BB5]'}`}>{template.name}</p>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="bg-[#0A0F2C]/50 border border-white/10 rounded-xl p-4 mt-8">
                        <div className="flex items-center gap-2 mb-3">
                            <Code size={16} className="text-[#00C2FF]" />
                            <h3 className="font-bold text-white text-sm">Valid Variables</h3>
                        </div>
                        <ul className="space-y-2 text-xs font-mono">
                            <li className="flex justify-between items-center p-1.5 bg-white/5 rounded">
                                <span className="text-[#4F8EF7]">{"{{ name }}"}</span>
                                <span className="text-[#8A9BB5] truncate ml-2">Client name</span>
                            </li>
                            <li className="flex justify-between items-center p-1.5 bg-white/5 rounded">
                                <span className="text-[#4F8EF7]">{"{{ email }}"}</span>
                                <span className="text-[#8A9BB5] truncate ml-2">Client email</span>
                            </li>
                            <li className="flex justify-between items-center p-1.5 bg-white/5 rounded">
                                <span className="text-[#4F8EF7]">{"{{ service }}"}</span>
                                <span className="text-[#8A9BB5] truncate ml-2">Selected service</span>
                            </li>
                            <li className="flex justify-between items-center p-1.5 bg-white/5 rounded">
                                <span className="text-[#4F8EF7]">{"{{ date }}"}</span>
                                <span className="text-[#8A9BB5] truncate ml-2">Current date</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Editor Area */}
                <div className="space-y-6">
                    <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-lg">
                        <h2 className="text-lg font-bold text-white mb-1">{selectedTemplate.name}</h2>
                        <p className="text-sm text-[#8A9BB5] mb-6">{selectedTemplate.description}</p>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Email Subject Line</label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                                />
                            </div>

                            <div className="space-y-2" data-color-mode="dark">
                                <div className="flex justify-between items-end">
                                    <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Email Body (Markdown / HTML)</label>
                                    <span className="text-xs text-[#8A9BB5]">Supports bold, links, lists</span>
                                </div>
                                <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                                    <MDEditor
                                        value={markdown}
                                        onChange={(val) => setMarkdown(val || "")}
                                        height={400}
                                        style={{ backgroundColor: '#0A0F2C' }}
                                        previewOptions={{
                                            style: { backgroundColor: '#060818', padding: '1.5rem', borderRadius: '0.5rem' }
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
