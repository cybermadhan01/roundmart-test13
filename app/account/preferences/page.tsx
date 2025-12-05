"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function PreferencesPage() {
    const [userName, setUserName] = useState("Guest");
    const [userEmail, setUserEmail] = useState("");
    const [userInitials, setUserInitials] = useState("G");

    // Preference States
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);
    const [marketingEmails, setMarketingEmails] = useState(true);
    const [language, setLanguage] = useState("en-IN");
    const [currency, setCurrency] = useState("inr");

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
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="/account/security"
                                >
                                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300" style={{ fontSize: "24px" }}>
                                        shield
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">Security</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary"
                                    href="/account/preferences"
                                >
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: "24px" }}>
                                        tune
                                    </span>
                                    <p className="text-sm font-medium leading-normal">Preferences</p>
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
                                Preferences
                            </h1>
                        </div>

                        {/* Notifications */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-base font-medium text-gray-900 dark:text-white">Email Notifications</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive emails about your account activity.</p>
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
                                        <p className="text-base font-medium text-gray-900 dark:text-white">SMS Notifications</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive text messages for important updates.</p>
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
                                        <p className="text-base font-medium text-gray-900 dark:text-white">Marketing Emails</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Receive emails about new products and offers.</p>
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
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Regional Settings</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Language
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
                                        Currency
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
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Cancel</span>
                            </button>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Save Preferences</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
