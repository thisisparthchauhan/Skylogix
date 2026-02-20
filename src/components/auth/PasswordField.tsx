"use client";

import React, { useState, forwardRef } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
    ({ label, error, className = "", ...props }, ref) => {
        const [show, setShow] = useState(false);

        return (
            <div className="w-full">
                <label className="block text-[#C8D5E8] text-[12px] font-medium mb-[5px]">
                    {label}
                </label>
                <div className="relative">
                    <input
                        ref={ref}
                        type={show ? "text" : "password"}
                        className={`w-full h-[42px] bg-white/5 border rounded-[8px] text-white text-[14px] px-[14px] pr-10 transition-all placeholder:text-[#8A9BB5] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 ${error ? "border-red-500 hover:border-red-500 focus:border-red-500 focus:ring-red-500/10" : "border-white/10 hover:border-white/20"
                            } ${className}`}
                        {...props}
                    />
                    <button
                        type="button"
                        onClick={() => setShow(!show)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9BB5] hover:text-[#4F8EF7] transition-colors"
                    >
                        {show ? <Eye size={20} /> : <EyeOff size={20} />}
                    </button>
                </div>
                {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
            </div>
        );
    }
);

PasswordField.displayName = "PasswordField";
