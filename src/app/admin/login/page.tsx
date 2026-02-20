"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Loader2 } from "lucide-react";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isShaking, setIsShaking] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // TODO: Replace with real JWT / Supabase auth
        setTimeout(() => {
            if ((email === "admin@skylogix.com" || email === "chauhanparth165@gmail.com" || email === "vaibhavatios@gmail.com") && password === "admin123") {
                // Mock success
                localStorage.setItem("admin_token", "mock_token");
                router.push("/admin");
            } else {
                // Mock failure
                setError("Invalid credentials. Please try again.");
                setIsShaking(true);
                setTimeout(() => setIsShaking(false), 500); // Remove shake class
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <main className="min-h-screen w-full bg-[#060818] flex items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F8EF7]/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Login Card */}
            <div
                className={`relative z-10 w-full max-w-md p-8 bg-[#0A0F2C]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-transform ${isShaking ? "animate-[shake_0.5s_ease-in-out]" : ""
                    }`}
            >
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F8EF7] to-[#00C2FF] mx-auto mb-4 flex items-center justify-center shadow-lg shadow-[#4F8EF7]/20">
                        <Lock className="text-white w-6 h-6" />
                    </div>
                    <h1 className="text-2xl font-bold text-white mb-2">Admin Access Only</h1>
                    <p className="text-[#8A9BB5] text-sm">Sign in to manage Skylogix platform</p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-[#8A9BB5] text-xs font-semibold uppercase tracking-wider mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white placeholder:text-[#8A9BB5]/50 focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                                placeholder="admin@skylogix.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-[#8A9BB5] text-xs font-semibold uppercase tracking-wider mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9BB5]" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full h-[42px] bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 text-sm text-white placeholder:text-[#8A9BB5]/50 focus:outline-none focus:border-[#4F8EF7] focus:ring-1 focus:ring-[#4F8EF7] transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full h-[44px] mt-6 bg-[#4F8EF7] hover:bg-[#3b7ded] text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Authenticating...
                            </>
                        ) : (
                            "Sign In securely"
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-white/5 pt-6">
                    <p className="text-xs text-[#8A9BB5]">
                        Protected area. Unauthorized access is strictly prohibited and logged.
                    </p>
                </div>
            </div>

            {/* Inline styles for shake animation because generic classes might not exist in root */}
            <style jsx global>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-5px); }
                    40%, 80% { transform: translateX(5px); }
                }
            `}</style>
        </main>
    );
}
