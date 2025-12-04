export default function ReturnsPage() {
    return (
        <main className="flex-1">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="flex flex-col gap-4 mb-8">
                    <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">Return & Refund Policy</h1>
                    <p className="text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                        Here is a brief, user-friendly summary of our policy&apos;s key points, including our return window and the general conditions for a successful return. We strive to make this process as simple as possible for you.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5" open>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                            <p className="text-base font-medium">Return Eligibility</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pt-4 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            <p>Items must be returned within 30 days of the delivery date. To be eligible for a return, your item must be unused, in the same condition that you received it, and in its original packaging. Some items, such as gift cards or downloadable software products, are non-returnable.</p>
                        </div>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                            <p className="text-base font-medium">How to Initiate a Return</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pt-4 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            <p>Follow our step-by-step guide to begin the return process. You can start by clicking the button below to access our returns portal. Please have your order number and email address ready.</p>
                        </div>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                            <p className="text-base font-medium">Refunds</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pt-4 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your original method of payment within 10 business days.</p>
                        </div>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                            <p className="text-base font-medium">Exchanges</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pt-4 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at support@aura.com and send your item to our return center address, which will be provided via the returns portal.</p>
                        </div>
                    </details>

                    <details className="group bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                            <p className="text-base font-medium">Frequently Asked Questions</p>
                            <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                        </summary>
                        <div className="pt-4 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                            <p>Have more questions? Check out our full FAQ page for answers on shipping costs, what to do with damaged items, and more. If you can&apos;t find your answer, our support team is always ready to help.</p>
                        </div>
                    </details>
                </div>

                <div className="flex justify-start mt-8">
                    <button className="flex h-12 min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform duration-200">
                        <span className="truncate">Start a Return</span>
                    </button>
                </div>
            </div>
        </main>
    );
}
