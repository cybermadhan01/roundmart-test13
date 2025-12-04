import Link from "next/link";

export default function ThankYou() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 text-center">
                <div>
                    <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 dark:bg-green-900">
                        <span className="material-symbols-outlined text-5xl text-green-600 dark:text-green-400">
                            check_circle
                        </span>
                    </div>
                    <h2 className="mt-6 text-3xl font-extrabold text-text-light dark:text-text-dark">
                        Thank you for your order!
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                        Your order #12345 has been placed and is being processed. You will
                        receive an email confirmation shortly.
                    </p>
                </div>
                <div className="mt-8">
                    <Link
                        href="/"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </main>
    );
}
