"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/lib/authValidation";
import { useAuthModal } from "@/hooks/useAuthModal";
import { PasswordField } from "./PasswordField";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { Loader2 } from "lucide-react";

export function LoginView() {
    const { switchView, simulateLogin } = useAuthModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);

        simulateLogin({
            firstName: "Parth",
            lastName: "Chauhan",
            email: data.identifier
        });
    };

    return (
        <div className="w-full">
            <div className="text-center mb-[20px]">
                <h2 className="text-[20px] font-bold text-white mb-[4px]">Welcome Back</h2>
                <p className="text-[#8A9BB5] text-[13px]">Sign in to your Skylogix account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[12px]">
                <div className="w-full">
                    <label className="block text-[#C8D5E8] text-[12px] font-medium mb-[5px]">
                        Email Address or Mobile Number *
                    </label>
                    <input
                        {...register("identifier")}
                        type="text"
                        placeholder="Email or mobile number"
                        className={`w-full h-[42px] bg-white/5 border rounded-[8px] text-white text-[14px] px-[14px] transition-all placeholder:text-[#8A9BB5] focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 ${errors.identifier ? "border-red-500" : "border-white/10 hover:border-white/20"
                            }`}
                    />
                    {errors.identifier && (
                        <p className="text-red-500 text-[12px] mt-1">{errors.identifier.message}</p>
                    )}
                </div>

                <div className="relative">
                    <div className="absolute right-0 top-0">
                        <button
                            type="button"
                            onClick={() => switchView("forgot")}
                            className="text-[#4F8EF7] text-[13px] hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <PasswordField
                        label="Password *"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                </div>

                <button
                    type="submit"
                    disabled={!isValid || isLoading}
                    className="w-full h-[44px] mt-[14px] bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] rounded-[8px] text-white text-[14px] font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        "Sign In"
                    )}
                </button>
            </form>

            <div className="my-[12px] relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative px-4 bg-[#0A0F2C]">
                    <span className="text-[#8A9BB5] text-[12px]">── or ──</span>
                </div>
            </div>

            <GoogleAuthButton />

            <p className="text-center text-[13px] text-[#8A9BB5] mt-[14px] pb-0">
                Don't have an account?{" "}
                <button
                    onClick={() => switchView("signup")}
                    className="text-[#4F8EF7] hover:underline"
                >
                    Sign Up
                </button>
            </p>
        </div>
    );
}
