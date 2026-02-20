"use client";

import { ShieldCheck, Monitor, MapPin, Search, AlertTriangle, Key } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";

export default function SecuritySettingsPage() {
    return (
        <div className="space-y-6 pb-20 max-w-4xl">
            <PageHeader
                title="Security Settings"
                subtitle="Manage authentication, sessions, and access control."
            />

            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Key size={16} className="text-[#4F8EF7]" /> Password & Authentication
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-white/5">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Current Password</label>
                                <input type="password" placeholder="••••••••" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#8A9BB5] uppercase">New Password</label>
                                <input type="password" placeholder="••••••••" className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                            </div>
                            <button className="w-full py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white font-medium transition-colors">
                                Update Password
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h4 className="text-white font-medium mb-1">Two-Factor Authentication (2FA)</h4>
                            <p className="text-sm text-[#8A9BB5]">Protect your account with an extra layer of security.</p>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold shadow-[0_0_15px_rgba(0,194,255,0.2)] transition-all">
                            Enable 2FA
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <Monitor size={16} className="text-[#4F8EF7]" /> Active Admin Sessions
                    </h3>
                </div>
                <div className="divide-y divide-white/5">
                    {[
                        { current: true, device: "MacBook Pro • Chrome", ip: "192.168.1.1", location: "New York, USA", time: "Active now" },
                        { current: false, device: "iPhone 14 Pro • Safari", ip: "192.168.1.4", location: "New York, USA", time: "2 hours ago" },
                    ].map((session, i) => (
                        <div key={i} className="p-5 flex items-center justify-between hover:bg-white/5 transition-colors">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                    <Monitor size={18} className={session.current ? "text-[#4F8EF7]" : "text-[#8A9BB5]"} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="text-white font-medium text-sm">{session.device}</h4>
                                        {session.current && (
                                            <span className="bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                                                This Session
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-xs text-[#8A9BB5] flex items-center gap-3">
                                        <span className="flex items-center gap-1"><MapPin size={12} /> {session.location}</span>
                                        <span>IP: {session.ip}</span>
                                        <span>{session.time}</span>
                                    </p>
                                </div>
                            </div>
                            {!session.current && (
                                <button className="text-xs font-semibold text-red-400 hover:text-red-300 px-3 py-1.5 rounded-md hover:bg-red-400/10 transition-colors">
                                    Revoke
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        <ShieldCheck size={16} className="text-[#4F8EF7]" /> Advanced Access Controls
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <div className="space-y-4 pb-6 border-b border-white/5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h4 className="text-white font-medium text-sm">Strict IP Whitelist</h4>
                                <p className="text-xs text-[#8A9BB5] mt-1 pr-10">If enabled, ONLY the IP addresses listed below can access this admin panel. <strong className="text-red-400">Warning: You can lock yourself out.</strong></p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                <input type="checkbox" className="sr-only peer" defaultChecked={false} />
                                <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <input disabled type="text" placeholder="e.g. 192.168.1.1, 10.0.0.0/24" className="flex-1 h-11 bg-white/5 opacity-50 border border-white/10 rounded-lg px-4 text-sm text-white" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Max Login Attempts</label>
                            <input type="number" defaultValue={5} className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Lockout Duration</label>
                            <select className="w-full h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7] appearance-none">
                                <option className="bg-[#0A0F2C]">15 Minutes</option>
                                <option className="bg-[#0A0F2C]" selected>30 Minutes</option>
                                <option className="bg-[#0A0F2C]">1 Hour</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button className="px-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm text-white font-semibold transition-colors">
                            Save Security Rules
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
