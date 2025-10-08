 
const homeKitchenProducts = [
  {
    id: 1,
    name: "Bamboo Cutting Board Set",
    slug: "bamboo-cutting-board-set",
    description: "Sustainable bamboo cutting boards in 3 sizes. Naturally antimicrobial and biodegradable.",
    price: 34.99,
    compareAtPrice: 49.99,
    category: "Home & Kitchen",
    subcategory: "Kitchen Tools",
    brand: "EcoChef",
    sku: "HK-001",
    stock: 85,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1594991436397-c54f2f866e05",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
    ],
    ecoFeatures: ["Biodegradable", "Sustainable bamboo", "Chemical-free"],
    rating: 4.7,
    reviews: 142,
    tags: ["bamboo", "cutting board", "kitchen", "sustainable"],
    specifications: {
      material: "100% Organic Bamboo",
      sizes: "Small, Medium, Large",
      finish: "Food-safe mineral oil",
      care: "Hand wash only"
    },
    featured: true,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-09-20T14:22:00Z"
  },
  {
    id: 2,
    name: "Reusable Beeswax Food Wraps",
    slug: "reusable-beeswax-food-wraps",
    description: "Natural alternative to plastic wrap. Set of 5 organic cotton wraps coated with beeswax.",
    price: 18.99,
    compareAtPrice: 24.99,
    category: "Home & Kitchen",
    subcategory: "Food Storage",
    brand: "BeeWrap Co",
    sku: "HK-002",
    stock: 120,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1609840114035-3c981c2e1e9e",
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae"
    ],
    ecoFeatures: ["Reusable", "Plastic-free", "Compostable", "Natural beeswax"],
    rating: 4.8,
    reviews: 289,
    tags: ["beeswax", "food wrap", "plastic-free", "reusable"],
    specifications: {
      material: "Organic cotton, beeswax, jojoba oil",
      quantity: "5 wraps",
      sizes: "Various sizes",
      lifespan: "Up to 1 year with proper care"
    },
    featured: true,
    createdAt: "2024-02-10T08:15:00Z",
    updatedAt: "2024-09-18T11:45:00Z"
  },
  {
    id: 3,
    name: "Stainless Steel Drinking Straws",
    slug: "stainless-steel-drinking-straws",
    description: "Reusable metal straws with cleaning brush. Dishwasher safe and BPA-free.",
    price: 12.99,
    compareAtPrice: 16.99,
    category: "Home & Kitchen",
    subcategory: "Drinkware",
    brand: "GreenSip",
    sku: "HK-003",
    stock: 200,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1603569283847-aa295f0d016a",
      "https://images.unsplash.com/photo-1599351430079-37a75f2af18d"
    ],
    ecoFeatures: ["Reusable", "Zero waste", "Recyclable", "Plastic-free"],
    rating: 4.6,
    reviews: 378,
    tags: ["straws", "reusable", "stainless steel", "zero waste"],
    specifications: {
      material: "304 Stainless Steel",
      quantity: "8 straws + 2 brushes",
      types: "Straight and bent",
      length: "8.5 inches"
    },
    featured: false,
    createdAt: "2024-03-05T12:00:00Z",
    updatedAt: "2024-09-15T09:30:00Z"
  },
  {
    id: 4,
    name: "Compostable Dish Sponges",
    slug: "compostable-dish-sponges",
    description: "Plant-based kitchen sponges made from coconut fiber and cellulose. Pack of 6.",
    price: 9.99,
    compareAtPrice: 14.99,
    category: "Home & Kitchen",
    subcategory: "Cleaning",
    brand: "CleanEarth",
    sku: "HK-004",
    stock: 150,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1563453392212-326f5e854473",
      "https://images.unsplash.com/photo-1600428110043-77d8a34c1b43"
    ],
    ecoFeatures: ["Compostable", "Biodegradable", "Plant-based", "Plastic-free"],
    rating: 4.5,
    reviews: 234,
    tags: ["sponges", "compostable", "cleaning", "eco-friendly"],
    specifications: {
      material: "Coconut fiber and cellulose",
      quantity: "6 sponges",
      lifespan: "4-6 weeks each",
      disposal: "Home compostable"
    },
    featured: false,
    createdAt: "2024-01-20T14:30:00Z",
    updatedAt: "2024-09-22T16:00:00Z"
  },
  {
    id: 5,
    name: "Glass Food Storage Containers",
    slug: "glass-food-storage-containers",
    description: "Borosilicate glass containers with bamboo lids. Microwave and dishwasher safe. Set of 5.",
    price: 44.99,
    compareAtPrice: 59.99,
    category: "Home & Kitchen",
    subcategory: "Food Storage",
    brand: "PureGlass",
    sku: "HK-005",
    stock: 65,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1584362917165-526a968579e8",
      "https://images.unsplash.com/photo-1606566062291-ef1b2a6f5b96"
    ],
    ecoFeatures: ["Plastic-free", "Reusable", "Recyclable", "Non-toxic"],
    rating: 4.9,
    reviews: 456,
    tags: ["glass", "food storage", "containers", "plastic-free"],
    specifications: {
      material: "Borosilicate glass, bamboo lids",
      quantity: "5 containers",
      sizes: "Various sizes 300ml-1200ml",
      features: "Airtight, stackable"
    },
    featured: true,
    createdAt: "2024-02-25T10:00:00Z",
    updatedAt: "2024-09-19T13:20:00Z"
  },
  {
    id: 6,
    name: "Organic Cotton Tea Towels",
    slug: "organic-cotton-tea-towels",
    description: "Super absorbent kitchen towels made from 100% organic cotton. Set of 4.",
    price: 22.99,
    compareAtPrice: 29.99,
    category: "Home & Kitchen",
    subcategory: "Kitchen Linens",
    brand: "EcoLinen",
    sku: "HK-006",
    stock: 95,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce",
      "https://images.unsplash.com/photo-1595854341625-f33ee0e5ed3f"
    ],
    ecoFeatures: ["Organic cotton", "Chemical-free dyes", "Biodegradable", "Fair trade"],
    rating: 4.7,
    reviews: 167,
    tags: ["tea towels", "organic", "cotton", "kitchen"],
    specifications: {
      material: "100% Organic Cotton",
      quantity: "4 towels",
      size: "28 x 18 inches",
      care: "Machine washable"
    },
    featured: false,
    createdAt: "2024-03-10T09:30:00Z",
    updatedAt: "2024-09-21T10:15:00Z"
  },
  {
    id: 7,
    name: "Coconut Bowl Set",
    slug: "coconut-bowl-set",
    description: "Handcrafted bowls made from reclaimed coconut shells. Perfect for smoothie bowls.",
    price: 28.99,
    compareAtPrice: 39.99,
    category: "Home & Kitchen",
    subcategory: "Tableware",
    brand: "Island Bowls",
    sku: "HK-007",
    stock: 75,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1590137876181-8b8c8a7f4137",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc"
    ],
    ecoFeatures: ["Upcycled", "Biodegradable", "Handmade", "Zero waste"],
    rating: 4.8,
    reviews: 198,
    tags: ["coconut bowls", "upcycled", "tableware", "sustainable"],
    specifications: {
      material: "Reclaimed coconut shells",
      quantity: "2 bowls + 2 spoons",
      finish: "Food-safe coconut oil",
      care: "Hand wash, air dry"
    },
    featured: false,
    createdAt: "2024-01-28T11:45:00Z",
    updatedAt: "2024-09-17T15:30:00Z"
  },
  {
    id: 8,
    name: "Silicone Food Bags",
    slug: "silicone-food-bags",
    description: "Reusable platinum silicone bags for food storage. Freezer, microwave, and dishwasher safe.",
    price: 32.99,
    compareAtPrice: 44.99,
    category: "Home & Kitchen",
    subcategory: "Food Storage",
    brand: "SiliSave",
    sku: "HK-008",
    stock: 110,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce",
      "https://images.unsplash.com/photo-1584555684040-bad07f3e0d4e"
    ],
    ecoFeatures: ["Reusable", "BPA-free", "Plastic alternative", "Long-lasting"],
    rating: 4.6,
    reviews: 312,
    tags: ["silicone", "food bags", "reusable", "storage"],
    specifications: {
      material: "Platinum silicone",
      quantity: "4 bags",
      sizes: "2 medium, 2 large",
      temperature: "-40°F to 450°F"
    },
    featured: false,
    createdAt: "2024-02-14T13:00:00Z",
    updatedAt: "2024-09-20T12:00:00Z"
  }
];

// Gifts Products (8 items)
const giftsProducts = [
  {
    id: 9,
    name: "Seed Paper Greeting Cards",
    slug: "seed-paper-greeting-cards",
    description: "Plantable greeting cards embedded with wildflower seeds. Set of 10 assorted designs.",
    price: 24.99,
    compareAtPrice: 32.99,
    category: "Gifts",
    subcategory: "Cards & Stationery",
    brand: "GrowCards",
    sku: "GF-001",
    stock: 140,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1606762285367-457d57e04827",
      "https://images.unsplash.com/photo-1583144582614-e5c7e48d4b23"
    ],
    ecoFeatures: ["Plantable", "Biodegradable", "Recycled paper", "Chemical-free"],
    rating: 4.9,
    reviews: 267,
    tags: ["greeting cards", "seed paper", "plantable", "gifts"],
    specifications: {
      material: "Recycled paper with wildflower seeds",
      quantity: "10 cards + envelopes",
      flowers: "Mixed wildflowers",
      size: "5 x 7 inches"
    },
    featured: true,
    createdAt: "2024-03-01T10:20:00Z",
    updatedAt: "2024-09-19T14:40:00Z"
  },
  {
    id: 10,
    name: "Bamboo Phone Stand",
    slug: "bamboo-phone-stand",
    description: "Elegant desk phone holder made from sustainable bamboo. Compatible with all phones.",
    price: 16.99,
    compareAtPrice: 22.99,
    category: "Gifts",
    subcategory: "Tech Accessories",
    brand: "BamboTech",
    sku: "GF-002",
    stock: 165,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
    ],
    ecoFeatures: ["Sustainable bamboo", "Biodegradable", "Natural finish"],
    rating: 4.7,
    reviews: 189,
    tags: ["phone stand", "bamboo", "desk accessory", "tech"],
    specifications: {
      material: "100% Natural Bamboo",
      compatibility: "All smartphones",
      angles: "Adjustable viewing angle",
      weight: "120g"
    },
    featured: false,
    createdAt: "2024-01-18T15:00:00Z",
    updatedAt: "2024-09-16T11:25:00Z"
  },
  {
    id: 11,
    name: "Organic Lavender Sachet Set",
    slug: "organic-lavender-sachet-set",
    description: "Hand-sewn linen sachets filled with organic lavender. Perfect for drawers and closets.",
    price: 19.99,
    compareAtPrice: 26.99,
    category: "Gifts",
    subcategory: "Home Fragrance",
    brand: "Lavender Fields",
    sku: "GF-003",
    stock: 125,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1596374644465-7e2d99f5c6e6",
      "https://images.unsplash.com/photo-1587241321921-91eecc1e8d5f"
    ],
    ecoFeatures: ["Organic", "Natural fragrance", "Biodegradable", "Handmade"],
    rating: 4.8,
    reviews: 245,
    tags: ["lavender", "sachet", "aromatherapy", "natural"],
    specifications: {
      material: "Organic linen, organic lavender",
      quantity: "6 sachets",
      scent: "Natural lavender",
      lifespan: "3-6 months fragrance"
    },
    featured: true,
    createdAt: "2024-02-20T09:15:00Z",
    updatedAt: "2024-09-18T16:30:00Z"
  },
  {
    id: 12,
    name: "Recycled Glass Candle Set",
    slug: "recycled-glass-candle-set",
    description: "Soy wax candles in recycled glass jars. Set of 3 with natural essential oil scents.",
    price: 36.99,
    compareAtPrice: 48.99,
    category: "Gifts",
    subcategory: "Candles",
    brand: "EcoGlow",
    sku: "GF-004",
    stock: 88,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1602874801006-94c50b4f2c3f",
      "https://images.unsplash.com/photo-1608452964553-9b4d97b2752f"
    ],
    ecoFeatures: ["Recycled glass", "Natural soy wax", "Lead-free wicks", "Vegan"],
    rating: 4.9,
    reviews: 421,
    tags: ["candles", "soy wax", "recycled glass", "aromatherapy"],
    specifications: {
      material: "Soy wax, recycled glass",
      quantity: "3 candles",
      scents: "Lavender, Eucalyptus, Citrus",
      burnTime: "40 hours each"
    },
    featured: true,
    createdAt: "2024-01-25T14:20:00Z",
    updatedAt: "2024-09-22T10:45:00Z"
  },
  {
    id: 13,
    name: "Cork Yoga Mat",
    slug: "cork-yoga-mat",
    description: "Natural cork and rubber yoga mat. Non-slip, antimicrobial, and biodegradable.",
    price: 68.99,
    compareAtPrice: 89.99,
    category: "Gifts",
    subcategory: "Wellness",
    brand: "CorkFlow",
    sku: "GF-005",
    stock: 45,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
    ],
    ecoFeatures: ["Natural cork", "Biodegradable", "Antimicrobial", "Sustainable"],
    rating: 4.8,
    reviews: 178,
    tags: ["yoga mat", "cork", "fitness", "sustainable"],
    specifications: {
      material: "Natural cork, natural rubber",
      dimensions: "183cm x 61cm x 4mm",
      weight: "1.5kg",
      care: "Wipe clean with damp cloth"
    },
    featured: false,
    createdAt: "2024-03-08T11:30:00Z",
    updatedAt: "2024-09-20T15:10:00Z"
  },
  {
    id: 14,
    name: "Plant-Based Journal",
    slug: "plant-based-journal",
    description: "Hardcover journal with 100% tree-free paper made from agricultural waste.",
    price: 21.99,
    compareAtPrice: 28.99,
    category: "Gifts",
    subcategory: "Stationery",
    brand: "GreenPages",
    sku: "GF-006",
    stock: 135,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363",
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57"
    ],
    ecoFeatures: ["Tree-free paper", "Recycled materials", "Vegan leather", "Carbon neutral"],
    rating: 4.6,
    reviews: 294,
    tags: ["journal", "notebook", "tree-free", "stationery"],
    specifications: {
      material: "Agricultural waste paper, vegan leather",
      pages: "200 pages",
      size: "A5 (5.8 x 8.3 inches)",
      binding: "Lay-flat binding"
    },
    featured: false,
    createdAt: "2024-02-12T13:45:00Z",
    updatedAt: "2024-09-17T12:20:00Z"
  },
  {
    id: 15,
    name: "Herb Growing Kit",
    slug: "herb-growing-kit",
    description: "Complete indoor herb garden kit with organic seeds, biodegradable pots, and soil.",
    price: 29.99,
    compareAtPrice: 39.99,
    category: "Gifts",
    subcategory: "Gardening",
    brand: "GrowGreen",
    sku: "GF-007",
    stock: 92,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2"
    ],
    ecoFeatures: ["Organic seeds", "Biodegradable pots", "Peat-free soil", "Plastic-free"],
    rating: 4.7,
    reviews: 356,
    tags: ["herb kit", "gardening", "organic", "indoor"],
    specifications: {
      includes: "3 herb varieties, pots, soil, instructions",
      herbs: "Basil, Mint, Parsley",
      pots: "Biodegradable coconut coir",
      growTime: "3-4 weeks"
    },
    featured: true,
    createdAt: "2024-01-30T10:50:00Z",
    updatedAt: "2024-09-21T14:15:00Z"
  },
  {
    id: 16,
    name: "Wooden Watch",
    slug: "wooden-watch",
    description: "Handcrafted timepiece made from reclaimed wood. Japanese quartz movement.",
    price: 79.99,
    compareAtPrice: 109.99,
    category: "Gifts",
    subcategory: "Accessories",
    brand: "WoodTime",
    sku: "GF-008",
    stock: 58,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
    ],
    ecoFeatures: ["Reclaimed wood", "Eco-friendly", "Handmade", "Sustainable"],
    rating: 4.8,
    reviews: 203,
    tags: ["watch", "wooden", "accessories", "handmade"],
    specifications: {
      material: "Reclaimed bamboo/walnut",
      movement: "Japanese quartz",
      features: "Water resistant 3ATM",
      strap: "Adjustable wooden links"
    },
    featured: false,
    createdAt: "2024-03-15T15:20:00Z",
    updatedAt: "2024-09-19T11:40:00Z"
  }
];

// Personal & Body Care Products (8 items)
const personalBodyCareProducts = [
  {
    id: 17,
    name: "Organic Bamboo Toothbrush Set",
    slug: "organic-bamboo-toothbrush-set",
    description: "Pack of 4 biodegradable bamboo toothbrushes with BPA-free bristles.",
    price: 14.99,
    compareAtPrice: 19.99,
    category: "Personal & Body Care",
    subcategory: "Oral Care",
    brand: "BamboSmile",
    sku: "PC-001",
    stock: 220,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04",
      "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea"
    ],
    ecoFeatures: ["Biodegradable", "Plastic-free", "Vegan", "Compostable handle"],
    rating: 4.7,
    reviews: 489,
    tags: ["toothbrush", "bamboo", "oral care", "zero waste"],
    specifications: {
      material: "Bamboo handle, nylon bristles",
      quantity: "4 toothbrushes",
      bristles: "Soft, BPA-free",
      packaging: "Recyclable cardboard"
    },
    featured: true,
    createdAt: "2024-01-22T09:30:00Z",
    updatedAt: "2024-09-23T13:25:00Z"
  },
  {
    id: 18,
    name: "Natural Deodorant Cream",
    slug: "natural-deodorant-cream",
    description: "Aluminum-free deodorant with organic ingredients. Lavender and tea tree scent.",
    price: 12.99,
    compareAtPrice: 17.99,
    category: "Personal & Body Care",
    subcategory: "Deodorants",
    brand: "PureScent",
    sku: "PC-002",
    stock: 175,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1585559604959-c0c0f1e6cf9d",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
    ],
    ecoFeatures: ["Aluminum-free", "Natural ingredients", "Cruelty-free", "Plastic-free packaging"],
    rating: 4.6,
    reviews: 367,
    tags: ["deodorant", "natural", "aluminum-free", "organic"],
    specifications: {
      ingredients: "Coconut oil, shea butter, essential oils",
      size: "60g",
      scent: "Lavender & Tea Tree",
      packaging: "Glass jar with metal lid"
    },
    featured: false,
    createdAt: "2024-02-05T11:15:00Z",
    updatedAt: "2024-09-20T16:50:00Z"
  },
  {
    id: 19,
    name: "Organic Shampoo Bar",
    slug: "organic-shampoo-bar",
    description: "Zero-waste shampoo bar for all hair types. Lasts 60-80 washes. Sulfate-free.",
    price: 16.99,
    compareAtPrice: 22.99,
    category: "Personal & Body Care",
    subcategory: "Hair Care",
    brand: "BarCare",
    sku: "PC-003",
    stock: 145,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc",
      "https://images.unsplash.com/photo-1556228841-b6b1f37bb03f"
    ],
    ecoFeatures: ["Zero waste", "Plastic-free", "Vegan", "Cruelty-free"],
    rating: 4.8,
    reviews: 512,
    tags: ["shampoo bar", "zero waste", "sulfate-free", "organic"],
    specifications: {
      ingredients: "Organic oils, essential oils",
      weight: "100g",
      hairType: "All hair types",
      packaging: "Compostable wrapper"
    },
    featured: true,
    createdAt: "2024-03-02T14:40:00Z",
    updatedAt: "2024-09-22T09:15:00Z"
  },
  {
    id: 20,
    name: "Reusable Makeup Remover Pads",
    slug: "reusable-makeup-remover-pads",
    description: "Soft organic cotton rounds for makeup removal. Machine washable. Set of 16.",
    price: 18.99,
    compareAtPrice: 24.99,
    category: "Personal & Body Care",
    subcategory: "Skincare",
    brand: "EcoBeauty",
    sku: "PC-004",
    stock: 190,
    inStock: true,
    images: [
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a"
    ],
    ecoFeatures: ["Reusable", "Organic cotton", "Zero waste", "Machine washable"],
    rating: 4.9,
    reviews: 634,
    tags: ["makeup remover", "reusable", "cotton pads", "zero waste"],
    specifications: {
      material: "100% Organic Cotton",
      quantity: "16 pads + laundry bag",
      size: "3.5 inches diameter",
      care: "Machine wash warm"
    },
    featured: true,
    createdAt: "2024-01-28T10:20:00Z",
    updatedAt: "2024-09-21T15:30:00Z"
  },
  
]

 export default {
  personalBodyCareProducts,
  homeKitchenProducts,
  giftsProducts,
};
