"use client";

import { useState } from "react";
import { Search, Filter, Calendar as CalendarIcon, MoreVertical, MessageSquare, Briefcase, Plus, User } from "lucide-react";

const bookingsData = [
    { id: "BKG-1001", client: "Sarah Technology", name: "Sarah Chen", email: "sarah@tech.com", service: "App Development", date: "Oct 24, 2024", time: "10:00 AM", budget: "$10k - $25k", status: "New", source: "Estimator" },
    { id: "BKG-1002", client: "Global Corp", name: "Michael Chang", email: "m.chang@global.com", service: "IT Consulting", date: "Oct 25, 2024", time: "2:00 PM", budget: "$50k+", status: "In Discussion", source: "Contact Form" },
    { id: "BKG-1003", client: "Startup Inc", name: "David Miller", email: "david@startup.io", service: "Backend Services", date: "Oct 26, 2024", time: "11:30 AM", budget: "$25k - $50k", status: "Won", source: "Book a Call" },
    { id: "BKG-1004", client: "Retail Plus", name: "Emma Watson", email: "emma@retailplus.com", service: "UI/UX Design", date: "Oct 26, 2024", time: "3:00 PM", budget: "$5k - $10k", status: "Lost", source: "Direct" },
    { id: "BKG-1005", client: "EduTech Solutions", name: "James Wilson", email: "j.wilson@edutech.edu", service: "Web Development", date: "Oct 27, 2024", time: "9:00 AM", budget: "$10k - $25k", status: "Contacted", source: "Referral" },
];

const TABS = ["All", "Consultations", "Project Requests", "Pending", "Confirmed", "Completed", "Cancelled"];

export default function BookingsManagement() {
    const [activeTab, setActiveTab] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <div className="space-y-6 pb-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Bookings Pipeline</h1>
                    <p className="text-[#8A9BB5] text-sm mt-1">Manage project requests and consultation calls.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#0A0F2C] border border-white/10 hover:border-white/30 rounded-lg text-sm transition-colors">
                        <CalendarIcon size={16} />
                        Calendar View
                    </button>
                </div>
            </div>

            {/* Quick Stats / Pipeline Summary */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {['New', 'Contacted', 'In Discussion', 'Won', 'Lost'].map((stat, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${stat === 'Won' ? 'bg-green-500/5 border-green-500/20' : stat === 'Lost' ? 'bg-red-500/5 border-red-500/20' : 'bg-[#0A0F2C]/80 border-white/10'}`}>
                        <p className="text-[#8A9BB5] text-xs font-medium uppercase tracking-wider mb-1">{stat}</p>
                        <p className="text-2xl font-bold text-white">{Math.floor(Math.random() * 20) + 1}</p>
                    </div>
                ))}
            </div>

            {/* Tabs & Search Bar */}
            <div className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl p-4 space-y-4">
                {/* Tabs */}
                <div className="flex overflow-x-auto gap-2 pb-2 custom-scrollbar">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeTab === tab
                                    ? "bg-[#4F8EF7] text-white"
                                    : "bg-white/5 text-[#8A9BB5] hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Filter Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                        <input
                            type="text"
                            placeholder="Search client name, email, or service..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white placeholder:text-[#8A9BB5] focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                        />
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center justify-center gap-2 px-4 py-2 h-[42px] bg-white/5 border border-white/10 hover:border-white/30 rounded-lg text-sm transition-colors text-white">
                            <Filter size={16} /> Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Bookings Table / Cards */}
            <div className="grid gap-4">
                {bookingsData.map((booking) => (
                    <div key={booking.id} className="bg-[#0A0F2C]/80 backdrop-blur-md border border-white/5 rounded-xl p-5 hover:border-white/20 transition-all flex flex-col lg:flex-row gap-6 items-start lg:items-center">

                        {/* Client Info Core */}
                        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                            {/* Identity */}
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-white text-base">{booking.client}</h3>
                                    {booking.status === 'New' && <span className="w-2 h-2 rounded-full bg-[#4F8EF7] animate-pulse" />}
                                </div>
                                <div className="flex items-center gap-1.5 text-sm text-[#8A9BB5]">
                                    <User size={14} />
                                    <span>{booking.name}</span>
                                </div>
                            </div>

                            {/* Service Details */}
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider text-[#8A9BB5] font-semibold">Service Requested</p>
                                <div className="flex items-center gap-1.5 text-sm text-white font-medium">
                                    <Briefcase size={14} className="text-[#00C2FF]" />
                                    {booking.service}
                                </div>
                            </div>

                            {/* Time / Budget */}
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wider text-[#8A9BB5] font-semibold">Schedule & Budget</p>
                                <div className="text-sm text-white">
                                    <span className="font-medium">{booking.date}</span> at {booking.time}
                                </div>
                                <div className="text-xs text-[#8A9BB5] bg-white/5 inline-block px-1.5 py-0.5 rounded">
                                    {booking.budget}
                                </div>
                            </div>

                            {/* Status Pipeline */}
                            <div className="space-y-2">
                                <p className="text-xs uppercase tracking-wider text-[#8A9BB5] font-semibold">Current Status</p>
                                <div className="relative">
                                    <select
                                        className={`h-[32px] pl-3 pr-8 rounded-md text-xs font-semibold appearance-none cursor-pointer border focus:outline-none transition-colors ${booking.status === 'Won' ? 'bg-green-500/10 text-green-400 border-green-500/30' :
                                                booking.status === 'Lost' ? 'bg-red-500/10 text-red-400 border-red-500/30' :
                                                    booking.status === 'New' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                                                        'bg-amber-500/10 text-amber-500 border-amber-500/30'
                                            }`}
                                        defaultValue={booking.status}
                                    >
                                        <option value="New" className="bg-[#0A0F2C] text-white">New</option>
                                        <option value="Contacted" className="bg-[#0A0F2C] text-white">Contacted</option>
                                        <option value="In Discussion" className="bg-[#0A0F2C] text-white">In Discussion</option>
                                        <option value="Proposal Sent" className="bg-[#0A0F2C] text-white">Proposal Sent</option>
                                        <option value="Won" className="bg-[#0A0F2C] text-white">Won</option>
                                        <option value="Lost" className="bg-[#0A0F2C] text-white">Lost</option>
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                                        ▼
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex lg:flex-col justify-end gap-2 w-full lg:w-auto mt-4 lg:mt-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/5">
                            <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-3 py-1.5 bg-[#4F8EF7]/10 hover:bg-[#4F8EF7]/20 text-[#4F8EF7] rounded-md text-xs font-medium transition-colors">
                                <MessageSquare size={14} /> Message
                            </button>
                            <button className="flex items-center justify-center p-1.5 text-[#8A9BB5] hover:text-white hover:bg-white/10 rounded-md transition-colors">
                                <MoreVertical size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-4">
                <button className="px-4 py-2 text-sm text-[#4F8EF7] hover:underline font-medium">
                    Load More Bookings
                </button>
            </div>
        </div>
    );
}
