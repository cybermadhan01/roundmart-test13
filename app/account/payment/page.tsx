export default function PaymentMethodsPage() {
    return (
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
            <div className="flex flex-col gap-8">
                <div>
                    <h2 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                        Payment Methods
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal mt-2">
                        Manage your saved payment methods
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 p-10 text-center bg-white dark:bg-surface-dark rounded-xl shadow-sm">
                    <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600">
                        payment
                    </span>
                    <div className="flex max-w-sm flex-col items-center gap-2">
                        <p className="text-gray-900 dark:text-white text-xl font-bold leading-tight">
                            No Payment Methods Yet
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                            Add a payment method for faster checkout.
                        </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-wide hover:bg-primary/90">
                        <span>Add Payment Method</span>
                    </button>
                </div>
            </div>
        </main>
    );
}
