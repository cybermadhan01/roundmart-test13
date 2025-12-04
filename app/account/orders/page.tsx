"use client";

import { useState } from "react";


export default function OrdersPage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="flex flex-col gap-8">
                {/* Page Heading */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                        Your Orders
                    </h2>
                </div>

                {/* Search Bar and Filter Chips */}
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <div className="relative w-full md:flex-1">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
                            search
                        </span>
                        <input
                            className="w-full rounded-lg border-none bg-white dark:bg-surface-dark py-3 pl-12 pr-4 text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark shadow-sm dark:shadow-md"
                            placeholder="Search all orders"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex w-full md:w-auto gap-2 overflow-x-auto pb-2">
                        <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-surface-dark px-4 shadow-sm dark:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <p className="text-sm font-medium">All Time</p>
                        </button>
                        <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-surface-dark px-4 shadow-sm dark:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <p className="text-sm font-medium">Last Year</p>
                        </button>
                        <button className="flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-surface-dark px-4 shadow-sm dark:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <p className="text-sm font-medium">Last 6 Months</p>
                        </button>
                    </div>
                </div>

                {/* Orders List */}
                <div className="flex flex-col gap-6">
                    {/* Order Card 1 */}
                    <div className="w-full overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm dark:shadow-md">
                        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Placed on October 26, 2023
                                </p>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Order #A1B2C3D4E5
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 sm:text-right">
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    $2,198.00
                                </p>
                                <div className="flex items-center gap-2 self-start sm:self-end">
                                    <span className="material-symbols-outlined text-lg text-green-500">
                                        check_circle
                                    </span>
                                    <p className="text-sm font-semibold text-green-500">
                                        Delivered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        className="h-20 w-20 rounded-lg object-cover bg-gray-100"
                                        src="https://cdn.usegalileo.ai/sdxl10/5c8e7f9a-3d2b-4e1a-8f6c-9b0d1e2a3c4d.png"
                                        alt="Product"
                                    />
                                    <img
                                        className="h-20 w-20 rounded-lg object-cover bg-gray-100"
                                        src="https://cdn.usegalileo.ai/sdxl10/3a9c5e7f-2d4b-4e8a-9f1c-6b7d8e9a0b1c.png"
                                        alt="Product"
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-base text-gray-500 dark:text-gray-400">
                                        Delivered on October 30, 2023
                                    </p>
                                    <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium transition-opacity hover:opacity-90">
                                        <span className="truncate">View Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Card 2 */}
                    <div className="w-full overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm dark:shadow-md">
                        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Placed on September 15, 2023
                                </p>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Order #F6G7H8I9J0
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 sm:text-right">
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    $1,299.00
                                </p>
                                <div className="flex items-center gap-2 self-start sm:self-end">
                                    <span className="material-symbols-outlined text-lg text-green-500">
                                        check_circle
                                    </span>
                                    <p className="text-sm font-semibold text-green-500">
                                        Delivered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        className="h-20 w-20 rounded-lg object-cover bg-gray-100"
                                        src="https://cdn.usegalileo.ai/sdxl10/7e50c7c4-8e29-4a3f-8b5f-9c3e2d1a4b6f.png"
                                        alt="Product"
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-base text-gray-500 dark:text-gray-400">
                                        Delivered on September 20, 2023
                                    </p>
                                    <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium transition-opacity hover:opacity-90">
                                        <span className="truncate">View Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Card 3 */}
                    <div className="w-full overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm dark:shadow-md">
                        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-800">
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Placed on July 02, 2023
                                </p>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Order #K1L2M3N4O5
                                </p>
                            </div>
                            <div className="flex flex-col gap-1 sm:text-right">
                                <p className="text-lg font-bold text-gray-900 dark:text-white">
                                    $999.00
                                </p>
                                <div className="flex items-center gap-2 self-start sm:self-end">
                                    <span className="material-symbols-outlined text-lg text-green-500">
                                        check_circle
                                    </span>
                                    <p className="text-sm font-semibold text-green-500">
                                        Delivered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex flex-col">
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        className="h-20 w-20 rounded-lg object-cover bg-gray-100"
                                        src="https://cdn.usegalileo.ai/sdxl10/9d1e2f3a-4b5c-6d7e-8f9a-0b1c2d3e4f5a.png"
                                        alt="Product"
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                                    <p className="text-base text-gray-500 dark:text-gray-400">
                                        Delivered on July 07, 2023
                                    </p>
                                    <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium transition-opacity hover:opacity-90">
                                        <span className="truncate">View Details</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center pt-8">
                    <nav className="flex items-center gap-2">
                        <button
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-surface-dark shadow-sm dark:shadow-md text-gray-500 dark:text-gray-400"
                            disabled
                        >
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-sm dark:shadow-md">
                            1
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-surface-dark text-sm font-medium shadow-sm dark:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            2
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-surface-dark text-sm font-medium shadow-sm dark:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            3
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white dark:bg-surface-dark shadow-sm dark:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </nav>
                </div>
            </div>
        </main>
    );
}
