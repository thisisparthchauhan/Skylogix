"use client";

import { useState } from "react";
import { Search, Filter, Download, MoreVertical, ShieldBan, Trash2, Edit, UserX } from "lucide-react";
import Image from "next/image";

// Mock Data
const usersData = Array.from({ length: 45 }).map((_, i) => ({
    id: `usr_${i + 1}000`,
    name: ['Alice Johnson', 'Robert Smith', 'Emma Davis', 'Michael Wilson', 'Sophia Brown', 'Oliver Taylor'][i % 6] + ` ${i}`,
    email: `user${i}@example.com`,
    mobile: `+1 555-010${i % 9}`,
    signedUp: new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString(),
    lastLogin: new Date(Date.now() - Math.random() * 100000000).toLocaleString(),
    status: ['Active', 'Active', 'Active', 'Inactive', 'Banned'][i % 5],
    avatar: `https://i.pravatar.cc/150?u=${i}`
}));

export default function UsersManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const filteredUsers = usersData.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === "All" || user.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        All Users
                        <span className="bg-[#4F8EF7]/20 text-[#4F8EF7] text-xs font-semibold px-2.5 py-1 rounded-full">{usersData.length} Total</span>
                    </h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Manage platform users, roles, and access.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0A0F2C] border border-white/10 hover:border-white/30 rounded-lg text-sm transition-colors whitespace-nowrap">
                        <Download size={16} />
                        Export CSV
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] hover:brightness-110 rounded-lg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,194,255,0.2)] whitespace-nowrap">
                        Add User
                    </button>
                </div>
            </div>

            {/* Filters Bar */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                    <input
                        type="text"
                        placeholder="Search by name, email, or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white placeholder:text-[#8A9BB5] focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="h-[42px] bg-[#0A0F2C] border border-white/10 rounded-lg pl-10 pr-8 text-sm text-white appearance-none focus:outline-none focus:border-[#4F8EF7] cursor-pointer"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Banned">Banned</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden">
                <div className="overflow-x-auto min-h-[500px]">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase border-b border-white/5">
                            <tr>
                                <th className="px-6 py-4 font-medium w-12">
                                    <input type="checkbox" className="rounded bg-white/5 border-white/20 accent-[#4F8EF7] cursor-pointer" />
                                </th>
                                <th className="px-6 py-4 font-medium">User Profile</th>
                                <th className="px-6 py-4 font-medium">Contact</th>
                                <th className="px-6 py-4 font-medium">Signed Up</th>
                                <th className="px-6 py-4 font-medium">Last Login</th>
                                <th className="px-6 py-4 font-medium">Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {filteredUsers.slice(0, 10).map((user) => (
                                <tr key={user.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <input type="checkbox" className="rounded bg-white/5 border-white/20 accent-[#4F8EF7] cursor-pointer" />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 relative shrink-0">
                                                <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-white">{user.name}</p>
                                                <p className="text-xs text-[#8A9BB5]">{user.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p>{user.email}</p>
                                        <p className="text-xs text-[#8A9BB5]">{user.mobile}</p>
                                    </td>
                                    <td className="px-6 py-4 text-[#8A9BB5]">{user.signedUp}</td>
                                    <td className="px-6 py-4 text-[#8A9BB5]">{user.lastLogin}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${user.status === 'Active' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                                                user.status === 'Banned' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                                                    'bg-gray-500/10 text-gray-400 border-gray-500/20'
                                            }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-white/10 rounded-md text-[#8A9BB5] hover:text-white transition-colors" title="Edit">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-1.5 hover:bg-white/10 rounded-md text-[#8A9BB5] hover:text-red-400 transition-colors" title="Ban">
                                                <UserX size={16} />
                                            </button>
                                            <button className="p-1.5 hover:bg-white/10 rounded-md text-[#8A9BB5] hover:text-white transition-colors">
                                                <MoreVertical size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-sm">
                    <p className="text-[#8A9BB5]">Showing <span className="text-white font-medium">1</span> to <span className="text-white font-medium">10</span> of <span className="text-white font-medium">{filteredUsers.length}</span> results</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50 text-white bg-white/5">1</button>
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50">2</button>
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50">3</button>
                        <button className="px-3 py-1 border border-white/10 rounded-md hover:bg-white/5 disabled:opacity-50">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
