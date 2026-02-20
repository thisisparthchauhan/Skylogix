"use client";

import { useState } from "react";
import { Search, Filter, Download, Activity, Globe, Edit, Trash2, ShieldCheck, Mail } from "lucide-react";

// Mock Data for Audit Log
const logsData = Array.from({ length: 45 }).map((_, i) => ({
    id: `log_${1000 + i}`,
    admin: ['John Doe (Super Admin)', 'Sarah Ops (Manager)', 'System Bot'][i % 3],
    action: ['Edited Home Component', 'Deleted User user@test.com', 'Changed Booking BKG-1002 to Won', 'Updated Email Template', 'Exported Users CSV'][i % 5],
    type: ['UPDATE', 'DELETE', 'STATUS', 'UPDATE', 'EXPORT'][i % 5],
    ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
    date: new Date(Date.now() - Math.random() * 1000000000).toLocaleString()
}));

export default function ActivityLog() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLogs = logsData.filter(log =>
        log.admin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        Activity Audit Log
                        <Activity className="text-[#4F8EF7]" size={24} />
                    </h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Immutable record of all administrative actions across the platform.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0A0F2C] border border-white/10 hover:border-white/30 rounded-lg text-sm transition-colors text-white whitespace-nowrap">
                        <Download size={16} />
                        Export Log (.csv)
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                    <input
                        type="text"
                        placeholder="Search by admin name or action..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white placeholder:text-[#8A9BB5] focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                    />
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg text-sm transition-colors text-white">
                        <Filter size={16} /> Advanced Filters
                    </button>
                </div>
            </div>

            {/* Logs Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden">
                <div className="overflow-x-auto min-h-[500px]">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#060818] text-[#8A9BB5] text-xs uppercase border-b border-white/5 tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold">Timestamp</th>
                                <th className="px-6 py-4 font-semibold">Admin / System</th>
                                <th className="px-6 py-4 font-semibold">Event Type</th>
                                <th className="px-6 py-4 font-semibold w-1/3">Action Details</th>
                                <th className="px-6 py-4 font-semibold text-right">IP Address</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filteredLogs.slice(0, 15).map((log) => (
                                <tr key={log.id} className="hover:bg-white/5 transition-colors font-mono text-[13px]">
                                    <td className="px-6 py-4 text-[#8A9BB5]">{log.date}</td>
                                    <td className="px-6 py-4 font-sans font-medium text-white">{log.admin}</td>
                                    <td className="px-6 py-4 font-sans">
                                        <span className={`px-2 py-1 rounded inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider border ${log.type === 'UPDATE' ? 'bg-[#4F8EF7]/10 text-[#4F8EF7] border-[#4F8EF7]/20' :
                                                log.type === 'DELETE' ? 'bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20' :
                                                    log.type === 'STATUS' ? 'bg-[#00C2FF]/10 text-[#00C2FF] border-[#00C2FF]/20' :
                                                        'bg-purple-500/10 text-purple-400 border-purple-500/20'
                                            }`}>
                                            {log.type === 'UPDATE' && <Edit size={10} />}
                                            {log.type === 'DELETE' && <Trash2 size={10} />}
                                            {log.type === 'STATUS' && <Activity size={10} />}
                                            {log.type === 'EXPORT' && <Download size={10} />}
                                            {log.type}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 truncate text-[#C8D5E8]">{log.action}</td>
                                    <td className="px-6 py-4 text-right text-[#8A9BB5] flex justify-end items-center gap-1.5">
                                        <Globe size={12} className="opacity-50" />
                                        {log.ip}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-sm bg-[#060818]">
                    <p className="text-[#8A9BB5]">Showing 15 of {filteredLogs.length} events</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 border border-white/10 rounded-md bg-[#4F8EF7] text-white">1</button>
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5">2</button>
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5">Next</button>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <p className="text-xs text-[#8A9BB5] flex items-center justify-center gap-2">
                    <ShieldCheck size={14} className="text-[#00C2FF]" />
                    Logs are retained indefinitely for security and compliance purposes.
                </p>
            </div>
        </div>
    );
}
