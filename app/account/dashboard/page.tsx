"use client";

import Link from "next/link";
import AccountSidebar from "@/components/AccountSidebar";
import { useEffect, useState } from "react";

export default function DashboardPage() {
    const [userName, setUserName] = useState("Guest");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [memberSince, setMemberSince] = useState("");
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        // Load user details
        const savedDetails = JSON.parse(localStorage.getItem('roundmart_user_details') || '{}');
        const savedName = localStorage.getItem('roundmart_user_name');

        if (savedName) setUserName(savedName);
        if (savedDetails.email) setUserEmail(savedDetails.email);
        if (savedDetails.phone) setUserPhone(savedDetails.phone);

        // Load orders
        const savedOrders = JSON.parse(localStorage.getItem('roundmart_orders') || '[]');
        setOrders(savedOrders);

        // Calculate member since date
        if (savedOrders.length > 0) {
            // Get the earliest order date
            const dates = savedOrders.map((o: any) => new Date(o.date).getTime());
            const earliestDate = new Date(Math.min(...dates));
            setMemberSince(earliestDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
        } else if (savedDetails.registeredAt) {
            // If user registered via contact/form
            const regDate = new Date(savedDetails.registeredAt);
            setMemberSince(regDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
        } else {
            // New user - show current date
            setMemberSince(new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
        }
    }, []);

    return (
        <main className="flex h-full w-full flex-1">
            <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-8 sm:px-6 lg:px-8">
                <AccountSidebar />

                {/* Main Content */}
                <div className="flex flex-1 flex-col gap-8">
                    {/* Page Heading */}
                    <div>
                        <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">
                            Welcome back, {userName}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* Left Column */}
                        <div className="flex flex-col gap-8 lg:col-span-2">
                            {/* Recent Orders */}
                            <div className="flex flex-col rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-background-dark/50 shadow-sm">
                                <h2 className="border-b border-gray-200 px-6 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-gray-900 dark:border-gray-800 dark:text-white">
                                    Recent Orders
                                </h2>
                                <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
                                    {orders.length > 0 ? (
                                        orders.map((order) => (
                                            <div key={order.id} className="flex items-center justify-between gap-4 p-6">
                                                <div className="flex items-start gap-4 flex-1 group">
                                                    <Link href={order.items?.[0]?.id ? `/product/${order.items[0].id}` : '/account/orders'}>
                                                        <div
                                                            className="h-[70px] w-[70px] flex-shrink-0 rounded-lg bg-cover bg-center bg-no-repeat border border-gray-100 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 transition-transform hover:scale-105"
                                                            style={{
                                                                backgroundImage: order.items?.[0]?.image ? `url("${order.items[0].image}")` : 'none',
                                                            }}
                                                        ></div>
                                                    </Link>
                                                    <Link href={`/account/orders?highlight=${order.id}`} className="flex flex-1 flex-col justify-center cursor-pointer">
                                                        <p className="text-base font-medium leading-normal text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                                            Order {order.id}
                                                        </p>
                                                        <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">
                                                            ₹{order.total.toLocaleString('en-IN')}
                                                        </p>
                                                        <div className="mt-1 flex items-center gap-2">
                                                            <div className={`h-2 w-2 rounded-full ${order.status === 'Delivered' ? 'bg-green-500' : 'bg-orange-400'}`}></div>
                                                            <p className="text-sm font-normal leading-normal text-gray-500 dark:text-gray-400">
                                                                {order.status}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <Link
                                                    href={order.items?.[0]?.id ? `/product/${order.items[0].id}` : '/account/orders'}
                                                    className="hidden text-sm font-medium text-primary hover:underline sm:block"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-6 text-center text-gray-500 dark:text-gray-400">
                                            No recent orders found.
                                        </div>
                                    )}
                                </div>
                                <div className="border-t border-gray-200 p-4 text-center dark:border-gray-800">
                                    <Link
                                        className="text-sm font-medium text-primary hover:underline"
                                        href="/account/orders"
                                    >
                                        View All Orders
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col gap-8">
                            {/* Account Details */}
                            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-background-dark/50">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    Account Details
                                </h3>
                                <div className="flex flex-col gap-2 text-sm">
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        {userName}
                                    </p>
                                    {(userEmail || userPhone) && (
                                        <p className="text-gray-500 dark:text-gray-400">
                                            {userEmail || userPhone}
                                        </p>
                                    )}
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Member since: {memberSince}
                                    </p>
                                </div>
                                <Link
                                    href="/account/profile"
                                    className="mt-2 w-full rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 text-center"
                                >
                                    Update Information
                                </Link>
                            </div>

                            {/* Quick Actions */}
                            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-background-dark/50">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    Quick Actions
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <Link
                                        className="flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-4 text-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        href="/account/profile"
                                    >
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            badge
                                        </span>
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                            Edit Profile
                                        </span>
                                    </Link>
                                    <Link
                                        className="flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-4 text-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        href="/account/addresses"
                                    >
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            pin_drop
                                        </span>
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                            Manage Addresses
                                        </span>
                                    </Link>
                                    <Link
                                        className="flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-4 text-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        href="/account/wishlist"
                                    >
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            favorite
                                        </span>
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                            View Wishlist
                                        </span>
                                    </Link>
                                    <Link
                                        className="flex flex-col items-center gap-2 rounded-lg bg-gray-100 p-4 text-center hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                        href="#"
                                    >
                                        <span className="material-symbols-outlined text-primary text-3xl">
                                            security
                                        </span>
                                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                            Security
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
