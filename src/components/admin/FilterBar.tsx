import { Search, Filter, Calendar } from "lucide-react";

interface FilterBarProps {
    onSearch?: (value: string) => void;
    filters?: string[];
    onFilterChange?: (filter: string) => void;
    showDateRange?: boolean;
}

export function FilterBar({ onSearch, filters = ["All", "Active", "Archived"], onFilterChange, showDateRange = true }: FilterBarProps) {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-[#0A0F2C]/80 backdrop-blur-md border border-white/10 rounded-xl relative z-10">
            {onSearch && (
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => onSearch(e.target.value)}
                        className="w-full h-[38px] bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 text-sm text-white placeholder:text-[#8A9BB5] focus:outline-none focus:border-[#4F8EF7] transition-all"
                    />
                </div>
            )}

            <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap hide-scrollbar">
                {filters.length > 0 && (
                    <div className="flex items-center bg-white/5 rounded-lg border border-white/10 p-1">
                        {filters.map((f, i) => (
                            <button
                                key={i}
                                onClick={() => onFilterChange?.(f)}
                                className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${i === 0 ? "bg-[#4F8EF7] text-white" : "text-[#8A9BB5] hover:text-white hover:bg-white/5"}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                )}

                {showDateRange && (
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-[#8A9BB5] hover:text-white transition-colors">
                        <Calendar size={14} />
                        <span>Date Range</span>
                    </button>
                )}
            </div>
        </div>
    );
}
