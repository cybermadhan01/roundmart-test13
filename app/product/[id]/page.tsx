"use client";

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getProductById, getRelatedProducts, type Product } from "@/data/products";
import { Banknote, Truck, RotateCcw, TrendingUp, Users, ShieldCheck, ChevronDown, Star, FileText, Info } from "lucide-react";

const rotatingMessages = [
    "2880 People bought this in last 7 days",
    "Lowest price in last 15 days",
    "7 days return time in Roundmart",
    "Lowest price guarantee",
    "Trusted by 10,000+ customers"
];

const AccordionItem = ({ title, icon: Icon, content }: { title: string, icon: any, content?: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    if (!content) return null;

    return (
        <div className="border border-neutral-100 dark:border-neutral-800 rounded-xl overflow-hidden bg-white dark:bg-neutral-900/30 transition-all duration-300 hover:shadow-sm">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-4 flex items-center justify-between group"
            >
                <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700'}`}>
                        <Icon className="w-4.5 h-4.5" />
                    </div>
                    <span className={`font-semibold text-sm transition-colors duration-300 ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-text-light dark:text-text-dark'}`}>{title}</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="px-4 pb-5 pl-[3.75rem] text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed whitespace-pre-line">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReviewCard = ({ review }: { review: any }) => (
    <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/30 border border-neutral-100 dark:border-neutral-800">
        <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <img src={review.avatar} alt={review.user} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-text-light dark:text-text-dark">{review.user}</h4>
                    <div className="flex items-center gap-1.5">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                            ))}
                        </div>
                        <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">• {review.date}</span>
                    </div>
                </div>
            </div>
            {review.verified && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
                    <ShieldCheck className="w-3 h-3 text-green-600 dark:text-green-400" />
                    <span className="text-[10px] font-bold text-green-700 dark:text-green-300">Verified</span>
                </div>
            )}
        </div>
        <h5 className="text-sm font-bold text-text-light dark:text-text-dark mb-1">{review.title}</h5>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">{review.comment}</p>
    </div>
);

export default function Product() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState("");
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [showTNC, setShowTNC] = useState(false);
    const [showSizeGuide, setShowSizeGuide] = useState(false);
    const [timeLeft, setTimeLeft] = useState("04h : 00m : 00s");
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [showWishlistToast, setShowWishlistToast] = useState(false);
    const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (product) {
            // Load recently viewed from local storage
            const stored = localStorage.getItem('recentlyViewed');
            let viewed: Product[] = stored ? JSON.parse(stored) : [];

            // Remove current product if it exists (to move it to top)
            viewed = viewed.filter(p => p.id.toString() !== product.id.toString());

            // Add current product to the beginning
            viewed.unshift(product);

            // Keep only top 4
            viewed = viewed.slice(0, 4);

            // Save back to local storage
            localStorage.setItem('recentlyViewed', JSON.stringify(viewed));

            // Set state (excluding current product for display)
            setRecentlyViewed(viewed.filter(p => p.id.toString() !== product.id.toString()));
        }
    }, [product]);

    useEffect(() => {
        if (showWishlistToast) {
            const timer = setTimeout(() => {
                setShowWishlistToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showWishlistToast]);

    useEffect(() => {
        if (carouselRef.current && carouselRef.current.children[selectedColor]) {
            carouselRef.current.children[selectedColor].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [selectedColor]);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            let targetTime = localStorage.getItem('saleTargetTime');

            if (!targetTime) {
                const newTarget = now + (4 * 60 * 60 * 1000); // 4 hours from now
                localStorage.setItem('saleTargetTime', newTarget.toString());
                targetTime = newTarget.toString();
            }

            let difference = parseInt(targetTime) - now;

            if (difference <= 0) {
                // Reset timer if expired
                const newTarget = now + (4 * 60 * 60 * 1000);
                localStorage.setItem('saleTargetTime', newTarget.toString());
                difference = newTarget - now;
            }

            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            return `${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
        };

        // Initial set
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleCopyCode = async (code: string) => {
        try {
            await navigator.clipboard.writeText(code);
            alert(`Code ${code} copied to clipboard!`);
        } catch (err) {
            // Fallback
            const textArea = document.createElement("textarea");
            textArea.value = code;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert(`Code ${code} copied to clipboard!`);
        }
    };

    // Mock sizes for the premium selector
    const sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

    useEffect(() => {
        // Force scroll to top immediately when product page loads
        window.scrollTo(0, 0);

        if (params.id) {
            const foundProduct = getProductById(params.id as string);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setProduct(foundProduct || null);
            setLoading(false);

            // Check if product is in wishlist
            const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
            const exists = storedWishlist.some((item: any) => String(item.id) === String(params.id));
            setIsInWishlist(exists);
        }
    }, [params.id]);

    // Rotating message animation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prev) => (prev + 1) % rotatingMessages.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black gap-4">
                <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">Product not found</h1>
                <Link href="/" className="text-primary hover:underline">Go back home</Link>
            </div>
        );
    }



    // Handle share button click
    const handleShare = async () => {
        const url = window.location.href;
        const title = product?.name || 'Check out this product!';
        let copied = false;

        // 1. Attempt to Copy to Clipboard (Best Effort)
        try {
            // Try Legacy execCommand first (synchronous, better for preserving user gesture for share)
            const textArea = document.createElement("textarea");
            textArea.value = url;
            textArea.style.position = "fixed";
            textArea.style.left = "-9999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            copied = document.execCommand('copy');
            document.body.removeChild(textArea);

            // If legacy failed, try Clipboard API
            if (!copied && navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(url);
                copied = true;
            }
        } catch (err) {
            console.error('Copy failed:', err);
        }

        // 2. Try Web Share API (Real-time sharing apps)
        if (navigator.share) {
            try {
                await navigator.share({ title, url });
                // If share opens, we don't need to alert about the copy, 
                // but the link IS in the clipboard as requested ("copy plus showing")
            } catch (error) {
                // If user cancelled share, they still have the link in clipboard
                if (error instanceof Error && error.name === 'AbortError') return;
                console.error('Error sharing:', error);
            }
        } else {
            // 3. Fallback UI if Share API is not available
            if (copied) {
                alert('Link copied to clipboard!');
            } else {
                prompt('Copy this link:', url);
            }
        }
    };

    // Handle Add to Cart
    const handleAddToCart = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: (product.images && product.images[selectedColor]) || product.image,
            variant: (product.colors && product.colors[selectedColor]) || "Default",
            size: selectedSize,
            quantity: 1
        };

        // Get existing cart from localStorage
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

        // Check if item with same variant and size already exists
        const existingItemIndex = existingCart.findIndex(
            (item: any) => item.id === cartItem.id && item.variant === cartItem.variant && item.size === cartItem.size
        );

        if (existingItemIndex !== -1) {
            // Update quantity if item exists, max 3
            if (existingCart[existingItemIndex].quantity < 3) {
                existingCart[existingItemIndex].quantity += 1;
            } else {
                alert("Maximum quantity of 3 reached for this item.");
                return;
            }
        } else {
            // Add new item
            existingCart.push(cartItem);
        }

        // Save to localStorage
        localStorage.setItem('cart', JSON.stringify(existingCart));

        // Show toast
        const toast = document.getElementById('cart-toast');
        if (toast) {
            toast.classList.remove('-translate-y-full', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('-translate-y-full', 'opacity-0');
            }, 4000);
        }
    };

    // Handle Buy Now - Add to session storage and navigate to checkout
    const handleBuyNow = () => {
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: (product.images && product.images[selectedColor]) || product.image,
            variant: (product.colors && product.colors[selectedColor]) || "Default",
            size: selectedSize,
            quantity: 1
        };

        // Save to sessionStorage for direct checkout (bypassing main cart)
        sessionStorage.setItem('buy_now_cart', JSON.stringify([cartItem]));

        // Navigate to checkout with buy_now mode
        router.push('/checkout?mode=buy_now');
    };

    // Calculate mock pricing for display
    const priceNum = parseInt(product.price.replace(/[^0-9]/g, ''));
    const mrp = priceNum + 1000; // Mock MRP based on "1000 OFF"

    return (
        <main className="flex-1 bg-white dark:bg-black pb-24">
            <div className="mx-auto max-w-full px-0 pb-16 sm:pb-24 pt-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-0 lg:items-start">
                    {/* Image Gallery */}
                    <div className="flex flex-col gap-0">
                        <div className="relative">
                            <div
                                ref={carouselRef}
                                className="w-full overflow-x-auto snap-x snap-mandatory flex gap-2 pb-0 px-4"
                                style={{
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                <style jsx>{`
                                    div::-webkit-scrollbar {
                                        display: none;
                                    }
                                `}</style>
                                {(product.images && product.images.length > 0 ? product.images : [product.image]).map((img, index) => (
                                    <div key={index} className="min-w-[90%] snap-center">
                                        <div className="w-full aspect-[5/7] relative overflow-hidden bg-gray-100 dark:bg-gray-800 animate-fade-in-delayed" style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}>
                                            <div
                                                className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-700"
                                                style={{ backgroundImage: `url("${img}")` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Fixed Overlay Badges */}
                            {product.badge && (
                                <div className="absolute top-4 left-8 z-10 bg-yellow-400 text-black text-[10px] sm:text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                                    {product.badge === 'New' ? 'New Arrival' : product.badge}
                                </div>
                            )}

                            <div className="absolute bottom-4 left-8 z-10 bg-white/90 dark:bg-black/80 backdrop-blur-md px-2 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                                <span className="text-xs font-bold text-neutral-900 dark:text-white">{product.rating}</span>
                                <span className="text-neutral-300 dark:text-neutral-600">|</span>
                                <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400">{product.reviewCount || 185}</span>
                                <span className="material-symbols-outlined text-yellow-400 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>

                            <div className="absolute bottom-4 right-8 z-10 bg-white dark:bg-black p-2 rounded-full shadow-sm flex items-center justify-center">
                                <button
                                    onClick={() => {
                                        const currentWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
                                        const exists = currentWishlist.some((item: any) => String(item.id) === String(product.id));

                                        if (!exists) {
                                            const newItem = {
                                                id: product.id,
                                                name: product.name,
                                                price: product.price,
                                                image: (product.images && product.images[selectedColor]) || product.image
                                            };
                                            localStorage.setItem('wishlist', JSON.stringify([...currentWishlist, newItem]));
                                            setIsInWishlist(true);
                                            setShowWishlistToast(true);
                                        } else {
                                            // Remove from wishlist
                                            const updatedWishlist = currentWishlist.filter((item: any) => String(item.id) !== String(product.id));
                                            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
                                            setIsInWishlist(false);
                                            setShowWishlistToast(false);
                                        }
                                    }}
                                    className="flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    <span
                                        className={`material-symbols-outlined text-lg transition-colors ${isInWishlist ? 'text-red-500' : 'text-neutral-900 dark:text-white hover:text-red-500'}`}
                                        style={{ fontVariationSettings: isInWishlist ? "'FILL' 1" : "'FILL' 0" }}
                                    >favorite</span>
                                </button>
                            </div>
                        </div>

                        {/* Wishlist Toast Notification */}
                        <div
                            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transform transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${showWishlistToast ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95 pointer-events-none'
                                }`}
                        >
                            <div className="bg-neutral-900/95 dark:bg-white/95 backdrop-blur-md text-white dark:text-black px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 dark:border-black/5">
                                <span className="material-symbols-outlined text-red-500 fill-current animate-pulse">favorite</span>
                                <span className="font-bold text-sm tracking-wide">Product Added Successfully</span>
                            </div>
                        </div>

                        {/* Cart Toast Notification */}
                        <div
                            id="cart-toast"
                            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 transform -translate-y-full opacity-0 transition-all duration-500 ease-out w-auto max-w-[90vw] px-4"
                        >
                            <div className="bg-black/80 dark:bg-white/90 backdrop-blur-md text-white dark:text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl flex flex-wrap items-center justify-center gap-2 sm:gap-3 border border-white/10">
                                <span className="material-symbols-outlined text-green-500 fill-current text-lg sm:text-xl">shopping_cart</span>
                                <span className="font-medium text-xs sm:text-sm whitespace-nowrap">Product Added to Cart</span>
                                <Link href="/cart" className="text-blue-400 dark:text-blue-600 font-bold text-xs sm:text-sm hover:underline whitespace-nowrap">
                                    View Now
                                </Link>
                            </div>
                        </div>

                        {/* Size Guide Modal */}
                        {showSizeGuide && (
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                                <div
                                    className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                                    onClick={() => setShowSizeGuide(false)}
                                ></div>
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-lg p-6 shadow-2xl transform transition-all duration-300 scale-100 relative z-10 animate-in fade-in zoom-in-95">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Size Guide</h3>
                                        <button
                                            onClick={() => setShowSizeGuide(false)}
                                            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-neutral-500">close</span>
                                        </button>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">Size</th>
                                                    <th scope="col" className="px-6 py-3">Chest (in)</th>
                                                    <th scope="col" className="px-6 py-3">Waist (in)</th>
                                                    <th scope="col" className="px-6 py-3">Length (in)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">S</th>
                                                    <td className="px-6 py-4">36-38</td>
                                                    <td className="px-6 py-4">30-32</td>
                                                    <td className="px-6 py-4">27</td>
                                                </tr>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">M</th>
                                                    <td className="px-6 py-4">38-40</td>
                                                    <td className="px-6 py-4">32-34</td>
                                                    <td className="px-6 py-4">28</td>
                                                </tr>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">L</th>
                                                    <td className="px-6 py-4">40-42</td>
                                                    <td className="px-6 py-4">34-36</td>
                                                    <td className="px-6 py-4">29</td>
                                                </tr>
                                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">XL</th>
                                                    <td className="px-6 py-4">42-44</td>
                                                    <td className="px-6 py-4">36-38</td>
                                                    <td className="px-6 py-4">30</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Offer T&C Modal */}
                        {showTNC && (
                            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                                <div
                                    className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                                    onClick={() => setShowTNC(false)}
                                ></div>
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-sm p-6 shadow-2xl transform transition-all duration-300 scale-100 relative z-10 animate-in fade-in zoom-in-95">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Offer T&C</h3>
                                        <button
                                            onClick={() => setShowTNC(false)}
                                            className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-neutral-500">close</span>
                                        </button>
                                    </div>
                                    <div className="space-y-3 text-sm text-neutral-600 dark:text-neutral-300">
                                        <p>1. Offer valid on selected items only.</p>
                                        <p>2. Cannot be combined with other coupons.</p>
                                        <p>3. Minimum purchase value applies.</p>
                                        <p>4. RoundMart reserves the right to modify or cancel the offer at any time.</p>
                                    </div>
                                    <button
                                        onClick={() => setShowTNC(false)}
                                        className="w-full mt-6 bg-black dark:bg-white text-white dark:text-black font-medium py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                                    >
                                        Got it
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Dynamic Social Proof - Right under images, no gap */}
                        <div className="bg-[#E8E8FF] py-1.5 mx-1 rounded-md text-center mt-0">
                            <p
                                key={currentMessageIndex}
                                className="text-[#4040FF] font-bold text-sm animate-fade-in"
                            >
                                {rotatingMessages[currentMessageIndex]}
                            </p>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="mt-2 px-4 sm:px-4 sm:mt-0 lg:mt-0">

                        {/* Premium Header Container */}
                        <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-md border border-neutral-100 dark:border-neutral-800 rounded-3xl p-3 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] mb-6">
                            <div className="flex justify-between items-start gap-4 mb-1">
                                <h1 className="flex-1 text-2xl font-black tracking-tight text-neutral-900 dark:text-white leading-tight">
                                    {product.name}
                                </h1>
                                <button
                                    onClick={handleShare}
                                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500 dark:text-neutral-400"
                                    aria-label="Share product"
                                >
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                                <p className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 dark:text-white">
                                    {product.price}
                                </p>
                                <span className="text-base sm:text-xl text-neutral-400 font-medium line-through decoration-2">₹{mrp}</span>
                                <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm">
                                    {Math.round((1000 / mrp) * 100)}% OFF
                                </span>
                                <div className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-full ml-auto">
                                    <span className="text-xs font-bold text-neutral-900 dark:text-white">{product.rating}</span>
                                    <span className="text-neutral-300 dark:text-neutral-600 text-[10px]">|</span>
                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{product.reviewCount || 185}</span>
                                    <span className="material-symbols-outlined text-yellow-400 text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                            </div>

                            <p className="text-xs text-neutral-400 font-medium">
                                Inclusive of all Taxes
                            </p>
                        </div>

                        <p className="font-bold text-text-light dark:text-text-dark text-sm mb-3 mt-4">Save extra with these offers</p>

                        {/* Offers Carousel */}
                        <div className="flex gap-3 overflow-x-auto pb-2 mb-4 scrollbar-hide">
                            {/* Offer Card 1 */}
                            <div className="min-w-[300px] bg-[#FFF9E5] border border-[#F5EDC8] rounded-lg p-3">
                                <div className="flex items-start gap-3 mb-2">
                                    <div className="mt-1">
                                        <span className="material-symbols-outlined text-[#D4A72C] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </div>
                                    <div>
                                        <p className="text-green-700 font-bold text-sm">
                                            Get it for as low as ₹{priceNum - 149} <span className="text-gray-400 line-through text-xs">₹{priceNum}</span>
                                        </p>
                                        <p className="text-[#8B7026] text-xs mt-0.5 leading-relaxed">
                                            Buy any 3 items get flat 15% off Use Code: B3G15
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-dashed border-[#E0D0A0] flex justify-between items-center mt-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-text-light text-xs font-medium">Code: <span className="font-bold">B3G15</span></span>
                                        <button onClick={() => handleCopyCode('B3G15')} className="material-symbols-outlined text-gray-500 text-sm cursor-pointer hover:text-black transition-colors">content_copy</button>
                                    </div>
                                    <button onClick={() => setShowTNC(true)} className="text-text-secondary-light text-xs underline hover:text-black transition-colors">Offer T&C</button>
                                </div>
                            </div>
                            {/* Offer Card 2 */}
                            <div className="min-w-[300px] bg-[#FFF9E5] border border-[#F5EDC8] rounded-lg p-3">
                                <div className="flex items-start gap-3 mb-2">
                                    <div className="mt-1">
                                        <span className="material-symbols-outlined text-[#D4A72C] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </div>
                                    <div>
                                        <p className="text-green-700 font-bold text-sm">
                                            Get it for as low as ₹{priceNum - 99} <span className="text-gray-400 line-through text-xs">₹{priceNum}</span>
                                        </p>
                                        <p className="text-[#8B7026] text-xs mt-0.5 leading-relaxed">
                                            Buy any 2 items get flat 10% off Use Code: B2G10
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-dashed border-[#E0D0A0] flex justify-between items-center mt-2">
                                    <div className="flex items-center gap-2">
                                        <span className="text-text-light text-xs font-medium">Code: <span className="font-bold">B2G10</span></span>
                                        <button onClick={() => handleCopyCode('B2G10')} className="material-symbols-outlined text-gray-500 text-sm cursor-pointer hover:text-black transition-colors">content_copy</button>
                                    </div>
                                    <button onClick={() => setShowTNC(true)} className="text-text-secondary-light text-xs underline hover:text-black transition-colors">Offer T&C</button>
                                </div>
                            </div>
                        </div>

                        {/* Timer */}
                        <div className="bg-[#D1FADF] text-black py-2.5 px-4 rounded-md text-center mb-6 flex items-center justify-center gap-2">
                            <span className="text-sm font-medium">Sale ends in : </span>
                            <span className="font-bold font-mono text-base">{timeLeft}</span>
                        </div>

                        {/* Color Selection */}
                        <div className="mb-6">
                            <h3 className="text-sm font-bold text-text-light dark:text-text-dark mb-3">
                                Select Variant - <span className="text-text-secondary-light dark:text-text-secondary-dark font-normal">{product.colors?.[selectedColor] || "Default"}</span>
                            </h3>
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {(product.colors || ["Default"]).map((color, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={() => {
                                            setSelectedColor(index);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${selectedColor === index ? 'border-black dark:border-white' : 'border-gray-200 dark:border-gray-700'
                                            }`}
                                    >
                                        <div
                                            className="absolute inset-0 bg-center bg-cover"
                                            style={{
                                                backgroundImage: `url("${(product.images && product.images[index]) || product.image}")`
                                            }}
                                        ></div>
                                        {selectedColor === index && (
                                            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                                                <div className="bg-white dark:bg-black rounded-full p-1 shadow-md">
                                                    <span className="material-symbols-outlined text-black dark:text-white text-sm font-bold">check</span>
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-3">
                                <h3 className="text-sm font-bold text-text-light dark:text-text-dark">Select Size</h3>
                                <button
                                    onClick={() => setShowSizeGuide(true)}
                                    className="text-primary text-sm font-bold underline hover:text-blue-700 transition-colors"
                                >
                                    Size Guide
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${selectedSize === size
                                            ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                                            : 'border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>



                        {/* Trust Badges */}
                        <div className="grid grid-cols-3 gap-2 py-6 border-y border-gray-100 dark:border-gray-800">
                            <div className="flex flex-col items-center text-center gap-1.5 group cursor-default">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    <Banknote className="w-6 h-6 text-neutral-900 dark:text-white stroke-[1.5]" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wide">Cash On Delivery</span>
                                    <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">Pay when it arrives</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center gap-1.5 group cursor-default">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    <Truck className="w-6 h-6 text-neutral-900 dark:text-white stroke-[1.5]" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wide">Free Shipping</span>
                                    <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">On all prepaid orders</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center text-center gap-1.5 group cursor-default">
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    <RotateCcw className="w-6 h-6 text-neutral-900 dark:text-white stroke-[1.5]" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wide">Easy Returns</span>
                                    <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">7-day replacement</span>
                                </div>
                            </div>
                        </div>

                        {/* Premium Highlights & Description */}
                        <div className="mt-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-6 border border-neutral-100 dark:border-neutral-800 shadow-sm">
                            <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-3 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                Product Highlights
                            </h3>

                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed mb-6">
                                {product.description}
                            </p>

                            {product.features && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {product.features.map((feature: string, index: number) => (
                                        <div key={index} className="flex items-start gap-2.5 p-3 bg-white dark:bg-black rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                                            <div className="mt-0.5 min-w-[20px] h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-[12px] font-bold">check</span>
                                            </div>
                                            <span className="text-sm font-medium text-text-light dark:text-text-dark leading-tight">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Details Accordion */}
                        <div className="mt-8 space-y-3">
                            <AccordionItem title="Long Description / Full Details" icon={FileText} content={product.longDescription} />
                            <AccordionItem title="Delivery / Shipping Info" icon={Truck} content={product.shippingInfo} />
                            <AccordionItem title="Return & Refund Info" icon={RotateCcw} content={product.returnsPolicy} />
                            <AccordionItem title="Warranty Info" icon={ShieldCheck} content={product.warrantyInfo} />
                        </div>

                        {/* Ratings & Reviews */}
                        <div className="mt-12 mb-10">
                            <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-6 flex items-center gap-2">
                                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                Ratings & Reviews
                            </h3>

                            <div className="flex items-center gap-4 mb-8 p-6 bg-neutral-50 dark:bg-neutral-900/30 rounded-2xl border border-neutral-100 dark:border-neutral-800">
                                <div className="text-5xl font-bold text-text-light dark:text-text-dark">{product.rating}</div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300 dark:text-gray-600'}`} />
                                        ))}
                                    </div>
                                    <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">{product.reviewCount} Verified Reviews</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {product.reviews && product.reviews.length > 0 ? (
                                    product.reviews.map((review: any) => (
                                        <ReviewCard key={review.id} review={review} />
                                    ))
                                ) : (
                                    <div className="text-center py-8 text-text-secondary-light dark:text-text-secondary-dark">
                                        No reviews yet. Be the first to review!
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-neutral-100 dark:border-neutral-800">
                <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    You Might Also Like
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {product && getRelatedProducts(product.id).map((relatedProduct) => (
                        <Link href={`/product/${relatedProduct.id}`} key={relatedProduct.id} className="group block">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-800 mb-3">
                                <img
                                    src={relatedProduct.image}
                                    alt={relatedProduct.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {relatedProduct.badge && (
                                    <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-text-light dark:text-text-dark shadow-sm">
                                        {relatedProduct.badge}
                                    </div>
                                )}
                            </div>
                            <h4 className="font-bold text-text-light dark:text-text-dark text-sm sm:text-base mb-1 truncate group-hover:text-primary transition-colors">
                                {relatedProduct.name}
                            </h4>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">{relatedProduct.price}</span>
                                <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-medium text-text-light dark:text-text-dark">{relatedProduct.rating}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Recently Viewed Section */}
            {recentlyViewed.length > 0 && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-neutral-100 dark:border-neutral-800 mb-20">
                    <h3 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8 flex items-center gap-2">
                        <RotateCcw className="w-6 h-6 text-primary" />
                        Recently Viewed
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {recentlyViewed.map((viewedProduct) => (
                            <Link href={`/product/${viewedProduct.id}`} key={viewedProduct.id} className="group block">
                                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 dark:bg-neutral-800 mb-3">
                                    <img
                                        src={viewedProduct.image}
                                        alt={viewedProduct.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {viewedProduct.badge && (
                                        <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-text-light dark:text-text-dark shadow-sm">
                                            {viewedProduct.badge}
                                        </div>
                                    )}
                                </div>
                                <h4 className="font-bold text-text-light dark:text-text-dark text-sm sm:text-base mb-1 truncate group-hover:text-primary transition-colors">
                                    {viewedProduct.name}
                                </h4>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">{viewedProduct.price}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-xs font-medium text-text-light dark:text-text-dark">{viewedProduct.rating}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Sticky Footer with Add to Cart and Buy Now buttons */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 p-3">
                <div className="max-w-7xl mx-auto flex gap-3">
                    {/* Add to Cart Button */}
                    <button
                        type="button"
                        onClick={handleAddToCart}
                        className="flex-1 py-2 rounded-full border-2 border-black dark:border-white text-black dark:text-white font-bold text-base hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                        Add to Cart
                    </button>

                    {/* Buy Now Button */}
                    <button
                        type="button"
                        onClick={handleBuyNow}
                        className="flex-1 py-2 rounded-full bg-[#1E3A8A] text-white font-bold text-base hover:bg-[#1E40AF] transition-colors flex flex-col items-center justify-center"
                    >
                        <span>Buy Now</span>
                        <span className="text-xs font-normal flex items-center gap-1">
                            Faster Checkout
                            <span className="text-yellow-400">⚡</span>
                        </span>
                    </button>
                </div>
            </div>
        </main>
    );
}
