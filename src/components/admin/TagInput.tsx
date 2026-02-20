"use client";

import { useState, KeyboardEvent } from "react";
import { X, Plus } from "lucide-react";

interface TagInputProps {
    tags: string[];
    setTags: (tags: string[]) => void;
    placeholder?: string;
    className?: string;
}

export function TagInput({ tags, setTags, placeholder = "Type and press Enter...", className = "" }: TagInputProps) {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            addTag();
        } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
            removeTag(tags.length - 1);
        }
    };

    const addTag = () => {
        const trimmed = inputValue.trim().replace(/,$/, "");
        if (trimmed && !tags.includes(trimmed)) {
            setTags([...tags, trimmed]);
            setInputValue("");
        }
    };

    const removeTag = (indexToRemove: number) => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className={`w-full min-h-[42px] bg-white/5 border border-white/10 rounded-lg p-2 focus-within:border-[#4F8EF7] transition-colors flex flex-wrap gap-2 ${className}`}>
            {tags.map((tag, index) => (
                <div key={index} className="flex items-center gap-1 bg-[#4F8EF7]/10 text-[#4F8EF7] border border-[#4F8EF7]/20 px-2.5 py-1 rounded-md text-xs font-medium">
                    <span>{tag}</span>
                    <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="p-0.5 hover:bg-[#4F8EF7]/20 rounded-sm transition-colors ml-1"
                    >
                        <X size={12} />
                    </button>
                </div>
            ))}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={addTag}
                placeholder={tags.length === 0 ? placeholder : "Add more..."}
                className="flex-1 min-w-[120px] bg-transparent text-sm text-white placeholder:text-[#8A9BB5] border-none outline-none px-1"
            />
        </div>
    );
}
