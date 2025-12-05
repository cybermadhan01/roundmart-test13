"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
    const pathname = usePathname();
    const isBackNavigation = useRef(false);

    useEffect(() => {
        // Disable browser's automatic scroll restoration to prevent conflicts
        if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Listen for back/forward button clicks
        const handlePopState = () => {
            isBackNavigation.current = true;
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    useEffect(() => {
        // Scroll to top on route change (unless it's a back/forward navigation)
        if (!isBackNavigation.current) {
            // Force scroll to the absolute top-left corner
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        }

        // Reset the flag
        isBackNavigation.current = false;
    }, [pathname]);

    return null;
}
