export default function PrivacyPage() {
    return (
        <main className="flex-1">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="flex flex-wrap justify-between gap-3 mb-8">
                    <h1 className="text-4xl font-black track-tighter sm:text-5xl">Privacy Policy</h1>
                </div>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-8">Last Updated: October 26, 2023</p>

                <p className="text-base leading-relaxed mb-8">
                    Welcome to our Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website. We are committed to protecting your personal data and your right to privacy.
                </p>

                {/* Accordions */}
                <div className="flex flex-col space-y-4">
                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5" open>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                            <p className="text-lg font-semibold">Information We Collect</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-text-secondary-light dark:text-text-secondary-dark">expand_more</span>
                        </summary>
                        <div className="pt-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            <p>We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
                            <ul className="mt-4 list-disc space-y-2 pl-5">
                                <li><strong>Data you provide directly:</strong> This includes account information such as your name, email address, and password, as well as order details like shipping addresses and payment information.</li>
                                <li><strong>Data collected automatically:</strong> We use cookies and similar tracking technologies to access or store information about your device, browser type, and browsing activity to improve our services.</li>
                            </ul>
                        </div>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                            <p className="text-lg font-semibold">How We Use Your Information</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-text-secondary-light dark:text-text-secondary-dark">expand_more</span>
                        </summary>
                        <p className="pt-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            We use the information we collect or receive to process your orders, provide customer support, communicate with you about your account or our products, send you marketing communications (with your consent), and to analyze and improve our website and services.
                        </p>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                            <p className="text-lg font-semibold">Data Sharing and Disclosure</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-text-secondary-light dark:text-text-secondary-dark">expand_more</span>
                        </summary>
                        <p className="pt-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            We may share your information with trusted third-party service providers who perform services for us or on our behalf, such as payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. We do not sell your personal information to third parties.
                        </p>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                            <p className="text-lg font-semibold">Your Rights and Choices</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-text-secondary-light dark:text-text-secondary-dark">expand_more</span>
                        </summary>
                        <p className="pt-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            You have the right to access, update, or delete the personal information we have on you. You can review and change your information by logging into your account. You may also opt-out of receiving marketing communications from us by following the unsubscribe link in our emails.
                        </p>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                            <p className="text-lg font-semibold">Contact Information</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180 text-text-secondary-light dark:text-text-secondary-dark">expand_more</span>
                        </summary>
                        <p className="pt-4 text-base leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at{" "}
                            <a className="font-medium text-primary hover:underline" href="mailto:privacy@aura.com">privacy@aura.com</a>.
                        </p>
                    </details>
                </div>
            </div>
        </main>
    );
}
