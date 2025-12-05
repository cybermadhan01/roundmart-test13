export interface Review {
    id: number;
    user: string;
    avatar: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    verified: boolean;
}

export interface Product {
    id: number | string;
    name: string;
    price: string;
    image: string;
    badge?: string;
    rating: number;
    reviewCount?: number;
    description: string;
    images?: string[];
    features?: string[];
    colors?: string[];
    longDescription?: string;
    shippingInfo?: string;
    returnsPolicy?: string;
    warrantyInfo?: string;
    reviews?: Review[];
}

export const products: Product[] = [
    // New Arrivals
    {
        id: 101,
        name: "Neo-Tokyo Street Hoodie",
        price: "₹4,999",
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.9,
        reviewCount: 1243,
        description: "Embrace the urban future with our Neo-Tokyo Street Hoodie. Crafted from premium heavyweight cotton, this hoodie features futuristic graphics and a relaxed, oversized fit perfect for the modern street style enthusiast.",
        features: ["Premium Heavyweight Cotton", "Relaxed Oversized Fit", "High-Definition Print", "Spacious Kangaroo Pocket"],
        colors: ["Black", "Cyber Yellow"],
        longDescription: "Step into the avant-garde of streetwear with the Neo-Tokyo Street Hoodie. This isn't just a piece of clothing; it's a statement. Inspired by the vibrant, neon-lit streets of a futuristic metropolis, the design blends cyberpunk aesthetics with uncompromising comfort. \n\nThe heavyweight 400gsm cotton fleece provides substantial warmth and a structured drape that maintains its shape wear after wear. The oversized silhouette is carefully cut to offer a relaxed, effortless vibe without looking sloppy. \n\nFeaturing high-definition, rubberized prints that won't crack or fade, and reinforced stitching at stress points, this hoodie is built to last. Whether you're navigating the city jungle or lounging at home, the Neo-Tokyo Street Hoodie delivers style and substance in equal measure.",
        shippingInfo: "Free express shipping on all orders. Expected delivery within 3-5 business days. Real-time tracking available via our logistics partners.",
        returnsPolicy: "We offer a 30-day hassle-free return policy. If the fit isn't perfect, return it in its original condition for a full refund or exchange. No questions asked.",
        warrantyInfo: "This product is covered by a 1-year warranty against manufacturing defects, including stitching failures and fabric integrity issues.",
        reviews: [
            { id: 1, user: "Alex K.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Alex", rating: 5, date: "2 days ago", title: "Absolutely sick design!", comment: "The print quality is insane, and the fit is exactly what I was looking for. Super heavy and warm.", verified: true },
            { id: 2, user: "Sarah M.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah", rating: 5, date: "1 week ago", title: "My new favorite hoodie", comment: "I literally live in this now. The yellow is so vibrant. fast shipping too!", verified: true },
            { id: 3, user: "Jordan P.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jordan", rating: 4, date: "2 weeks ago", title: "Great quality, runs big", comment: "Amazing quality but definitely size down if you don't want it too baggy.", verified: true }
        ]
    },
    {
        id: 102,
        name: "Cyberpunk Visor Shades",
        price: "₹2,499",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.8,
        reviewCount: 856,
        description: "Step into the future with these Cyberpunk Visor Shades. Featuring a sleek, rimless design and UV400 protection, they are the ultimate accessory for a bold, avant-garde look.",
        features: ["Advanced UV400 Protection", "Sleek Rimless Design", "Featherlight Frame", "Anti-scratch Coating"],
        colors: ["Neon Blue", "Matrix Green"],
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1625591348650-0a166c941e34?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800"
        ],
        longDescription: "Channel the energy of a digital future with the Cyberpunk Visor Shades. These aren't just sunglasses; they are a piece of wearable art. The seamless, single-lens construction offers an uninterrupted field of view and a distinct, edgy aesthetic.\n\nEngineered with high-grade polycarbonate, the lens is shatter-resistant and provides 100% UV400 protection against harmful rays. The rimless design keeps them incredibly lightweight, ensuring you can wear them all day without discomfort.\n\nFinished with a specialized anti-scratch and anti-fog coating, these shades are ready for any environment, from the club to the streets.",
        shippingInfo: "Dispatched within 24 hours. Standard delivery takes 4-6 business days. Express delivery options available at checkout.",
        returnsPolicy: "7-day return policy for eyewear. Product must be returned in original packaging with all tags and cleaning cloth included.",
        warrantyInfo: "6-month warranty covering hinge mechanisms and lens coating defects.",
        reviews: [
            { id: 1, user: "Ravi T.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ravi", rating: 5, date: "3 days ago", title: "Looks futuristic", comment: "Everyone asks me where I got these. They look straight out of a movie.", verified: true },
            { id: 2, user: "Emily R.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Emily", rating: 4, date: "1 month ago", title: "Cool but fragile", comment: "Love the look, but you have to be careful with them since they are rimless.", verified: true }
        ]
    },
    {
        id: 103,
        name: "Holographic Backpack",
        price: "₹6,999",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.7,
        reviewCount: 624,
        description: "Carry your essentials in style with our Holographic Backpack. The iridescent finish changes color with the light, making it a standout piece for school, work, or travel.",
        features: ["Iridescent Holographic Finish", "Padded Laptop Compartment", "Water-Resistant Material", "Ergonomic Straps"],
        colors: ["Iridescent"],
        longDescription: "Make every journey a visual experience with the Holographic Backpack. Crafted from a specialized light-refracting material, this backpack shifts colors as you move, creating a stunning iridescent effect that demands attention.\n\nBeyond its mesmerizing exterior lies a highly functional interior. It features a dedicated padded sleeve that fits laptops up to 15 inches, ensuring your tech stays safe. Multiple organizational pockets keep your cables, keys, and accessories tidy.\n\nThe water-resistant outer shell protects your gear from the elements, while the ergonomic, padded shoulder straps ensure comfort even when carrying a heavy load.",
        shippingInfo: "Free standard shipping. Delivery in 5-7 business days. Secure packaging to prevent damage during transit.",
        returnsPolicy: "30-day return window. Item must be unused and tags attached.",
        warrantyInfo: "1-year warranty on zippers and stitching.",
        reviews: [
            { id: 1, user: "Jessica L.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jessica", rating: 5, date: "1 week ago", title: "So shiny!", comment: "It's even prettier in person. Fits my MacBook Pro perfectly.", verified: true },
            { id: 2, user: "Mike D.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mike", rating: 4, date: "3 weeks ago", title: "Good bag", comment: "Great bag, but the side pockets are a bit tight for large water bottles.", verified: true }
        ]
    },
    {
        id: 104,
        name: "Quantum Sneakers Gen 2",
        price: "₹12,999",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 5.0,
        reviewCount: 2105,
        description: "Experience unparalleled comfort and energy return with the Quantum Sneakers Gen 2. Engineered with our proprietary foam technology, these sneakers are designed for all-day wear and peak performance.",
        features: ["Proprietary Quantum Foam", "Breathable Mesh Upper", "Adaptive Comfort Fit", "High-Traction Outsole"],
        colors: ["Red/White", "Stealth Black"],
        longDescription: "Redefine your stride with the Quantum Sneakers Gen 2. Born from years of biomechanical research, these sneakers feature our revolutionary Quantum Foam midsole, which delivers 40% more energy return than standard EVA foam.\n\nThe upper is constructed from a single-piece engineered mesh that adapts to the natural shape of your foot, providing a sock-like fit that breathes. Strategic support zones are woven directly into the fabric, eliminating the need for heavy overlays.\n\nWhether you're running a marathon or running errands, the high-traction rubber outsole ensures stability on any surface.",
        shippingInfo: "Free express shipping. Delivery in 2-4 business days. Double-boxed for protection.",
        returnsPolicy: "60-day trial period. Wear them, run in them. If you don't love them, return them for a full refund.",
        warrantyInfo: "2-year warranty against sole separation and upper tearing.",
        reviews: [
            { id: 1, user: "David B.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=David", rating: 5, date: "2 days ago", title: "Best shoes I've ever owned", comment: "Like walking on clouds. Seriously. The energy return is real.", verified: true },
            { id: 2, user: "Chris A.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Chris", rating: 5, date: "5 days ago", title: "Worth every penny", comment: "Expensive, but your knees will thank you. Great for long shifts.", verified: true }
        ]
    },
    {
        id: 105,
        name: "Minimalist Tech Watch",
        price: "₹8,499",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.6,
        reviewCount: 532,
        description: "A perfect blend of classic design and modern smart features. The Minimalist Tech Watch tracks your activity and notifications without sacrificing style.",
        features: ["Smart Activity Tracking", "Instant Notification Alerts", "7-Day Battery Life", "5ATM Water Resistance"],
        colors: ["Midnight Black", "Rose Gold"],
        longDescription: "Technology shouldn't look like a gadget. The Minimalist Tech Watch bridges the gap between a classic timepiece and a modern smartwatch. With a clean, analog face and a hidden OLED display, you get the best of both worlds.\n\nTrack your steps, heart rate, and sleep quality seamlessly. Receive gentle vibration alerts for calls and messages without lighting up a screen. The premium stainless steel case and sapphire crystal glass ensure durability and scratch resistance.\n\nWith an impressive 7-day battery life, you can spend less time charging and more time living.",
        shippingInfo: "Free shipping. Delivery in 3-5 business days.",
        returnsPolicy: "14-day return policy. Watch must be unworn and in original packaging.",
        warrantyInfo: "1-year manufacturer warranty on movement and battery.",
        reviews: [
            { id: 1, user: "Sophie T.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sophie", rating: 5, date: "1 week ago", title: "Elegant and smart", comment: "Finally a smartwatch that looks good with a suit. The hidden display is clever.", verified: true },
            { id: 2, user: "Mark W.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mark", rating: 4, date: "2 weeks ago", title: "Good battery", comment: "Battery life is as advertised. App could be a bit better though.", verified: true }
        ]
    },
    {
        id: 106,
        name: "Urban Utility Jacket",
        price: "₹7,999",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.8,
        reviewCount: 987,
        description: "Function meets fashion in the Urban Utility Jacket. With multiple pockets and weather-resistant fabric, it's built for the city explorer.",
        features: ["Weather-Resistant Fabric", "Multi-Pocket Utility", "Adjustable Cuffs & Hem", "Breathable Mesh Lining"],
        colors: ["Olive Green", "Charcoal Grey"],
        longDescription: "Navigate the city in any weather with the Urban Utility Jacket. Constructed from a high-density, water-repellent nylon blend, this jacket shields you from wind and light rain while maintaining breathability.\n\nStorage is never an issue with 6 secure pockets, including a hidden interior pocket for valuables. The articulated sleeves and adjustable cuffs allow for a full range of motion, making it perfect for commuting or photography.\n\nThe modern, tailored fit ensures you look sharp whether you're on a trail or at a cafe.",
        shippingInfo: "Standard shipping (4-6 days).",
        returnsPolicy: "30-day returns. Item must be unwashed and unworn.",
        warrantyInfo: "1-year warranty on zippers and snaps.",
        reviews: [
            { id: 1, user: "Daniel K.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Daniel", rating: 5, date: "4 days ago", title: "Perfect city jacket", comment: "Pockets everywhere! Keeps me dry in light rain. Looks great.", verified: true }
        ]
    },
    {
        id: 107,
        name: "Smart Ring V3",
        price: "₹15,999",
        image: "https://images.unsplash.com/photo-1622434641406-a158123450f9?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.9,
        reviewCount: 1540,
        description: "Track your health metrics discreetly with the Smart Ring V3. Monitor sleep, heart rate, and activity levels with this sleek, wearable technology.",
        features: ["Advanced Health Metrics", "Sleep Cycle Monitoring", "Durable Titanium Body", "IP68 Waterproof"],
        colors: ["Silver", "Black", "Gold"],
        longDescription: "Unlock a deeper understanding of your body with the Smart Ring V3. This tiny, unobtrusive ring packs medical-grade sensors to track your sleep stages, heart rate variability, and recovery trends with clinical accuracy.\n\nCrafted from aerospace-grade titanium, it is incredibly durable yet lightweight. The inner molding is hypoallergenic and designed for 24/7 comfort. With IP68 water resistance, you can wear it while swimming or showering.\n\nSyncs seamlessly with our app to provide personalized insights and coaching to improve your wellness.",
        shippingInfo: "Free insured shipping. Delivery in 3-5 days. Sizing kit sent first if needed.",
        returnsPolicy: "30-day money-back guarantee.",
        warrantyInfo: "1-year warranty covering sensor failure and battery issues.",
        reviews: [
            { id: 1, user: "Priya S.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya", rating: 5, date: "2 days ago", title: "Game changer", comment: "So much better than wearing a bulky watch to sleep. Data is super accurate.", verified: true },
            { id: 2, user: "Tom H.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tom", rating: 5, date: "1 week ago", title: "Forget it's there", comment: "Very comfortable. Battery lasts about 4 days for me.", verified: true }
        ]
    },
    {
        id: 108,
        name: "Wireless Noise Buds",
        price: "₹5,499",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.7,
        reviewCount: 758,
        description: "Immerse yourself in music with our Wireless Noise Buds. Active noise cancellation and premium sound drivers deliver a studio-quality listening experience.",
        features: ["Active Noise Cancellation", "30-Hour Battery Life", "Intuitive Touch Controls", "IPX4 Sweat Resistance"],
        colors: ["Matte Black", "Glossy White"],
        longDescription: "Silence the noise and amplify the music. The Wireless Noise Buds feature advanced hybrid Active Noise Cancellation that blocks out up to 98% of ambient sound, allowing you to focus on what matters.\n\nCustom-tuned 11mm dynamic drivers produce deep, punchy bass and crystal-clear highs. With the charging case, you get up to 30 hours of total playtime.\n\nErgonomically designed for a secure fit, they are perfect for workouts, commutes, or long flights.",
        shippingInfo: "Standard shipping (3-5 days).",
        returnsPolicy: "14-day returns. Hygiene seal must be unbroken.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Amit R.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Amit", rating: 4, date: "5 days ago", title: "Great sound, okay ANC", comment: "Sound quality is top notch. ANC is good for the price but not the best.", verified: true }
        ]
    },

    // Featured Collection
    {
        id: 201,
        name: "Premium Leather Satchel",
        price: "₹8,999",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 4.9,
        reviewCount: 1120,
        description: "Handcrafted from full-grain leather, this satchel is a timeless accessory for the modern professional. It ages beautifully and features ample storage for your daily essentials.",
        features: ["Full-Grain Genuine Leather", "Antique Brass Hardware", "Padded Laptop Sleeve", "Adjustable Shoulder Strap"],
        colors: ["Tan", "Dark Brown"],
        longDescription: "Invest in a legacy piece with our Premium Leather Satchel. Meticulously handcrafted by skilled artisans using vegetable-tanned full-grain leather, this bag develops a rich, unique patina over time, telling the story of your journeys.\n\nThe spacious main compartment features a dedicated padded sleeve for laptops up to 14 inches, along with organizers for pens, cards, and your phone. Heavy-duty antique brass hardware and reinforced stitching ensure it can withstand the rigors of daily use.\n\nClassic, durable, and sophisticated—it's the only work bag you'll ever need.",
        shippingInfo: "Free express shipping. Comes in a protective dust bag.",
        returnsPolicy: "30-day returns. Leather must be unblemished.",
        warrantyInfo: "Lifetime warranty on leather and hardware integrity.",
        reviews: [
            { id: 1, user: "James F.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=James", rating: 5, date: "2 weeks ago", title: "Beautiful craftsmanship", comment: "The smell of the leather is amazing. Sturdy and looks professional.", verified: true },
            { id: 2, user: "Linda G.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Linda", rating: 5, date: "1 month ago", title: "Perfect size", comment: "Fits my MacBook Air and iPad perfectly. Love the vintage look.", verified: true }
        ]
    },
    {
        id: 202,
        name: "Ceramic Coffee Set",
        price: "₹3,499",
        image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 4.8,
        reviewCount: 675,
        description: "Elevate your morning ritual with this artisanal Ceramic Coffee Set. Includes a pour-over dripper and a matching mug, finished with a unique reactive glaze.",
        features: ["Hand-Glazed Finish", "Microwave & Dishwasher Safe", "Artisanal Craftsmanship", "Unique Reactive Glaze"],
        colors: ["Ocean Blue", "Stone Grey"],
        longDescription: "Slow down and savor the moment with our Ceramic Coffee Set. Each piece is hand-thrown on a potter's wheel and finished with a custom reactive glaze, ensuring that no two sets are exactly alike.\n\nThe set includes a V60-style pour-over dripper designed for optimal extraction and a matching 350ml mug that fits perfectly in your hand. The high-fired stoneware retains heat exceptionally well, keeping your coffee warm longer.\n\nFunctional art for your kitchen, and the perfect gift for the coffee lover in your life.",
        shippingInfo: "Fragile item shipping. Double-boxed with eco-friendly padding.",
        returnsPolicy: "Broken on arrival? Instant replacement. 30-day returns for unused items.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "CoffeeLvr", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Coffee", rating: 5, date: "3 days ago", title: "Stunning glaze", comment: "The colors are even better in person. Makes my morning coffee feel special.", verified: true }
        ]
    },
    {
        id: 203,
        name: "Mechanical Keyboard Pro",
        price: "₹11,999",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 5.0,
        reviewCount: 1890,
        description: "Type with precision and speed on the Mechanical Keyboard Pro. Featuring hot-swappable switches and RGB backlighting, it's a dream for gamers and typists alike.",
        features: ["Hot-Swappable Switches", "Dynamic RGB Backlighting", "Aircraft-Grade Aluminum", "Durable PBT Keycaps"],
        colors: ["White/Grey", "Black/Red"],
        longDescription: "Dominate the game and the spreadsheet with the Mechanical Keyboard Pro. Built on a solid aircraft-grade aluminum frame, this keyboard offers zero flex and maximum stability.\n\nIt comes pre-installed with tactile mechanical switches that provide satisfying feedback with every keystroke. The hot-swappable PCB allows you to change switches without soldering, so you can customize the feel to your exact preference.\n\nDouble-shot PBT keycaps resist shine and wear, while the per-key RGB lighting can be customized with endless effects.",
        shippingInfo: "Free shipping. Delivery in 3-5 days.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "2-year warranty.",
        reviews: [
            { id: 1, user: "GamerX", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Gamer", rating: 5, date: "1 day ago", title: "Clicky and responsive", comment: "Best keyboard I've used. The build quality is tank-like.", verified: true }
        ]
    },
    {
        id: 204,
        name: "Designer Sunglasses",
        price: "₹6,499",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 4.7,
        reviewCount: 598,
        description: "Make a statement with these Designer Sunglasses. Italian acetate frames and polarized lenses ensure both style and protection.",
        features: ["Premium Italian Acetate", "Polarized UV Lenses", "100% UV Protection", "Hand-Polished Finish"],
        colors: ["Tortoise", "Black"],
        longDescription: "Timeless style meets modern craftsmanship. These Designer Sunglasses are hand-cut from premium Italian cellulose acetate, a material known for its rich colors and durability.\n\nThe lenses are CR-39 polarized, offering superior optical clarity while eliminating glare and blocking 100% of harmful UVA and UVB rays. The 5-barrel stainless steel hinges ensure a secure, comfortable fit that lasts.\n\nA classic silhouette that complements every face shape.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "7-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Fashionista", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Fashion", rating: 5, date: "1 week ago", title: "Chic and sturdy", comment: "They feel very expensive. Love the tortoise shell pattern.", verified: true }
        ]
    },
    {
        id: 205,
        name: "Smart Home Hub",
        price: "₹9,999",
        image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d5?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 4.6,
        reviewCount: 512,
        description: "Control your entire home with the Smart Home Hub. Compatible with thousands of devices, it brings convenience and automation to your fingertips.",
        features: ["Voice Control Integration", "Universal Compatibility", "Simple Plug & Play", "Bank-Grade Encryption"],
        colors: ["White", "Charcoal"],
        longDescription: "The brain of your smart home. The Smart Home Hub unifies all your connected devices into a single, easy-to-use interface. Compatible with Zigbee, Z-Wave, Wi-Fi, and Bluetooth, it works with over 5,000 devices from top brands.\n\nSet up routines to automatically turn off lights when you leave, adjust the thermostat, or lock the doors at night. Voice control integration with Alexa and Google Assistant makes management hands-free.\n\nYour privacy is paramount; all local processing is encrypted.",
        shippingInfo: "Free shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "TechDad", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tech", rating: 4, date: "2 weeks ago", title: "Works well", comment: "Easy setup. Sometimes disconnects but reconnects quickly.", verified: true }
        ]
    },
    {
        id: 206,
        name: "Vintage Analog Camera",
        price: "₹24,999",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 4.9,
        reviewCount: 1345,
        description: "Capture moments with soul using this Vintage Analog Camera. Fully restored and ready to shoot, it offers the authentic film photography experience.",
        features: ["35mm Film Compatible", "Manual Focus Control", "Built-in Light Meter", "Classic Retro Design"],
        colors: ["Silver/Black"],
        longDescription: "Rediscover the art of photography. This Vintage Analog Camera has been professionally restored to its original glory. It features a sharp 50mm f/1.8 lens perfect for portraits and street photography.\n\nThe mechanical shutter provides that satisfying click that digital cameras can't replicate. A built-in light meter helps you nail the exposure every time.\n\nPerfect for students, enthusiasts, or anyone looking to slow down and make every shot count.",
        shippingInfo: "Insured shipping.",
        returnsPolicy: "14-day returns.",
        warrantyInfo: "6-month mechanical warranty.",
        reviews: [
            { id: 1, user: "FilmBuff", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Film", rating: 5, date: "3 days ago", title: "Mint condition", comment: "Camera arrived looking brand new. Light seals were replaced too. Excellent.", verified: true }
        ]
    },
    {
        id: 207,
        name: "Ergonomic Office Chair",
        price: "₹18,999",
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 4.8,
        reviewCount: 923,
        description: "Work in comfort with our Ergonomic Office Chair. Adjustable lumbar support, breathable mesh, and a reclining backrest ensure you stay supported all day.",
        features: ["Adjustable Lumbar Support", "Breathable Mesh Back", "4D Adjustable Armrests", "Deep Recline Function"],
        colors: ["Black", "Grey"],
        longDescription: "Your back deserves better. The Ergonomic Office Chair is designed for 8+ hours of comfortable sitting. The adaptive lumbar support system automatically adjusts to your posture, maintaining the natural curve of your spine.\n\nThe high-elasticity mesh backrest promotes airflow, keeping you cool even on hot days. 4D armrests can be adjusted in height, width, depth, and angle to support your arms perfectly while typing.\n\nInvest in your health and productivity.",
        shippingInfo: "Free heavy item shipping. Assembly required.",
        returnsPolicy: "30-day trial.",
        warrantyInfo: "5-year warranty on frame and mechanism.",
        reviews: [
            { id: 1, user: "WFH_Pro", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=WFH", rating: 5, date: "1 week ago", title: "Saved my back", comment: "No more back pain after long coding sessions. Worth the money.", verified: true }
        ]
    },
    {
        id: 208,
        name: "Portable Projector 4K",
        price: "₹32,999",
        image: "https://images.unsplash.com/photo-1596322723326-0e9f3b2d1c6f?auto=format&fit=crop&q=80&w=800",
        badge: "Featured",
        rating: 4.7,
        reviewCount: 645,
        description: "Bring the cinema home with the Portable Projector 4K. Ultra-bright LED and built-in speakers make it perfect for movie nights anywhere.",
        features: ["Native 4K Resolution", "Dual Stereo Speakers", "Android TV Built-in", "Compact Portable Design"],
        colors: ["White"],
        longDescription: "Big screen entertainment, anywhere. The Portable Projector 4K delivers stunningly sharp visuals with HDR10 support and 1500 ANSI lumens of brightness.\n\nWith Android TV built-in, you can stream Netflix, YouTube, and Prime Video directly without any external dongles. The Harman Kardon tuned speakers provide rich, room-filling sound.\n\nAuto-keystone correction and autofocus make setup a breeze—just point and play.",
        shippingInfo: "Free express shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "MovieNight", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Movie", rating: 4, date: "2 days ago", title: "Great picture", comment: "Picture is amazing in dark rooms. Fan is a little audible but not distracting.", verified: true }
        ]
    },

    // Home Page / Best Sellers (Adding some from Home Page logic if needed, or mapping existing)
    {
        id: 1,
        name: "Modern Leather Sofa",
        price: "₹45,999",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800",
        badge: "Hot",
        rating: 4.8,
        reviewCount: 892,
        description: "A sleek, modern leather sofa that anchors any living room. High-density foam cushions and genuine leather upholstery offer both comfort and durability.",
        features: ["Genuine Top-Grain Leather", "High-Density Foam", "Solid Hardwood Frame", "Mid-Century Modern Design"],
        colors: ["Cognac", "Black"],
        longDescription: "The centerpiece your living room has been waiting for. The Modern Leather Sofa combines mid-century modern aesthetics with contemporary comfort. Upholstered in premium Italian top-grain leather that feels buttery soft and develops character with age.\n\nThe frame is constructed from kiln-dried solid hardwood for superior durability. High-resiliency foam cushions wrapped in down feathers provide the perfect balance of support and sink-in comfort.\n\nElegant tapered legs complete the sophisticated look.",
        shippingInfo: "Scheduled freight delivery. White glove service included.",
        returnsPolicy: "30-day returns. Restocking fee may apply.",
        warrantyInfo: "10-year frame warranty.",
        reviews: [
            { id: 1, user: "InteriorDes", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Interior", rating: 5, date: "1 month ago", title: "Stunning", comment: "Looks way more expensive than it is. Very comfortable.", verified: true }
        ]
    },
    {
        id: 2,
        name: "Minimalist Desk Lamp",
        price: "₹3,299",
        image: "https://images.unsplash.com/photo-1507473888900-52e1adad5481?auto=format&fit=crop&q=80&w=800",
        badge: "New",
        rating: 4.6,
        reviewCount: 554,
        description: "Illuminate your workspace with this Minimalist Desk Lamp. Adjustable brightness and color temperature allow you to customize your lighting environment.",
        features: ["Fully Dimmable LED", "Color Temp Control", "Touch Sensitive Base", "Integrated USB Port"],
        colors: ["White", "Black"],
        longDescription: "Form follows function. The Minimalist Desk Lamp features a slim, architectural profile that disappears into your workspace until you need it. The energy-efficient LED panel provides flicker-free light that reduces eye strain.\n\nSlide your finger along the base to adjust brightness, or tap to switch between warm, neutral, and cool light modes. A built-in USB port allows you to charge your phone right from the lamp base.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "2-year warranty.",
        reviews: [
            { id: 1, user: "Student101", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Student", rating: 5, date: "3 days ago", title: "Great lamp", comment: "Perfect for late night study sessions. The USB port is super handy.", verified: true }
        ]
    },
    {
        id: 3,
        name: "Smart Fitness Watch",
        price: "₹6,999",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=800",
        badge: "Trending",
        rating: 4.9,
        reviewCount: 1456,
        description: "Achieve your fitness goals with the Smart Fitness Watch. Advanced sensors track every move, while the vibrant display keeps you connected.",
        features: ["Precision GPS Tracking", "24/7 Heart Rate Monitor", "5ATM Waterproof", "Smart Phone Notifications"],
        colors: ["Black", "Blue", "Pink"],
        longDescription: "Your personal trainer on your wrist. The Smart Fitness Watch features advanced biometrics to track your workouts, sleep, and stress levels. The built-in GPS maps your runs without needing your phone.\n\nWith over 100 sport modes, it recognizes your activity automatically. The AMOLED display is bright and crisp, visible even in direct sunlight.\n\nStay connected with call, text, and app notifications delivered straight to your wrist.",
        shippingInfo: "Free shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "RunnerGirl", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Runner", rating: 5, date: "1 week ago", title: "Accurate GPS", comment: "GPS locks on fast. Heart rate seems accurate compared to my chest strap.", verified: true }
        ]
    },
    {
        id: 4,
        name: "Premium Noise-Canceling Headphones",
        price: "₹14,999",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        badge: "Hot",
        rating: 4.9,
        reviewCount: 1678,
        description: "Shut out the world and lose yourself in the music. These Premium Noise-Canceling Headphones offer industry-leading silence and exceptional sound quality.",
        features: ["Hybrid Active Noise Cancel", "40-Hour Playtime", "Plush Memory Foam", "Hi-Res Audio Certified"],
        colors: ["Silver", "Black"],
        longDescription: "Experience sound in its purest form. Our Premium Noise-Canceling Headphones use dual-microphone noise sensor technology to capture and cancel ambient noise in real-time.\n\nThe 40mm liquid crystal polymer drivers reproduce a full range of frequencies up to 40kHz. Soft, pressure-relieving ear pads in foamed urethane evenly distribute pressure and increase ear pad contact for a stable fit.\n\nWith 30 hours of battery life and quick charging, the music never has to stop.",
        shippingInfo: "Free express shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Audiophile", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Audio", rating: 5, date: "2 days ago", title: "Incredible soundstage", comment: "The separation is amazing. ANC is comparable to the big brands.", verified: true }
        ]
    },
    // Discovery Page Products
    // Watches (901-904)
    {
        id: 901,
        name: "Classic Chronograph",
        price: "₹18,200",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        badge: "Premium",
        rating: 4.8,
        reviewCount: 450,
        description: "A timeless classic chronograph that blends elegance with precision engineering. Perfect for the modern gentleman.",
        features: ["Sapphire Crystal Glass", "Swiss Movement", "Genuine Leather Strap", "5ATM Water Resistance"],
        colors: ["Brown/Silver", "Black/Gold"],
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "The Classic Chronograph is more than just a watch; it's a statement of sophistication. Featuring a precision Swiss movement encased in surgical-grade stainless steel, it offers unparalleled accuracy and durability.\n\nThe genuine leather strap ages beautifully, conforming to your wrist for a custom fit. Whether you're in the boardroom or at a black-tie event, this timepiece ensures you're always on time and in style.",
        shippingInfo: "Free insured shipping. Delivery in 3-5 business days.",
        returnsPolicy: "30-day return policy. Watch must be unworn with tags.",
        warrantyInfo: "2-year international warranty.",
        reviews: [
            { id: 1, user: "John D.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=John", rating: 5, date: "1 week ago", title: "Exquisite", comment: "The build quality is phenomenal. Looks even better in person.", verified: true }
        ]
    },
    {
        id: 902,
        name: "Smart Watch Pro",
        price: "₹24,800",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
        badge: "Tech",
        rating: 4.7,
        reviewCount: 890,
        description: "Stay connected and healthy with the Smart Watch Pro. Advanced fitness tracking meets sleek design.",
        features: ["AMOLED Display", "ECG Monitor", "GPS Tracking", "7-Day Battery"],
        colors: ["Black", "Silver"],
        images: [
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Elevate your daily routine with the Smart Watch Pro. Its vibrant AMOLED display brings your notifications and health data to life. With built-in GPS and an ECG monitor, it's a comprehensive health companion on your wrist.\n\nThe 7-day battery life means you can track your sleep and workouts without constant charging anxiety. Compatible with both iOS and Android.",
        shippingInfo: "Free shipping.",
        returnsPolicy: "14-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "TechGuru", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Tech", rating: 5, date: "3 days ago", title: "Best in class", comment: "Features rival the big brands at half the price.", verified: true }
        ]
    },
    {
        id: 903,
        name: "Minimalist Watch",
        price: "₹12,400",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&h=400&fit=crop",
        badge: "Minimal",
        rating: 4.6,
        reviewCount: 320,
        description: "Less is more. The Minimalist Watch features a clean dial and a slim profile for understated elegance.",
        features: ["Ultra-Slim Case", "Japanese Quartz Movement", "Mesh Strap", "Scratch-Resistant Glass"],
        colors: ["Gold", "Rose Gold"],
        images: [
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Designed for the purist, the Minimalist Watch strips away the unnecessary to focus on the essential: time. The ultra-slim case slides easily under a shirt cuff, making it the perfect dress watch.\n\nThe Japanese Quartz movement ensures reliable timekeeping, while the mesh strap offers a modern, comfortable fit.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Sarah L.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah", rating: 5, date: "2 weeks ago", title: "Beautiful", comment: "Simple and elegant. I wear it every day.", verified: true }
        ]
    },
    {
        id: 904,
        name: "Luxury Timepiece",
        price: "₹41,500",
        image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&h=400&fit=crop",
        badge: "Luxury",
        rating: 4.9,
        reviewCount: 150,
        description: "A masterpiece of horology. The Luxury Timepiece combines precious materials with expert craftsmanship.",
        features: ["Automatic Movement", "Sapphire Crystal", "Alligator Leather Strap", "Diamond Markers"],
        colors: ["Gold/Black"],
        images: [
            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Indulge in the ultimate luxury. This timepiece is a testament to traditional watchmaking, featuring a complex automatic movement visible through the exhibition case back.\n\nThe dial is adorned with diamond markers, and the strap is crafted from genuine alligator leather. It's not just a watch; it's an heirloom.",
        shippingInfo: "Insured priority shipping.",
        returnsPolicy: "30-day returns with authenticity check.",
        warrantyInfo: "5-year warranty.",
        reviews: [
            { id: 1, user: "Collector", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Collector", rating: 5, date: "1 month ago", title: "Stunning piece", comment: "A worthy addition to my collection.", verified: true }
        ]
    },

    // Shirts (301-304)
    {
        id: 301,
        name: "Casual Denim Shirt",
        price: "₹2,480",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop",
        badge: "Best Seller",
        rating: 4.5,
        reviewCount: 1200,
        description: "Rugged yet refined, this Casual Denim Shirt is a wardrobe staple. Soft, washed denim ensures all-day comfort.",
        features: ["100% Cotton Denim", "Double Stitching", "Soft Wash Finish", "Classic Collar"],
        colors: ["Blue", "Light Blue"],
        images: [
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "The perfect denim shirt does exist. We've treated this shirt with a special enzyme wash to give it that broken-in feel right from the first wear. It's versatile enough to wear tucked in for a smart-casual look or open over a tee for a relaxed vibe.\n\nDurable double stitching ensures it stands up to daily wear and tear.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "Mike R.", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mike", rating: 5, date: "3 days ago", title: "Great fit", comment: "Fits true to size. Fabric is soft.", verified: true }
        ]
    },
    {
        id: 302,
        name: "Formal White Shirt",
        price: "₹3,300",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop",
        badge: "Classic",
        rating: 4.8,
        reviewCount: 950,
        description: "Crisp, clean, and confident. The Formal White Shirt is essential for every professional wardrobe.",
        features: ["Wrinkle-Resistant Cotton", "Spread Collar", "Tailored Fit", "Premium Buttons"],
        colors: ["White"],
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Look sharp from 9 to 5 and beyond. Our Formal White Shirt is crafted from high-quality, wrinkle-resistant cotton that keeps you looking polished all day.\n\nThe tailored fit provides a modern silhouette without being restrictive. Finished with a spread collar that works perfectly with or without a tie.",
        shippingInfo: "Express shipping available.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "BusinessPro", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Business", rating: 5, date: "1 week ago", title: "Excellent quality", comment: "Stays crisp all day. Will buy more.", verified: true }
        ]
    },
    {
        id: 303,
        name: "Checked Flannel",
        price: "₹2,900",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=400&fit=crop",
        badge: "Cozy",
        rating: 4.7,
        reviewCount: 600,
        description: "Stay warm and stylish with our Checked Flannel. Made from brushed cotton for extra softness.",
        features: ["Brushed Cotton Flannel", "Classic Check Pattern", "Chest Pocket", "Warm & Breathable"],
        colors: ["Red/Black", "Blue/Green"],
        images: [
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Your go-to shirt for chilly days. This Checked Flannel is made from 100% brushed cotton, making it incredibly soft and warm. The classic check pattern never goes out of style.\n\nLayer it over a tee or under a jacket for a rugged, outdoorsy look.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "Outdoorsy", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Outdoor", rating: 5, date: "2 days ago", title: "So soft", comment: "My favorite winter shirt.", verified: true }
        ]
    },
    {
        id: 304,
        name: "Linen Summer Shirt",
        price: "₹2,680",
        image: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=400&h=400&fit=crop",
        badge: "Summer",
        rating: 4.6,
        reviewCount: 400,
        description: "Beat the heat with the Linen Summer Shirt. Lightweight and breathable for ultimate comfort.",
        features: ["100% Pure Linen", "Breathable Weave", "Relaxed Fit", "Natural Texture"],
        colors: ["Beige", "White", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Embrace the summer breeze. Our Linen Summer Shirt is crafted from premium flax linen, known for its exceptional breathability and cooling properties.\n\nThe relaxed fit allows for airflow, keeping you cool even on the hottest days. The natural texture of linen adds a touch of effortless sophistication.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "SummerVibes", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Summer", rating: 4, date: "1 week ago", title: "Very cool", comment: "Great for the beach. Wrinkles easily but that's linen.", verified: true }
        ]
    },

    // Pants (401-404)
    {
        id: 401,
        name: "Slim Fit Jeans",
        price: "₹3,700",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800",
        badge: "Essential",
        rating: 4.7,
        reviewCount: 1500,
        description: "The perfect pair of jeans. Slim but not tight, with just the right amount of stretch.",
        features: ["Stretch Denim", "Slim Tapered Leg", "5-Pocket Styling", "Durable Hardware"],
        colors: ["Dark Blue", "Black"],
        images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Jeans that move with you. Our Slim Fit Jeans are crafted from a premium cotton-stretch blend that offers the look of authentic denim with the comfort of sweatpants.\n\nThe slim tapered leg provides a modern silhouette that works with sneakers or boots.",
        shippingInfo: "Free shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "DenimHead", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Denim", rating: 5, date: "3 days ago", title: "Perfect fit", comment: "Finally found jeans that fit my thighs.", verified: true }
        ]
    },
    {
        id: 402,
        name: "Chinos Beige",
        price: "₹3,100",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
        badge: "Classic",
        rating: 4.6,
        reviewCount: 800,
        description: "Versatile and comfortable. These Chinos are perfect for the office or the weekend.",
        features: ["Cotton Twill", "Straight Fit", "Wrinkle-Resistant", "Side Pockets"],
        colors: ["Beige", "Navy", "Olive"],
        images: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "The alternative to jeans. Our Chinos are made from soft cotton twill that is durable yet comfortable. The straight fit is timeless and flattering.\n\nDress them up with a blazer or down with a tee.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "CasualGuy", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Casual", rating: 4, date: "1 week ago", title: "Good value", comment: "Nice fabric, good for work.", verified: true }
        ]
    },
    {
        id: 403,
        name: "Cargo Pants",
        price: "₹3,500",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop",
        badge: "Utility",
        rating: 4.5,
        reviewCount: 650,
        description: "Functional style. Cargo Pants with plenty of pockets for all your gear.",
        features: ["Ripstop Fabric", "6 Pockets", "Relaxed Fit", "Adjustable Waist"],
        colors: ["Green", "Camo"],
        images: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Built for adventure. These Cargo Pants are made from tough ripstop fabric that can handle the outdoors. The relaxed fit allows for freedom of movement.\n\nMultiple pockets ensure you have space for everything you need.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "Hiker", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Hiker", rating: 5, date: "2 weeks ago", title: "Tough pants", comment: "Held up well on my camping trip.", verified: true }
        ]
    },
    {
        id: 404,
        name: "Formal Trousers",
        price: "₹4,100",
        image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=400&fit=crop",
        badge: "Formal",
        rating: 4.8,
        reviewCount: 500,
        description: "Look your best. These Formal Trousers are tailored for a sharp, professional appearance.",
        features: ["Wool Blend", "Slim Fit", "Crease-Resistant", "Hidden Zip Pocket"],
        colors: ["Black", "Grey", "Navy"],
        images: [
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Elevate your office attire. These Formal Trousers are crafted from a premium wool blend that drapes beautifully and resists creases.\n\nThe slim fit is modern and stylish, perfect for pairing with our Formal White Shirt.",
        shippingInfo: "Express shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "CorpStyle", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Corp", rating: 5, date: "1 month ago", title: "Very sharp", comment: "Excellent quality fabric.", verified: true }
        ]
    },

    // T-Shirts (501-504)
    {
        id: 501,
        name: "Basic White Tee",
        price: "₹830",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        badge: "Essential",
        rating: 4.6,
        reviewCount: 2000,
        description: "The ultimate wardrobe essential. A high-quality Basic White Tee that fits perfectly.",
        features: ["100% Organic Cotton", "Crew Neck", "Regular Fit", "Pre-Shrunk"],
        colors: ["White"],
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Simple, but perfect. We spent months perfecting the fit and fabric of this Basic White Tee. Made from 100% organic cotton, it's soft, breathable, and sustainable.\n\nIt won't shrink or twist in the wash, ensuring it stays your favorite tee for years.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "Minimalist", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Min", rating: 5, date: "2 days ago", title: "Best tee", comment: "Soft and fits great.", verified: true }
        ]
    },
    {
        id: 502,
        name: "Graphic Print Tee",
        price: "₹1,240",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
        badge: "New",
        rating: 4.7,
        reviewCount: 850,
        description: "Express yourself. This Graphic Print Tee features unique artwork on premium cotton.",
        features: ["Screen Printed Graphic", "Soft Cotton Jersey", "Relaxed Fit", "Durable Print"],
        colors: ["Black", "White"],
        images: [
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Wearable art. Our Graphic Print Tees feature designs from independent artists. Printed on our signature soft cotton jersey using eco-friendly inks.\n\nThe print is durable and won't crack or fade.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "ArtLover", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Art", rating: 5, date: "1 week ago", title: "Cool design", comment: "Love the artwork.", verified: true }
        ]
    },
    {
        id: 503,
        name: "V-Neck Black",
        price: "₹910",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
        badge: "Classic",
        rating: 4.5,
        reviewCount: 600,
        description: "Sleek and slimming. The V-Neck Black tee is a versatile addition to your rotation.",
        features: ["Cotton Modal Blend", "V-Neck", "Slim Fit", "Fade Resistant"],
        colors: ["Black"],
        images: [
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "A modern classic. The V-Neck elongates the neck and provides a sharper look than a crew neck. Made from a cotton-modal blend for superior softness and drape.\n\nThe deep black color stays true wash after wash.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "StyleGuy", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Style", rating: 4, date: "2 weeks ago", title: "Nice fit", comment: "Good for layering.", verified: true }
        ]
    },
    {
        id: 504,
        name: "Striped Polo",
        price: "₹1,650",
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&h=400&fit=crop",
        badge: "Smart Casual",
        rating: 4.8,
        reviewCount: 750,
        description: "Smart casual perfection. This Striped Polo bridges the gap between a tee and a shirt.",
        features: ["Pique Cotton", "Ribbed Collar", "2-Button Placket", "Side Vents"],
        colors: ["Navy/White", "Red/Navy"],
        images: [
            "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "The weekend warrior. Our Striped Polo is made from breathable pique cotton that keeps you cool. The classic stripes add a nautical touch.\n\nPerfect for the golf course or a Sunday brunch.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "Golfer", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Golf", rating: 5, date: "1 month ago", title: "Great quality", comment: "Fabric feels premium.", verified: true }
        ]
    },

    // Home Decor (601-604)
    {
        id: 601,
        name: "Modern Vase",
        price: "₹2,480",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&h=400&fit=crop",
        badge: "Decor",
        rating: 4.7,
        reviewCount: 300,
        description: "Add a touch of elegance to your home with this Modern Vase. Minimalist design fits any decor.",
        features: ["Ceramic", "Matte Finish", "Waterproof", "Handcrafted"],
        colors: ["White", "Black", "Terracotta"],
        images: [
            "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Sculptural beauty. This Modern Vase is as much an art piece as it is a vessel for flowers. The matte finish gives it a contemporary look and feel.\n\nHandcrafted by artisans, each piece is unique.",
        shippingInfo: "Fragile shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "HomeDecor", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Home", rating: 5, date: "1 week ago", title: "Beautiful", comment: "Looks great on my mantel.", verified: true }
        ]
    },
    {
        id: 602,
        name: "Wall Art Canvas",
        price: "₹4,100",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800",
        badge: "Art",
        rating: 4.8,
        reviewCount: 250,
        description: "Transform your walls. This Wall Art Canvas features abstract designs that inspire.",
        features: ["High-Quality Canvas", "Fade-Resistant Ink", "Gallery Wrapped", "Ready to Hang"],
        colors: ["Abstract"],
        images: [
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Make a statement. Our Wall Art Canvas prints are high-definition and vibrant. Gallery wrapped around a sturdy wooden frame, they are ready to hang right out of the box.\n\nPerfect for the living room or office.",
        shippingInfo: "Oversized shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "Designer", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Des", rating: 5, date: "2 weeks ago", title: "Vibrant colors", comment: "Really pops on the wall.", verified: true }
        ]
    },
    {
        id: 603,
        name: "Throw Pillows Set",
        price: "₹1,860",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=400&fit=crop",
        badge: "Cozy",
        rating: 4.6,
        reviewCount: 400,
        description: "Instant comfort update. This Throw Pillows Set adds texture and color to your sofa.",
        features: ["Set of 2", "Velvet Cover", "Plush Insert", "Hidden Zipper"],
        colors: ["Grey", "Mustard", "Teal"],
        images: [
            "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Soft and luxurious. These velvet throw pillows are perfect for snuggling up with. The covers are removable and washable for easy care.\n\nComes with plush inserts that hold their shape.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "N/A",
        reviews: [
            { id: 1, user: "Comfy", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Comfy", rating: 5, date: "3 days ago", title: "So soft", comment: "Love the velvet feel.", verified: true }
        ]
    },
    {
        id: 604,
        name: "Decorative Mirror",
        price: "₹5,800",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=400&fit=crop",
        badge: "Decor",
        rating: 4.9,
        reviewCount: 180,
        description: "Open up your space. This Decorative Mirror reflects light and adds depth to any room.",
        features: ["Metal Frame", "Distortion-Free Glass", "Wall Mount Hardware", "Modern Shape"],
        colors: ["Gold", "Black"],
        images: [
            "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Brighten your home. This mirror features a sleek metal frame that complements modern and industrial styles. The high-quality glass ensures a clear, distortion-free reflection.\n\nHang it in the entryway or above a console table.",
        shippingInfo: "Fragile shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Decorator", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Deco", rating: 5, date: "1 month ago", title: "Stunning", comment: "Makes the room look bigger.", verified: true }
        ]
    },

    // Lights (701-704)
    {
        id: 701,
        name: "Table Lamp",
        price: "₹3,300",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
        badge: "Lighting",
        rating: 4.7,
        reviewCount: 350,
        description: "Warm and inviting. This Table Lamp provides the perfect ambient light for reading or relaxing.",
        features: ["Fabric Shade", "Ceramic Base", "LED Compatible", "In-Line Switch"],
        colors: ["White/Wood"],
        images: [
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Set the mood. Our Table Lamp features a textured ceramic base and a linen shade that diffuses light softly. It's the perfect addition to a bedside table or living room side table.\n\nCompatible with energy-efficient LED bulbs.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Reader", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Read", rating: 5, date: "2 weeks ago", title: "Perfect light", comment: "Great for reading in bed.", verified: true }
        ]
    },
    {
        id: 702,
        name: "Floor Lamp",
        price: "₹6,200",
        image: "https://images.unsplash.com/photo-1507473888900-52e1adad5481?auto=format&fit=crop&q=80&w=800",
        badge: "Lighting",
        rating: 4.8,
        reviewCount: 280,
        description: "Statement lighting. This Floor Lamp stands tall and illuminates your space with style.",
        features: ["Adjustable Height", "Metal Construction", "Foot Switch", "Modern Design"],
        colors: ["Black", "Brass"],
        images: [
            "https://images.unsplash.com/photo-1507473888900-52e1adad5481?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1507473888900-52e1adad5481?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Illuminate your room from above. This Floor Lamp features a sleek, arc design that reaches over sofas or armchairs. The heavy base ensures stability.\n\nThe modern finish adds a touch of sophistication to any room.",
        shippingInfo: "Oversized shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Modernist", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Mod", rating: 5, date: "1 month ago", title: "Love it", comment: "Looks like a designer piece.", verified: true }
        ]
    },
    {
        id: 703,
        name: "LED Strip Lights",
        price: "₹1,650",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        badge: "Tech",
        rating: 4.6,
        reviewCount: 1200,
        description: "Color your world. These LED Strip Lights let you customize your ambiance with millions of colors.",
        features: ["App Control", "Music Sync", "Easy Installation", "16 Million Colors"],
        colors: ["RGB"],
        images: [
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "Set the vibe. Our LED Strip Lights are perfect for gaming setups, bedrooms, or home theaters. Control them with your phone or voice assistant.\n\nSync them to your music for a party atmosphere.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Gamer", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Game", rating: 5, date: "3 days ago", title: "Fun lights", comment: "App is easy to use.", verified: true }
        ]
    },
    {
        id: 704,
        name: "Pendant Light",
        price: "₹4,950",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
        badge: "Lighting",
        rating: 4.9,
        reviewCount: 200,
        description: "Industrial chic. This Pendant Light adds character to your dining area or kitchen island.",
        features: ["Metal Shade", "Vintage Look", "Adjustable Cord", "Edison Bulb Compatible"],
        colors: ["Black", "Copper"],
        images: [
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop",
            "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&h=800&fit=crop&q=80"
        ],
        longDescription: "A focal point for your room. This Pendant Light is inspired by vintage industrial fixtures. The metal shade directs light downwards, making it perfect for task lighting.\n\nPair it with an Edison bulb for a warm, nostalgic glow.",
        shippingInfo: "Standard shipping.",
        returnsPolicy: "30-day returns.",
        warrantyInfo: "1-year warranty.",
        reviews: [
            { id: 1, user: "Renovator", avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Reno", rating: 5, date: "1 week ago", title: "Great quality", comment: "Heavy duty and looks amazing.", verified: true }
        ]
    }
];
export function getProductById(id: string | number): Product | undefined {
    return products.find((p) => p.id.toString() === id.toString());
}

export function getRelatedProducts(currentId: string | number): Product[] {
    return products
        .filter((p) => p.id.toString() !== currentId.toString())
        .slice(0, 4);
}
