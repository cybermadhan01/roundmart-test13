"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
    const [formData, setFormData] = useState({
        fullName: "Alex Doe",
        email: "alex.doe@email.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
    });

    return (
        <main className="flex-1 w-full max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Sidebar Navigation */}
                <aside className="md:col-span-1">
                    <div className="flex h-full flex-col justify-between p-4">
                        <div className="flex flex-col gap-4">
                            {/* User Profile */}
                            <div className="flex gap-3 items-center">
                                <div
                                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                                    style={{
                                        backgroundImage:
                                            'url("https://cdn.usegalileo.ai/sdxl10/d5e8f5f8-74b7-4a22-9a5c-dc2d5b724b0f.png")',
                                    }}
                                ></div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">
                                        Alex Doe
                                    </h1>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                                        alex.doe@email.com
                                    </p>
                                </div>
                            </div>

                            {/* Nav Links */}
                            <nav className="flex flex-col gap-2 mt-4">
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary"
                                    href="/account/profile"
                                >
                                    <span
                                        className="material-symbols-outlined text-primary"
                                        style={{ fontSize: "24px" }}
                                    >
                                        person
                                    </span>
                                    <p className="text-sm font-medium leading-normal">Profile</p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="#"
                                >
                                    <span
                                        className="material-symbols-outlined text-gray-700 dark:text-gray-300"
                                        style={{ fontSize: "24px" }}
                                    >
                                        shield
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                                        Security
                                    </p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="#"
                                >
                                    <span
                                        className="material-symbols-outlined text-gray-700 dark:text-gray-300"
                                        style={{ fontSize: "24px" }}
                                    >
                                        tune
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                                        Preferences
                                    </p>
                                </Link>
                                <Link
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="/account/dashboard"
                                >
                                    <span
                                        className="material-symbols-outlined text-gray-700 dark:text-gray-300"
                                        style={{ fontSize: "24px" }}
                                    >
                                        logout
                                    </span>
                                    <p className="text-gray-900 dark:text-white text-sm font-medium leading-normal">
                                        Account
                                    </p>
                                </Link>
                            </nav>
                        </div>
                    </div>
                </aside>

                {/* Content Section */}
                <div className="md:col-span-3">
                    <div className="flex flex-col space-y-8">
                        {/* Page Heading */}
                        <div>
                            <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                Profile
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-normal mt-2">
                                This information will be displayed publicly so be careful what
                                you share.
                            </p>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-800" />

                        {/* Profile Header & Uploader */}
                        <div className="flex">
                            <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                                <div className="flex gap-6 items-center">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-24 w-24 shrink-0"
                                        style={{
                                            backgroundImage:
                                                'url("https://cdn.usegalileo.ai/sdxl10/d5e8f5f8-74b7-4a22-9a5c-dc2d5b724b0f.png")',
                                        }}
                                    ></div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                            Profile Photo
                                        </p>
                                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                                            Update your photo and personal details.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] sm:w-auto">
                                        <span className="truncate">Delete</span>
                                    </button>
                                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] sm:w-auto">
                                        <span className="truncate">Upload</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-800" />

                        {/* Form */}
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        htmlFor="full-name"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                        id="full-name"
                                        name="full-name"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, fullName: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        htmlFor="email"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow-sm focus:border-primary focus:ring-primary text-gray-400 dark:text-gray-400 sm:text-sm h-11 px-4"
                                        id="email"
                                        name="email"
                                        readOnly
                                        type="email"
                                        value={formData.email}
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        htmlFor="phone"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                        htmlFor="location"
                                    >
                                        Location
                                    </label>
                                    <input
                                        className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                        id="location"
                                        name="location"
                                        type="text"
                                        value={formData.location}
                                        onChange={(e) =>
                                            setFormData({ ...formData, location: e.target.value })
                                        }
                                    />
                                </div>
                            </div>
                        </form>

                        <hr className="border-gray-200 dark:border-gray-800" />

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-4">
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Cancel</span>
                            </button>
                            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Save Changes</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
