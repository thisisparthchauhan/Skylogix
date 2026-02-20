"use client";

import { useState } from "react";
import { Plus, GripVertical } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";
import { DetailDrawer } from "@/components/admin/DetailDrawer";
import { TagInput } from "@/components/admin/TagInput";
import { FileUpload } from "@/components/admin/FileUpload";

// Shared from frontend or mock
const currentTeam = [
    { id: 1, name: "Vaibhav Limbani", role: "CEO & Founder", image: "" },
    { id: 2, name: "Parth Chauhan", role: "CTO", image: "" },
    { id: 3, name: "Raj Limbani", role: "Lead Designer", image: "" },
];

export default function TeamContentEditor() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [photoUrl, setPhotoUrl] = useState("");

    return (
        <div className="space-y-6">
            <PageHeader
                title="Team Members"
                subtitle="Manage your company's team roster and leadership profiles."
                actions={
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold shadow-[0_0_15px_rgba(0,194,255,0.2)] transition-all"
                    >
                        <Plus size={16} /> Add Member
                    </button>
                }
            />

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentTeam.map((member, i) => (
                    <div key={i} className="group bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-[#4F8EF7]/50 transition-colors relative">
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-md bg-black/50 backdrop-blur-md flex items-center justify-center cursor-grab opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <GripVertical size={16} className="text-white/70" />
                        </div>
                        <div className="h-40 bg-gradient-to-br from-[#4F8EF7]/20 to-[#00C2FF]/10 flex items-center justify-center p-4">
                            {member.image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover border-4 border-[#060818]" />
                            ) : (
                                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#4F8EF7] to-[#00C2FF] flex items-center justify-center text-3xl font-bold text-white border-4 border-[#060818]">
                                    {member.name.split(" ").map(n => n[0]).join("")}
                                </div>
                            )}
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-white font-bold">{member.name}</h3>
                            <p className="text-sm text-[#4F8EF7] mt-1">{member.role}</p>
                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                className="mt-4 px-4 py-1.5 w-full bg-white/5 hover:bg-white/10 rounded-lg text-sm text-white transition-colors border border-white/5"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                ))}

                <button
                    onClick={() => setIsDrawerOpen(true)}
                    className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-white/10 hover:border-white/30 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors min-h-[250px]"
                >
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white/10 group-hover:text-white transition-all">
                        <Plus size={24} />
                    </div>
                    <span className="text-sm font-medium text-[#8A9BB5]">Add New Member</span>
                </button>
            </div>

            <DetailDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                title="Edit Team Member"
            >
                <div className="space-y-6">
                    <FileUpload
                        label="Profile Photo"
                        value={photoUrl}
                        onChange={setPhotoUrl}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">First Name</label>
                            <input type="text" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Last Name</label>
                            <input type="text" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Role / Title</label>
                            <input type="text" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Department</label>
                            <select className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] appearance-none">
                                <option className="bg-[#0A0F2C]">Leadership</option>
                                <option className="bg-[#0A0F2C]">Engineering</option>
                                <option className="bg-[#0A0F2C]">Design</option>
                                <option className="bg-[#0A0F2C]">Marketing</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Bio (2-3 sentences)</label>
                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#4F8EF7] resize-none" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Skills</label>
                        <TagInput tags={tags} setTags={setTags} placeholder="Add a skill..." />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">LinkedIn URL</label>
                        <input type="url" placeholder="https://linkedin.com/in/..." className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/5">
                        <button className="flex-1 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] text-white py-2.5 rounded-lg font-semibold text-sm hover:brightness-110">
                            Save Member
                        </button>
                    </div>
                </div>
            </DetailDrawer>
        </div>
    );
}
