"use client";

import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        const newErrors = { name: "", email: "", subject: "", message: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required";
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email Address is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email Address is invalid";
            isValid = false;
        }
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            // Simulate API call
            setTimeout(() => {
                setIsSubmitted(true);
            }, 1000);
        }
    };

    return (
        <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter">How can we help?</h1>
                    <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto mt-4">
                        For questions about orders, products, or feedback, please reach out using the form below. We&apos;re here to help.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-card-light dark:bg-card-dark p-8 sm:p-10 rounded-3xl shadow-lg border border-border-light dark:border-border-dark">
                        {isSubmitted ? (
                            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-4 animate-fade-in">
                                <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-4xl text-green-600 dark:text-green-400">check_circle</span>
                                </div>
                                <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">Message Sent!</h3>
                                <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-md">
                                    Thank for contacting us..we will reach soon...
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormData({ name: "", email: "", subject: "", message: "" });
                                    }}
                                    className="mt-8 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                                >
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark ml-1">Full Name</label>
                                        <input
                                            className={`w-full h-14 px-6 rounded-full bg-background-light dark:bg-background-dark border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border-light dark:border-border-dark focus:ring-primary'} focus:outline-none focus:ring-2 transition-all placeholder:text-gray-400`}
                                            placeholder="Enter your full name"
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                if (errors.name) setErrors({ ...errors, name: "" });
                                            }}
                                        />
                                        {errors.name && <p className="text-red-500 text-xs ml-4">{errors.name}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark ml-1">Email Address</label>
                                        <input
                                            className={`w-full h-14 px-6 rounded-full bg-background-light dark:bg-background-dark border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border-light dark:border-border-dark focus:ring-primary'} focus:outline-none focus:ring-2 transition-all placeholder:text-gray-400`}
                                            placeholder="Enter your email address"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                if (errors.email) setErrors({ ...errors, email: "" });
                                            }}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs ml-4">{errors.email}</p>}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark ml-1">Subject</label>
                                    <input
                                        className={`w-full h-14 px-6 rounded-full bg-background-light dark:bg-background-dark border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-border-light dark:border-border-dark focus:ring-primary'} focus:outline-none focus:ring-2 transition-all placeholder:text-gray-400`}
                                        placeholder="e.g. Question about my order"
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => {
                                            setFormData({ ...formData, subject: e.target.value });
                                            if (errors.subject) setErrors({ ...errors, subject: "" });
                                        }}
                                    />
                                    {errors.subject && <p className="text-red-500 text-xs ml-4">{errors.subject}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-text-secondary-light dark:text-text-secondary-dark ml-1">Message</label>
                                    <textarea
                                        className={`w-full min-h-[200px] p-6 rounded-3xl bg-background-light dark:bg-background-dark border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border-light dark:border-border-dark focus:ring-primary'} focus:outline-none focus:ring-2 transition-all placeholder:text-gray-400 resize-none`}
                                        placeholder="Write your message here..."
                                        value={formData.message}
                                        onChange={(e) => {
                                            setFormData({ ...formData, message: e.target.value });
                                            if (errors.message) setErrors({ ...errors, message: "" });
                                        }}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs ml-4">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-10 h-14 bg-primary text-white text-lg font-semibold rounded-full hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/25"
                                >
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Contact Options */}
                    <div className="space-y-6">
                        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark flex flex-col items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">chat_bubble</span>
                            </div>
                            <h3 className="text-lg font-bold">Live Chat</h3>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                Chat with a member of our team in real-time. Available 24/7.
                            </p>
                            <a
                                className="text-sm font-semibold text-primary hover:underline"
                                href="https://wa.me/919384772250"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Start Chat
                            </a>
                        </div>
                        <div className="bg-card-light dark:bg-card-dark p-6 rounded-xl shadow-sm border border-border-light dark:border-border-dark flex flex-col items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">mail</span>
                            </div>
                            <h3 className="text-lg font-bold">Email Support</h3>
                            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                Send us an email and we&apos;ll get back to you within 2 business hours.
                            </p>
                            <a className="text-sm font-semibold text-primary hover:underline" href="mailto:contact@roundmart.in">Email Us</a>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 space-y-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-2xl mx-auto space-y-4">
                        {[
                            { q: "What are the shipping options?", a: "We offer standard, expedited, and overnight shipping options. Costs and delivery times vary based on your location and the selected shipping method. You can see the specific details at checkout." },
                            { q: "What is your return policy?", a: "We accept returns within 30 days of purchase for a full refund. Items must be in their original condition and packaging. To initiate a return, please visit our returns portal." },
                            { q: "How do I track my order?", a: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can also track your order status from your account page." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-card-light dark:bg-card-dark p-5 rounded-xl shadow-sm border border-border-light dark:border-border-dark cursor-pointer">
                                <summary className="flex items-center justify-between font-medium list-none">
                                    {faq.q}
                                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                                </summary>
                                <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
