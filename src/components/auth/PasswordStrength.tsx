"use client";

import React from "react";

interface PasswordStrengthProps {
    password?: string;
}

export function PasswordStrength({ password = "" }: PasswordStrengthProps) {
    const getStrength = (pass: string) => {
        if (!pass) return { score: 0, label: "", color: "bg-transparent", width: "0%" };

        if (pass.length < 8) {
            return { score: 1, label: "Weak", color: "bg-[#EF4444]", width: "33.33%" }; // Red
        }

        const hasLetters = /[a-zA-Z]/.test(pass);
        const hasNumbers = /[0-9]/.test(pass);
        const hasUpper = /[A-Z]/.test(pass);
        const hasLower = /[a-z]/.test(pass);
        const hasSpecial = /[^A-Za-z0-9]/.test(pass);

        if (pass.length >= 8 && hasUpper && hasLower && hasNumbers && hasSpecial) {
            return { score: 3, label: "Strong", color: "bg-[#22C55E]", width: "100%" }; // Green
        }

        if (pass.length >= 8 && hasLetters && hasNumbers) {
            return { score: 2, label: "Medium", color: "bg-[#F59E0B]", width: "66.66%" }; // Yellow
        }

        return { score: 1, label: "Weak", color: "bg-[#EF4444]", width: "33.33%" };
    };

    const strength = getStrength(password);

    if (!password) return null;

    return (
        <div className="mt-[5px]">
            <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                <div
                    className={`h-full transition-all duration-300 ${strength.color}`}
                    style={{ width: strength.width }}
                />
            </div>
            <p className={`text-[11px] mt-1 font-medium ${strength.score === 1 ? 'text-[#EF4444]' : strength.score === 2 ? 'text-[#F59E0B]' : 'text-[#22C55E]'}`}>
                {strength.label}
            </p>
        </div>
    );
}
