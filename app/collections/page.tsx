"use client";

import Link from "next/link";
import { products } from "@/data/products";
import { useState } from "react";

export default function Collections() {
    const [sortBy, setSortBy] = useState<'Mixed' | 'Newest' | 'Rating' | 'Trending'>('Mixed');
    const [isSortOpen, setIsSortOpen] = useState(false);

    // Sort products
    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === 'Rating') {
            return b.rating - a.rating;
        }
        if (sortBy === 'Trending') {
            // Prioritize 'Trending' and 'Hot' badges
            const aTrend = a.badge === 'Trending' || a.badge === 'Hot' ? 1 : 0;
            const bTrend = b.badge === 'Trending' || b.badge === 'Hot' ? 1 : 0;
            if (aTrend !== bTrend) return bTrend - aTrend;
            return b.rating - a.rating; // Fallback to rating
        }
        if (sortBy === 'Newest') {
            return Number(b.id) - Number(a.id);
        }
        // Default to Mixed (Deterministic Shuffle)
        // Using a simple hash of the ID to create a consistent "random" order
        const hashA = (Number(a.id) * 2654435761) % 4294967296;
        const hashB = (Number(b.id) * 2654435761) % 4294967296;
        return hashA - hashB;
    });

    return (
        <main className="px-4 sm:px-6 lg:px-10 py-10 bg-background-light dark:bg-background-dark min-h-screen">
            <div className="mx-auto max-w-screen-2xl">
                <div className="flex flex-col gap-8">
                    {/* PageHeading & Chips Components */}
                    <div className="flex flex-row items-end justify-between gap-4 mb-12">
                        <div className="flex flex-col min-w-0">
                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white mb-2 truncate">
                                All Products
                            </h1>
                        </div>
                        <div className="flex items-center mb-2 shrink-0 relative">
                            <button
                                onClick={() => setIsSortOpen(!isSortOpen)}
                                className="flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all shadow-sm group min-w-[140px] justify-between"
                            >
                                <span className="text-sm font-bold text-neutral-900 dark:text-white">
                                    {sortBy}
                                </span>
                                <span className={`material-symbols-outlined text-xl text-neutral-900 dark:text-white transition-transform duration-300 ${isSortOpen ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>

                            {/* Dropdown Menu */}
                            {isSortOpen && (
                                <div className="absolute top-full right-0 mt-2 w-full min-w-[160px] bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl shadow-xl overflow-hidden z-20 p-1">
                                    {['Mixed', 'Newest', 'Rating', 'Trending'].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => {
                                                setSortBy(option as any);
                                                setIsSortOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${sortBy === option ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white' : 'text-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'}`}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ImageGrid Component */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                        {sortedProducts.map((product) => (
                            <Link href={`/product/${product.id}`} key={product.id} className="flex flex-col gap-3 group">
                                <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden aspect-[2/3] relative shadow-sm hover:shadow-2xl transition-all duration-300 ease-out group-hover:-translate-y-1">
                                    <div
                                        className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url("${product.image}")` }}
                                    ></div>

                                    {/* Top Left Badge (Overlay) */}
                                    {product.badge && (
                                        <div className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                                            {product.badge === 'New' ? 'New Arrival' : product.badge}
                                        </div>
                                    )}

                                    {/* Bottom Left Rating (Overlay) */}
                                    <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md px-1.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-400 text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-[10px] font-bold text-neutral-900 dark:text-white">{product.rating}</span>
                                        <span className="text-neutral-300 dark:text-neutral-600 text-[10px]">|</span>
                                        <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">{product.reviewCount}</span>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="px-1">
                                    <h3 className="font-medium text-sm text-neutral-700 dark:text-neutral-200 truncate mb-1">{product.name}</h3>
                                    <div className="flex items-baseline gap-2">
                                        <span className="font-bold text-base text-neutral-900 dark:text-white">{product.price}</span>
                                        <span className="text-xs text-neutral-400 line-through">₹3,999</span>
                                        <span className="text-xs font-bold text-green-600 dark:text-green-400">45% OFF</span>
                                    </div>
                                    <p className="text-[10px] text-purple-600 dark:text-purple-400 font-medium mt-1">Lowest price in last 30 days</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Section 1: Recommended Products (Horizontal Scroll) */}
                    <div className="mt-24">
                        <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-8 tracking-tighter">Recommended for You</h2>
                        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
                            {products.slice(0, 5).map((product) => (
                                <Link href={`/product/${product.id}`} key={`rec-${product.id}`} className="min-w-[280px] md:min-w-[320px] snap-center group flex flex-col gap-3">
                                    <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden aspect-[2/3] relative shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                                        <div
                                            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url("${product.image}")` }}
                                        ></div>

                                        {/* Overlay Badges */}
                                        <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded-sm shadow-sm text-[10px] font-bold uppercase tracking-wider">
                                            Recommended
                                        </div>

                                        {/* Bottom Left Rating (Overlay) */}
                                        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md px-1.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-yellow-400 text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            <span className="text-[10px] font-bold text-neutral-900 dark:text-white">{product.rating}</span>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="px-1">
                                        <h3 className="font-medium text-sm text-neutral-700 dark:text-neutral-200 truncate mb-1">{product.name}</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-bold text-base text-neutral-900 dark:text-white">{product.price}</span>
                                            <span className="text-xs text-neutral-400 line-through">₹2,499</span>
                                            <span className="text-xs font-bold text-green-600 dark:text-green-400">30% OFF</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Section 2: Limited Stock (Grid with Pulse) */}
                    <div className="mt-12">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-black text-neutral-900 dark:text-white tracking-tighter">Limited Stock</h2>
                            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider rounded-full animate-pulse flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                Selling Fast
                            </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {products.slice(5, 9).map((product) => (
                                <Link href={`/product/${product.id}`} key={`lim-${product.id}`} className="flex flex-col gap-3 group">
                                    <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden aspect-[2/3] relative shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-neutral-800">
                                        <div
                                            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                            style={{ backgroundImage: `url("${product.image}")` }}
                                        ></div>
                                        <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-red-500 shadow-sm">
                                            Only {(Number(product.id) % 5) + 1} left
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-neutral-900 dark:text-white truncate">{product.name}</h3>
                                        <div className="w-full h-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full mt-2 overflow-hidden mb-1">
                                            <div className="h-full bg-red-500 w-[80%] rounded-full"></div>
                                        </div>
                                        <p className="text-[10px] text-red-500 font-bold">Almost Gone!</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Section 3: Trusted & Fast Shipping (Highlighted) */}
                    <div className="mt-24 mb-12">
                        <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-8 tracking-tighter">Trusted & Fast Shipping</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {products.slice(9, 12).map((product) => (
                                <Link href={`/product/${product.id}`} key={`trust-${product.id}`} className="group relative overflow-hidden rounded-3xl bg-neutral-50 dark:bg-neutral-900 p-6 flex items-center gap-6 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-neutral-100 dark:hover:border-neutral-700">
                                    <div className="w-24 h-32 shrink-0 rounded-2xl bg-cover bg-center shadow-md group-hover:scale-105 transition-transform duration-500 aspect-[2/3]" style={{ backgroundImage: `url("${product.image}")` }}></div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="material-symbols-outlined text-green-500 text-lg">local_shipping</span>
                                            <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">Next Day Delivery</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-neutral-900 dark:text-white leading-tight">{product.name}</h3>
                                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Verified Seller ✅</p>
                                    </div>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                                        <span className="material-symbols-outlined text-3xl text-neutral-300 dark:text-neutral-600">chevron_right</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </main>
    );
}
