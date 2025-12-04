"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function WishlistPage() {
    const [wishlistItems, setWishlistItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load wishlist from localStorage
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
            try {
                setWishlistItems(JSON.parse(storedWishlist));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
        setLoading(false);
    }, []);

    const removeFromWishlist = (id: number | string) => {
        const updatedWishlist = wishlistItems.filter(item => String(item.id) !== String(id));
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    if (loading) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-white dark:bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <main className="flex-1 bg-white dark:bg-black min-h-screen">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        My Wishlist
                        <span className="ml-3 text-lg font-normal text-gray-500 dark:text-gray-400">
                            ({wishlistItems.length} items)
                        </span>
                    </h1>
                </div>

                {wishlistItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-center bg-gray-50 dark:bg-neutral-900/50 rounded-3xl border border-dashed border-gray-200 dark:border-gray-800">
                        <div className="w-20 h-20 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-4xl text-gray-400">favorite_border</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Your wishlist is empty</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
                            Looks like you haven't added anything to your wishlist yet. Explore our products and save your favorites!
                        </p>
                        <Link
                            href="/collections"
                            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
                        >
                            Start Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => (
                            <div key={item.id} className="group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                {/* Image Container */}
                                <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <div
                                        className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    ></div>

                                    {/* Remove Button */}
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            removeFromWishlist(item.id);
                                        }}
                                        className="absolute top-3 left-3 w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-black shadow-lg text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all z-10 border border-gray-100 dark:border-gray-800"
                                        title="Remove from wishlist"
                                    >
                                        <span className="material-symbols-outlined text-lg">close</span>
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-1 mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        {item.price}
                                    </p>

                                    <Link
                                        href={`/product/${item.id}`}
                                        className="block w-full py-3 text-center bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl hover:bg-black dark:hover:bg-gray-100 transition-colors"
                                    >
                                        View Product
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
