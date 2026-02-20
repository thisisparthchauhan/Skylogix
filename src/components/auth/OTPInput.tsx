"use client";

import React, { useRef, useState, KeyboardEvent, ClipboardEvent } from "react";

interface OTPInputProps {
    value: string;
    onChange: (val: string) => void;
}

export function OTPInput({ value, onChange }: OTPInputProps) {
    const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // If external value changes (e.g. form reset)
    React.useEffect(() => {
        if (!value) {
            setOtp(Array(6).fill(""));
        }
    }, [value]);

    const focusNext = (index: number) => {
        if (index < 5 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const focusPrev = (index: number) => {
        if (index > 0 && inputRefs.current[index - 1]) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const val = e.target.value;
        if (isNaN(Number(val))) return; // only numbers

        // Take last character if multiple are entered somehow
        const char = val.slice(-1);

        const newOtp = [...otp];
        newOtp[index] = char;
        setOtp(newOtp);
        onChange(newOtp.join(""));

        if (char !== "") {
            focusNext(index);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            if (!otp[index]) {
                // If current is empty, move back and clear previous
                focusPrev(index);
                const newOtp = [...otp];
                if (index > 0) newOtp[index - 1] = "";
                setOtp(newOtp);
                onChange(newOtp.join(""));
            } else {
                // Just clear current
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
                onChange(newOtp.join(""));
            }
        } else if (e.key === "ArrowLeft") {
            focusPrev(index);
        } else if (e.key === "ArrowRight") {
            focusNext(index);
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
        if (!pastedData) return;

        const newOtp = [...otp];
        for (let i = 0; i < pastedData.length; i++) {
            newOtp[i] = pastedData[i];
        }
        setOtp(newOtp);
        onChange(newOtp.join(""));

        // Focus the next empty input or the last one
        const focusIndex = Math.min(pastedData.length, 5);
        inputRefs.current[focusIndex]?.focus();
    };

    return (
        <div className="flex justify-between items-center gap-2 w-full max-w-[400px] mx-auto">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onPaste={handlePaste}
                    className="w-[52px] h-[56px] text-center text-white text-[24px] font-bold bg-white/5 border border-white/10 rounded-[10px] focus:outline-none focus:border-[#4F8EF7] focus:shadow-[0_0_15px_rgba(79,142,247,0.3)] transition-all"
                    maxLength={2} // Allow 2 so we can catch replacement
                />
            ))}
        </div>
    );
}
