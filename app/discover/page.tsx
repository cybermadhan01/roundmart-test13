"use client";

import Link from "next/link";

export default function DiscoverPage() {
    // Category data with products
    const categories = [
        {
            name: "Watches",
            icon: "watch",
            products: [
                { id: 901, name: "Classic Chronograph", price: "₹18,200", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
                { id: 902, name: "Smart Watch Pro", price: "₹24,800", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop" },
                { id: 903, name: "Minimalist Watch", price: "₹12,400", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop" },
                { id: 904, name: "Luxury Timepiece", price: "₹41,500", image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=400&fit=crop" },
            ]
        },
        {
            name: "Shirts",
            icon: "checkroom",
            products: [
                { id: 301, name: "Casual Denim Shirt", price: "₹2,480", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop" },
                { id: 302, name: "Formal White Shirt", price: "₹3,300", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop" },
                { id: 303, name: "Checked Flannel", price: "₹2,900", image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop" },
                { id: 304, name: "Linen Summer Shirt", price: "₹2,680", image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400&h=400&fit=crop" },
            ]
        },
        {
            name: "Pants",
            icon: "styler",
            products: [
                { id: 401, name: "Slim Fit Jeans", price: "₹3,700", image: "https://images.unsplash.com/photo-1542272454315-7ad2d8c9724c?w=400&h=400&fit=crop" },
                { id: 402, name: "Chinos Beige", price: "₹3,100", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop" },
                { id: 403, name: "Cargo Pants", price: "₹3,500", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop" },
                { id: 404, name: "Formal Trousers", price: "₹4,100", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop" },
            ]
        },
        {
            name: "T-Shirts",
            icon: "apparel",
            products: [
                { id: 501, name: "Basic White Tee", price: "₹830", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop" },
                { id: 502, name: "Graphic Print Tee", price: "₹1,240", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop" },
                { id: 503, name: "V-Neck Black", price: "₹910", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop" },
                { id: 504, name: "Striped Polo", price: "₹1,650", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop" },
            ]
        },
        {
            name: "Home Decor",
            icon: "home",
            products: [
                { id: 601, name: "Modern Vase", price: "₹2,480", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop" },
                { id: 602, name: "Wall Art Canvas", price: "₹4,100", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400&h=400&fit=crop" },
                { id: 603, name: "Throw Pillows Set", price: "₹1,860", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop" },
                { id: 604, name: "Decorative Mirror", price: "₹5,800", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=400&fit=crop" },
            ]
        },
        {
            name: "Lights",
            icon: "lightbulb",
            products: [
                { id: 701, name: "Table Lamp", price: "₹3,300", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop" },
                { id: 702, name: "Floor Lamp", price: "₹6,200", image: "https://images.unsplash.com/photo-1534105615352-9e0852b6a45a?w=400&h=400&fit=crop" },
                { id: 703, name: "LED Strip Lights", price: "₹1,650", image: "https://images.unsplash.com/photo-1571953594807-1f0fd82b63f6?w=400&h=400&fit=crop" },
                { id: 704, name: "Pendant Light", price: "₹4,950", image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop" },
            ]
        }
    ];

    return (
        <main className="flex-1 overflow-hidden">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-purple-500/10 via-background-light to-background-light dark:from-purple-500/5 dark:via-background-dark dark:to-background-dark border-b border-border-light dark:border-border-dark">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                    <div className="text-center animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
                            <span className="material-symbols-outlined text-lg">explore</span>
                            Browse by Category
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
                            Discover Your Style
                        </h1>
                        <p className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
                            Explore curated collections across all categories. Find exactly what you&apos;re looking for.
                        </p>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
                {categories.map((category, categoryIndex) => (
                    <div key={category.name} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                        {/* Category Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-purple-600 text-white">
                                    <span className="material-symbols-outlined text-2xl">{category.icon}</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{category.name}</h2>
                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        {category.products.length} Products
                                    </p>
                                </div>
                            </div>
                            <Link
                                href="/collections"
                                className="flex items-center gap-1 text-primary hover:gap-2 transition-all text-sm font-medium"
                            >
                                View All
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </Link>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                            {category.products.map((product, productIndex) => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    className="group animate-fade-in-up flex flex-col gap-3"
                                    style={{ animationDelay: `${(categoryIndex * 100) + (productIndex * 50)}ms` }}
                                >
                                    <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden aspect-[2/3] relative shadow-sm hover:shadow-2xl transition-all duration-300 ease-out group-hover:-translate-y-1">
                                        <div
                                            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                                            style={{ backgroundImage: `url("${product.image}")` }}
                                        ></div>

                                        {/* Top Left Badge (Overlay) - Mocked for Discover */}
                                        {productIndex === 0 && (
                                            <div className="absolute top-3 left-3 bg-yellow-400 text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm shadow-sm">
                                                Best Seller
                                            </div>
                                        )}

                                        {/* Bottom Left Rating (Overlay) - Mocked */}
                                        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md px-1.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-yellow-400 text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                            <span className="text-[10px] font-bold text-neutral-900 dark:text-white">4.8</span>
                                            <span className="text-neutral-300 dark:text-neutral-600 text-[10px]">|</span>
                                            <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">1.2k</span>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="px-1">
                                        <h3 className="font-medium text-sm text-neutral-700 dark:text-neutral-200 truncate mb-1">{product.name}</h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-bold text-base text-neutral-900 dark:text-white">{product.price}</span>
                                            <span className="text-xs text-neutral-400 line-through">₹{parseInt(product.price.replace(/[^0-9]/g, '')) * 1.5}</span>
                                            <span className="text-xs font-bold text-green-600 dark:text-green-400">33% OFF</span>
                                        </div>
                                        <p className="text-[10px] text-purple-600 dark:text-purple-400 font-medium mt-1">Lowest price in last 30 days</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-background-light dark:from-primary/5 dark:via-purple-500/5 dark:to-background-dark border-y border-border-light dark:border-border-dark">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4">
                        Can&apos;t Find What You&apos;re Looking For?
                    </h2>
                    <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8">
                        Explore our complete collection with all products in one place
                    </p>
                    <Link
                        href="/collections"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Browse All Products
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}
