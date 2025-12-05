"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PreferencesPage() {
    const [userName, setUserName] = useState("Guest");
    const [userEmail, setUserEmail] = useState("");
    const [userInitials, setUserInitials] = useState("G");

    // Preference States
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [marketingEmails, setMarketingEmails] = useState(true);

    // Global Language Context
    const { language, setLanguage, currency, setCurrency, t } = useLanguage();

    const [showSaveSuccess, setShowSaveSuccess] = useState(false);

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

    const handleSavePreferences = () => {
        // Persistence is handled by the context provider's logic when we update the state
        // But we need to explicitly save the preference with timestamp here as per requirement

        const expiryTime = Date.now() + (10 * 60 * 1000); // 10 minutes from now
        const prefsToSave = {
            savedLanguage: language,
            savedCurrency: currency,
            expiryTime: expiryTime
        };
        localStorage.setItem('roundmart_language_preference', JSON.stringify(prefsToSave));

        setShowSaveSuccess(true);

        // Hide success message after 3 seconds
        setTimeout(() => {
            setShowSaveSuccess(false);
        }, 3000);
    };

    const handleCancel = () => {
        // Reset to defaults and clear localStorage
        setLanguage("en-IN");
        setCurrency("inr");
        localStorage.removeItem('roundmart_language_preference');
    };

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
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">{t.profile}</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="/account/security"
                                >
                                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300" style={{ fontSize: "24px" }}>
                                        shield
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">{t.security}</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary"
                                    href="/account/preferences"
                                >
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "24px" }}>
                                        tune
                                    </span>
                                    <p className="text-sm font-medium leading-normal">{t.preferences}</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="/account/dashboard"
                                >
                                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300" style={{ fontSize: "24px" }}>
                                        logout
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">{t.account}</p>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </aside>

                {/* Content Section */}
                <div className="md:col-span-3">
                    <div className="flex flex-col space-y-8 relative">
                        {/* Success Message Animation */}
                        {showSaveSuccess && (
                            <div className="fixed inset-0 flex items-center justify-center z-50 animate-in fade-in duration-500 ease-out">
                                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowSaveSuccess(false)} />
                                <div className="relative flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/95 dark:from-gray-800/95 dark:via-gray-800/90 dark:to-gray-900/95 rounded-[2rem] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-15px_rgba(0,0,0,0.6)] border border-white/60 dark:border-gray-700/40 backdrop-blur-xl animate-in zoom-in-95 duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] min-w-[250px]">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 blur-2xl opacity-40 animate-pulse" />
                                        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 via-green-500 to-green-600 shadow-[0_8px_32px_-8px_rgba(16,185,129,0.6)] dark:shadow-[0_8px_32px_-8px_rgba(16,185,129,0.8)] animate-in zoom-in-50 duration-700 delay-150 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                            <div className="absolute inset-[2px] rounded-full bg-gradient-to-br from-white/20 to-transparent" />
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 text-center animate-in slide-in-from-bottom-4 fade-in duration-700 delay-300 ease-out">
                                        <h3 className="text-xl font-bold tracking-tight bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                                            {t.preferencesSaved}
                                        </h3>
                                    </div>
                                    {/* Close Button - Moved to end and forced absolute */}
                                    <button
                                        onClick={() => setShowSaveSuccess(false)}
                                        className="!absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors z-10"
                                    >
                                        <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 text-lg">close</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Page Heading */}
                        <div className="mb-6">
                            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                {t.preferences}
                            </h1>
                        </div>

                        {/* Notifications */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.notifications}</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-base font-medium text-gray-900 dark:text-white">{t.emailNotifications}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.emailNotificationsDesc}</p>
                                    </div>
                                    <button
                                        onClick={() => setEmailNotifications(!emailNotifications)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${emailNotifications ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-base font-medium text-gray-900 dark:text-white">{t.smsNotifications}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.smsNotificationsDesc}</p>
                                    </div>
                                    <button
                                        onClick={() => setSmsNotifications(!smsNotifications)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${smsNotifications ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${smsNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-base font-medium text-gray-900 dark:text-white">{t.marketingEmails}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{t.marketingEmailsDesc}</p>
                                    </div>
                                    <button
                                        onClick={() => setMarketingEmails(!marketingEmails)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${marketingEmails ? 'bg-primary' : 'bg-gray-200 dark:bg-gray-700'}`}
                                    >
                                        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${marketingEmails ? 'translate-x-6' : 'translate-x-1'}`} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-800" />

                        {/* Regional Settings */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{t.regionalSettings}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t.language}
                                    </label>
                                    <select
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}
                                    >
                                        <option value="ta">Tamil (தமிழ்)</option>
                                        <option value="en-IN">English (India)</option>
                                        <option value="hi">Hindi (हिंदी)</option>
                                        <option value="bn">Bengali (বাংলা)</option>
                                        <option value="te">Telugu (తెలుగు)</option>
                                        <option value="mr">Marathi (मराठी)</option>
                                        <option value="gu">Gujarati (ગુજરાતી)</option>
                                        <option value="kn">Kannada (ಕನ್ನಡ)</option>
                                        <option value="ml">Malayalam (മലയാളം)</option>
                                        <option value="pa">Punjabi (ਪੰਜਾਬੀ)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        {t.currency}
                                    </label>
                                    <select
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                    >
                                        <option value="inr">INR (₹)</option>
                                        <option value="usd">USD ($)</option>
                                        <option value="eur">EUR (€)</option>
                                        <option value="gbp">GBP (£)</option>
                                        <option value="jpy">JPY (¥)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-800" />

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={handleCancel}
                                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                            >
                                <span className="truncate">{t.cancel}</span>
                            </button>
                            <button
                                onClick={handleSavePreferences}
                                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                            >
                                <span className="truncate">{t.savePreferences}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
