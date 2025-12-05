"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Translations for all supported languages
const translations: Record<string, Record<string, string>> = {
    "en-IN": {
        // General
        appName: "ROUNDMART",
        home: "Home",
        shop: "Shop",
        collections: "Collections",
        about: "About",
        contact: "Contact",
        search: "Search",
        cart: "Cart",
        account: "Account",
        login: "Login",
        logout: "Logout",

        // Preferences Page
        preferences: "Preferences",
        notifications: "Notifications",
        emailNotifications: "Email Notifications",
        emailNotificationsDesc: "Receive emails about your account activity.",
        smsNotifications: "SMS Notifications",
        smsNotificationsDesc: "Receive text messages for important updates.",
        marketingEmails: "Marketing Emails",
        marketingEmailsDesc: "Receive emails about new products and offers.",
        regionalSettings: "Regional Settings",
        language: "Language",
        currency: "Currency",
        cancel: "Cancel",
        savePreferences: "Save Preferences",
        profile: "Profile",
        security: "Security",
        preferencesSaved: "Preferences Saved!",

        // Home Page
        heroTitle: "Premium Goods for the Discerning",
        heroSubtitle: "Discover a curated collection of luxury items designed to elevate your lifestyle.",
        shopNow: "Shop Now",
        shopCollection: "Shop Collection",
        exploreCollections: "Explore Collections",
        featuredProducts: "Featured Products",
        newArrivals: "New Arrivals",
        trendingNow: "Trending Now",
        viewAll: "View All",
        addToCart: "Add to Cart",

        // Footer
        subscribe: "Subscribe",
        subscribeDesc: "Join our newsletter for exclusive offers and updates.",
        emailPlaceholder: "Enter your email",
        rightsReserved: "All rights reserved.",
    },
    "ta": {
        // General
        appName: "ரೌಂಡ್ಮಾರ್ಟ್",
        home: "முகப்பு",
        shop: "கடை",
        collections: "தொகுப்புகள்",
        about: "பற்றி",
        contact: "தொடர்பு",
        search: "தேடுக",
        cart: "கூடை",
        account: "கணக்கு",
        login: "உள்நுழைக",
        logout: "வெளியேறு",

        // Preferences Page
        preferences: "விருப்பத்தேர்வுகள்",
        notifications: "அறிவிப்புகள்",
        emailNotifications: "மின்னஞ்சல் அறிவிப்புகள்",
        emailNotificationsDesc: "உங்கள் கணக்கு செயல்பாடு பற்றிய மின்னஞ்சல்களைப் பெறுங்கள்.",
        smsNotifications: "SMS அறிவிப்புகள்",
        smsNotificationsDesc: "முக்கியமான புதுப்பிப்புகளுக்கான குறுஞ்செய்திகளைப் பெறுங்கள்.",
        marketingEmails: "சந்தைப்படுத்தல் மின்னஞ்சல்கள்",
        marketingEmailsDesc: "புதிய தயாரிப்புகள் மற்றும் சலுகைகள் பற்றிய மின்னஞ்சல்களைப் பெறுங்கள்.",
        regionalSettings: "பிராந்திய அமைப்புகள்",
        language: "மொழி",
        currency: "நாணயம்",
        cancel: "ரத்து செய்",
        savePreferences: "விருப்பங்களைச் சேமி",
        profile: "சுயவிவரம்",
        security: "பாதுகாப்பு",
        preferencesSaved: "விருப்பங்கள் சேமிக்கப்பட்டன!",

        // Home Page
        heroTitle: "நுண்ணறிவுள்ளவர்களுக்கான பிரீமியம் பொருட்கள்",
        heroSubtitle: "உங்கள் வாழ்க்கை முறையை உயர்த்த வடிவமைக்கப்பட்ட ஆடம்பர பொருட்களின் தொகுப்பைக் கண்டறியவும்.",
        shopNow: "இப்போது வாங்கவும்",
        shopCollection: "தொகுப்புகளை வாங்கவும்",
        exploreCollections: "தொகுப்புகளை ஆராயுங்கள்",
        featuredProducts: "சிறப்பு தயாரிப்புகள்",
        newArrivals: "புதிய வரவுகள்",
        trendingNow: "இப்போது பிரபலமாகிறது",
        viewAll: "அனைத்தையும் காண்க",
        addToCart: "கூடையில் சேர்",

        // Footer
        subscribe: "சந்தா",
        subscribeDesc: "பிரத்யேக சலுகைகள் மற்றும் புதுப்பிப்புகளுக்கு எங்கள் செய்திமடலில் சேருங்கள்.",
        emailPlaceholder: "உங்கள் மின்னஞ்சலை உள்ளிடவும்",
        rightsReserved: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
    // Add other languages here with same structure...
    // For brevity in this step, I'm including English and Tamil fully. 
    // Other languages will fallback to English or can be added incrementally.
    "hi": {
        appName: "राउंडमार्ट",
        home: "होम",
        shop: "दुकान",
        collections: "संग्रह",
        about: "के बारे में",
        contact: "संपर्क",
        search: "खोजें",
        cart: "कार्ट",
        account: "खाता",
        login: "लॉग इन",
        logout: "लॉग आउट",
        preferences: "प्राथमिकताएं",
        notifications: "सूचनाएं",
        emailNotifications: "ईमेल सूचनाएं",
        emailNotificationsDesc: "अपने खाते की गतिविधि के बारे में ईमेल प्राप्त करें।",
        smsNotifications: "एसएमएस सूचनाएं",
        smsNotificationsDesc: "महत्वपूर्ण अपडेट के लिए टेक्स्ट संदेश प्राप्त करें।",
        marketingEmails: "मार्केटिंग ईमेल",
        marketingEmailsDesc: "नए उत्पादों और ऑफ़र के बारे में ईमेल प्राप्त करें।",
        regionalSettings: "क्षेत्रीय सेटिंग्स",
        language: "भाषा",
        currency: "मुद्रा",
        cancel: "रद्द करें",
        savePreferences: "प्राथमिकताएं सहेजें",
        profile: "प्रोफ़ाइल",
        security: "सुरक्षा",
        preferencesSaved: "प्राथमिकताएं सहेजी गईं!",
        heroTitle: "समझदार लोगों के लिए प्रीमियम सामान",
        heroSubtitle: "अपनी जीवनशैली को ऊंचा उठाने के लिए डिज़ाइन किए गए लक्जरी आइटम का संग्रह खोजें।",
        shopNow: "अभी खरीदें",
        shopCollection: "संग्रह खरीदें",
        exploreCollections: "संग्रह देखें",
        featuredProducts: "विशेष उत्पाद",
        newArrivals: "नवागमन",
        trendingNow: "अभी ट्रेंडिंग",
        viewAll: "सभी देखें",
        addToCart: "कार्ट में जोड़ें",
        subscribe: "सदस्यता लें",
        subscribeDesc: "विशिष्ट ऑफ़र और अपडेट के लिए हमारे न्यूज़लेटर से जुड़ें।",
        emailPlaceholder: "अपना ईमेल दर्ज करें",
        rightsReserved: "सर्वाधिकार सुरक्षित।",
    },
    // ... (Other languages would follow similar pattern)
};

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    currency: string;
    setCurrency: (curr: string) => void;
    t: Record<string, string>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState("en-IN");
    const [currency, setCurrencyState] = useState("inr");

    // Check for saved language preference on mount
    useEffect(() => {
        const savedPrefs = localStorage.getItem('roundmart_language_preference');
        if (savedPrefs) {
            try {
                const { savedLanguage, savedCurrency, expiryTime } = JSON.parse(savedPrefs);
                const now = Date.now();

                // Check if preference is still valid (within 10 minutes)
                if (now < expiryTime) {
                    setLanguageState(savedLanguage);
                    setCurrencyState(savedCurrency);
                } else {
                    // Expired - remove from localStorage
                    localStorage.removeItem('roundmart_language_preference');
                }
            } catch {
                localStorage.removeItem('roundmart_language_preference');
            }
        }
    }, []);

    const setLanguage = (lang: string) => {
        setLanguageState(lang);
        // Persistence is handled by the save button in Preferences page, 
        // but we update state here immediately for real-time effect.
    };

    const setCurrency = (curr: string) => {
        setCurrencyState(curr);
    };

    // Get current translation object, fallback to English if missing
    const t = translations[language] || translations["en-IN"];

    return (
        <LanguageContext.Provider value={{ language, setLanguage, currency, setCurrency, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
