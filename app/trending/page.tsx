"use client";

import Link from "next/link";
import { useState } from "react";

export default function TrendingPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    // Simulated trending products - random limited selection
    const trendingProducts = [
        {
            id: 1,
            name: "Wireless Headphones Pro",
            price: "₹6,200",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
            rating: 4.9,
            reviewCount: 1250,
            badge: "Hot"
        },
        {
            id: 2,
            name: "Smart Watch Ultra",
            price: "₹12,400",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
            rating: 4.8,
            reviewCount: 980,
            badge: "New"
        },
        {
            id: 3,
            name: "Premium Laptop Stand",
            price: "₹3,300",
            image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
            rating: 4.7,
            reviewCount: 650,
            badge: "Trending"
        },
        {
            id: 4,
            name: "Designer Sunglasses",
            price: "₹5,800",
            image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
            rating: 4.6,
            reviewCount: 520,
            badge: "Hot"
        },
        {
            id: 5,
            name: "Minimalist Wallet",
            price: "₹2,100",
            image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",
            rating: 4.5,
            reviewCount: 510,
            badge: "New"
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            price: "₹4,100",
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
            rating: 4.8,
            reviewCount: 890,
            badge: "Trending"
        },
        {
            id: 7,
            name: "Canvas Backpack",
            price: "₹3,700",
            image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
            rating: 4.7,
            reviewCount: 720,
            badge: "Hot"
        },
        {
            id: 8,
            name: "Ceramic Coffee Mug",
            price: "₹830",
            image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&h=500&fit=crop",
            rating: 4.6,
            reviewCount: 540,
            badge: "New"
        }
    ];

    return (
        <main className="flex-1 overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/10 via-background-light to-background-light dark:from-primary/5 dark:via-background-dark dark:to-background-dark border-b border-border-light dark:border-border-dark">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="text-center animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-sm font-medium mb-6">
                            <span className="material-symbols-outlined text-lg">local_fire_department</span>
                            Hot Right Now
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                            Trending Products
                        </h1>
                        <p className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                            Discover what&apos;s hot right now. Handpicked selection of our most popular items.
                        </p>
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="border-b border-border-light dark:border-border-dark sticky top-16 bg-background-light dark:bg-background-dark z-40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 overflow-x-auto">
                        {["all", "new", "hot", "trending"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeFilter === filter
                                    ? "bg-primary text-white"
                                    : "bg-card-light dark:bg-card-dark hover:bg-primary/10 dark:hover:bg-primary/20"
                                    }`}
                            >
                                {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {trendingProducts
                        .filter((product) =>
                            activeFilter === "all" ||
                            product.badge.toLowerCase() === activeFilter
                        )
                        .map((product, index) => (
                            <Link
                                key={product.id}
                                href={`/product/${product.id}`}
                                className="group animate-fade-in-up flex flex-col gap-3"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
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
                                        <span className="text-xs text-neutral-400 line-through">₹{parseInt(product.price.replace(/[^0-9]/g, '')) * 1.5}</span>
                                        <span className="text-xs font-bold text-green-600 dark:text-green-400">45% OFF</span>
                                    </div>
                                    <p className="text-[10px] text-purple-600 dark:text-purple-400 font-medium mt-1">Lowest price in last 30 days</p>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>
        </main>
    );
}
