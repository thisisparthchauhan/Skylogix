"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, ForgotPasswordFormData } from "@/lib/authValidation";
import { useAuthModal } from "@/hooks/useAuthModal";
import { OTPInput } from "./OTPInput";
import { PasswordField } from "./PasswordField";
import { PasswordStrength } from "./PasswordStrength";
import { Loader2, ArrowLeft, CheckCircle2, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Step = 1 | 2 | 3 | "success";

export function ForgotPasswordView() {
    const { switchView } = useAuthModal();
    const [step, setStep] = useState<Step>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);

    const {
        register,
        handleSubmit,
        control,
        setValue,
        trigger,
        formState: { errors },
    } = useForm<ForgotPasswordFormData>({
        resolver: zodResolver(forgotPasswordSchema),
        mode: "onChange",
    });

    const watchIdentifier = useWatch({ control, name: "identifier" });
    const watchOtp = useWatch({ control, name: "otp" });
    const watchNewPassword = useWatch({ control, name: "newPassword" });
    const watchConfirmPassword = useWatch({ control, name: "confirmNewPassword" });

    const handleSendCode = async () => {
        const isValid = await trigger("identifier");
        if (!isValid) return;

        setIsLoading(true);
        // Simulate sending code
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep(2);
        startCountdown();
    };

    const handleVerifyOTP = async () => {
        const isValid = await trigger("otp");
        if (!isValid) return;

        setIsLoading(true);
        // Simulate verifying code
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep(3);
    };

    const handleResetPassword = async () => {
        const isValid = await trigger(["newPassword", "confirmNewPassword"]);
        if (!isValid) return;

        setIsLoading(true);
        // Simulate reset
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setStep("success");
    };

    const startCountdown = () => {
        setCountdown(45);
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const maskIdentifier = (id: string = "") => {
        if (id.includes("@")) {
            const [local, domain] = id.split("@");
            return `${local[0]}***@${domain}`;
        }
        return `${id.slice(0, 3)} *** ***${id.slice(-2)}`;
    };

    return (
        <div className="w-full">
            <button
                onClick={() => {
                    if (step === 1) switchView("login");
                    else if (step !== "success") setStep((prev) => (prev === 3 ? 2 : 1) as Step);
                }}
                className="text-[#8A9BB5] hover:text-white transition-colors flex items-center gap-2 text-[13px] mb-6"
            >
                <ArrowLeft size={16} /> Back
            </button>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-[28px] font-bold text-white mb-2">Reset Your Password</h2>
                            <p className="text-[#8A9BB5] text-[15px]">Enter your email or mobile number</p>
                        </div>
                        <div>
                            <input
                                {...register("identifier")}
                                type="text"
                                placeholder="Email or mobile number"
                                className={`w-full h-12 bg-white/5 border rounded-[10px] text-white text-[14px] px-4 transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 ${errors.identifier ? "border-red-500" : "border-white/10"}`}
                            />
                            {errors.identifier && <p className="text-red-500 text-[12px] mt-1">{errors.identifier.message}</p>}
                        </div>
                        <button
                            onClick={handleSendCode}
                            disabled={!watchIdentifier || isLoading}
                            className="w-full h-[50px] bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] rounded-[10px] text-white text-[15px] font-semibold flex items-center justify-center hover:brightness-110 disabled:opacity-50 transition-all"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Reset Code"}
                        </button>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-[28px] font-bold text-white mb-2">Enter Verification Code</h2>
                            <p className="text-[#8A9BB5] text-[15px]">
                                We sent a 6-digit code to <br />
                                <span className="text-white font-medium">{maskIdentifier(watchIdentifier)}</span>
                            </p>
                        </div>
                        <OTPInput
                            value={watchOtp || ""}
                            onChange={(val) => {
                                setValue("otp", val, { shouldValidate: true });
                                if (val.length === 6) handleVerifyOTP(); // Auto submit
                            }}
                        />
                        {errors.otp && <p className="text-red-500 text-[12px] text-center">{errors.otp.message}</p>}

                        <div className="text-center text-[13px] text-[#8A9BB5]">
                            Didn't receive it?{" "}
                            {countdown > 0 ? (
                                <span>Resend in 0:{countdown.toString().padStart(2, "0")}</span>
                            ) : (
                                <button onClick={startCountdown} className="text-[#4F8EF7] hover:underline">
                                    Resend Code
                                </button>
                            )}
                        </div>
                        <button
                            onClick={handleVerifyOTP}
                            disabled={watchOtp?.length !== 6 || isLoading}
                            className="w-full h-[50px] bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] rounded-[10px] text-white text-[15px] font-semibold flex items-center justify-center hover:brightness-110 disabled:opacity-50 transition-all"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Verify Code"}
                        </button>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="space-y-6"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-[28px] font-bold text-white mb-2">Set New Password</h2>
                            <p className="text-[#8A9BB5] text-[15px]">Choose a strong password</p>
                        </div>
                        <div>
                            <PasswordField
                                label="New Password"
                                {...register("newPassword")}
                                error={errors.newPassword?.message}
                            />
                            <PasswordStrength password={watchNewPassword} />
                        </div>
                        <div className="relative">
                            <PasswordField
                                label="Confirm New Password"
                                {...register("confirmNewPassword")}
                                error={errors.confirmNewPassword?.message}
                            />
                            {watchConfirmPassword && watchNewPassword && (
                                <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none mt-[8px]"> {/* mt to offset label */}
                                    {watchConfirmPassword === watchNewPassword ? (
                                        <Check size={18} className="text-green-500" />
                                    ) : (
                                        <X size={18} className="text-red-500" />
                                    )}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={handleResetPassword}
                            disabled={!watchNewPassword || !watchConfirmPassword || !!errors.newPassword || watchNewPassword !== watchConfirmPassword || isLoading}
                            className="w-full h-[50px] bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] rounded-[10px] text-white text-[15px] font-semibold flex items-center justify-center hover:brightness-110 disabled:opacity-50 transition-all"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Reset Password"}
                        </button>
                    </motion.div>
                )}

                {step === "success" && (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8 space-y-6"
                    >
                        <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 size={40} className="text-green-500" />
                        </div>
                        <div>
                            <h2 className="text-[24px] font-bold text-white mb-2">Password Reset Successfully!</h2>
                            <p className="text-[#8A9BB5] text-[15px]">You can now login with your new password.</p>
                        </div>
                        <button
                            onClick={() => switchView("login")}
                            className="w-full h-[50px] bg-white/10 border border-white/20 rounded-[10px] text-white text-[15px] font-semibold hover:bg-white/20 transition-all"
                        >
                            Back to Login
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
