"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

import { products } from "@/data/products";

const heroImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCxAZZYOK6YeLi5TlHyKGnIbcZ4TuQeQSu0BUU-J19AySsWLcRfezZBtdXwbaMgJUvS46AgE5SR-lZSPajGVye4LHRh6Tdpz1atLJWKmq9QLODTyajr6e16uwNKNzQ98lSwczYOvGMjCwdB-4GGhWYHGurXrwykuzQLYxY7bx2C42kP1xTAsR-pG47bjgkj9UEevprp7Oox3Zuz3bjYpcMlRjP3_67IRjS4NNDw3fkf3YPiDQW6F-Yy6O9NubeOUYZhRW8L6uETvSOm",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB4bC__os7z5r7lWxmluOwzV9vuAtAwTz48A0LbopPw-_EZqQSc63qxVhZLFm9TPIQIbas6DqxwWyEU-ii5rKGwBaiDq-R85Rjfz4XDhPF9MAb0UifFBWmo6bwCPdTMHzOGjdQ1WZBUoGaBrdqy3BEBcyfCadH6CtbwFQEAbBgSAGQvYiLtbV7Sb6QojKU4ueQTxhCDqUuW07Dl6hFEF__kbamjlGXTL4nn1VFfJH8Y-V7ZxiVFX3kmJ5UxTYm8l7oS9n_E_dpezYqJ"
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swipe left
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }
    if (touchStart - touchEnd < -150) {
      // Swipe right
      setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
    }
  };



  const filteredProducts =
    activeTab === "All"
      ? products
      : products.filter((product) => product.badge === activeTab);

  return (
    <main className="flex-1">
      {/* Minimal Hero Carousel - Section 1 (Normal) */}
      <div className="w-full bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-24 text-center lg:text-left lg:min-h-[600px]">
            {/* Left Content - Hidden on Mobile */}
            <div className="hidden lg:flex flex-1 lg:order-1 flex-col items-center lg:items-start gap-8 z-10">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-text-light dark:text-text-dark leading-[1.1]">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-lg leading-relaxed">
                {t.heroSubtitle}
              </p>
              <Link
                href="/collections"
                className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
              >
                {t.shopCollection}
              </Link>
            </div>

            {/* Right Carousel */}
            <div className="w-full lg:flex-1 lg:order-2 relative">
              <div
                className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {heroImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                  >
                    <Image
                      src={img}
                      alt={`Hero Slide ${index + 1}`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Button - Only visible on mobile */}
              <div className="lg:hidden mt-6 flex justify-center">
                <Link
                  href="/collections"
                  className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 active:scale-95 transition-all duration-300"
                >
                  {t.shopCollection}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Featured Products - Section 2 (Minimal Gray) */}
      <div className="w-full bg-gray-50 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <section>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              {["All", "New", "Hot", "Trending"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-white dark:bg-card-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-white/5"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="flex flex-col gap-3 group">
                  <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden aspect-[2/3] relative shadow-sm hover:shadow-2xl transition-all duration-300 ease-out group-hover:-translate-y-1">
                    <div className="w-full h-full relative transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>

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
          </section>
        </div>
      </div>

      {/* Best Sellers - Section 3 (Normal) */}
      <div className="w-full bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <section>
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-light dark:text-text-dark">
                {t.bestSellers}
              </h2>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">
                Most purchased products — loved by our customers.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {products.slice(0, 4).map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="flex flex-col gap-3 group">
                  <div className="w-full bg-card-light dark:bg-card-dark rounded-2xl overflow-hidden aspect-[2/3] relative shadow-sm hover:shadow-2xl transition-all duration-300 ease-out group-hover:-translate-y-1">
                    <div className="w-full h-full relative transition-transform duration-700 group-hover:scale-105">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>

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
          </section>
        </div>
      </div>

      {/* Deal Zone - Section 4 (Minimal Gray) */}
      <div className="w-full bg-gray-50 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <section>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Flash Sale", subtitle: "Ends in 24h", color: "bg-red-500", icon: "bolt", link: "Hot" },
                { title: "Seasonal Offers", subtitle: "Winter Collection", color: "bg-blue-500", icon: "ac_unit", link: "New" },
                { title: "Buy 1 Get 1", subtitle: "On Accessories", color: "bg-purple-500", icon: "local_offer", link: "Trending" },
                { title: "Up to 50% OFF", subtitle: "Clearance", color: "bg-green-500", icon: "percent", link: "All" },
              ].map((offer, index) => (
                <Link
                  href="/collections"
                  key={index}
                  className={`${offer.color} rounded-2xl p-5 sm:p-6 text-white shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col justify-between h-36 sm:h-44 relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="material-symbols-outlined text-7xl">{offer.icon}</span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-extrabold leading-tight tracking-tight">{offer.title}</h3>
                    <p className="text-white/90 text-xs sm:text-sm mt-1 font-medium">{offer.subtitle}</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <span
                      className="inline-flex items-center justify-center px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-xs sm:text-sm font-bold transition-colors duration-200"
                    >
                      Shop Now &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Testimonials / Social Proof - Section 5 (Normal) */}
      <div className="w-full bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <section>
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-light dark:text-text-dark">
                Loved by Thousands
              </h2>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">
                Real stories from our community of design enthusiasts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Priya Sharma",
                  role: "Interior Designer",
                  image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Priya",
                  rating: 5,
                  text: "The quality of the leather desk mat is absolutely stunning. It has completely transformed my workspace. Highly recommended!",
                  product: "Leather Desk Mat"
                },
                {
                  name: "Rahul Verma",
                  role: "Tech Reviewer",
                  image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Rahul",
                  rating: 5,
                  text: "I've tried many laptop stands, but this one is in a league of its own. The aluminum finish matches my MacBook perfectly.",
                  product: "Aluminum Laptop Stand"
                },
                {
                  name: "Ananya Gupta",
                  role: "Creative Director",
                  image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Ananya",
                  rating: 5,
                  text: "Fast shipping and beautiful packaging. The noise-canceling headphones are a game-changer for my daily commute.",
                  product: "Pro Noise-Canceling Headphones"
                }
              ].map((review, index) => (
                <div key={index} className="bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-text-light dark:text-text-dark">{review.name}</h4>
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">{review.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-yellow-400 text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>

                  <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-xs font-bold text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">shopping_bag</span>
                      Verified Purchase: {review.product}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Why Choose Us - Section 6 (Minimal Gray) */}
      <div className="w-full bg-gray-50 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <section>
            <div className="flex flex-col items-center text-center gap-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-light dark:text-text-dark">
                Why Choose ROUNDMART?
              </h2>
              <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl">
                We&apos;re committed to providing the best shopping experience.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
              {[
                { icon: "local_shipping", title: "Fast Delivery", desc: "Across India" },
                { icon: "payments", title: "COD Available", desc: "Pay on Delivery" },
                { icon: "assignment_return", title: "Easy Returns", desc: "7-Day Policy" },
                { icon: "verified_user", title: "Warranty", desc: "1 Year Assurance" },
                { icon: "diamond", title: "Premium Quality", desc: "Certified Goods" },
                { icon: "support_agent", title: "24/7 Support", desc: "Always Here" },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-white dark:hover:bg-card-dark transition-colors duration-300 group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-text-light dark:text-text-dark">{feature.title}</h3>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Newsletter / Email Opt-In - Section 7 (Normal) */}
      <div className="w-full bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <section className="relative rounded-3xl overflow-hidden bg-primary/5 dark:bg-primary/10 p-8 sm:p-16 text-center">
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6">
              {!isSubscribed ? (
                <>
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-light dark:text-text-dark">
                    Get exclusive offers & early access.
                  </h2>
                  <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                    Join our newsletter and be the first to know about new drops, special promotions, and community events.
                  </p>

                  <form
                    className="flex flex-col sm:flex-row gap-4 mt-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) {
                        setIsSubscribed(true);
                        setEmail("");
                      }
                    }}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-6 py-4 rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <button
                      type="submit"
                      className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
                    >
                      Subscribe
                    </button>
                  </form>

                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-2">
                    By subscribing, you agree to our Terms & Conditions and Privacy Policy.
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center gap-4 py-8 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 mb-2">
                    <span className="material-symbols-outlined text-4xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-light dark:text-text-dark">
                    Thanks for subscribing!
                  </h3>
                  <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
                    You&apos;ve been added to our list. Keep an eye on your inbox for exclusive updates.
                  </p>
                  <button
                    onClick={() => setIsSubscribed(false)}
                    className="mt-4 text-primary font-bold hover:underline"
                  >
                    Subscribe another email
                  </button>
                </div>
              )}
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </section>
        </div>
      </div>

      {/* Social Media Showcase - Section 8 (Minimal Gray) */}
      <div className="w-full bg-gray-50 dark:bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-light dark:text-text-dark mb-4">
              Follow Us @ROUNDMART
            </h2>
            <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-12">
              Join our community and tag us to be featured.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/round_mart?igsh=Ym5obmxsNGk5NzZi",
                  color: "hover:text-pink-600",
                  path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                },
                {
                  name: "Facebook",
                  url: "https://www.facebook.com/share/1Cdwr8GfBJ/",
                  color: "hover:text-blue-600",
                  path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                },
                {
                  name: "Pinterest",
                  url: "https://pin.it/32j83eh9a",
                  color: "hover:text-red-600",
                  path: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.133-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"
                },
                {
                  name: "WhatsApp",
                  url: "http://wa.me/+919384772250",
                  color: "hover:text-green-500",
                  path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-16 h-16 rounded-full bg-white dark:bg-card-dark shadow-md flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.color}`}
                  aria-label={social.name}
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
