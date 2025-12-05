"use client";

import { useState, useEffect } from "react";

interface Address {
    id: string;
    name: string;
    address: string;
    phone: string;
    isDefault: boolean;
}

export default function AddressesPage() {
    const [addresses, setAddresses] = useState<Address[]>([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingAddress, setEditingAddress] = useState<Address | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        phone: "",
    });

    // Load addresses from localStorage on mount
    useEffect(() => {
        const savedAddresses = localStorage.getItem('roundmart_addresses');
        if (savedAddresses) {
            try {
                setAddresses(JSON.parse(savedAddresses));
            } catch (e) {
                console.error("Error parsing addresses", e);
            }
        } else {
            // If no addresses saved, try to create one from user details
            const userDetails = JSON.parse(localStorage.getItem('roundmart_user_details') || '{}');
            const userName = localStorage.getItem('roundmart_user_name') || "";

            if (userName && userDetails.address) {
                // Build full address
                let fullAddress = userDetails.address || "";
                if (fullAddress && !fullAddress.includes(',')) {
                    const parts = [userDetails.city, userDetails.state, userDetails.country, userDetails.postalCode];
                    parts.forEach(part => {
                        if (part && !fullAddress.toLowerCase().includes(part.toLowerCase())) {
                            fullAddress += `, ${part}`;
                        }
                    });
                }

                const defaultAddress: Address = {
                    id: Date.now().toString(),
                    name: userName,
                    address: fullAddress,
                    phone: userDetails.phone || userDetails.email || "",
                    isDefault: true,
                };
                setAddresses([defaultAddress]);
                localStorage.setItem('roundmart_addresses', JSON.stringify([defaultAddress]));
            }
        }
    }, []);

    // Save addresses to localStorage whenever they change
    const saveAddresses = (newAddresses: Address[]) => {
        setAddresses(newAddresses);
        localStorage.setItem('roundmart_addresses', JSON.stringify(newAddresses));
    };

    const handleAddAddress = () => {
        if (!formData.name.trim() || !formData.address.trim()) {
            alert("Please fill in name and address");
            return;
        }

        const newAddress: Address = {
            id: Date.now().toString(),
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
            isDefault: addresses.length === 0,
        };

        saveAddresses([...addresses, newAddress]);
        setFormData({ name: "", address: "", phone: "" });
        setShowAddModal(false);
    };

    const handleEditAddress = () => {
        if (!editingAddress || !formData.name.trim() || !formData.address.trim()) {
            alert("Please fill in name and address");
            return;
        }

        const updatedAddresses = addresses.map(addr =>
            addr.id === editingAddress.id
                ? { ...addr, name: formData.name, address: formData.address, phone: formData.phone }
                : addr
        );

        saveAddresses(updatedAddresses);
        setFormData({ name: "", address: "", phone: "" });
        setEditingAddress(null);
    };

    const handleDeleteAddress = (id: string) => {
        if (!confirm("Are you sure you want to delete this address?")) return;

        const addressToDelete = addresses.find(a => a.id === id);
        let updatedAddresses = addresses.filter(addr => addr.id !== id);

        // If we deleted the default, make the first remaining one default
        if (addressToDelete?.isDefault && updatedAddresses.length > 0) {
            updatedAddresses[0].isDefault = true;
        }

        saveAddresses(updatedAddresses);
    };

    const handleSetDefault = (id: string) => {
        const updatedAddresses = addresses.map(addr => ({
            ...addr,
            isDefault: addr.id === id,
        }));
        saveAddresses(updatedAddresses);
    };

    const openEditModal = (address: Address) => {
        setEditingAddress(address);
        setFormData({
            name: address.name,
            address: address.address,
            phone: address.phone,
        });
    };

    const closeModal = () => {
        setShowAddModal(false);
        setEditingAddress(null);
        setFormData({ name: "", address: "", phone: "" });
    };

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
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90"
                    >
                        <span className="truncate">Add New Address</span>
                    </button>
                </div>

                {/* Address Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-0">
                    {addresses.length === 0 ? (
                        <div className="col-span-full text-center py-12 text-gray-500 dark:text-gray-400">
                            <p className="text-lg">No addresses saved yet.</p>
                            <p className="text-sm mt-2">Add your first address to get started!</p>
                        </div>
                    ) : (
                        addresses.map((address) => (
                            <div
                                key={address.id}
                                className="bg-white dark:bg-background-dark/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6"
                            >
                                <div className="flex flex-col items-stretch justify-start gap-4">
                                    <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2">
                                        <div className="flex justify-between items-start">
                                            <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                                                {address.name}
                                            </p>
                                            {address.isDefault && (
                                                <div className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary dark:text-primary-300">
                                                    Default Address
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-1 text-gray-500 dark:text-gray-400">
                                            <p className="text-base font-normal leading-normal">
                                                {address.address}
                                            </p>
                                            {address.phone && (
                                                <p className="text-base font-normal leading-normal">
                                                    Phone: {address.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button
                                            onClick={() => openEditModal(address)}
                                            className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-medium leading-normal"
                                        >
                                            <span className="truncate">Edit</span>
                                        </button>
                                        <button
                                            onClick={() => handleDeleteAddress(address.id)}
                                            className="flex-1 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200/80 dark:bg-gray-800 text-gray-900 dark:text-gray-300 text-sm font-medium leading-normal hover:bg-gray-300/80 dark:hover:bg-gray-700"
                                        >
                                            <span className="truncate">Delete</span>
                                        </button>
                                    </div>
                                    {!address.isDefault && (
                                        <button
                                            onClick={() => handleSetDefault(address.id)}
                                            className="text-primary text-sm font-medium text-center mt-2 hover:underline"
                                        >
                                            Set as Default
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Add/Edit Modal */}
            {(showAddModal || editingAddress) && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={closeModal} />
                    <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 animate-in zoom-in-95 duration-300">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            {editingAddress ? "Edit Address" : "Add New Address"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                    placeholder="Enter full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Address
                                </label>
                                <textarea
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm p-4 min-h-[100px]"
                                    placeholder="Enter full address (street, city, state, country, postal code)"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm focus:border-primary focus:ring-primary dark:text-white sm:text-sm h-11 px-4"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={closeModal}
                                className="flex-1 h-10 px-4 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={editingAddress ? handleEditAddress : handleAddAddress}
                                className="flex-1 h-10 px-4 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                            >
                                {editingAddress ? "Save Changes" : "Add Address"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
