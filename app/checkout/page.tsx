"use client";

import Link from "next/link";
import { useState, useRef, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Indian states and their districts
const indiaStatesDistricts: Record<string, string[]> = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"],
    "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],
    "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
    "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariyaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Korea", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    "Goa": ["North Goa", "South Goa"],
    "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udepur", "Dahod", "Dangs", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kachchh", "Kheda", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul & Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela-Kharsawan", "Simdega", "West Singhbhum"],
    "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davangere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
    "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
    "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
    "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
    "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghapur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sundargarh"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Nawanshahr", "Pathankot", "Patiala", "Rupnagar", "Mohali", "Sangrur", "Tarn Taran"],
    "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
    "Sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim", "Pakyong", "Soreng"],
    "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhoopalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Rangareddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharth Nagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
    "Andaman and Nicobar Islands": ["Nicobar", "North and Middle Andaman", "South Andaman"],
    "Chandigarh": ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Dadra & Nagar Haveli", "Daman", "Diu"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
    "Jammu and Kashmir": ["Anantnag", "Bandipore", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],
    "Ladakh": ["Kargil", "Leh"],
    "Lakshadweep": ["Lakshadweep"],
    "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"]
};

// Sample data for other countries
const countryStatesDistricts: Record<string, Record<string, string[]>> = {
    "India": indiaStatesDistricts,
    "United States": {
        "California": ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
        "Texas": ["Houston", "Dallas", "Austin", "San Antonio"],
        "New York": ["New York City", "Buffalo", "Rochester", "Albany"]
    },
    "United Kingdom": {
        "England": ["London", "Manchester", "Birmingham", "Liverpool"],
        "Scotland": ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"],
        "Wales": ["Cardiff", "Swansea", "Newport"]
    }
};

interface CartItem {
    id: string;
    name: string;
    price: string;
    image: string;
    variant: string;
    size: string;
    quantity: number;
}

function CheckoutContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // Check mode
        const mode = searchParams.get('mode');
        let cart: CartItem[] = [];

        if (mode === 'buy_now') {
            // Load from session storage for buy now
            cart = JSON.parse(sessionStorage.getItem('buy_now_cart') || '[]');
        } else {
            // Load from local storage for normal cart
            cart = JSON.parse(localStorage.getItem('cart') || '[]');
        }

        setCartItems(cart);

        // Calculate totals
        const calcSubtotal = cart.reduce((acc: number, item: CartItem) => {
            const price = parseInt(item.price.replace(/[^0-9]/g, ''));
            return acc + (price * item.quantity);
        }, 0);

        const calcShipping = calcSubtotal > 0 ? 420 : 0;

        setSubtotal(calcSubtotal);
        setShipping(calcShipping);
        setTotal(calcSubtotal + calcShipping);
    }, [searchParams]);

    const [selectedCountry, setSelectedCountry] = useState("India");
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [stateInput, setStateInput] = useState("");
    const [districtInput, setDistrictInput] = useState("");
    const [showStateDropdown, setShowStateDropdown] = useState(false);
    const [showDistrictDropdown, setShowDistrictDropdown] = useState(false);

    const stateRef = useRef<HTMLDivElement>(null);
    const districtRef = useRef<HTMLDivElement>(null);
    const addressRef = useRef<HTMLDivElement>(null);

    const [addressInput, setAddressInput] = useState("");
    const [addressSuggestions, setAddressSuggestions] = useState<any[]>([]);
    const [showAddressDropdown, setShowAddressDropdown] = useState(false);
    const [isAddressLoading, setIsAddressLoading] = useState(false);
    const [postalCode, setPostalCode] = useState("");
    const [postalCodeError, setPostalCodeError] = useState("");
    const [isPostalCodeValidating, setIsPostalCodeValidating] = useState(false);

    // Validation State
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        let isValid = true;

        // Email or Mobile Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const mobileRegex = /^[0-9]{10}$/;
        const contactInput = (document.getElementById('email-address') as HTMLInputElement)?.value;

        if (!contactInput) {
            newErrors.email = "Mobile or Email is required";
            isValid = false;
        } else if (!emailRegex.test(contactInput) && !mobileRegex.test(contactInput)) {
            newErrors.email = "Please enter a valid email or mobile number";
            isValid = false;
        }

        // Full Name Validation
        const nameInput = (document.getElementById('full-name') as HTMLInputElement)?.value;
        if (!nameInput?.trim()) {
            newErrors.name = "Full name is required";
            isValid = false;
        }

        // Country Validation
        if (!selectedCountry) {
            newErrors.country = "Please select a country";
            isValid = false;
        }

        // State Validation
        if (!selectedState) {
            newErrors.state = "Please select a state";
            isValid = false;
        }

        // District Validation
        if (!selectedDistrict) {
            newErrors.district = "Please select a district";
            isValid = false;
        }

        // Address Validation
        if (!addressInput?.trim()) {
            newErrors.address = "Address is required";
            isValid = false;
        }

        // Postal Code Validation
        if (!postalCode) {
            newErrors.postalCode = "Postal code is required";
            isValid = false;
        } else if (postalCodeError) {
            // If there's already a validation error from the API/length check
            newErrors.postalCode = postalCodeError;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const clearError = (field: string) => {
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const availableStates = Object.keys(countryStatesDistricts[selectedCountry] || {});
    const availableDistricts = selectedState ? countryStatesDistricts[selectedCountry]?.[selectedState] || [] : [];

    // Filter states based on input
    const filteredStates = availableStates.filter(state =>
        state.toLowerCase().includes(stateInput.toLowerCase())
    );

    // Filter districts based on input
    const filteredDistricts = availableDistricts.filter(district =>
        district.toLowerCase().includes(districtInput.toLowerCase())
    );

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country);
        setSelectedState("");
        setSelectedDistrict("");
        setStateInput("");
        setDistrictInput("");
    };

    const handleStateSelect = (state: string) => {
        setSelectedState(state);
        setStateInput(state);
        setShowStateDropdown(false);
        setSelectedDistrict("");
        setDistrictInput("");
    };

    const handleDistrictSelect = (district: string) => {
        setSelectedDistrict(district);
        setDistrictInput(district);
        setShowDistrictDropdown(false);
    };

    // Address Autocomplete Logic
    useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (addressInput.length > 2) {
                setIsAddressLoading(true);
                try {
                    // Construct query with context if available
                    let query = addressInput;
                    if (selectedDistrict) query += `, ${selectedDistrict}`;
                    if (selectedState) query += `, ${selectedState}`;
                    if (selectedCountry) query += `, ${selectedCountry}`;

                    const response = await fetch(
                        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`
                    );
                    const data = await response.json();
                    setAddressSuggestions(data);
                    setShowAddressDropdown(true);
                } catch (error) {
                    console.error("Error fetching address suggestions:", error);
                } finally {
                    setIsAddressLoading(false);
                }
            } else {
                setAddressSuggestions([]);
                setShowAddressDropdown(false);
            }
        }, 500); // 500ms debounce

        return () => clearTimeout(delayDebounceFn);
    }, [addressInput, selectedDistrict, selectedState, selectedCountry]);

    const handleAddressSelect = (suggestion: any) => {
        setAddressInput(suggestion.display_name);
        setShowAddressDropdown(false);
    };

    // Postal Code Validation
    const validatePostalCode = async (code: string) => {
        if (!code) {
            setPostalCodeError("");
            return;
        }

        // Length Check
        if (selectedCountry === "India" && code.length !== 6) {
            setPostalCodeError("Postal code must be 6 digits");
            return;
        }

        setIsPostalCodeValidating(true);
        setPostalCodeError("");

        try {
            if (selectedCountry === "India") {
                const response = await fetch(`https://api.postalpincode.in/pincode/${code}`);
                const data = await response.json();

                if (data && data[0].Status === "Success") {
                    setPostalCodeError("");
                } else {
                    setPostalCodeError("Invalid postal code");
                }
            }
        } catch (error) {
            console.error("Error validating postal code:", error);
            // Fallback to basic length validation if API fails
            if (selectedCountry === "India" && code.length !== 6) {
                setPostalCodeError("Invalid postal code format");
            }
        } finally {
            setIsPostalCodeValidating(false);
        }
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (stateRef.current && !stateRef.current.contains(event.target as Node)) {
                setShowStateDropdown(false);
            }
            if (districtRef.current && !districtRef.current.contains(event.target as Node)) {
                setShowDistrictDropdown(false);
            }
            if (addressRef.current && !addressRef.current.contains(event.target as Node)) {
                setShowAddressDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <main className="flex-1 bg-background-light dark:bg-background-dark min-h-screen">
            <div className="mx-auto max-w-7xl px-4 pt-8 pb-24 sm:px-6 lg:px-8">
                {/* Top Order Summary (Premium UI) */}
                <div className="mb-6 lg:hidden">
                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-gray-100 dark:border-gray-800">
                        <h2 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">
                            Order summary
                        </h2>
                        <div className="flex flex-col gap-4">
                            {cartItems.map((item, index) => (
                                <div key={`${item.id}-${index}`} className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div
                                            className="w-20 h-20 rounded-2xl bg-center bg-no-repeat bg-cover shadow-sm"
                                            style={{
                                                backgroundImage: `url("${item.image}")`,
                                            }}
                                        ></div>
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <h4 className="text-sm font-bold text-text-light dark:text-text-dark">
                                            {item.name}
                                        </h4>
                                        <p className="mt-0.5 text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">
                                            {item.variant} • {item.size}
                                        </p>
                                        <div className="mt-2 flex items-center justify-between">
                                            <p className="text-sm font-bold text-text-light dark:text-text-dark">
                                                {item.price}
                                            </p>
                                            <p className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
                                                Qty {item.quantity}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {cartItems.length === 0 && (
                                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark text-center py-4">
                                    Your cart is empty
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="max-w-2xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 xl:gap-x-20">
                    {/* Left Side - Form */}
                    <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 sm:p-8 shadow-sm">
                        {/* Contact Information */}
                        <div className="mb-8">
                            <h2 className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-sm font-bold text-primary border border-primary/20 mb-6">
                                Contact information
                            </h2>
                            <div>
                                <label
                                    className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                    htmlFor="email-address"
                                >
                                    Mobile or Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        autoComplete="email"
                                        className={`block w-full rounded-xl border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} shadow-sm focus:ring-1 text-base bg-white dark:bg-neutral-800 px-5 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out`}
                                        id="email-address"
                                        name="email-address"
                                        type="text"
                                        placeholder="Enter mobile or email"
                                        onChange={() => clearError('email')}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.email}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div>
                            <h2 className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-sm font-bold text-primary border border-primary/20 mb-6">
                                Shipping address
                            </h2>
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-6">
                                    <label
                                        className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                        htmlFor="full-name"
                                    >
                                        Full name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            autoComplete="name"
                                            className={`block w-full rounded-xl border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} shadow-sm focus:ring-1 text-base bg-white dark:bg-neutral-800 px-5 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out`}
                                            id="full-name"
                                            name="full-name"
                                            type="text"
                                            onChange={() => clearError('name')}
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.name}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:col-span-6">
                                    <label
                                        className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                        htmlFor="country"
                                    >
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            autoComplete="country-name"
                                            className="block w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary text-base bg-white dark:bg-neutral-800 pl-5 pr-12 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out appearance-none"
                                            id="country"
                                            name="country"
                                            value={selectedCountry}
                                            onChange={(e) => handleCountryChange(e.target.value)}
                                            required
                                        >
                                            <option value="India">🇮🇳 India</option>
                                            <option value="United States">🇺🇸 United States</option>
                                            <option value="United Kingdom">🇬🇧 United Kingdom</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400 transition-transform duration-500 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                        htmlFor="state"
                                    >
                                        State / Province <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative" ref={stateRef}>
                                        <input
                                            type="text"
                                            className={`block w-full rounded-xl border ${errors.state ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} shadow-sm focus:ring-1 text-base bg-white dark:bg-neutral-800 px-5 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out`}
                                            placeholder="Select State"
                                            value={stateInput}
                                            onChange={(e) => {
                                                setStateInput(e.target.value);
                                                setShowStateDropdown(true);
                                                clearError('state');
                                            }}
                                            onFocus={() => setShowStateDropdown(true)}
                                            required
                                        />
                                        {showStateDropdown && (
                                            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-h-60 overflow-auto">
                                                {filteredStates.length > 0 ? (
                                                    filteredStates.map((state) => (
                                                        <div
                                                            key={state}
                                                            className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer text-text-light dark:text-text-dark transition-colors duration-200"
                                                            onClick={() => handleStateSelect(state)}
                                                        >
                                                            {state}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-3 text-text-secondary-light dark:text-text-secondary-dark">
                                                        No states found
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {errors.state && (
                                            <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.state}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                        htmlFor="district"
                                    >
                                        District <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative" ref={districtRef}>
                                        <input
                                            type="text"
                                            className={`block w-full rounded-xl border ${errors.district ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} shadow-sm focus:ring-1 text-base bg-white dark:bg-neutral-800 px-5 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out`}
                                            placeholder="Select District"
                                            value={districtInput}
                                            onChange={(e) => {
                                                setDistrictInput(e.target.value);
                                                setShowDistrictDropdown(true);
                                                clearError('district');
                                            }}
                                            onFocus={() => setShowDistrictDropdown(true)}
                                            disabled={!selectedState}
                                            required
                                        />
                                        {showDistrictDropdown && (
                                            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-h-60 overflow-auto">
                                                {filteredDistricts.length > 0 ? (
                                                    filteredDistricts.map((district) => (
                                                        <div
                                                            key={district}
                                                            className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer text-text-light dark:text-text-dark transition-colors duration-200"
                                                            onClick={() => handleDistrictSelect(district)}
                                                        >
                                                            {district}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="px-4 py-3 text-text-secondary-light dark:text-text-secondary-dark">
                                                        {selectedState ? "No districts found" : "Select a state first"}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {errors.district && (
                                            <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.district}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:col-span-6">
                                    <label
                                        className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                        htmlFor="address"
                                    >
                                        Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative" ref={addressRef}>
                                        <input
                                            autoComplete="street-address"
                                            className={`block w-full rounded-xl border ${errors.address ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} shadow-sm focus:ring-1 text-base bg-white dark:bg-neutral-800 px-5 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out`}
                                            id="address"
                                            name="address"
                                            type="text"
                                            value={addressInput}
                                            onChange={(e) => {
                                                setAddressInput(e.target.value);
                                                setShowAddressDropdown(true);
                                                clearError('address');
                                            }}
                                            onFocus={() => setShowAddressDropdown(true)}
                                            placeholder="Start typing your address..."
                                            required
                                        />
                                        {isAddressLoading && (
                                            <div className="absolute right-4 top-4">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                                            </div>
                                        )}
                                        {showAddressDropdown && addressSuggestions.length > 0 && (
                                            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-h-60 overflow-auto">
                                                {addressSuggestions.map((suggestion, index) => (
                                                    <div
                                                        key={index}
                                                        className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-neutral-700 cursor-pointer text-text-light dark:text-text-dark transition-colors duration-200 border-b border-gray-100 dark:border-gray-800 last:border-0"
                                                        onClick={() => handleAddressSelect(suggestion)}
                                                    >
                                                        {suggestion.display_name}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {errors.address && (
                                            <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.address}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="sm:col-span-6">
                                    <label
                                        className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                        htmlFor="apartment"
                                    >
                                        Nearby Address (Optional)
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            className="block w-full rounded-xl border border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary focus:ring-1 focus:ring-primary text-base bg-white dark:bg-neutral-800 px-5 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out"
                                            id="apartment"
                                            name="apartment"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-6">
                                    <label
                                        className="block text-base font-medium text-text-light dark:text-text-dark mb-2"
                                        htmlFor="postal-code"
                                    >
                                        Postal code <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            autoComplete="postal-code"
                                            className={`block w-full rounded-xl border ${postalCodeError || errors.postalCode ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary'} shadow-sm focus:ring-1 text-base bg-white dark:bg-neutral-800 px-5 py-4 text-text-light dark:text-text-dark transition-all duration-500 ease-in-out`}
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            value={postalCode}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                setPostalCode(val);
                                                clearError('postalCode');
                                                if (val.length === 6) validatePostalCode(val);
                                            }}
                                            onBlur={() => validatePostalCode(postalCode)}
                                            maxLength={6}
                                            required
                                        />
                                        {isPostalCodeValidating && (
                                            <div className="absolute right-4 top-4">
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
                                            </div>
                                        )}
                                    </div>
                                    {errors.postalCode && !postalCodeError && (
                                        <p className="mt-1 text-sm text-red-500 animate-pulse">{errors.postalCode}</p>
                                    )}
                                    {postalCodeError && (
                                        <p className="mt-1 text-sm text-red-500 animate-pulse">{postalCodeError}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                if (validateForm()) {
                                    // Create Order Object
                                    const orderId = `#ORD-${Math.floor(100000 + Math.random() * 900000)}`;
                                    const newOrder = {
                                        id: orderId,
                                        date: new Date().toISOString(),
                                        status: 'Processing',
                                        total: total,
                                        items: cartItems,
                                        shippingAddress: {
                                            name: (document.getElementById('full-name') as HTMLInputElement)?.value,
                                            email: (document.getElementById('email-address') as HTMLInputElement)?.value,
                                            address: addressInput,
                                            city: selectedDistrict,
                                            state: selectedState,
                                            country: selectedCountry,
                                            postalCode: postalCode
                                        }
                                    };

                                    // Save User Name
                                    const userName = (document.getElementById('full-name') as HTMLInputElement)?.value;
                                    localStorage.setItem('roundmart_user_name', userName);

                                    // Save Order to History
                                    const existingOrders = JSON.parse(localStorage.getItem('roundmart_orders') || '[]');
                                    localStorage.setItem('roundmart_orders', JSON.stringify([newOrder, ...existingOrders]));

                                    // Clear Cart
                                    localStorage.removeItem('cart');
                                    sessionStorage.removeItem('buy_now_cart');

                                    // Redirect
                                    router.push('/thank-you');
                                }
                            }}>
                                <button
                                    type="submit"
                                    className="w-full bg-primary border border-transparent rounded-xl shadow-sm py-4 px-4 text-base font-bold text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
                                >
                                    Continue to Payment
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Side - Order Summary (Desktop) */}
                    <div className="mt-10 lg:mt-0">
                        <h2 className="text-lg font-medium text-text-light dark:text-text-dark mb-4">
                            Order summary
                        </h2>

                        <div className="mt-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-6 sticky top-6">
                            <h3 className="sr-only">Items in your cart</h3>

                            {/* Order Items */}
                            <div className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
                                <ul className="space-y-6" role="list">
                                    {cartItems.map((item, index) => (
                                        <li key={`${item.id}-${index}`} className="flex gap-4">
                                            <div className="flex-shrink-0">
                                                <div
                                                    className="w-24 h-24 rounded-xl bg-center bg-no-repeat bg-cover"
                                                    style={{
                                                        backgroundImage: `url("${item.image}")`,
                                                    }}
                                                ></div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-semibold text-text-light dark:text-text-dark">
                                                    {item.name}
                                                </h4>
                                                <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                                    {item.variant} • {item.size}
                                                </p>
                                                <div className="mt-2 flex items-center justify-between">
                                                    <p className="text-sm font-bold text-text-light dark:text-text-dark">
                                                        {item.price}
                                                    </p>
                                                    <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                                        Qty {item.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                    {cartItems.length === 0 && (
                                        <li className="text-center py-4 text-text-secondary-light dark:text-text-secondary-dark">
                                            Your cart is empty
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {/* Price Summary */}
                            <dl className="space-y-4 mb-6">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        Subtotal
                                    </dt>
                                    <dd className="text-sm font-medium text-text-light dark:text-text-dark">
                                        ₹{subtotal.toLocaleString('en-IN')}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                                        Shipping
                                    </dt>
                                    <dd className="text-sm font-medium text-text-light dark:text-text-dark">
                                        ₹{shipping.toLocaleString('en-IN')}
                                    </dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
                                    <dt className="text-base font-bold text-text-light dark:text-text-dark">
                                        Total
                                    </dt>
                                    <dd className="text-base font-bold text-primary">
                                        ₹{total.toLocaleString('en-IN')}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function Checkout() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        }>
            <CheckoutContent />
        </Suspense>
    );
}
