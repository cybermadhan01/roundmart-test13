"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface CartItem {
    id: string;
    name: string;
    price: string;
    image: string;
    variant: string;
    size: string;
    quantity: number;
}

export default function Cart() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        // Load cart from localStorage
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(cart);
    }, []);

    const updateQuantity = (index: number, newQuantity: number) => {
        const updatedCart = [...cartItems];
        updatedCart[index].quantity = newQuantity;
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeItem = (index: number) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            return total + (price * item.quantity);
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const shipping = subtotal > 0 ? 420 : 0;
    const total = subtotal + shipping;

    return (
        <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <h1 className="text-3xl font-bold tracking-tight">Shopping Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="mt-12 text-center">
                        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">Your cart is empty</p>
                        <Link href="/collections" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-700 hover:scale-105 shadow-lg hover:shadow-xl">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">
                                Items in your shopping cart
                            </h2>
                            <ul
                                className="border-t border-b border-border-light dark:border-border-dark divide-y divide-border-light dark:divide-border-dark"
                                role="list"
                            >
                                {cartItems.map((item, index) => (
                                    <li key={index} className="flex py-6 sm:py-10">
                                        <div className="flex-shrink-0">
                                            <div
                                                className="w-24 h-24 sm:w-48 sm:h-48 rounded-md object-center object-cover bg-card-light dark:bg-card-dark bg-center bg-no-repeat bg-cover"
                                                style={{
                                                    backgroundImage: `url("${item.image}")`,
                                                }}
                                            ></div>
                                        </div>
                                        <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                <div>
                                                    <div className="flex justify-between">
                                                        <h3 className="text-sm">
                                                            <Link
                                                                className="font-medium text-text-light dark:text-text-dark hover:text-primary transition-colors"
                                                                href={`/product/${item.id}`}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </h3>
                                                    </div>
                                                    <div className="mt-1 flex flex-col text-sm gap-1">
                                                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                                            Variant: {item.variant}
                                                        </p>
                                                        <p className="text-text-secondary-light dark:text-text-secondary-dark">
                                                            Size: {item.size}
                                                        </p>
                                                    </div>
                                                    <p className="mt-1 text-sm font-medium text-text-light dark:text-text-dark">
                                                        {item.price}
                                                    </p>
                                                </div>
                                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                                    <label className="sr-only" htmlFor={`quantity-${index}`}>
                                                        Quantity, {item.name}
                                                    </label>
                                                    <select
                                                        className="max-w-full rounded-xl border-none shadow-[0_2px_10px_rgba(0,0,0,0.08)] bg-white dark:bg-neutral-800 py-1.5 pl-3 pr-8 text-sm font-bold cursor-pointer focus:ring-0 text-text-light dark:text-text-dark"
                                                        id={`quantity-${index}`}
                                                        name={`quantity-${index}`}
                                                        value={item.quantity}
                                                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                                    >
                                                        {[1, 2, 3].map((num) => (
                                                            <option key={num} value={num}>
                                                                {num}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <div className="absolute top-0 right-0">
                                                        <button
                                                            className="-m-2 p-2 inline-flex text-text-secondary-light dark:text-text-secondary-dark hover:text-red-500 transition-colors"
                                                            type="button"
                                                            onClick={() => removeItem(index)}
                                                        >
                                                            <span className="sr-only">Remove</span>
                                                            <span className="material-symbols-outlined">
                                                                close
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        {/* Order Summary */}
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 bg-white dark:bg-neutral-900 rounded-3xl px-4 py-6 sm:p-8 lg:p-10 lg:mt-0 lg:col-span-5 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-gray-800"
                        >
                            <h2
                                className="text-lg font-medium text-text-light dark:text-text-dark"
                                id="summary-heading"
                            >
                                Order summary
                            </h2>
                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        Subtotal
                                    </dt>
                                    <dd className="text-sm font-medium text-text-light dark:text-text-dark">
                                        ₹{subtotal.toLocaleString('en-IN')}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-border-light dark:border-border-dark pt-4">
                                    <dt className="flex items-center text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        <span>Shipping estimate</span>
                                        <a
                                            className="ml-2 flex-shrink-0 text-text-secondary-light dark:text-text-secondary-dark hover:text-text-light dark:hover:text-text-dark"
                                            href="#"
                                        >
                                            <span className="sr-only">
                                                Learn more about how shipping is calculated
                                            </span>
                                            <span className="material-symbols-outlined text-lg">
                                                help
                                            </span>
                                        </a>
                                    </dt>
                                    <dd className="text-sm font-medium text-text-light dark:text-text-dark">
                                        ₹{shipping.toLocaleString('en-IN')}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-border-light dark:border-border-dark pt-4">
                                    <dt className="text-base font-medium text-text-light dark:text-text-dark">
                                        Order total
                                    </dt>
                                    <dd className="text-base font-medium text-text-light dark:text-text-dark">
                                        ₹{total.toLocaleString('en-IN')}
                                    </dd>
                                </div>
                            </dl>
                            <div className="mt-6">
                                <Link
                                    href="/checkout"
                                    className="w-full bg-primary border border-transparent rounded-full shadow-lg shadow-primary/30 py-3 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-primary transition-colors"
                                >
                                    Checkout
                                </Link>
                            </div>
                        </section>
                    </form>
                )}
            </div>
        </main>
    );
}
