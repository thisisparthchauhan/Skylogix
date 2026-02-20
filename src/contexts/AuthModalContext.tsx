"use client";

import React, { createContext, useState, ReactNode } from "react";

export type AuthView = "login" | "signup" | "forgot";

interface User {
    firstName: string;
    lastName: string;
    email: string;
}

interface AuthModalContextType {
    isOpen: boolean;
    currentView: AuthView;
    isLoggedIn: boolean;
    user: User | null;
    openLogin: () => void;
    openSignup: () => void;
    closeModal: () => void;
    switchView: (view: AuthView) => void;
    simulateLogin: (user: User) => void;
    logout: () => void;
}

export const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export function AuthModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentView, setCurrentView] = useState<AuthView>("login");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const openLogin = () => {
        setCurrentView("login");
        setIsOpen(true);
    };

    const openSignup = () => {
        setCurrentView("signup");
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => setCurrentView("login"), 300);
    };

    const switchView = (view: AuthView) => {
        setCurrentView(view);
    };

    const simulateLogin = (userData: User) => {
        setUser(userData);
        setIsLoggedIn(true);
        closeModal();
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };

    return (
        <AuthModalContext.Provider
            value={{
                isOpen,
                currentView,
                isLoggedIn,
                user,
                openLogin,
                openSignup,
                closeModal,
                switchView,
                simulateLogin,
                logout,
            }}
        >
            {children}
        </AuthModalContext.Provider>
    );
}
