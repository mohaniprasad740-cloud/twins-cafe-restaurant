export interface MenuItem {
  id: string;
  name: string;
  category: 'pizza' | 'burgers' | 'momos' | 'chinese' | 'starters' | 'main-course' | 'beverages' | 'desserts';
  categoryLabel: string;
  description: string;
  price: number;
  isVeg: boolean;
  image: string;
  isPopular?: boolean;
  isSignature?: boolean;
  spiceLevel?: 'mild' | 'medium' | 'spicy';
  prepTime?: string;
}

export interface ReviewTheme {
  theme: string;
  countMention: string;
  description: string;
  highlightTag: string;
}

export const RESTAURANT_INFO = {
  name: "TWINS CAFE & RESTAURANT",
  shortName: "Twins Cafe",
  tagline: "GOOD FOOD. GREAT MOOD. UNFORGETTABLE MOMENTS.",
  heroSubtext: "From cheesy pizzas and delicious momos to refreshing beverages, discover your next favourite food experience at Twins Cafe & Restaurant.",
  aboutHeading: "More Than Just a Cafe.",
  aboutDescription: "Welcome to Twins Cafe & Restaurant, where great food meets a cozy atmosphere. From flavour-packed pizzas and burgers to delicious momos and comforting meals, we bring people together through food, taste and hospitality.",
  address: "B 18, Non-Company Housing Estate, City Centre, Durgapur, West Bengal – 713216",
  shortAddress: "City Centre, Durgapur, West Bengal",
  phone: "+91 82502 04770",
  rawPhone: "918250204770",
  email: "contact@twinscafeandrestaurant.com",
  website: "twinscafeandrestaurant.com",
  category: "Cafe & Restaurant",
  avgPrice: "₹200 – ₹400 per person",
  googleRating: 4.5,
  googleReviewCount: 553,
  openingHours: "Daily, 10:00 AM – 10:30 PM",
  openingHoursDetail: {
    openTime: "10:00",
    closeTime: "22:30",
    days: "Monday – Sunday (All 7 Days)",
  },
  services: [
    "Cozy Dine-in Seating",
    "Quick Takeaway & Parcel",
    "Direct WhatsApp Online Ordering",
    "Casual Party & Birthday Reservations",
  ],
  googleMapsUrl: "https://maps.google.com/?q=Twins+Cafe+%26+Restaurant+B+18+Non-Company+Housing+Estate+City+Centre+Durgapur+713216",
  googleReviewsUrl: "https://maps.google.com/?q=Twins+Cafe+%26+Restaurant+City+Centre+Durgapur+reviews",
  instagramUrl: "https://instagram.com/twinscafeandrestaurant",
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'momos', label: 'Momos' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'starters', label: 'Starters' },
  { id: 'main-course', label: 'Main Course' },
  { id: 'beverages', label: 'Beverages' },
  { id: 'desserts', label: 'Desserts' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // --- Known Highlights: PIZZA ---
  {
    id: 'pizza-1',
    name: 'Pahari Kabab Pizza',
    category: 'pizza',
    categoryLabel: 'Pizza',
    description: 'Crispy artisanal crust loaded with spiced chicken pahari kabab chunks, mozzarella, bell peppers, and fresh herb drizzle.',
    price: 280,
    isVeg: false,
    image: '/src/assets/images/signature_fusion_pizza_1794219377519.jpg',
    isPopular: true,
    isSignature: true,
    spiceLevel: 'medium',
    prepTime: '15-18 mins',
  },
  {
    id: 'pizza-2',
    name: 'Classic Paneer Pizza',
    category: 'pizza',
    categoryLabel: 'Pizza',
    description: 'Golden crust topped with seasoned cottage cheese cubes, sweet bell peppers, red onions, and melting mozzarella cheese.',
    price: 240,
    isVeg: true,
    image: '/src/assets/images/signature_fusion_pizza_1794219377519.jpg',
    isPopular: true,
    spiceLevel: 'mild',
    prepTime: '15-18 mins',
  },
  {
    id: 'pizza-3',
    name: 'BBQ Smoked Chicken Pizza',
    category: 'pizza',
    categoryLabel: 'Pizza',
    description: 'Zesty barbecue marinated chicken breast, charred onions, jalapenos, and rich mozzarella on house tomato sauce.',
    price: 290,
    isVeg: false,
    image: '/src/assets/images/signature_fusion_pizza_1794219377519.jpg',
    spiceLevel: 'medium',
    prepTime: '15-18 mins',
  },

  // --- Known Highlights: BURGERS ---
  {
    id: 'burger-1',
    name: 'TCR Jumbo Non-Veg Special Burger',
    category: 'burgers',
    categoryLabel: 'Burgers',
    description: 'Our signature double crispy chicken patty stacked with double cheddar cheese, lettuce, sliced tomato, and TCR spicy secret sauce.',
    price: 260,
    isVeg: false,
    image: '/src/assets/images/special_jumbo_burger_1794219379393.jpg',
    isPopular: true,
    isSignature: true,
    spiceLevel: 'medium',
    prepTime: '12-15 mins',
  },
  {
    id: 'burger-2',
    name: 'Crispy Chicken Burger Combo',
    category: 'burgers',
    categoryLabel: 'Burgers',
    description: 'Golden crispy fried chicken cutlet inside a toasted sesame bun served with seasoned golden fries and house dip.',
    price: 220,
    isVeg: false,
    image: '/src/assets/images/special_jumbo_burger_1794219379393.jpg',
    isPopular: true,
    spiceLevel: 'mild',
    prepTime: '12-14 mins',
  },
  {
    id: 'burger-3',
    name: 'Golden Corn & Cheese Burger',
    category: 'burgers',
    categoryLabel: 'Burgers',
    description: 'Crispy vegetable and sweet corn patty crowned with molten cheddar cheese, fresh coleslaw, and tangy herb mayo.',
    price: 170,
    isVeg: true,
    image: '/src/assets/images/special_jumbo_burger_1794219379393.jpg',
    spiceLevel: 'mild',
    prepTime: '10-12 mins',
  },

  // --- Known Highlights: MOMOS ---
  {
    id: 'momo-1',
    name: 'Malai White Chicken Cheese Momos',
    category: 'momos',
    categoryLabel: 'Momos',
    description: 'Silky steamed dumplings filled with spiced minced chicken, enveloped in a rich velvety malai cheese cream coating.',
    price: 190,
    isVeg: false,
    image: '/src/assets/images/delightful_momos_basket_1794219378621.jpg',
    isPopular: true,
    isSignature: true,
    spiceLevel: 'mild',
    prepTime: '12-15 mins',
  },
  {
    id: 'momo-2',
    name: 'Veg Steam Momos',
    category: 'momos',
    categoryLabel: 'Momos',
    description: 'Authentic thin-wrapper steamed dumplings stuffed with finely minced fresh seasonal vegetables, ginger, and garlic dip.',
    price: 110,
    isVeg: true,
    image: '/src/assets/images/delightful_momos_basket_1794219378621.jpg',
    isPopular: true,
    spiceLevel: 'medium',
    prepTime: '10-12 mins',
  },
  {
    id: 'momo-3',
    name: 'Pan-Fried Chicken Schezwan Momos',
    category: 'momos',
    categoryLabel: 'Momos',
    description: 'Crispy bottom pan-fried chicken momos tossed in spicy fiery Schezwan glaze with crunchy spring onions.',
    price: 160,
    isVeg: false,
    image: '/src/assets/images/delightful_momos_basket_1794219378621.jpg',
    spiceLevel: 'spicy',
    prepTime: '12-14 mins',
  },

  // --- Known Highlights: STARTERS ---
  {
    id: 'starter-1',
    name: 'Chicken Lollipop',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Frenched chicken winglets tossed in fiery Indo-Chinese red glaze with garlic, ginger, and fresh green spring onions.',
    price: 220,
    isVeg: false,
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    isPopular: true,
    isSignature: true,
    spiceLevel: 'spicy',
    prepTime: '14-16 mins',
  },
  {
    id: 'starter-2',
    name: 'Fish Fingers',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Tender fresh fish fillets breaded in crispy golden panko crust, served with traditional homemade tartar mayonnaise.',
    price: 260,
    isVeg: false,
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    isPopular: true,
    spiceLevel: 'mild',
    prepTime: '12-15 mins',
  },
  {
    id: 'starter-3',
    name: 'Crispy Chilli Baby Corn',
    category: 'starters',
    categoryLabel: 'Starters',
    description: 'Crunchy golden-fried tender baby corns wok-tossed with capsicum, slit chillies, and savory dark soy.',
    price: 180,
    isVeg: true,
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    isPopular: true,
    spiceLevel: 'medium',
    prepTime: '10-12 mins',
  },

  // --- Known Highlights: CHINESE ---
  {
    id: 'chinese-1',
    name: 'Chicken Schezwan Noodles',
    category: 'chinese',
    categoryLabel: 'Chinese',
    description: 'Wok-tossed noodles with shredded chicken, crunchy cabbage, carrots, bell peppers, and authentic fiery Sichuan sauce.',
    price: 190,
    isVeg: false,
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    isPopular: true,
    spiceLevel: 'spicy',
    prepTime: '12-15 mins',
  },
  {
    id: 'chinese-2',
    name: 'Veg Manchurian Gravy',
    category: 'chinese',
    categoryLabel: 'Chinese',
    description: 'Crisp vegetable dumplings simmered in a dark, glossy soy-garlic and coriander gravy.',
    price: 170,
    isVeg: true,
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    isPopular: true,
    spiceLevel: 'medium',
    prepTime: '12-14 mins',
  },
  {
    id: 'chinese-3',
    name: 'Chilli Chicken Dry',
    category: 'chinese',
    categoryLabel: 'Chinese',
    description: 'Boneless chicken cubes coated in light batter, wok-seared with green chillies, diced onions, and soy reduction.',
    price: 230,
    isVeg: false,
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    spiceLevel: 'spicy',
    prepTime: '12-15 mins',
  },

  // --- Known Highlights: MAIN COURSE ---
  {
    id: 'main-1',
    name: 'Egg Chicken Biryani',
    category: 'main-course',
    categoryLabel: 'Main Course',
    description: 'Fragrant long-grain basmati rice slow-cooked in traditional aromatic dum spices with tender chicken piece and boiled egg.',
    price: 240,
    isVeg: false,
    image: '/src/assets/images/aromatic_chicken_biryani_1794221156108.jpg',
    isPopular: true,
    isSignature: true,
    spiceLevel: 'medium',
    prepTime: '15-20 mins',
  },
  {
    id: 'main-2',
    name: 'Paneer Butter Masala Combo',
    category: 'main-course',
    categoryLabel: 'Main Course',
    description: 'Rich velvety tomato cashew gravy with fresh cottage cheese cubes, served with butter naan or steamed rice.',
    price: 220,
    isVeg: true,
    image: '/src/assets/images/aromatic_chicken_biryani_1794221156108.jpg',
    spiceLevel: 'mild',
    prepTime: '14-16 mins',
  },

  // --- Known Highlights: BEVERAGES ---
  {
    id: 'bev-1',
    name: 'Cold Coffee with Ice Cream',
    category: 'beverages',
    categoryLabel: 'Beverages',
    description: 'Thick creamy blended espresso cold coffee topped with vanilla scoop and chocolate drizzle.',
    price: 130,
    isVeg: true,
    image: '/src/assets/images/iced_cold_coffee_beverage_1794221154659.jpg',
    isPopular: true,
    isSignature: true,
    spiceLevel: 'mild',
    prepTime: '5-7 mins',
  },
  {
    id: 'bev-2',
    name: 'Fresh Lime Soda (Sweet / Salt)',
    category: 'beverages',
    categoryLabel: 'Beverages',
    description: 'Crisp bubbly carbonated soda with freshly squeezed lime juice, mint leaves, and rock salt or sugar syrup.',
    price: 80,
    isVeg: true,
    image: '/src/assets/images/iced_cold_coffee_beverage_1794221154659.jpg',
    isPopular: true,
    spiceLevel: 'mild',
    prepTime: '4-5 mins',
  },
  {
    id: 'bev-3',
    name: 'Classic Hot Coffee',
    category: 'beverages',
    categoryLabel: 'Beverages',
    description: 'Rich aromatic freshly brewed coffee with steamed frothed milk, finished with a dash of cocoa powder.',
    price: 70,
    isVeg: true,
    image: '/src/assets/images/iced_cold_coffee_beverage_1794221154659.jpg',
    isPopular: true,
    spiceLevel: 'mild',
    prepTime: '5 mins',
  },
  {
    id: 'bev-4',
    name: 'Classic Vanilla Shake',
    category: 'beverages',
    categoryLabel: 'Beverages',
    description: 'Velvety smooth vanilla ice cream shake blended with chilled full-cream milk and garnished with sprinkles.',
    price: 140,
    isVeg: true,
    image: '/src/assets/images/iced_cold_coffee_beverage_1794221154659.jpg',
    isPopular: true,
    spiceLevel: 'mild',
    prepTime: '5-7 mins',
  },

  // --- Known Highlights: DESSERTS ---
  {
    id: 'dessert-1',
    name: 'Sizzling Hot Brownie with Vanilla Ice Cream',
    category: 'desserts',
    categoryLabel: 'Desserts',
    description: 'Fudgy warm dark chocolate brownie served on a cast-iron sizzler plate, crowned with vanilla ice cream and hot chocolate fudge.',
    price: 160,
    isVeg: true,
    image: '/src/assets/images/sizzling_chocolate_brownie_1794221156164.jpg',
    isPopular: true,
    isSignature: true,
    spiceLevel: 'mild',
    prepTime: '8-10 mins',
  },
];

export const SIGNATURE_HIGHLIGHTS = [
  {
    id: 'sig-pizza',
    title: 'Indian-Flavoured Fusion Pizzas',
    tagline: 'Wood-fired crispy thin crust loaded with bold Pahari kababs & paneer tikka',
    description: 'Experience the magic of authentic Indian tandoor spices meeting hand-stretched Italian crust and bubbling mozzarella cheese.',
    image: '/src/assets/images/signature_fusion_pizza_1794219377519.jpg',
    tasteNotes: ['Tandoori Smoke', 'Thin Crisp Crust', 'Molten Mozzarella', 'Fresh Cilantro'],
    popularItems: ['Pahari Kabab Pizza', 'Classic Paneer Pizza', 'BBQ Smoked Pizza'],
  },
  {
    id: 'sig-burgers',
    title: 'Cheesy Loaded Burgers',
    tagline: 'TCR Jumbo special double-stacked patties with overflowing cheddar',
    description: 'Every burger is handcrafted with golden toasted brioche buns, double-fried crispy chicken cutlets, and our secret in-house TCR sauce.',
    image: '/src/assets/images/special_jumbo_burger_1794219379393.jpg',
    tasteNotes: ['Double Cheddar', 'Crispy Golden Cutlet', 'Brioche Bun', 'TCR Secret Sauce'],
    popularItems: ['TCR Jumbo Non-Veg Burger', 'Crispy Chicken Combo', 'Golden Corn Cheese'],
  },
  {
    id: 'sig-momos',
    title: 'Delicious Steaming & Malai Momos',
    tagline: 'Darjeeling-style steamed wrappers & signature white cheese malai coating',
    description: 'Folded fresh daily and served with fiery red Sichuan chutney and rich creamy dips. A crowd favourite across Durgapur.',
    image: '/src/assets/images/delightful_momos_basket_1794219378621.jpg',
    tasteNotes: ['Velvety Malai Cheese', 'Thin Steamed Dough', 'Fiery Schezwan Dip', 'Minced Herbs'],
    popularItems: ['Malai White Cheese Momos', 'Veg Steam Momos', 'Pan-Fried Schezwan Momos'],
  },
  {
    id: 'sig-starters',
    title: 'Crispy Finger-Licking Starters',
    tagline: 'From spicy Chicken Lollipops to golden Fish Fingers and Chilli Baby Corn',
    description: 'The ultimate evening appetizers prepared fresh to order with crisp golden batter, aromatic garlic, and fiery glazes.',
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    tasteNotes: ['Indo-Chinese Glaze', 'Panko Crunch', 'Roasted Garlic & Ginger', 'Spring Onion'],
    popularItems: ['Chicken Lollipop', 'Fish Fingers', 'Crispy Chilli Baby Corn'],
  },
  {
    id: 'sig-beverages',
    title: 'Refreshing Cold Coffee & Coolers',
    tagline: 'Creamy cold coffee, thick shakes & fizzy mint lime sodas',
    description: 'Beat the heat and unwind with barista-crafted chilled espresso, rich creamy shakes, and revitalising mint sodas.',
    image: '/src/assets/images/iced_cold_coffee_beverage_1794221154659.jpg',
    tasteNotes: ['Artisanal Espresso', 'Velvety Whipped Milk', 'Dark Cocoa Drizzle', 'Fresh Mint Fizz'],
    popularItems: ['Barista Cold Coffee', 'Vanilla Shake', 'Fresh Mint Lime Soda'],
  },
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Delicious Food",
    subtitle: "A wide variety of pizzas, burgers, momos and more",
    description: "Every recipe is perfected with balanced spices, fresh quality ingredients, and generous portions crafted to satisfy every craving.",
  },
  {
    number: "02",
    title: "Cozy Ambience",
    subtitle: "A comfortable place to spend quality time",
    description: "Modern warm lighting, inviting seating, soothing music, and an aesthetic interior designed for friends, families, and couples.",
  },
  {
    number: "03",
    title: "Affordable Prices",
    subtitle: "Enjoy satisfying food within a reasonable budget",
    description: "High-end café dining experience tailored for students, youngsters, and families at transparent ₹200–₹400 average pricing.",
  },
  {
    number: "04",
    title: "Friendly Hospitality",
    subtitle: "Warm service and a welcoming experience",
    description: "Attentive, courteous staff dedicated to making every guest feel celebrated from the moment they step into our City Centre café.",
  },
];

export const VERIFIED_REVIEW_THEMES: ReviewTheme[] = [
  {
    theme: "Delicious & Unique Pizzas",
    countMention: "180+ mentions",
    description: "Customers consistently highlight the Pahari Kabab Pizza and thin-crust fusion toppings as a standout in Durgapur.",
    highlightTag: "Signature Pizzas",
  },
  {
    theme: "Great Food & Comfortable Atmosphere",
    countMention: "210+ mentions",
    description: "Praised as a welcoming, aesthetic space in City Centre with cozy seating, pleasant ambience, and clean surroundings.",
    highlightTag: "Cozy Ambience",
  },
  {
    theme: "Friendly & Cooperative Staff",
    countMention: "140+ mentions",
    description: "Reviews consistently celebrate the warm hospitality, quick service, and cooperative staff catering to custom preferences.",
    highlightTag: "Top Hospitality",
  },
  {
    theme: "Affordable & Value-for-Money Menu",
    countMention: "195+ mentions",
    description: "Visitors appreciate the satisfying portions and pocket-friendly pricing of ₹200–₹400 per person.",
    highlightTag: "Pocket Friendly",
  },
  {
    theme: "Good Momos, Sandwiches & Beverages",
    countMention: "165+ mentions",
    description: "High praise for the Malai White Cheese Momos, steaming hot Darjeeling dumplings, and thick iced cold coffee.",
    highlightTag: "Momos & Shakes",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'pizza',
    title: 'Artisanal Pahari Kabab Pizza',
    image: '/src/assets/images/signature_fusion_pizza_1794219377519.jpg',
    caption: 'Freshly baked thin-crust pizza topped with spicy chicken pahari kabab & molten mozzarella.',
  },
  {
    id: 'gal-2',
    category: 'momos',
    title: 'Steaming Dumpling Basket & Dips',
    image: '/src/assets/images/delightful_momos_basket_1794219378621.jpg',
    caption: 'Authentic Darjeeling style momos in bamboo steamer with fiery red Schezwan chutney.',
  },
  {
    id: 'gal-3',
    category: 'burgers',
    title: 'TCR Jumbo Crispy Burger',
    image: '/src/assets/images/special_jumbo_burger_1794219379393.jpg',
    caption: 'Double crispy chicken patty dripping with melted cheddar cheese and seasoned fries.',
  },
  {
    id: 'gal-4',
    category: 'starters',
    title: 'Indo-Chinese Chicken Lollipop',
    image: '/src/assets/images/crispy_chicken_lollipop_1794221155530.jpg',
    caption: 'Frenched crispy chicken drumettes glazed in garlic chili reduction with spring onions.',
  },
  {
    id: 'gal-5',
    category: 'biryani',
    title: 'Fragrant Dum Chicken Biryani',
    image: '/src/assets/images/aromatic_chicken_biryani_1794221156108.jpg',
    caption: 'Slow-cooked saffron basmati rice with tender spiced chicken, boiled egg, and herbs in copper handi.',
  },
  {
    id: 'gal-6',
    category: 'beverages',
    title: 'Artisanal Cold Coffee & Lime Soda',
    image: '/src/assets/images/iced_cold_coffee_beverage_1794221154659.jpg',
    caption: 'Thick iced espresso cold coffee dusted with cocoa alongside refreshing fresh mint lime soda.',
  },
  {
    id: 'gal-7',
    category: 'desserts',
    title: 'Sizzling Chocolate Brownie',
    image: '/src/assets/images/sizzling_chocolate_brownie_1794221156164.jpg',
    caption: 'Decadent dark chocolate brownie on smoking cast iron with vanilla ice cream and hot fudge.',
  },
  {
    id: 'gal-8',
    category: 'ambience',
    title: 'Cozy Cafe Dining Interior',
    image: '/src/assets/images/twins_cafe_ambience_1794219379931.jpg',
    caption: 'Warm ambient pendant lighting, comfortable booth seating, and urban aesthetic vibes in City Centre.',
  },
];

export interface GoogleReviewItem {
  id: string;
  authorInitial: string;
  authorLabel: string;
  badge: string;
  timeAgo: string;
  rating: number;
  serviceType: string;
  recommendedDishes: string[];
  feedback: string;
  helpfulCount: number;
}

export const AUTHENTIC_GOOGLE_REVIEWS: GoogleReviewItem[] = [
  {
    id: 'rev-1',
    authorInitial: 'R',
    authorLabel: 'Local Foodie Durgapur',
    badge: 'Verified Diner',
    timeAgo: '1 week ago',
    rating: 5,
    serviceType: 'Dine-in · Dinner',
    recommendedDishes: ['Pahari Kabab Pizza', 'Cold Coffee'],
    feedback: 'The Pahari Kabab Pizza here is genuinely one of the best fusion pizzas in Durgapur! Thin crispy crust with just the right level of tandoori spice. Ambience in City Centre is super comfortable and peaceful.',
    helpfulCount: 28,
  },
  {
    id: 'rev-2',
    authorInitial: 'S',
    authorLabel: 'City Centre Resident',
    badge: 'Google Local Guide',
    timeAgo: '3 weeks ago',
    rating: 5,
    serviceType: 'Dine-in · Evening Catch-up',
    recommendedDishes: ['Malai White Cheese Momos', 'Veg Steam Momos'],
    feedback: 'Probably the best Malai cheese momos in City Centre area. The steamed dumplings are silky and the white cheese coating is rich without being overwhelming. Red chutney has real authentic zing. Staff is polite and prompt.',
    helpfulCount: 34,
  },
  {
    id: 'rev-3',
    authorInitial: 'A',
    authorLabel: 'College Group Diner',
    badge: 'Verified Customer',
    timeAgo: 'Last month',
    rating: 5,
    serviceType: 'Dine-in · Birthday Lunch',
    recommendedDishes: ['TCR Jumbo Non-Veg Burger', 'Chicken Lollipop'],
    feedback: 'Came here with 6 friends for a small birthday treat. The TCR Jumbo Burger is massive and properly crunchy. Prices are very pocket friendly (around ₹250–₹350 each). Staff even helped us take great photos!',
    helpfulCount: 19,
  },
  {
    id: 'rev-4',
    authorInitial: 'P',
    authorLabel: 'Weekend Visitor',
    badge: 'Verified Takeaway',
    timeAgo: '2 months ago',
    rating: 4,
    serviceType: 'Takeaway / WhatsApp Order',
    recommendedDishes: ['Egg Chicken Biryani', 'Crispy Chilli Baby Corn'],
    feedback: 'Ordered via WhatsApp parcel for a family movie night. Food was packed neat and hot. The Egg Chicken Biryani was unexpectedly fragrant and flavourful, and baby corn stayed crispy. Will visit in person next time.',
    helpfulCount: 15,
  },
];

