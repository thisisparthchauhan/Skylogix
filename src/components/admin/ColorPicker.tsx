"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    label?: string;
}

export function ColorPicker({ color, onChange, label }: ColorPickerProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-2">
            {label && <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider block">{label}</label>}
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-[42px] rounded-lg overflow-hidden border border-white/10 shrink-0 cursor-pointer shadow-inner">
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => onChange(e.target.value)}
                        className="absolute inset-[-10px] w-[200%] h-[200%] cursor-pointer p-0 m-0 border-none appearance-none"
                    />
                </div>
                <div className="relative flex-1">
                    <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 h-[42px] group hover:border-[#4F8EF7]/50 transition-colors">
                        <span className="text-[#8A9BB5] mr-1">#</span>
                        <input
                            type="text"
                            value={color.replace('#', '')}
                            onChange={(e) => onChange(`#${e.target.value}`)}
                            className="bg-transparent text-sm text-white w-full uppercase outline-none font-mono tracking-wider"
                            maxLength={6}
                        />
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="p-1.5 text-[#8A9BB5] hover:text-white rounded-md hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all focus:opacity-100"
                        >
                            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
