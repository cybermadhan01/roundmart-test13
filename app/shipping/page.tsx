export default function ShippingPage() {
    return (
        <main className="flex-1">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black leading-tight tracking-tighter min-w-72">Shipping Policy</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        We are committed to delivering your order accurately, in good condition, and always on time. Below you&apos;ll find everything you need to know about our shipping options, delivery times, and costs.
                    </p>
                </div>

                {/* Shipping Options Table */}
                <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm mb-8">
                    <div className="p-8">
                        <h2 className="text-2xl font-bold leading-tight tracking-tight">Shipping Options & Costs</h2>
                        <p className="mt-2 text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">
                            Choose the delivery option that works best for you. Costs and delivery times vary by method.
                        </p>
                    </div>
                    <div className="px-8 pb-8">
                        <div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
                            <table className="w-full">
                                <thead className="bg-background-light dark:bg-background-dark/50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
                                            Shipping Method
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
                                            Estimated Delivery
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
                                            Cost
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light dark:divide-border-dark">
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium">Standard Shipping</td>
                                        <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">5-7 business days</td>
                                        <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">Free on orders over ₹4,200</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium">Express Shipping</td>
                                        <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">2-3 business days</td>
                                        <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">₹1,250</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 text-sm font-medium">Next-Day Shipping</td>
                                        <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">1 business day</td>
                                        <td className="px-6 py-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">₹2,100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Additional Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-8">
                        <h2 className="text-2xl font-bold leading-tight tracking-tight">Order Processing</h2>
                        <p className="mt-2 text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">
                            Orders placed before 2:00 PM (IST) are typically processed the same day. Orders placed after this time or on weekends/holidays will be processed the next business day.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-8">
                        <h2 className="text-2xl font-bold leading-tight tracking-tight">International Shipping</h2>
                        <p className="mt-2 text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">
                            We ship to over 50 countries. International customers are responsible for all customs, duties, and taxes. Delivery times may vary depending on the destination.
                        </p>
                    </div>
                </div>

                {/* FAQ */}
                <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm p-8">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "How can I track my order?", a: "Once your order has shipped, you will receive an email with a tracking number and a link to the carrier's website. You can use this information to track the progress of your shipment." },
                            { q: "What if my package is lost or damaged?", a: "In the rare event that your package is lost in transit or arrives damaged, please contact our customer support team immediately. We will work with the carrier to resolve the issue and ensure you receive your order." },
                            { q: "Do you ship to P.O. boxes?", a: "Unfortunately, we are unable to ship to P.O. Box addresses at this time. Please provide a physical street address for delivery." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group">
                                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-base font-medium border-t border-border-light dark:border-border-dark">
                                    {faq.q}
                                    <span className="transition-transform duration-300 group-open:rotate-45">
                                        <span className="material-symbols-outlined">add</span>
                                    </span>
                                </summary>
                                <div className="pb-4 text-text-secondary-light dark:text-text-secondary-dark">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
