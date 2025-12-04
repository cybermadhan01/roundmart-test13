"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountSidebar() {
    const pathname = usePathname();

    const navItems = [
        {
            href: "/account/dashboard",
            icon: "dashboard",
            label: "Dashboard",
            filled: true,
        },
        {
            href: "/account/orders",
            icon: "receipt_long",
            label: "My Orders",
            filled: false,
        },
        {
            href: "/account/profile",
            icon: "person",
            label: "Profile Settings",
            filled: false,
        },
        {
            href: "/account/addresses",
            icon: "home",
            label: "Addresses",
            filled: false,
        },
        {
            href: "/account/payment",
            icon: "payment",
            label: "Payment Methods",
            filled: false,
        },
        {
            href: "/account/wishlist",
            icon: "favorite",
            label: "Wishlist",
            filled: false,
        },
    ];

    return (
        <aside className="hidden w-64 flex-col gap-8 lg:flex">
            {/* User Profile */}
            <div className="flex items-center gap-3">
                <div
                    className="h-12 w-12 rounded-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            'url("https://cdn.usegalileo.ai/sdxl10/d5e8f5f8-74b7-4a22-9a5c-dc2d5b724b0f.png")',
                    }}
                ></div>
                <div className="flex flex-col">
                    <h1 className="text-base font-medium leading-normal text-gray-900 dark:text-white">
                        Alex Doe
                    </h1>
                    <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">
                        alex.doe@email.com
                    </p>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 ${isActive
                                    ? "bg-primary/10 dark:bg-primary/20"
                                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                        >
                            <span
                                className={`material-symbols-outlined text-2xl ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300"
                                    }`}
                                style={{
                                    fontVariationSettings: isActive && item.filled ? "'FILL' 1" : "'FILL' 0",
                                }}
                            >
                                {item.icon}
                            </span>
                            <p
                                className={`text-sm font-medium leading-normal ${isActive ? "text-primary" : "text-gray-700 dark:text-gray-300"
                                    }`}
                            >
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </nav>

            {/* Sign Out */}
            <div className="mt-auto">
                <Link
                    href="/"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    <span className="material-symbols-outlined text-gray-700 dark:text-gray-300 text-2xl">
                        logout
                    </span>
                    <p className="text-sm font-medium leading-normal text-gray-700 dark:text-gray-300">
                        Sign Out
                    </p>
                </Link>
            </div>
        </aside>
    );
}
