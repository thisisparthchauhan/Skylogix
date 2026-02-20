"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpFormData } from "@/lib/authValidation";
import { useAuthModal } from "@/hooks/useAuthModal";
import { PasswordField } from "./PasswordField";
import { PasswordStrength } from "./PasswordStrength";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { Loader2, Check, X } from "lucide-react";
import Link from "next/link";

export function SignUpView() {
    const { switchView, simulateLogin } = useAuthModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        mode: "onChange",
    });

    const watchPassword = useWatch({ control, name: "password" });
    const watchConfirm = useWatch({ control, name: "confirmPassword" });

    const onSubmit = async (data: SignUpFormData) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);

        simulateLogin({
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
        });
    };

    return (
        <div className="w-full">
            <div className="text-center mb-[20px]">
                <h2 className="text-[20px] font-bold text-white mb-[4px]">Create Your Account</h2>
                <p className="text-[#8A9BB5] text-[13px]">Join Skylogix Technologies platform</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[12px]">
                <div className="grid grid-cols-2 gap-[10px]">
                    <div>
                        <label className="block text-[#C8D5E8] text-[12px] font-medium mb-[5px]">First Name *</label>
                        <input
                            {...register("firstName")}
                            type="text"
                            className={`w-full h-[42px] bg-white/5 border rounded-[8px] text-white text-[14px] px-[14px] transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 ${errors.firstName ? "border-red-500" : "border-white/10 hover:border-white/20"}`}
                        />
                        {errors.firstName && <p className="text-red-500 text-[12px] mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <label className="block text-[#C8D5E8] text-[12px] font-medium mb-[5px]">Last Name *</label>
                        <input
                            {...register("lastName")}
                            type="text"
                            className={`w-full h-[42px] bg-white/5 border rounded-[8px] text-white text-[14px] px-[14px] transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 ${errors.lastName ? "border-red-500" : "border-white/10 hover:border-white/20"}`}
                        />
                        {errors.lastName && <p className="text-red-500 text-[12px] mt-1">{errors.lastName.message}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-[#C8D5E8] text-[12px] font-medium mb-[5px]">Email Address *</label>
                    <input
                        {...register("email")}
                        type="email"
                        className={`w-full h-[42px] bg-white/5 border rounded-[8px] text-white text-[14px] px-[14px] transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 ${errors.email ? "border-red-500" : "border-white/10 hover:border-white/20"}`}
                    />
                    {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-[#C8D5E8] text-[12px] font-medium mb-[5px]">Mobile Number (Optional)</label>
                    <div className="flex relative">
                        <select className="absolute left-0 top-0 h-[42px] w-[55px] bg-transparent text-white text-[13px] px-[10px] appearance-none outline-none border-r border-white/10 z-10 cursor-pointer">
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+61">🇦🇺 +61</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+49">🇩🇪 +49</option>
                            <option value="+1c">🇨🇦 +1</option>
                        </select>
                        <input
                            {...register("mobile")}
                            type="text"
                            className={`w-full h-[42px] bg-white/5 border rounded-[8px] pl-[64px] text-white text-[14px] px-[14px] transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 ${errors.mobile ? "border-red-500" : "border-white/10 hover:border-white/20"}`}
                        />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-[12px] mt-1">{errors.mobile.message}</p>}
                </div>

                <div>
                    <PasswordField
                        label="Create Password *"
                        {...register("password")}
                        error={errors.password?.message}
                    />
                    <PasswordStrength password={watchPassword || ""} />
                </div>

                <div className="relative">
                    <PasswordField
                        label="Confirm Password *"
                        {...register("confirmPassword")}
                        error={errors.confirmPassword?.message}
                    />
                    {watchConfirm && watchPassword && (
                        <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none mt-[8px]">
                            {watchConfirm === watchPassword ? (
                                <Check size={16} className="text-green-500" />
                            ) : (
                                <X size={16} className="text-red-500" />
                            )}
                        </div>
                    )}
                </div>

                <div className="flex items-start gap-[8px] my-[10px]">
                    <div className="relative flex items-center justify-center mt-1">
                        <input
                            {...register("terms")}
                            type="checkbox"
                            className="peer appearance-none w-4 h-4 border border-white/20 rounded-[4px] bg-white/5 checked:bg-gradient-to-br checked:from-[#4F8EF7] checked:to-[#00C2FF] checked:border-transparent cursor-pointer transition-all"
                        />
                        <Check size={12} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                    </div>
                    <label className="text-[12px] text-[#8A9BB5] leading-relaxed mt-[2px]">
                        I agree to the <Link href="/terms" className="text-[#4F8EF7] hover:underline" target="_blank">Terms & Conditions</Link> and <Link href="/privacy" className="text-[#4F8EF7] hover:underline" target="_blank">Privacy Policy</Link>
                    </label>
                </div>
                {errors.terms && <p className="text-red-500 text-[12px] -mt-[8px] mb-[8px]">{errors.terms.message}</p>}

                <button
                    type="submit"
                    disabled={!isValid || isLoading}
                    className="w-full h-[44px] mt-[14px] bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] rounded-[8px] text-white text-[14px] font-semibold flex items-center justify-center gap-2 hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,194,255,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Creating account...
                        </>
                    ) : (
                        "Create Account"
                    )}
                </button>
            </form>

            <div className="my-[12px] relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative px-4 bg-[#0A0F2C]">
                    <span className="text-[#8A9BB5] text-[12px]">── or continue with ──</span>
                </div>
            </div>

            <GoogleAuthButton />

            <p className="text-center text-[13px] text-[#8A9BB5] mt-[14px] pb-0">
                Already have an account?{" "}
                <button
                    onClick={() => switchView("login")}
                    className="text-[#4F8EF7] hover:underline"
                >
                    Login
                </button>
            </p>
        </div>
    );
}
