"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import SearchModal from "./SearchModal";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const [showBottomNav, setShowBottomNav] = useState(false);
    const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const isHoveringBottomNav = useRef(false);

    // Global Translation
    const { t } = useLanguage();

    const startHideTimeout = useCallback(() => {
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = setTimeout(() => {
            // Hide Header if not at top and menu closed
            if (window.scrollY > 0 && !mobileMenuOpen) {
                setIsVisible(false);
            }

            // Hide Bottom Nav if not hovering
            if (!isHoveringBottomNav.current) {
                setShowBottomNav(false);
            }
        }, 2000);
    }, [mobileMenuOpen]);

    const handleInteractionStart = () => {
        isHoveringBottomNav.current = true;
        setShowBottomNav(true);
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };

    const handleInteractionEnd = () => {
        isHoveringBottomNav.current = false;
        startHideTimeout();
    };

    useEffect(() => {
        // Check initial theme
        const isDarkMode = document.documentElement.classList.contains('dark');
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsDark(isDarkMode);
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        if (newTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            // Show both on scroll
            setIsVisible(true);
            setShowBottomNav(true);

            // Restart hide timeout
            startHideTimeout();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };
    }, [startHideTimeout]);

    const isActive = (path: string) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const handleNavClick = () => {
        // Force smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Ensure headers are visible
        setIsVisible(true);
        setShowBottomNav(true);

        // Clear any hide timeouts to prevent immediate hiding
        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

        // Restart timeout logic
        startHideTimeout();
    };

    const isProductPage = pathname?.startsWith('/product/');

    return (
        <>
            <header className={`sticky top-0 z-50 items-center justify-center border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} flex`}>
                <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
                    <Link href="/" onClick={handleNavClick} className="flex items-center gap-2 sm:gap-3">
                        <div className="h-8 sm:h-10 w-auto relative flex-shrink-0">
                            <img
                                src="/logo-full.png"
                                alt={t.appName}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-9">
                        <Link href="/" onClick={handleNavClick} className={`text-sm font-medium transition-colors ${isActive("/") && pathname === "/" ? "text-primary font-semibold" : "hover:text-primary"}`}>
                            {t.home}
                        </Link>
                        <Link href="/trending" onClick={handleNavClick} className={`text-sm font-medium transition-colors ${isActive("/trending") ? "text-primary font-semibold" : "hover:text-primary"}`}>
                            {t.trendingNow}
                        </Link>
                        <Link href="/collections" onClick={handleNavClick} className={`text-sm font-medium transition-colors ${isActive("/collections") ? "text-primary font-semibold" : "hover:text-primary"}`}>
                            {t.shop}
                        </Link>
                        <Link href="/discover" onClick={handleNavClick} className={`text-sm font-medium transition-colors ${isActive("/discover") ? "text-primary font-semibold" : "hover:text-primary"}`}>
                            {t.exploreCollections}
                        </Link>
                        <Link href="/contact" onClick={handleNavClick} className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary font-semibold" : "hover:text-primary"}`}>
                            {t.contact}
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button onClick={() => setSearchOpen(true)} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-light/0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined text-2xl">search</span>
                        </button>

                        {/* Theme Toggle */}
                        {/* Theme Toggle or Wishlist Icon */}
                        {isProductPage ? (
                            <Link href="/account/wishlist" className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-light/0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                <span className="material-symbols-outlined text-2xl">favorite</span>
                            </Link>
                        ) : (
                            <button
                                onClick={toggleTheme}
                                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-light/0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors relative group"
                                aria-label="Toggle theme"
                            >
                                <span
                                    className={`material-symbols-outlined text-2xl absolute transition-all duration-500 ${isDark
                                        ? 'rotate-0 opacity-100 scale-100'
                                        : 'rotate-90 opacity-0 scale-0'
                                        }`}
                                >
                                    dark_mode
                                </span>
                                <span
                                    className={`material-symbols-outlined text-2xl absolute transition-all duration-500 ${!isDark
                                        ? 'rotate-0 opacity-100 scale-100'
                                        : '-rotate-90 opacity-0 scale-0'
                                        }`}
                                >
                                    light_mode
                                </span>
                            </button>
                        )}

                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex md:hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background-light/0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                            <span className="material-symbols-outlined text-2xl">{mobileMenuOpen ? "close" : "menu"}</span>
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark shadow-lg">
                        <nav className="flex flex-col px-4 py-6 gap-4">
                            {/* User and Cart Icons (Product Page Only) */}
                            {isProductPage && (
                                <div className="grid grid-cols-2 gap-4 mb-2 pb-4 border-b border-dashed border-gray-200 dark:border-gray-800">
                                    <Link
                                        href="/account/dashboard"
                                        onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}
                                        className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.05)] border border-gray-100 dark:border-gray-800 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg text-gray-900 dark:text-white">person</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">{t.account}</span>
                                    </Link>
                                    <Link
                                        href="/cart"
                                        onClick={() => { setMobileMenuOpen(false); handleNavClick(); }}
                                        className="flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-neutral-900 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.05)] border border-gray-100 dark:border-gray-800 hover:scale-[1.02] transition-all duration-300"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
                                            <span className="material-symbols-outlined text-lg text-white dark:text-black">shopping_bag</span>
                                        </div>
                                        <span className="text-sm font-bold text-gray-900 dark:text-white">{t.cart}</span>
                                    </Link>
                                </div>
                            )}
                            <Link href="/" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }} className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${isActive("/") && pathname === "/" ? "bg-primary/10 text-primary font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5"}`}>
                                {t.home}
                            </Link>
                            <Link href="/trending" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }} className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${isActive("/trending") ? "bg-primary/10 text-primary font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5"}`}>
                                {t.trendingNow}
                            </Link>
                            <Link href="/collections" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }} className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${isActive("/collections") ? "bg-primary/10 text-primary font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5"}`}>
                                {t.shop}
                            </Link>
                            <Link href="/discover" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }} className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${isActive("/discover") ? "bg-primary/10 text-primary font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5"}`}>
                                {t.exploreCollections}
                            </Link>
                            <Link href="/contact" onClick={() => { setMobileMenuOpen(false); handleNavClick(); }} className={`text-base font-medium py-2 px-4 rounded-lg transition-colors ${isActive("/contact") ? "bg-primary/10 text-primary font-semibold" : "hover:bg-black/5 dark:hover:bg-white/5"}`}>
                                {t.contact}
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Floating Bottom Dock */}
            <div
                className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${showBottomNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} ${isProductPage ? 'hidden md:block' : ''}`}
                onMouseEnter={handleInteractionStart}
                onMouseLeave={handleInteractionEnd}
                onTouchStart={handleInteractionStart}
                onTouchEnd={handleInteractionEnd}
            >
                <div className="flex items-center gap-6 px-8 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 dark:border-white/10">
                    <Link href="/collections" onClick={handleNavClick} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl">grid_view</span>
                    </Link>

                    <Link href="/account/dashboard" onClick={handleNavClick} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl">person</span>
                    </Link>

                    {/* Home Button (Center) */}
                    <Link href="/" onClick={handleNavClick} className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-110 transition-all duration-300">
                        <span className="material-symbols-outlined text-2xl">home</span>
                    </Link>

                    <Link href="/account/wishlist" onClick={handleNavClick} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl">favorite</span>
                    </Link>
                    <Link href="/cart" onClick={handleNavClick} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                    </Link>
                </div>
            </div>

            <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        </>
    );
}
