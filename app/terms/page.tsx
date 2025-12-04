

export default function TermsPage() {
    return (
        <main className="flex-1">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="sticky top-24 hidden lg:block h-fit">
                        <div className="flex flex-col gap-2">
                            {[
                                { id: "acceptance", icon: "description", label: "Acceptance of Terms" },
                                { id: "accounts", icon: "person", label: "User Accounts" },
                                { id: "products", icon: "inventory_2", label: "Products & Purchases" },
                                { id: "payment", icon: "credit_card", label: "Payment & Billing" },
                                { id: "ip", icon: "shield", label: "Intellectual Property" },
                                { id: "liability", icon: "warning", label: "Limitation of Liability" },
                                { id: "law", icon: "gavel", label: "Governing Law" },
                                { id: "contact", icon: "mail", label: "Contact Information" }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={`#${item.id}`}
                                    className={`group flex items-center gap-3 rounded-lg px-3 py-2 text-text-secondary-light dark:text-text-secondary-dark hover:bg-card-light dark:hover:bg-card-dark ${idx === 0 ? 'bg-primary/20 text-primary dark:bg-primary/30' : ''}`}
                                >
                                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                    <p className="text-sm font-medium leading-normal">{item.label}</p>
                                </a>
                            ))}
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 sm:p-8 shadow-sm">
                        <div className="flex flex- items-baseline justify-between gap-3 mb-6">
                            <h1 className="text-4xl font-black leading-tight tracking-tighter">Terms & Conditions</h1>
                        </div>
                        <p className="text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark mb-6">
                            Last Updated: October 26, 2023
                        </p>

                        <div className="prose prose-slate max-w-none dark:prose-invert">
                            <p>Welcome to ROUNDMART. By accessing or using our website, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="acceptance">
                                1. Acceptance of Terms
                            </h2>
                            <p>This agreement outlines the legally binding terms for your use of the ROUNDMART website. We may modify these terms from time to time, and such modification shall be effective upon posting on the site. You agree to be bound by any changes to this agreement when you use the service after any such modification is posted.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="accounts">
                                2. User Accounts & Responsibilities
                            </h2>
                            <p>To access certain features of the site, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify us immediately of any unauthorized use of your account or password.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="products">
                                3. Product Information & Purchases
                            </h2>
                            <p>We strive to be as accurate as possible in the descriptions of our products. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase, inaccuracies, or errors in product or pricing information.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="payment">
                                4. Payment & Billing
                            </h2>
                            <p>All billing information provided must be truthful and accurate. Providing any untruthful or inaccurate information constitutes a breach of these Terms. By confirming your purchase at the end of the checkout process, you agree to accept and pay for the item(s) requested. We accept various forms of payment, as listed on our website.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="ip">
                                5. Intellectual Property Rights
                            </h2>
                            <p>All content on this site, including but not limited to text, graphics, logos, images, and software, is the property of ROUNDMART or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of ROUNDMART.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="liability">
                                6. Limitation of Liability
                            </h2>
                            <p>In no event shall ROUNDMART, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="law">
                                7. Governing Law
                            </h2>
                            <p>These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>

                            <h2 className="scroll-mt-24 text-2xl font-bold leading-tight tracking-tight mt-8 mb-4" id="contact">
                                8. Contact Information
                            </h2>
                            <p>
                                If you have any questions about these Terms, please contact us at{" "}
                                <a className="text-primary hover:underline" href="mailto:support@aura.com">support@aura.com</a>. We are here to help and will do our best to address your concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
