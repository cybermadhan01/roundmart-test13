"use client";

import { useState } from "react";

export default function AuthPage() {
    const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="flex flex-1 justify-center items-center py-10 px-4">
            <div className="flex flex-col w-full max-w-md bg-white dark:bg-slate-900/50 rounded-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.3)]">
                <div className="flex flex-col p-8 sm:p-10 gap-8">
                    <div className="flex flex-wrap justify-between gap-3 p-0">
                        <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                            My Account
                        </p>
                    </div>

                    {/* Tab Toggle */}
                    <div className="flex px-0 py-0">
                        <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 p-1">
                            <button
                                onClick={() => setActiveTab("signin")}
                                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 transition-all ${activeTab === "signin"
                                        ? "bg-white dark:bg-slate-900 shadow-sm text-slate-900 dark:text-white"
                                        : "text-slate-500 dark:text-slate-400"
                                    } text-sm font-medium leading-normal`}
                            >
                                <span className="truncate">Sign In</span>
                            </button>
                            <button
                                onClick={() => setActiveTab("signup")}
                                className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 transition-all ${activeTab === "signup"
                                        ? "bg-white dark:bg-slate-900 shadow-sm text-slate-900 dark:text-white"
                                        : "text-slate-500 dark:text-slate-400"
                                    } text-sm font-medium leading-normal`}
                            >
                                <span className="truncate">Sign Up</span>
                            </button>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-6">
                        <div className="flex w-full flex-wrap items-end gap-4 px-0 py-0">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                                    Email Address
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800/50 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 px-4 text-sm font-normal leading-normal"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                            </label>
                        </div>
                        <div className="flex w-full flex-wrap items-end gap-4 px-0 py-0">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal pb-2">
                                    Password
                                </p>
                                <div className="flex w-full flex-1 items-stretch rounded-lg">
                                    <input
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800/50 focus:border-primary h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-4 rounded-r-none border-r-0 pr-2 text-sm font-normal leading-normal"
                                        placeholder="Enter your password"
                                        type={showPassword ? "text" : "password"}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-slate-400 dark:text-slate-500 flex border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-slate-800/50 items-center justify-center pr-4 rounded-r-lg border-l-0"
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            {showPassword ? "visibility_off" : "visibility"}
                                        </span>
                                    </button>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4">
                        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark">
                            {activeTab === "signin" ? "Sign In" : "Sign Up"}
                        </button>
                        {activeTab === "signin" && (
                            <a
                                className="text-center text-primary text-sm font-medium hover:underline"
                                href="#"
                            >
                                Forgot Password?
                            </a>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4">
                        <hr className="w-full border-t border-slate-200 dark:border-slate-800" />
                        <p className="text-slate-400 dark:text-slate-500 text-xs font-medium">
                            OR
                        </p>
                        <hr className="w-full border-t border-slate-200 dark:border-slate-800" />
                    </div>

                    {/* Social Login */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 text-sm font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">
                            <img
                                alt="Google logo"
                                className="h-5 w-5"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjycGO2jr27TYrBWZTW8oEREOEPYB5j8iP0LQ4vlso9LtElTAQaNB4hobtQ-azRY17k1-yO5P9DVLiaTXqujld6WNl5zQtWCCBYA_gl9K88qdwf-_wIccfziwcynSrbWbCJXKNZDj-lWBS6XyfWGAJSmXkIAWF-kic5tcoBx-19PVG0Sdlh6rtE6ttEIqy-4CsSeVyNGheszPB_WCoq1AWRKr4HO_IZHEAdffKExYAKwRMxzIJGICcHKGwTrBx5gNPPvIgKoGVWZRV"
                            />
                            Continue with Google
                        </button>
                        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-black px-4 text-sm font-medium text-white hover:bg-black/80">
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12.01 6.363c.27-.008.54-.012.81-.012.358 0 .71.01 1.058.025.18.008.358.016.533.025.43.02.85.06 1.25.134.42.08.82.203 1.19.37.33.15.63.34.89.57.26.23.47.5.63.8.14.28.23.59.28.9.04.28.06.56.06.84 0 .3-.02.59-.06.87-.05.3-.14.6-.28.9-.16.3-.37.57-.63.8-.26.23-.56.42-.89.57-.37.167-.77.29-1.19.37-.4.075-.82.115-1.25.134a4.12 4.12 0 01-1.058.025c-.27 0-.54.004-.81.012a21.43 21.43 0 01-2.5-.15c-1.25-.17-2.42-.6-3.44-1.28a5.2 5.2 0 01-1.8-2.06c-.39-.77-.6-1.63-.6-2.58 0-1.1.25-2.1.75-3 .48-.87 1.18-1.54 2.06-2.01.88-.47 1.88-.73 2.97-.77.84-.03 1.68-.02 2.52.03zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.18 14.23a1.2 1.2 0 01-.89.37c-.18 0-.35-.04-.51-.12a.92.92 0 01-.38-.32l-1.3-2.15c-.12-.22-.18-.46-.18-.73 0-.52.22-.96.65-1.3.43-.34.9-.51 1.4-.51.18 0 .36.03.53.08.17.05.3.13.4.23l.2.22 1.27 2.1c.12.2.18.43.18.68 0 .5-.21.93-.64 1.3-.43.37-.9.55-1.42.55z" />
                            </svg>
                            Continue with Apple
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
