"use client";

import { Save } from "lucide-react";
import { PageHeader } from "@/components/admin/PageHeader";

export default function NotificationsSettingsPage() {
    return (
        <div className="space-y-6 pb-20 max-w-4xl">
            <PageHeader
                title="Notifications"
                subtitle="Configure email, Slack, and in-app alerts for system events."
                actions={
                    <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm text-white font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)]">
                        <Save size={16} /> Save Preferences
                    </button>
                }
            />

            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Email Notifications</h3>
                </div>
                <div className="p-6 space-y-6">
                    <div className="space-y-2 mb-6">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Main Notification Email(s)</label>
                        <input type="text" defaultValue="contact@skylogix.tech" className="w-full max-w-md h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                        <p className="text-xs text-[#8A9BB5]">Comma separate multiple emails.</p>
                    </div>

                    <div className="space-y-4 divide-y divide-white/5">
                        {[
                            { title: "New contact form submitted", desc: "Get an email when someone fills out the contact form.", checked: true },
                            { title: "New consultation booked", desc: "Alert when someone schedules a call.", checked: true },
                            { title: "New estimator lead", desc: "Alert when the estimator tool is completed.", checked: true },
                            { title: "New user registered", desc: "Alert when someone creates a client account.", checked: false },
                            { title: "Invoice payment received", desc: "Alert when an invoice is marked as paid.", checked: true },
                            { title: "Daily summary digest", desc: "Receive a daily summary of all activity at 9:00 AM.", checked: false },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start justify-between py-4 first:pt-0 last:pb-0">
                                <div className="pr-4">
                                    <h4 className="text-white font-medium text-sm">{item.title}</h4>
                                    <p className="text-xs text-[#8A9BB5] mt-1">{item.desc}</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                                    <input type="checkbox" className="sr-only peer" defaultChecked={item.checked} />
                                    <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0A0F2C]/80 border border-white/10 rounded-xl overflow-hidden">
                <div className="p-5 border-b border-white/5 bg-white/5 flex justify-between items-center">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                        Slack Integration
                        <span className="bg-white/10 text-[10px] px-2 py-0.5 rounded text-[#8A9BB5]">Beta</span>
                    </h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                    </label>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold text-[#8A9BB5] uppercase">Incoming Webhook URL</label>
                        <div className="flex gap-3">
                            <input type="password" defaultValue="https://hooks.slack.com/services/YOUR_WORKSPACE/YOUR_CHANNEL/YOUR_TOKEN" className="flex-1 h-11 bg-white/5 border border-white/10 rounded-lg px-4 text-sm text-white focus:outline-none focus:border-[#4F8EF7]" />
                            <button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors whitespace-nowrap">
                                Test Connection
                            </button>
                        </div>
                        <p className="text-xs text-[#8A9BB5]">Create an incoming webhook in your Slack workspace apps.</p>
                    </div>

                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { name: "New Leads", channel: "#leads" },
                            { name: "New Bookings", channel: "#bookings" },
                            { name: "System Alerts", channel: "#alerts" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-3 bg-white/5 border border-white/10 rounded-lg">
                                <div>
                                    <p className="text-white text-sm font-medium">{item.name}</p>
                                    <p className="text-xs text-[#8A9BB5]">Sent to {item.channel}</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked={true} />
                                    <div className="w-9 h-5 bg-black/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4F8EF7]"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
