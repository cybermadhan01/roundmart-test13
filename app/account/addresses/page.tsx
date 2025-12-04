import Link from "next/link";

export default function AddressesPage() {
    return (
        <main className="w-full max-w-[960px] mx-auto flex-1 px-4 sm:px-8 md:px-20 lg:px-40 py-5">
            <div className="flex flex-col gap-8">
                {/* Page Heading */}
                <div className="flex flex-wrap justify-between items-center gap-4 px-4 sm:px-0">
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                            Address Book
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                            Manage your saved addresses for faster checkout.
                        </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90">
                        <span className="truncate">Add New Address</span>
                    </button>
                </div>

                {/* Address Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-0">
                    {/* Address Card 1 - Default */}
                    <div className="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                        <div className="flex flex-col items-stretch justify-start gap-4">
                            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2">
                                <div className="flex justify-between items-start">
                                    <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                        John Appleseed
                                    </p>
                                    <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary dark:text-primary-300">
                                        Default Address
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1 text-gray-500 dark:text-gray-400">
                                    <p className="text-base font-normal leading-normal">
                                        123 Infinite Loop, Cupertino, CA 95014, United States
                                    </p>
                                    <p className="text-base font-normal leading-normal">
                                        Phone: (123) 456-7890
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <button className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal">
                                    <span className="truncate">Edit</span>
                                </button>
                                <button className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/80 dark:bg-gray-800 text-gray-900 dark:text-gray-300 text-sm font-medium leading-normal hover:bg-gray-300/80 dark:hover:bg-gray-700">
                                    <span className="truncate">Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Address Card 2 */}
                    <div className="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                        <div className="flex flex-col items-stretch justify-start gap-4">
                            <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2">
                                <div className="flex justify-between items-start">
                                    <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                        Kate Bell
                                    </p>
                                </div>
                                <div className="flex flex-col gap-1 text-gray-500 dark:text-gray-400">
                                    <p className="text-base font-normal leading-normal">
                                        456 Apple Park Way, Cupertino, CA 95014, United States
                                    </p>
                                    <p className="text-base font-normal leading-normal">
                                        Phone: (987) 654-3210
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <button className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal">
                                    <span className="truncate">Edit</span>
                                </button>
                                <button className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/80 dark:bg-gray-800 text-gray-900 dark:text-gray-300 text-sm font-medium leading-normal hover:bg-gray-300/80 dark:hover:bg-gray-700">
                                    <span className="truncate">Delete</span>
                                </button>
                            </div>
                            <Link
                                className="text-primary text-sm font-medium text-center mt-2 hover:underline"
                                href="#"
                            >
                                Set as Default
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Add New Address Section */}
                <div className="px-4 sm:px-0 mt-4">
                    <div className="flex flex-col p-4">
                        <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 px-6 py-14">
                            <div className="flex max-w-[480px] flex-col items-center gap-2">
                                <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                                    Add a new address
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal max-w-[480px] text-center">
                                    Save your shipping details for a quicker checkout experience
                                    next time.
                                </p>
                            </div>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/80 dark:bg-gray-800 text-gray-900 dark:text-gray-300 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300/80 dark:hover:bg-gray-700">
                                <span className="truncate">Add Address</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
