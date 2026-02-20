"use client";

import { useState } from "react";
import MDEditor from '@uiw/react-md-editor';
import { Save, Search, Plus, Eye, CheckCircle2, MoreVertical, Edit, FileText, CalendarCheck, Image as ImageIcon } from "lucide-react";

const blogPosts = [
    { title: "Top 10 AI Integrations for Modern Apps", category: "Technology", status: "Published", date: "Oct 22, 2024", views: 1250 },
    { title: "Why Next.js 14 is the Future of the Web", category: "Development", status: "Published", date: "Oct 15, 2024", views: 980 },
    { title: "Building Scalable Architecture for Startups", category: "Architecture", status: "Draft", date: "Oct 28, 2024", views: 0 },
    { title: "Our New Office in Silicon Valley", category: "Company", status: "Scheduled", date: "Nov 01, 2024", views: 0 }
];

export default function BlogEditor() {
    const [view, setView] = useState<"list" | "edit">("list");
    const [markdown, setMarkdown] = useState<string>("# Transforming Industries with AI\n\nArtificial Intelligence is no longer just a buzzword. It's a fundamental shift in how we build software ecosystems.\n\n### The Shift\nWhen Skylogix originally approached this problem space...");

    // Simulate save
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

    if (view === "edit") {
        return (
            <div className="space-y-6 pb-20 max-w-6xl">
                {/* Post Editor Header */}
                <div className="sticky top-[64px] z-20 -mx-4 px-4 sm:-mx-8 sm:px-8 py-4 bg-[#060818]/90 backdrop-blur-md border-b border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <button onClick={() => setView("list")} className="text-xs text-[#8A9BB5] hover:text-white mb-2 flex items-center gap-1 transition-colors">
                            ← Back to Posts
                        </button>
                        <h1 className="text-2xl font-bold">Edit Blog Post</h1>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-[#0A0F2C] border border-white/10 hover:border-white/30 rounded-lg text-sm transition-colors text-white whitespace-nowrap">
                            <Eye size={16} /> Preview
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isSaving}
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 text-white rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)] whitespace-nowrap disabled:opacity-70"
                        >
                            {isSaving ? "Saving..." : saveSuccess ? <><CheckCircle2 size={16} /> Published</> : <><Save size={16} /> Publish Post</>}
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                    {/* Main Content Area */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Post Title</label>
                            <input type="text" defaultValue="Building Scalable Architecture for Startups" className="w-full h-[48px] bg-[#0A0F2C] border border-white/10 rounded-xl px-4 text-white font-bold text-lg focus:outline-none focus:border-[#4F8EF7]" />
                        </div>

                        <div className="space-y-2" data-color-mode="dark">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">Rich Text Body</label>
                            <div className="rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
                                <MDEditor
                                    value={markdown}
                                    onChange={(val) => setMarkdown(val || "")}
                                    height={500}
                                    style={{ backgroundColor: '#0A0F2C' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider">SEO Meta Description</label>
                            <textarea rows={2} defaultValue="Learn how to architect your startup's backend to scale to millions of users seamlessly using microservices and edge networks." className="w-full bg-[#0A0F2C] border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] resize-none" />
                            <p className="text-xs text-[#8A9BB5] text-right">127 / 160 chars recommended</p>
                        </div>
                    </div>

                    {/* Sidebar Settings */}
                    <div className="space-y-6">
                        <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 space-y-4 shadow-lg">
                            <h3 className="font-bold text-white border-b border-white/5 pb-3">Publish Settings</h3>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Status</label>
                                <select className="w-full h-[36px] bg-white/5 border border-white/10 rounded-lg px-3 text-sm text-white appearance-none focus:border-[#4F8EF7]">
                                    <option>Draft</option>
                                    <option>Published</option>
                                    <option>Scheduled</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Category</label>
                                <select className="w-full h-[36px] bg-white/5 border border-white/10 rounded-lg px-3 text-sm text-white appearance-none focus:border-[#4F8EF7]">
                                    <option>Architecture</option>
                                    <option>Technology</option>
                                    <option>Company</option>
                                </select>
                            </div>

                            <div className="space-y-2 pt-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Publish Date</label>
                                <input type="date" className="w-full h-[36px] bg-white/5 border border-white/10 rounded-lg px-3 text-sm text-white focus:border-[#4F8EF7] [color-scheme:dark]" />
                            </div>
                        </div>

                        <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 space-y-4 shadow-lg">
                            <h3 className="font-bold text-white border-b border-white/5 pb-3">Featured Image</h3>

                            <div className="border-2 border-dashed border-white/10 rounded-xl h-[150px] flex flex-col items-center justify-center text-[#8A9BB5] hover:bg-white/5 hover:border-[#4F8EF7]/50 transition-all cursor-pointer group">
                                <ImageIcon size={32} className="mb-2 group-hover:text-[#4F8EF7] transition-colors" />
                                <span className="text-sm">Click to upload image</span>
                                <span className="text-xs opacity-70 mt-1">1200x630px recommended</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 pb-20">
            {/* List Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Blog Posts Content</h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Create and manage your articles and news updates.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                        onClick={() => setView("edit")}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)] whitespace-nowrap"
                    >
                        <Plus size={16} /> New Post
                    </button>
                </div>
            </div>

            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                    <input
                        type="text"
                        placeholder="Search posts..."
                        className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white focus:border-[#4F8EF7]"
                    />
                </div>
            </div>

            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden">
                <div className="overflow-x-auto min-h-[400px]">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase border-b border-white/5">
                            <tr>
                                <th className="px-6 py-4 font-medium w-12"><input type="checkbox" className="rounded bg-white/5 border-white/20 accent-[#4F8EF7] cursor-pointer" /></th>
                                <th className="px-6 py-4 font-medium">Title</th>
                                <th className="px-6 py-4 font-medium">Category</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium">Date</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {blogPosts.map((post, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => setView("edit")}>
                                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                                        <input type="checkbox" className="rounded bg-white/5 border-white/20 accent-[#4F8EF7] cursor-pointer" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                                <FileText size={14} className="text-[#8A9BB5]" />
                                            </div>
                                            <p className="font-semibold text-white truncate max-w-[300px]">{post.title}</p>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{post.category}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${post.status === 'Published' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                post.status === 'Draft' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                                    'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                            }`}>
                                            {post.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-[#8A9BB5]">
                                        <div className="flex items-center gap-1.5">
                                            {post.status === 'Scheduled' && <CalendarCheck size={12} className="text-[#8A9BB5]" />}
                                            {post.date}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                                        <div className="flex items-center gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-white/10 rounded-md text-[#8A9BB5] hover:text-white transition-colors" onClick={() => setView("edit")}>
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1.5 hover:bg-white/10 rounded-md text-[#8A9BB5] transition-colors">
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
