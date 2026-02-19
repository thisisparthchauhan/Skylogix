"use client";

import { motion } from "framer-motion";
import { Department } from "@/lib/teamData";

interface DepartmentFilterProps {
    departments: Department[];
    selectedId: string;
    onSelect: (id: string) => void;
}

export function DepartmentFilter({ departments, selectedId, onSelect }: DepartmentFilterProps) {
    return (
        <div className="flex items-center justify-center mb-12">
            <div className="flex p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 overflow-x-auto custom-scrollbar max-w-full">
                {departments.map((dept) => {
                    const isSelected = selectedId === dept.id;
                    return (
                        <button
                            key={dept.id}
                            onClick={() => onSelect(dept.id)}
                            className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${isSelected ? "text-white" : "text-muted-foreground hover:text-white"
                                }`}
                        >
                            {isSelected && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-primary rounded-full shadow-[0_0_15px_rgba(79,142,247,0.4)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                {dept.label}
                                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isSelected ? "bg-white/20 text-white" : "bg-white/10 text-muted-foreground"}`}>
                                    {dept.count}
                                </span>
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
