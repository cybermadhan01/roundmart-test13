{/* Badge */ }
import Link from "next/link";
import { products } from "@/data/products";

export default function FeaturedPage() {
    const featuredProducts = products.filter((product) => product.badge === "Featured");

    return (
        <div className="min-h-screen bg-white dark:bg-black pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-text-light dark:text-text-dark">
                        Featured Collection
                    </h1>
                    <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">
                        Handpicked favorites that define style and quality. Explore our most loved and highly rated products.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {featuredProducts.map((product) => (
                        <Link href={`/product/${product.id}`} key={product.id} className="flex flex-col gap-4 group">
                            <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden aspect-[4/5] transform group-hover:-translate-y-2 transition-all duration-300 ease-out shadow-sm hover:shadow-2xl hover:shadow-primary/10 relative">
                                <div
                                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${product.image}")` }}
                                ></div>

                                {/* Badge */}
                                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md bg-blue-600">
                                    {product.badge}
                                </div>

                                {/* Rating Badge */}
                                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg shadow-lg">
                                    <span className="material-symbols-outlined text-yellow-400 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="text-xs font-bold text-white">{product.rating}</span>
                                    <span className="text-neutral-400 text-[10px]">|</span>
                                    <span className="text-xs font-medium text-neutral-300">{product.reviewCount}</span>
                                </div>
                            </div>

                            <div className="px-2">
                                <h3 className="font-bold text-base text-text-light dark:text-text-dark truncate">{product.name}</h3>
                                <p className="text-primary font-bold text-lg mt-1">{product.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
