"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { products } from "@/data/products";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState(products);
    const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Real-time search effect
    useEffect(() => {
        if (!searchQuery.trim()) {
            // If no query, show suggested/trending products (e.g., first 5)
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSearchResults(products.slice(0, 5));
            setIsSearching(false);
            return;
        }

        setIsSearching(true);

        // Simulate slight delay for realistic search experience
        const searchTimeout = setTimeout(() => {
            const query = searchQuery.toLowerCase();
            const filtered = products.filter((product) => {
                // Search in name, price, description, and ID
                return (
                    product.name.toLowerCase().includes(query) ||
                    product.price.toLowerCase().includes(query) ||
                    product.id.toString().includes(query) ||
                    product.description.toLowerCase().includes(query)
                );
            });

            setSearchResults(filtered);
            setIsSearching(false);
        }, 150);

        return () => clearTimeout(searchTimeout);
    }, [searchQuery]);

    // Focus input when modal opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
            // Reset to suggestions when opening
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setSearchQuery("");
            setSearchResults(products.slice(0, 5));
        }
    }, [isOpen]);

    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
                onClick={onClose}
            />

            {/* Search Modal */}
            <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
                <div className="mx-auto max-w-3xl px-4 pt-20">
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden">
                        {/* Search Input */}
                        <div className="flex items-center gap-4 p-6 border-b border-border-light dark:border-border-dark">
                            <span className="material-symbols-outlined text-2xl text-primary">search</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="flex-1 bg-transparent text-lg outline-none placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-background-light dark:hover:bg-background-dark transition-colors"
                                >
                                    <span className="material-symbols-outlined text-xl">close</span>
                                </button>
                            )}
                            <button
                                onClick={onClose}
                                className="flex items-center justify-center sm:gap-2 w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 rounded-lg bg-background-light dark:bg-background-dark hover:bg-border-light dark:hover:bg-border-dark transition-colors text-sm font-medium ml-auto"
                            >
                                <span className="hidden sm:inline">ESC</span>
                                <span className="material-symbols-outlined text-lg">close</span>
                            </button>
                        </div>

                        {/* Results */}
                        <div className="max-h-[60vh] overflow-y-auto">
                            {isSearching ? (
                                // Loading State
                                <div className="p-8 text-center">
                                    <div className="inline-block w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark">Searching...</p>
                                </div>
                            ) : searchResults.length > 0 ? (
                                // Results List
                                <div className="p-4">
                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4 px-2">
                                        {searchQuery ? `Found ${searchResults.length} result${searchResults.length === 1 ? "" : "s"}` : "Suggested Products"}
                                    </p>
                                    <div className="space-y-2">
                                        {searchResults.map((product, index) => (
                                            <Link
                                                key={product.id}
                                                href={`/product/${product.id}`}
                                                onClick={onClose}
                                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-all group animate-fade-in-up"
                                                style={{ animationDelay: `${index * 30}ms` }}
                                            >
                                                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-semibold text-base truncate group-hover:text-primary transition-colors">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark truncate">
                                                        {product.description}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <p className="font-bold text-primary">{product.price}</p>
                                                    <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark group-hover:translate-x-1 transition-transform">
                                                        arrow_forward
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                // No Results
                                <div className="p-8 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 dark:bg-red-500/20 mb-4">
                                        <span className="material-symbols-outlined text-3xl text-red-500">search_off</span>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">No Results Found</h3>
                                    <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                                        Try searching with different keywords
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
