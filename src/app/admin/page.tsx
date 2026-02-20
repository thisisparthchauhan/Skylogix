"use client";

import { Users, UserPlus, ClipboardList, CalendarCheck, TrendingUp, HandCoins, Receipt, ChartPie } from "lucide-react";
import Link from "next/link";
import RevenueChart from "@/components/admin/charts/RevenueChart";
import LeadSourceChart from "@/components/admin/charts/LeadSourceChart";

// --- Dashboard Mock Data --- //
const stats = [
    { title: "Total Users", value: "1,284", icon: Users, trend: "+12% MoM", isPositive: true },
    { title: "New This Month", value: "47", icon: UserPlus, trend: "+5% MoM", isPositive: true },
    { title: "Total Leads", value: "389", icon: ClipboardList, trend: "+8% MoM", isPositive: true },
    { title: "Active Bookings", value: "12", icon: CalendarCheck, trend: "-2% MoM", isPositive: false },
];

const financialStats = [
    { title: "Total Revenue", value: "$284,500", icon: TrendingUp, trend: "+18% YoY", isPositive: true },
    { title: "This Month", value: "$24,800", icon: HandCoins, trend: "+4% MoM", isPositive: true },
    { title: "Total Expense", value: "$142,300", icon: Receipt, trend: "Stable", isPositive: true },
    { title: "Net Profit", value: "$142,200", icon: ChartPie, trend: "50% Margin", isPositive: true },
];

const revenueData = [
    { name: 'Jan', revenue: 4000, expense: 2400 },
    { name: 'Feb', revenue: 3000, expense: 1398 },
    { name: 'Mar', revenue: 2000, expense: 9800 },
    { name: 'Apr', revenue: 2780, expense: 3908 },
    { name: 'May', revenue: 1890, expense: 4800 },
    { name: 'Jun', revenue: 2390, expense: 3800 },
    { name: 'Jul', revenue: 3490, expense: 4300 },
    { name: 'Aug', revenue: 4000, expense: 2400 },
    { name: 'Sep', revenue: 3000, expense: 1398 },
    { name: 'Oct', revenue: 2000, expense: 9800 },
    { name: 'Nov', revenue: 2780, expense: 3908 },
    { name: 'Dec', revenue: 1890, expense: 4800 },
];

const leadSourceData = [
    { name: 'Contact Form', value: 400 },
    { name: 'Estimator', value: 300 },
    { name: 'Book a Call', value: 300 },
    { name: 'Direct', value: 200 },
    { name: 'Referral', value: 150 },
];

const COLORS = ['#4F8EF7', '#00C2FF', '#7B5EA7', '#f59e0b', '#e11d48'];

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Admin Panel</h1>

            {/* Top Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 tracking-tight">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[rgba(10,15,44,0.8)] border border-white/[0.08] rounded-xl p-[20px] flex flex-col justify-between min-h-[110px] hover:border-white/20 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[28px] font-bold text-white leading-none">{stat.value}</h3>
                            <div className="w-[36px] h-[36px] rounded-full bg-[#4F8EF7]/10 flex items-center justify-center shrink-0">
                                <stat.icon className="w-4 h-4 text-[#4F8EF7]" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-[12px] text-white/50 font-medium">{stat.title}</p>
                            <p className={`text-[13px] font-semibold ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                                {stat.isPositive ? '↑' : '↓'} {stat.trend}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Financial Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 tracking-tight">
                {financialStats.map((stat, index) => (
                    <div key={index} className="bg-[rgba(10,15,44,0.8)] border border-white/[0.08] rounded-xl p-[20px] flex flex-col justify-between min-h-[110px] hover:border-white/20 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[28px] font-bold text-white leading-none">{stat.value}</h3>
                            <div className="w-[36px] h-[36px] rounded-full bg-[#4F8EF7]/10 flex items-center justify-center shrink-0">
                                <stat.icon className="w-4 h-4 text-[#4F8EF7]" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <p className="text-[12px] text-white/50 font-medium">{stat.title}</p>
                            <p className="text-[13px] font-semibold text-[#8A9BB5]">
                                {stat.trend}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
                {/* Revenue chart - takes 3 cols */}
                <div className="col-span-1 lg:col-span-3 rounded-xl p-5 bg-[rgba(10,15,44,0.8)] border border-white/[0.08]">
                    <h3 className="text-white font-semibold text-sm mb-4">
                        Revenue vs Expenses (Last 12 Months)
                    </h3>
                    <RevenueChart />
                </div>

                {/* Lead source chart - takes 2 cols */}
                <div className="col-span-1 lg:col-span-2 rounded-xl p-5 bg-[rgba(10,15,44,0.8)] border border-white/[0.08]">
                    <h3 className="text-white font-semibold text-sm mb-4">
                        Lead Sources
                    </h3>
                    <LeadSourceChart />
                </div>
            </div>

            {/* Recent Tables Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Users */}
                <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                    <div className="p-5 border-b border-white/5 flex justify-between items-center">
                        <h3 className="font-semibold">Recent Users</h3>
                        <Link href="/admin/users" className="text-xs text-[#4F8EF7] hover:underline">View All</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                                <tr>
                                    <th className="px-5 py-3 font-medium">Name</th>
                                    <th className="px-5 py-3 font-medium">Email</th>
                                    <th className="px-5 py-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                                {[
                                    { name: "Alice Johnson", email: "alice@example.com", status: "Active" },
                                    { name: "Robert Smith", email: "robert@example.com", status: "Active" },
                                    { name: "Emma Davis", email: "emma@example.com", status: "Inactive" },
                                    { name: "Michael Wilson", email: "michael@example.com", status: "Active" }
                                ].map((user, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="px-5 py-3 font-medium text-white">{user.name}</td>
                                        <td className="px-5 py-3">{user.email}</td>
                                        <td className="px-5 py-3">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${user.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Bookings */}
                <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
                    <div className="p-5 border-b border-white/5 flex justify-between items-center">
                        <h3 className="font-semibold">Recent Bookings</h3>
                        <Link href="/admin/bookings" className="text-xs text-[#4F8EF7] hover:underline">View All</Link>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-white/5 text-[#8A9BB5] text-xs uppercase">
                                <tr>
                                    <th className="px-5 py-3 font-medium">Client Name</th>
                                    <th className="px-5 py-3 font-medium">Service</th>
                                    <th className="px-5 py-3 font-medium">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                                {[
                                    { name: "Sarah Tech Ltd", service: "App Development", status: "New" },
                                    { name: "Global Corp", service: "IT Consulting", status: "In Discussion" },
                                    { name: "Startup Inc", service: "Backend Services", status: "Won" },
                                    { name: "David Chen", service: "UI/UX Design", status: "Lost" }
                                ].map((booking, i) => (
                                    <tr key={i} className="hover:bg-white/5 transition-colors">
                                        <td className="px-5 py-3 font-medium text-white">{booking.name}</td>
                                        <td className="px-5 py-3">{booking.service}</td>
                                        <td className="px-5 py-3">
                                            <span className={`px-2 py-1 rounded-full text-[10px] font-medium ${booking.status === 'Won' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                                booking.status === 'Lost' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                                                    booking.status === 'New' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                        'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                                }`}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Quick Actions Footer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="bg-[#0A0F2C]/50 border border-white/5 rounded-xl p-5 flex items-center justify-between hover:border-white/20 transition-colors cursor-pointer group">
                    <div>
                        <p className="font-semibold text-white group-hover:text-[#4F8EF7] transition-colors">Add New Blog Post</p>
                        <p className="text-xs text-[#8A9BB5] mt-1">Publish new content to the site</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#4F8EF7] group-hover:text-white transition-all text-[#8A9BB5]">
                        →
                    </div>
                </div>
                <div className="bg-[#0A0F2C]/50 border border-white/5 rounded-xl p-5 flex items-center justify-between hover:border-white/20 transition-colors cursor-pointer group">
                    <div>
                        <p className="font-semibold text-white group-hover:text-[#4F8EF7] transition-colors">Add Case Study</p>
                        <p className="text-xs text-[#8A9BB5] mt-1">Showcase a new project</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#4F8EF7] group-hover:text-white transition-all text-[#8A9BB5]">
                        →
                    </div>
                </div>
                <Link href="/" target="_blank" className="bg-[#0A0F2C]/50 border border-white/5 rounded-xl p-5 flex items-center justify-between hover:border-white/20 transition-colors cursor-pointer group">
                    <div>
                        <p className="font-semibold text-white group-hover:text-[#4F8EF7] transition-colors">View Live Site</p>
                        <p className="text-xs text-[#8A9BB5] mt-1">Open public website in new tab</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#4F8EF7] group-hover:text-white transition-all text-[#8A9BB5]">
                        →
                    </div>
                </Link>
            </div>
        </div>
    );
}
