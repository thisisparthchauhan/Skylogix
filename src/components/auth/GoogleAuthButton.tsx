"use client";

import React from "react";
import Image from "next/image";

interface GoogleAuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string;
}

export function GoogleAuthButton({ text = "Continue with Google", className = "", ...props }: GoogleAuthButtonProps) {
    return (
        <button
            type="button"
            className={`w-full h-[40px] flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white text-[13px] font-medium rounded-[8px] border border-white/10 transition-all ${className}`}
            {...props}
        >
            <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                width={18}
                height={18}
                className="w-[18px] h-[18px]"
            />
            {text}
        </button>
    );
}
