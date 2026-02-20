"use client";

import { useState } from "react";
import { Download, Plus, Search, Calendar, Landmark, TrendingUp, TrendingDown, Briefcase } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';

const monthData = [
    { name: 'Jan', revenue: 21000, expense: 12000 },
    { name: 'Feb', revenue: 19000, expense: 11000 },
    { name: 'Mar', revenue: 24000, expense: 13500 },
    { name: 'Apr', revenue: 28000, expense: 14000 },
    { name: 'May', revenue: 22000, expense: 11500 },
    { name: 'Jun', revenue: 31000, expense: 15000 },
    { name: 'Jul', revenue: 35000, expense: 16000 },
    { name: 'Aug', revenue: 29000, expense: 13000 },
    { name: 'Sep', revenue: 38000, expense: 17000 },
    { name: 'Oct', revenue: 42000, expense: 18000 },
    { name: 'Nov', revenue: 36000, expense: 15500 },
    { name: 'Dec', revenue: 45000, expense: 20000 },
];

export default function FinanceOverview() {
    const [period, setPeriod] = useState("This Year");

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">P&L Overview</h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Financial summary, revenue streams, and expenses.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                        <select
                            value={period}
                            onChange={(e) => setPeriod(e.target.value)}
                            className="h-[40px] bg-[#0A0F2C] border border-white/10 hover:border-white/30 rounded-lg pl-10 pr-8 text-sm text-white appearance-none focus:outline-none focus:border-[#4F8EF7] cursor-pointer transition-colors"
                        >
                            <option value="This Month">This Month</option>
                            <option value="This Quarter">This Quarter</option>
                            <option value="This Year">This Year</option>
                            <option value="Custom Range">Custom Range</option>
                        </select>
                    </div>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-white/30 rounded-lg text-sm transition-colors text-white whitespace-nowrap">
                        <Download size={16} /> Export
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#4F8EF7] hover:bg-[#3b7ded] text-white rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                        <Plus size={16} /> Add Entry
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Revenue */}
                <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 hover:border-[#00C2FF]/30 rounded-2xl p-6 transition-all shadow-[0_0_20px_rgba(0,194,255,0.05)]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#00C2FF]/20 to-transparent border border-[#00C2FF]/20 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-[#00C2FF]" />
                        </div>
                        <span className="px-2.5 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded-full">+18.5% YoY</span>
                    </div>
                    <p className="text-[#8A9BB5] text-sm uppercase tracking-wider font-semibold mb-1">Total Revenue</p>
                    <h2 className="text-4xl font-bold text-white tracking-tight">$284,500</h2>
                </div>

                {/* Expenses */}
                <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 hover:border-[#EF4444]/30 rounded-2xl p-6 transition-all shadow-[0_0_20px_rgba(239,68,68,0.05)]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#EF4444]/20 to-transparent border border-[#EF4444]/20 rounded-xl">
                            <TrendingDown className="w-6 h-6 text-[#EF4444]" />
                        </div>
                        <span className="px-2.5 py-1 bg-gray-500/10 text-gray-400 text-xs font-bold rounded-full">+4.2% YoY</span>
                    </div>
                    <p className="text-[#8A9BB5] text-sm uppercase tracking-wider font-semibold mb-1">Total Expenses</p>
                    <h2 className="text-4xl font-bold text-white tracking-tight">$142,300</h2>
                </div>

                {/* Net Profit */}
                <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 hover:border-[#4F8EF7]/30 rounded-2xl p-6 transition-all shadow-[0_0_20px_rgba(79,142,247,0.05)]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-gradient-to-br from-[#4F8EF7]/20 to-transparent border border-[#4F8EF7]/20 rounded-xl">
                            <Landmark className="w-6 h-6 text-[#4F8EF7]" />
                        </div>
                        <span className="px-2.5 py-1 bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 text-xs font-bold rounded-full">50% Margin</span>
                    </div>
                    <p className="text-[#8A9BB5] text-sm uppercase tracking-wider font-semibold mb-1">Net Profit</p>
                    <h2 className="text-4xl font-bold text-white tracking-tight">$142,200</h2>
                </div>
            </div>

            {/* P&L Table */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-5 border-b border-white/5 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#4F8EF7]" />
                    <h3 className="font-semibold text-lg">Profit & Loss Statement</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#060818] text-[#8A9BB5] text-xs uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-semibold w-[40%]">Category</th>
                                <th className="px-6 py-4 font-semibold text-right">This Month</th>
                                <th className="px-6 py-4 font-semibold text-right">This Quarter</th>
                                <th className="px-6 py-4 font-semibold text-right">YTD</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-[#C8D5E8]">
                            {/* Revenue Section */}
                            <tr className="bg-[#4F8EF7]/5">
                                <td className="px-6 py-2 font-bold text-[#4F8EF7] uppercase tracking-wider" colSpan={4}>Revenue</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                                    Project Income
                                </td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$18,000</td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$54,000</td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$210,000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-[#4F8EF7]" />
                                    Consulting
                                </td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$4,800</td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$14,400</td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$52,000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                                    Maintenance
                                </td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$2,000</td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$6,000</td>
                                <td className="px-6 py-3 text-right group-hover:bg-white/5">$22,500</td>
                            </tr>
                            <tr className="bg-[#060818] border-y border-white/10 font-bold">
                                <td className="px-6 py-4 text-white uppercase tracking-wider">Total Revenue</td>
                                <td className="px-6 py-4 text-right text-[#00C2FF]">$24,800</td>
                                <td className="px-6 py-4 text-right text-[#00C2FF]">$74,400</td>
                                <td className="px-6 py-4 text-right text-[#00C2FF]">$284,500</td>
                            </tr>

                            {/* Expenses Section */}
                            <tr className="bg-[#EF4444]/5">
                                <td className="px-6 py-2 font-bold text-[#EF4444] uppercase tracking-wider" colSpan={4}>Expenses</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white">Salaries</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$8,000</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$24,000</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$96,000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white">Software/Tools</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$500</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$1,500</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$6,000</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white">Marketing</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$1,200</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$3,600</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$14,400</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white">Infrastructure</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$300</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$900</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$3,600</td>
                            </tr>
                            <tr className="hover:bg-white/5 transition-colors cursor-pointer group">
                                <td className="px-6 py-3 font-medium text-white">Miscellaneous</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$200</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$600</td>
                                <td className="px-6 py-3 text-right text-red-300 group-hover:bg-white/5">$2,400</td>
                            </tr>
                            <tr className="bg-[#060818] border-y border-white/10 font-bold">
                                <td className="px-6 py-4 text-white uppercase tracking-wider">Total Expenses</td>
                                <td className="px-6 py-4 text-right text-[#EF4444]">$10,200</td>
                                <td className="px-6 py-4 text-right text-[#EF4444]">$30,600</td>
                                <td className="px-6 py-4 text-right text-[#EF4444]">$122,400</td>
                            </tr>

                            {/* Final calculations */}
                            <tr className="bg-[#4F8EF7]/10 border-t border-[#4F8EF7]/20 font-bold text-lg">
                                <td className="px-6 py-5 text-white uppercase tracking-wider">Net Profit</td>
                                <td className="px-6 py-5 text-right text-white">$14,600</td>
                                <td className="px-6 py-5 text-right text-white">$43,800</td>
                                <td className="px-6 py-5 text-right text-[#4F8EF7] shadow-[0_0_15px_rgba(79,142,247,0.3)]">$162,100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Chart */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-6">Monthly Financial Performance</h3>
                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                            <XAxis dataKey="name" stroke="#8A9BB5" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#8A9BB5" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                            <RechartsTooltip
                                contentStyle={{ backgroundColor: '#0A0F2C', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                                cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                            />
                            <Legend wrapperStyle={{ paddingTop: '20px' }} />
                            <Bar dataKey="revenue" name="Revenue" fill="#00C2FF" radius={[4, 4, 0, 0]} maxBarSize={40} />
                            <Bar dataKey="expense" name="Expenses" fill="#EF4444" radius={[4, 4, 0, 0]} maxBarSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
