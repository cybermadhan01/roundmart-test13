"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function OrdersContent() {
    const searchParams = useSearchParams();
    const highlightId = searchParams.get('highlight');
    const [searchQuery, setSearchQuery] = useState("");
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem('roundmart_orders') || '[]');
        setOrders(savedOrders);
    }, []);

    useEffect(() => {
        if (highlightId && orders.length > 0) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const element = document.getElementById(highlightId);
                if (element) {
                    // Custom slow smooth scroll
                    const elementRect = element.getBoundingClientRect();
                    const absoluteElementTop = elementRect.top + window.pageYOffset;
                    const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);

                    // Smooth slow scroll animation
                    const startPosition = window.pageYOffset;
                    const distance = middle - startPosition;
                    const duration = 1200; // 1.2 seconds for slow smooth scroll
                    let startTime: number | null = null;

                    const easeInOutCubic = (t: number): number => {
                        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    };

                    const animateScroll = (currentTime: number) => {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const progress = Math.min(timeElapsed / duration, 1);
                        const easeProgress = easeInOutCubic(progress);

                        window.scrollTo(0, startPosition + distance * easeProgress);

                        if (timeElapsed < duration) {
                            requestAnimationFrame(animateScroll);
                        } else {
                            // Add highlight effect after scroll completes
                            element.classList.add('ring-4', 'ring-primary/50', 'transition-all', 'duration-500');
                            setTimeout(() => {
                                element.classList.remove('ring-4', 'ring-primary/50');
                            }, 2500);
                        }
                    };

                    requestAnimationFrame(animateScroll);
                }
            }, 400);
        }
    }, [highlightId, orders]);

    const filteredOrders = orders.filter(order =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.some((item: any) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const getOrderState = (dateString: string) => {
        const orderDate = new Date(dateString);
        const now = new Date();
        const diffInHours = (now.getTime() - orderDate.getTime()) / (1000 * 60 * 60);

        let progress = 0;
        let currentStep = 0; // 0: Ordered, 1: Shipped, 2: Out for Delivery, 3: Delivered
        let statusText = "Processing";
        let statusColor = "text-orange-400";
        let dotColor = "bg-orange-400";

        if (diffInHours < 12) {
            // 0 - 12 Hours: Ordered -> Shipped
            progress = (diffInHours / 12) * 33;
            currentStep = 1; // Target is Shipped
            statusText = "Processing";
        } else if (diffInHours < 60) {
            // 12 - 60 Hours: Shipped -> Out for Delivery
            progress = 33 + ((diffInHours - 12) / 48) * 33;
            currentStep = 2; // Target is Out for Delivery
            statusText = "Shipped";
            statusColor = "text-blue-500";
            dotColor = "bg-blue-500";
        } else if (diffInHours < 72) {
            // 60 - 72 Hours: Out for Delivery -> Delivered
            progress = 66 + ((diffInHours - 60) / 12) * 34;
            currentStep = 3; // Target is Delivered
            statusText = "Out for Delivery";
            statusColor = "text-purple-500";
            dotColor = "bg-purple-500";
        } else {
            // > 72 Hours: Delivered
            progress = 100;
            currentStep = 4; // Completed
            statusText = "Delivered";
            statusColor = "text-green-500";
            dotColor = "bg-green-500";
        }

        return { progress, currentStep, statusText, statusColor, dotColor };
    };

    return (
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
            </div>

            {/* Orders List */}
            <div className="flex flex-col gap-6">
                {filteredOrders.length > 0 ? (
                    filteredOrders.map((order) => {
                        const { progress, currentStep, statusText, statusColor, dotColor } = getOrderState(order.date);

                        return (
                            <div key={order.id} id={order.id} className="w-full overflow-hidden rounded-xl bg-white dark:bg-surface-dark shadow-sm dark:shadow-md">
                                <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 dark:border-gray-800">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Placed on {new Date(order.date).toLocaleDateString()}
                                        </p>
                                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                            Order {order.id}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-1 sm:text-right">
                                        <p className="text-lg font-bold text-gray-900 dark:text-white">
                                            ₹{order.total.toLocaleString('en-IN')}
                                        </p>
                                        <div className="flex items-center gap-2 self-start sm:self-end">
                                            <div className={`h-2 w-2 rounded-full ${dotColor}`}></div>
                                            <p className={`text-sm font-semibold ${statusColor}`}>
                                                {statusText}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Order Tracker */}
                                <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                                    <div className="relative w-full py-4">
                                        {/* Progress Bar Background */}
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full z-0"></div>

                                        {/* Active Progress Bar */}
                                        <div
                                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1.5 bg-green-500 rounded-full z-0 transition-all duration-1000 ease-out"
                                            style={{ width: `${progress}%` }}
                                        ></div>

                                        <div className="relative z-10 flex justify-between w-full">
                                            {/* Step 1: Ordered */}
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 ring-4 ring-white dark:ring-surface-dark">
                                                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                                                </div>
                                                <p className="text-xs font-bold text-green-600 dark:text-green-400 mt-1">Ordered</p>
                                            </div>

                                            {/* Step 2: Shipped */}
                                            <div className="flex flex-col items-center gap-2">
                                                {currentStep > 1 ? (
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 ring-4 ring-white dark:ring-surface-dark">
                                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                                    </div>
                                                ) : currentStep === 1 ? (
                                                    <div className="relative flex items-center justify-center w-8 h-8">
                                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                                                        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/30 ring-4 ring-white dark:ring-surface-dark">
                                                            <span className="material-symbols-outlined text-sm font-bold">local_shipping</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 ring-4 ring-white dark:ring-surface-dark">
                                                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                                                    </div>
                                                )}
                                                <p className={`text-xs font-bold mt-1 ${currentStep > 1 ? 'text-green-600 dark:text-green-400' : currentStep === 1 ? 'text-orange-500 animate-pulse' : 'text-gray-400 dark:text-gray-500'}`}>
                                                    Shipped
                                                </p>
                                            </div>

                                            {/* Step 3: Out for Delivery */}
                                            <div className="flex flex-col items-center gap-2">
                                                {currentStep > 2 ? (
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 ring-4 ring-white dark:ring-surface-dark">
                                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                                    </div>
                                                ) : currentStep === 2 ? (
                                                    <div className="relative flex items-center justify-center w-8 h-8">
                                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                                                        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30 ring-4 ring-white dark:ring-surface-dark">
                                                            <span className="material-symbols-outlined text-sm font-bold">local_shipping</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 ring-4 ring-white dark:ring-surface-dark">
                                                        <span className="material-symbols-outlined text-sm">local_shipping</span>
                                                    </div>
                                                )}
                                                <p className={`text-xs font-medium mt-1 ${currentStep > 2 ? 'text-green-600 dark:text-green-400' : currentStep === 2 ? 'text-blue-500 animate-pulse' : 'text-gray-400 dark:text-gray-500'}`}>
                                                    Out for Delivery
                                                </p>
                                            </div>

                                            {/* Step 4: Delivered */}
                                            <div className="flex flex-col items-center gap-2">
                                                {currentStep > 3 ? (
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 ring-4 ring-white dark:ring-surface-dark">
                                                        <span className="material-symbols-outlined text-sm font-bold">check</span>
                                                    </div>
                                                ) : currentStep === 3 ? (
                                                    <div className="relative flex items-center justify-center w-8 h-8">
                                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                                                        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white shadow-lg shadow-purple-500/30 ring-4 ring-white dark:ring-surface-dark">
                                                            <span className="material-symbols-outlined text-sm font-bold">home</span>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-400 ring-4 ring-white dark:ring-surface-dark">
                                                        <span className="material-symbols-outlined text-sm">home</span>
                                                    </div>
                                                )}
                                                <p className={`text-xs font-medium mt-1 ${currentStep > 3 ? 'text-green-600 dark:text-green-400' : currentStep === 3 ? 'text-purple-500 animate-pulse' : 'text-gray-400 dark:text-gray-500'}`}>
                                                    Delivered
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-col">
                                        <div className="flex flex-wrap items-center gap-4 mb-6">
                                            {order.items.map((item: any, index: number) => (
                                                <Link key={index} href={`/product/${item.id}`}>
                                                    <div
                                                        className="h-20 w-20 rounded-lg bg-cover bg-center bg-no-repeat border border-gray-100 dark:border-gray-700"
                                                        style={{ backgroundImage: `url("${item.image}")` }}
                                                        title={item.name}
                                                    ></div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                                            <div className="flex flex-col gap-1">
                                                {order.items.map((item: any, index: number) => (
                                                    <p key={index} className="text-base text-gray-900 dark:text-white">
                                                        {item.name} {item.selectedColor ? `(${item.selectedColor})` : ''} x {item.quantity}
                                                    </p>
                                                ))}
                                            </div>
                                            <Link
                                                href={order.items?.[0]?.id ? `/product/${order.items[0].id}` : '/account/orders'}
                                                className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium transition-opacity hover:opacity-90"
                                            >
                                                <span className="truncate">View Details</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="p-12 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-surface-dark rounded-xl shadow-sm">
                        <p className="text-lg font-medium">No orders found</p>
                        <p className="mt-2">When you place orders, they will appear here.</p>
                        <Link href="/" className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90">
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function OrdersPage() {
    return (
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <Suspense fallback={<div>Loading orders...</div>}>
                <OrdersContent />
            </Suspense>
        </main>
    );
}
