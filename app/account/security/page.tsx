"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function SecurityPage() {
    const [userName, setUserName] = useState("Guest");
    const [userEmail, setUserEmail] = useState("");
    const [userInitials, setUserInitials] = useState("G");

    // Security States
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleUpdatePassword = () => {
        // Reset states
        setError("");
        setShowSuccess(false);

        // Validation
        if (!newPassword || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (newPassword.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        // Simulate API call and success
        setShowSuccess(true);

        // Clear fields after success
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");

        // Hide success message after 3 seconds
        setTimeout(() => {
            setShowSuccess(false);
        }, 3000);
    };

    useEffect(() => {
        const savedDetails = JSON.parse(localStorage.getItem('roundmart_user_details') || '{}');
        const savedName = localStorage.getItem('roundmart_user_name') || "Guest";

        setUserName(savedName);
        setUserEmail(savedDetails.email || "");

        // Generate initials
        const nameParts = savedName.split(' ');
        const initials = nameParts.length > 1
            ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
            : savedName.substring(0, 2).toUpperCase();
        setUserInitials(initials);
    }, []);

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Sidebar Navigation */}
                <aside className="md:col-span-1">
                    <div className="flex h-full flex-col justify-between p-4">
                        <div className="flex flex-col gap-4">
                            {/* User Profile */}
                            <div className="flex gap-3 items-center">
                                <div className="flex items-center justify-center size-10 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white font-bold text-sm">
                                    {userInitials}
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">
                                        {userName}
                                    </h1>
                                    {userEmail && (
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                                            {userEmail}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex flex-col gap-2 mt-4">
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="/account/profile"
                                >
                                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300" style={{ fontSize: "24px" }}>
                                        person
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Profile</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary"
                                    href="/account/security"
                                >
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "24px" }}>
                                        shield
                                    </span>
                                    <p className="text-sm font-medium leading-normal">Security</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="/account/preferences"
                                >
                                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300" style={{ fontSize: "24px" }}>
                                        tune
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Preferences</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="/account/dashboard"
                                >
                                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300" style={{ fontSize: "24px" }}>
                                        logout
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Account</p>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </aside>

                {/* Content Section */}
                <div className="md:col-span-3">
                    <div className="flex flex-col space-y-8">
                        {/* Page Heading */}
                        <div className="mb-6">
                            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                Security
                            </h1>
                        </div>

                        {/* Change Password Form */}
                        <div className="space-y-6 relative">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Change Password</h2>

                            {/* Success Message Animation - Ultra Premium Design */}
                            {showSuccess && (
                                <div className="absolute inset-0 flex items-center justify-center z-50 animate-in fade-in duration-700 ease-out">
                                    {/* Premium Backdrop with Glassmorphism */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-gray-50/70 dark:from-gray-900/70 dark:via-gray-900/60 dark:to-black/70 backdrop-blur-2xl rounded-xl" />

                                    {/* Success Card */}
                                    <div className="relative flex flex-col items-center gap-6 p-12 bg-gradient-to-br from-white/95 via-white/90 to-white/95 dark:from-gray-800/95 dark:via-gray-800/90 dark:to-gray-900/95 rounded-[2rem] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.6)] border border-white/60 dark:border-gray-700/40 backdrop-blur-xl animate-in zoom-in-95 duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] min-w-[320px]">

                                        {/* Animated Success Icon */}
                                        <div className="relative">
                                            {/* Outer Glow Ring */}
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 blur-2xl opacity-40 animate-pulse" />

                                            {/* Icon Container with Gradient */}
                                            <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 shadow-[0_8px_32px_-8px_rgba(16,185,129,0.6)] dark:shadow-[0_8px_32px_-8px_rgba(16,185,129,0.8)] animate-in zoom-in-50 duration-700 delay-150 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                                {/* Inner Highlight */}
                                                <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/20 to-transparent" />

                                                {/* Checkmark */}
                                                <svg
                                                    className="w-12 h-12 text-white animate-in zoom-in-0 duration-500 delay-300 ease-out"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        d="M5 13l4 4L19 7"
                                                        className="animate-[dash_0.6s_ease-in-out_0.3s_forwards]"
                                                        style={{
                                                            strokeDasharray: 20,
                                                            strokeDashoffset: 20,
                                                        }}
                                                    />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex flex-col gap-2 text-center animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300 ease-out">
                                            <h3 className="text-2xl font-bold tracking-tight bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                                                Success
                                            </h3>
                                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 max-w-[240px] leading-relaxed">
                                                Your password has been updated successfully
                                            </p>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-2xl" />
                                        <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-xl" />
                                    </div>
                                </div>
                            )}

                            <style jsx>{`
                                @keyframes dash {
                                    to {
                                        stroke-dashoffset: 0;
                                    }
                                }
                            `}</style>

                            <div className="grid grid-cols-1 gap-6 max-w-md">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                        placeholder="Enter current password"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                                        value={newPassword}
                                        onChange={(e) => {
                                            setNewPassword(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter new password"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        className={`block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4 ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                                        value={confirmPassword}
                                        onChange={(e) => {
                                            setConfirmPassword(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Confirm new password"
                                    />
                                    {error && (
                                        <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">error</span>
                                            {error}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <button
                                onClick={handleUpdatePassword}
                                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                            >
                                <span className="truncate">Update Password</span>
                            </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-800" />

                        {/* Two-Factor Authentication */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Two-Factor Authentication</h2>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                                    Add an extra layer of security to your account.
                                </p>
                            </div>
                            <button
                                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${twoFactorEnabled ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}
                            >
                                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${twoFactorEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
                            </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-800" />

                        {/* Delete Account */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-red-600">Delete Account</h2>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                Once you delete your account, there is no going back. Please be certain.
                            </p>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-red-50 dark:bg-red-900/20 text-red-600 text-sm font-bold leading-normal tracking-[0.015em] border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40">
                                <span className="truncate">Delete Account</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
