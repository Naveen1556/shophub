// Comprehensive product data
const products = [
    // Electronics
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 128,
        category: "electronics",
        badge: "Best Seller"
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 256,
        category: "electronics",
        badge: "New"
    },
    {
        id: 5,
        title: "Smart Home Speaker",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1543512214-318c7553f226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 203,
        category: "electronics",
        badge: "Popular"
    },
    {
        id: 10,
        title: "Wireless Gaming Mouse",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1527864550417-7f91c4da76f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 189,
        category: "electronics",
        badge: "Gaming"
    },
    {
        id: 13,
        title: "4K Ultra HD Smart TV 55\"",
        price: 599.99,
        originalPrice: 799.99,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 342,
        category: "electronics",
        badge: "Hot Deal"
    },
    {
        id: 14,
        title: "MacBook Pro 13\" M2",
        price: 1299.99,
        originalPrice: 1499.99,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.9,
        reviews: 567,
        category: "electronics",
        badge: "Premium"
    },
    {
        id: 15,
        title: "iPhone 15 Pro Max",
        price: 1099.99,
        originalPrice: 1199.99,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 892,
        category: "electronics",
        badge: "Latest"
    },
    {
        id: 16,
        title: "Professional Camera DSLR",
        price: 899.99,
        originalPrice: 1199.99,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 234,
        category: "electronics",
        badge: "Pro"
    },
    {
        id: 17,
        title: "Gaming Laptop RTX 4070",
        price: 1499.99,
        originalPrice: 1799.99,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 178,
        category: "electronics",
        badge: "Gaming"
    },
    {
        id: 18,
        title: "Tablet Pro 12.9\"",
        price: 799.99,
        originalPrice: 999.99,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 456,
        category: "electronics",
        badge: "Creative"
    },

    // Fashion
    {
        id: 3,
        title: "Premium Cotton T-Shirt",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviews: 89,
        category: "fashion",
        badge: "Sale"
    },
    {
        id: 4,
        title: "Designer Handbag",
        price: 159.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 167,
        category: "fashion",
        badge: "Limited"
    },
    {
        id: 19,
        title: "Designer Jeans Collection",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 234,
        category: "fashion",
        badge: "Trending"
    },
    {
        id: 20,
        title: "Elegant Evening Dress",
        price: 129.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 156,
        category: "fashion",
        badge: "Elegant"
    },
    {
        id: 21,
        title: "Casual Sneakers",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 298,
        category: "fashion",
        badge: "Comfort"
    },
    {
        id: 22,
        title: "Winter Jacket Premium",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 189,
        category: "fashion",
        badge: "Winter"
    },
    {
        id: 23,
        title: "Luxury Watch Gold",
        price: 299.99,
        originalPrice: 399.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 267,
        category: "fashion",
        badge: "Luxury"
    },
    {
        id: 24,
        title: "Summer Beach Dress",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviews: 145,
        category: "fashion",
        badge: "Summer"
    },
    {
        id: 49,
        title: "Designer Leather Jacket",
        price: 199.99,
        originalPrice: 279.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 312,
        category: "fashion",
        badge: "Designer"
    },
    {
        id: 50,
        title: "High Heels Red Pumps",
        price: 79.99,
        originalPrice: 109.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 198,
        category: "fashion",
        badge: "Elegant"
    },
    {
        id: 51,
        title: "Oversized Hoodie Streetwear",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 267,
        category: "fashion",
        badge: "Streetwear"
    },
    {
        id: 52,
        title: "Silk Scarf Luxury",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 134,
        category: "fashion",
        badge: "Luxury"
    },
    {
        id: 53,
        title: "Athletic Leggings Set",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1506629905607-3b4a4a4b4b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 289,
        category: "fashion",
        badge: "Athletic"
    },
    {
        id: 54,
        title: "Vintage Denim Jacket",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviews: 156,
        category: "fashion",
        badge: "Vintage"
    },
    {
        id: 55,
        title: "Formal Business Suit",
        price: 189.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1594938298605-cdcc0e138328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 234,
        category: "fashion",
        badge: "Professional"
    },
    {
        id: 56,
        title: "Bohemian Maxi Dress",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 178,
        category: "fashion",
        badge: "Bohemian"
    },
    {
        id: 57,
        title: "Designer Sunglasses",
        price: 129.99,
        originalPrice: 179.99,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f9c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 203,
        category: "fashion",
        badge: "Designer"
    },
    {
        id: 58,
        title: "Cashmere Sweater",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 267,
        category: "fashion",
        badge: "Premium"
    },
    {
        id: 59,
        title: "Cargo Pants Military",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 189,
        category: "fashion",
        badge: "Military"
    },
    {
        id: 60,
        title: "Lace Bralette Set",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 145,
        category: "fashion",
        badge: "Lace"
    },
    {
        id: 61,
        title: "Platform Boots Black",
        price: 99.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 198,
        category: "fashion",
        badge: "Platform"
    },
    {
        id: 62,
        title: "Knit Cardigan Oversized",
        price: 69.99,
        originalPrice: 89.99,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 167,
        category: "fashion",
        badge: "Knit"
    },
    {
        id: 63,
        title: "Statement Necklace Gold",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 123,
        category: "fashion",
        badge: "Statement"
    },
    {
        id: 64,
        title: "Crop Top Summer",
        price: 19.99,
        originalPrice: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviews: 234,
        category: "fashion",
        badge: "Summer"
    },
    {
        id: 65,
        title: "Leather Ankle Boots",
        price: 119.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 289,
        category: "fashion",
        badge: "Leather"
    },
    {
        id: 66,
        title: "Wrap Dress Midi",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 198,
        category: "fashion",
        badge: "Wrap"
    },
    {
        id: 67,
        title: "Trench Coat Classic",
        price: 179.99,
        originalPrice: 229.99,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 245,
        category: "fashion",
        badge: "Classic"
    },
    {
        id: 68,
        title: "Jogger Pants Comfort",
        price: 39.99,
        originalPrice: 54.99,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 312,
        category: "fashion",
        badge: "Comfort"
    },
    {
        id: 69,
        title: "Belt Bag Crossbody",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 178,
        category: "fashion",
        badge: "Crossbody"
    },
    {
        id: 70,
        title: "Oversized Blazer",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1594938298605-cdcc0e138328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 203,
        category: "fashion",
        badge: "Oversized"
    },
    {
        id: 71,
        title: "Floral Print Skirt",
        price: 44.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 156,
        category: "fashion",
        badge: "Floral"
    },
    {
        id: 72,
        title: "Minimalist Ring Set",
        price: 19.99,
        originalPrice: 29.99,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 189,
        category: "fashion",
        badge: "Minimalist"
    },

    // Home & Garden
    {
        id: 9,
        title: "Modern Desk Lamp",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 134,
        category: "home",
        badge: "Modern"
    },
    {
        id: 25,
        title: "Smart Coffee Maker",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 189,
        category: "home",
        badge: "Smart"
    },
    {
        id: 26,
        title: "Indoor Plant Collection",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 123,
        category: "home",
        badge: "Natural"
    },
    {
        id: 27,
        title: "Luxury Bedding Set",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 178,
        category: "home",
        badge: "Luxury"
    },
    {
        id: 28,
        title: "Kitchen Blender Pro",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1585515655856-7d2d4b4a7b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 234,
        category: "home",
        badge: "Kitchen"
    },
    {
        id: 29,
        title: "Garden Tools Set",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviews: 98,
        category: "home",
        badge: "Garden"
    },

    // Beauty
    {
        id: 6,
        title: "Organic Skincare Set",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 145,
        category: "beauty",
        badge: "Organic"
    },
    {
        id: 11,
        title: "Luxury Perfume Set",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 112,
        category: "beauty",
        badge: "Luxury"
    },
    {
        id: 30,
        title: "Professional Makeup Kit",
        price: 79.99,
        originalPrice: 109.99,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 267,
        category: "beauty",
        badge: "Pro"
    },
    {
        id: 31,
        title: "Hair Care Essentials",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 189,
        category: "beauty",
        badge: "Essentials"
    },
    {
        id: 32,
        title: "Anti-Aging Serum",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 345,
        category: "beauty",
        badge: "Anti-Aging"
    },
    {
        id: 33,
        title: "Nail Art Kit Complete",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviews: 156,
        category: "beauty",
        badge: "Creative"
    },

    // Sports
    {
        id: 7,
        title: "Yoga Mat Premium",
        price: 39.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 98,
        category: "sports",
        badge: "Sale"
    },
    {
        id: 12,
        title: "Running Shoes Pro",
        price: 129.99,
        originalPrice: 159.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 267,
        category: "sports",
        badge: "Pro"
    },
    {
        id: 34,
        title: "Dumbbell Set 20kg",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 178,
        category: "sports",
        badge: "Strength"
    },
    {
        id: 35,
        title: "Basketball Official",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1546519638-68e109fcdc54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 123,
        category: "sports",
        badge: "Official"
    },
    {
        id: 36,
        title: "Tennis Racket Pro",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 234,
        category: "sports",
        badge: "Pro"
    },
    {
        id: 37,
        title: "Swimming Goggles Set",
        price: 19.99,
        originalPrice: 29.99,
        image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.3,
        reviews: 89,
        category: "sports",
        badge: "Swimming"
    },

    // Books
    {
        id: 8,
        title: "Coffee Table Book Collection",
        price: 34.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.2,
        reviews: 76,
        category: "books",
        badge: "Bestseller"
    },
    {
        id: 38,
        title: "Programming Fundamentals",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 456,
        category: "books",
        badge: "Tech"
    },
    {
        id: 39,
        title: "Cookbook Master Chef",
        price: 24.99,
        originalPrice: 34.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 189,
        category: "books",
        badge: "Cooking"
    },
    {
        id: 40,
        title: "Fiction Novel Bestseller",
        price: 14.99,
        originalPrice: 19.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 298,
        category: "books",
        badge: "Fiction"
    },
    {
        id: 41,
        title: "Children's Picture Book",
        price: 12.99,
        originalPrice: 16.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 167,
        category: "books",
        badge: "Kids"
    },
    {
        id: 42,
        title: "Business Strategy Guide",
        price: 39.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 234,
        category: "books",
        badge: "Business"
    },

    // Toys
    {
        id: 43,
        title: "LEGO Building Set",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.8,
        reviews: 345,
        category: "toys",
        badge: "Creative"
    },
    {
        id: 44,
        title: "Remote Control Car",
        price: 49.99,
        originalPrice: 69.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 189,
        category: "toys",
        badge: "RC"
    },
    {
        id: 45,
        title: "Educational Science Kit",
        price: 34.99,
        originalPrice: 44.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.6,
        reviews: 123,
        category: "toys",
        badge: "Educational"
    },
    {
        id: 46,
        title: "Doll House Complete",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.7,
        reviews: 178,
        category: "toys",
        badge: "Complete"
    },
    {
        id: 47,
        title: "Puzzle 1000 Pieces",
        price: 19.99,
        originalPrice: 24.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.4,
        reviews: 98,
        category: "toys",
        badge: "Puzzle"
    },
    {
        id: 48,
        title: "Musical Instrument Set",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        rating: 4.5,
        reviews: 156,
        category: "toys",
        badge: "Musical"
    }
];

// Shopping cart
let cart = [];
let currentFilter = 'all';
let currentSort = 'popular';
let currentPriceRange = 1000;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const categoryCards = document.querySelectorAll('.category-card');

// Initialize the app
document.addEventListener('DOMContentLoaded', async function() {
    // Load products from API on page load
    await loadAllProductsFromAPI();
    setupEventListeners();
    updateCartUI();
});

// Setup event listeners
function setupEventListeners() {
    // Cart functionality
    cartIcon.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', toggleCart);
    
    // Search functionality
    searchInput.addEventListener('input', handleSearch);
    
    // Filter and sort functionality
    sortSelect.addEventListener('change', handleSort);
    priceRange.addEventListener('input', handlePriceFilter);
    
    // Category filtering from cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            filterByCategory(category);
        });
    });
    
    // Category filtering from navigation
    const navLinks = document.querySelectorAll('.main-nav a[data-category]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            filterByCategory(category);
        });
    });
}

// Global variables for pagination
let currentPage = 1;
let isLoading = false;
let hasMoreProducts = true;
let currentProducts = [];

// Display products
function displayProducts(productsToShow, append = false) {
    if (productsToShow.length === 0 && !append) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    if (append) {
        currentProducts = [...currentProducts, ...productsToShow];
    } else {
        currentProducts = productsToShow;
    }
    
    const productsHTML = currentProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-badge">${product.badge}</div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    <span class="original-price">$${product.originalPrice}</span>
                    <span class="discount">${Math.round((1 - product.price / product.originalPrice) * 100)}% OFF</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `).join('');
    
    if (append) {
        productsGrid.innerHTML += productsHTML;
    } else {
        productsGrid.innerHTML = productsHTML;
    }
    
    // Add load more button if there are more products
    if (hasMoreProducts && !isLoading) {
        addLoadMoreButton();
    }
}

// Add load more button
function addLoadMoreButton() {
    // Remove existing load more button
    const existingButton = document.getElementById('loadMoreBtn');
    if (existingButton) {
        existingButton.remove();
    }
    
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.id = 'loadMoreBtn';
    loadMoreBtn.className = 'load-more-btn';
    loadMoreBtn.innerHTML = '<i class="fas fa-plus"></i> Load More Products';
    loadMoreBtn.style.cssText = `
        display: block;
        margin: 30px auto;
        padding: 15px 30px;
        background: #ff6b35;
        color: white;
        border: none;
        border-radius: 25px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    `;
    
    loadMoreBtn.addEventListener('click', loadMoreProducts);
    loadMoreBtn.addEventListener('mouseenter', function() {
        this.style.background = '#e55a2b';
        this.style.transform = 'translateY(-2px)';
    });
    loadMoreBtn.addEventListener('mouseleave', function() {
        this.style.background = '#ff6b35';
        this.style.transform = 'translateY(0)';
    });
    
    productsGrid.parentNode.appendChild(loadMoreBtn);
}

// Load more products
async function loadMoreProducts() {
    if (isLoading) return;
    
    isLoading = true;
    currentPage++;
    
    try {
        const response = await fetch(`${API_CONFIG.baseURL}?limit=20&skip=${(currentPage - 1) * 20}`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.products.length === 0) {
            hasMoreProducts = false;
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (loadMoreBtn) {
                loadMoreBtn.style.display = 'none';
            }
        } else {
            const transformedProducts = data.products.map(transformAPIProduct);
            displayProducts(transformedProducts, true);
        }
    } catch (error) {
        console.error('Load more error:', error);
        currentPage--; // Revert page increment on error
    } finally {
        isLoading = false;
    }
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${product.title} added to cart!`);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started</p>
            </div>
        `;
        cartTotal.textContent = '0.00';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">$${item.price}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');
        
        // Update total
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('open');
}

// API Configuration
const API_CONFIG = {
    baseURL: 'https://dummyjson.com/products',
    searchEndpoint: 'https://dummyjson.com/products/search',
    categoriesEndpoint: 'https://dummyjson.com/products/categories'
};

// Handle search with API call
async function handleSearch() {
    const searchTerm = searchInput.value.trim();
    
    // Reset pagination
    currentPage = 1;
    hasMoreProducts = true;
    
    if (searchTerm.length < 2) {
        await loadAllProductsFromAPI(); // Show all products if search is too short
        return;
    }
    
    try {
        showLoading();
        const apiProducts = await searchProductsAPI(searchTerm);
        displayProducts(apiProducts);
    } catch (error) {
        console.error('Search error:', error);
        // Fallback to local search if API fails
        const filteredProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayProducts(filteredProducts);
    }
}

// Search products using API
async function searchProductsAPI(query) {
    const response = await fetch(`${API_CONFIG.searchEndpoint}?q=${encodeURIComponent(query)}&limit=20`);
    if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
    }
    const data = await response.json();
    return data.products.map(transformAPIProduct);
}

// Transform API product to our format
function transformAPIProduct(apiProduct) {
    return {
        id: apiProduct.id + 1000, // Offset to avoid conflicts with local products
        title: apiProduct.title,
        price: apiProduct.price,
        originalPrice: Math.round(apiProduct.price * 1.3), // Add 30% markup for "original price"
        image: apiProduct.thumbnail,
        rating: apiProduct.rating,
        reviews: apiProduct.stock || Math.floor(Math.random() * 500) + 50,
        category: mapAPICategory(apiProduct.category),
        badge: generateRandomBadge()
    };
}

// Map API categories to our categories
function mapAPICategory(apiCategory) {
    const categoryMap = {
        'smartphones': 'electronics',
        'laptops': 'electronics',
        'fragrances': 'beauty',
        'skincare': 'beauty',
        'groceries': 'home',
        'home-decoration': 'home',
        'furniture': 'home',
        'tops': 'fashion',
        'womens-dresses': 'fashion',
        'womens-shoes': 'fashion',
        'mens-shirts': 'fashion',
        'mens-shoes': 'fashion',
        'mens-watches': 'fashion',
        'womens-watches': 'fashion',
        'womens-bags': 'fashion',
        'womens-jewellery': 'fashion',
        'sunglasses': 'fashion',
        'automotive': 'electronics',
        'motorcycle': 'electronics',
        'lighting': 'home'
    };
    return categoryMap[apiCategory] || 'fashion';
}

// Generate random badge for API products
function generateRandomBadge() {
    const badges = ['New', 'Sale', 'Popular', 'Trending', 'Limited', 'Best Seller', 'Hot Deal', 'Premium'];
    return badges[Math.floor(Math.random() * badges.length)];
}

// Load products by category from API
async function loadProductsByCategory(category) {
    try {
        showLoading();
        const response = await fetch(`${API_CONFIG.baseURL}/category/${category}?limit=20`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        const transformedProducts = data.products.map(transformAPIProduct);
        displayProducts(transformedProducts);
    } catch (error) {
        console.error('Category load error:', error);
        // Fallback to local products
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
}

// Load all products from API
async function loadAllProductsFromAPI() {
    try {
        showLoading();
        const response = await fetch(`${API_CONFIG.baseURL}?limit=30`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        const data = await response.json();
        const transformedProducts = data.products.map(transformAPIProduct);
        displayProducts(transformedProducts);
    } catch (error) {
        console.error('Products load error:', error);
        // Fallback to local products
        displayProducts(products);
    }
}

// Handle sort
function handleSort() {
    currentSort = sortSelect.value;
    applyFilters();
}

// Handle price filter
function handlePriceFilter() {
    currentPriceRange = parseInt(priceRange.value);
    priceValue.textContent = `$0 - $${currentPriceRange}`;
    applyFilters();
}

// Filter by category with API integration
async function filterByCategory(category) {
    currentFilter = category;
    
    // Reset pagination
    currentPage = 1;
    hasMoreProducts = true;
    
    // Update active category
    categoryCards.forEach(card => {
        card.classList.remove('active');
        if (card.dataset.category === category) {
            card.classList.add('active');
        }
    });
    
    // Load products from API for the selected category
    if (category === 'all') {
        await loadAllProductsFromAPI();
    } else {
        await loadProductsByCategory(category);
    }
}

// Apply all filters
function applyFilters() {
    let filteredProducts = [...products];
    
    // Category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
    }
    
    // Price filter
    filteredProducts = filteredProducts.filter(product => product.price <= currentPriceRange);
    
    // Sort
    switch (currentSort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        default: // popular
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
    }
    
    displayProducts(filteredProducts);
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation
function showLoading() {
    productsGrid.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Lazy loading for images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Add to cart animation
function animateAddToCart(button) {
    button.style.transform = 'scale(0.95)';
    button.style.backgroundColor = '#27ae60';
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    
    setTimeout(() => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = '#ff6b35';
        button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
    }, 1000);
}

// Update add to cart function with animation
const originalAddToCart = addToCart;
addToCart = function(productId) {
    originalAddToCart(productId);
    const button = event.target;
    animateAddToCart(button);
};

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('mobile-open');
}

// Add mobile menu styles
const mobileMenuStyles = `
    @media (max-width: 768px) {
        .main-nav.mobile-open ul {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #2c3e50;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        
        .main-nav.mobile-open li {
            flex: none;
        }
        
        .mobile-menu-toggle {
            display: block;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 10px;
        }
    }
    
    .mobile-menu-toggle {
        display: none;
    }
`;

// Add mobile menu styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileMenuStyles;
document.head.appendChild(styleSheet);

// Add mobile menu toggle button
const nav = document.querySelector('.main-nav');
const mobileToggle = document.createElement('button');
mobileToggle.className = 'mobile-menu-toggle';
mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
mobileToggle.onclick = toggleMobileMenu;
nav.parentNode.insertBefore(mobileToggle, nav);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cartSidebar.classList.remove('open');
    }
});

// Search suggestions with API integration
function setupSearchSuggestions() {
    const searchSuggestions = [
        'iPhone', 'Samsung', 'MacBook', 'Nike', 'Adidas', 'Dress', 'Shoes', 'Watch', 'Bag', 'Laptop',
        'Headphones', 'Camera', 'Sunglasses', 'Jacket', 'Jeans', 'Sneakers', 'Perfume', 'Skincare'
    ];
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length >= 2) {
            searchTimeout = setTimeout(() => {
                handleSearch();
            }, 500); // Debounce search by 500ms
        } else if (query.length === 0) {
            loadAllProductsFromAPI();
        }
    });
    
    // Add search suggestions dropdown
    createSearchSuggestionsDropdown();
}

// Create search suggestions dropdown
function createSearchSuggestionsDropdown() {
    const searchContainer = document.querySelector('.search-bar');
    const suggestionsDropdown = document.createElement('div');
    suggestionsDropdown.className = 'search-suggestions';
    suggestionsDropdown.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e1e5e9;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        max-height: 200px;
        overflow-y: auto;
        display: none;
    `;
    
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(suggestionsDropdown);
    
    // Show suggestions on focus
    searchInput.addEventListener('focus', function() {
        if (this.value.length === 0) {
            showSuggestions();
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            suggestionsDropdown.style.display = 'none';
        }
    });
    
    function showSuggestions() {
        const suggestions = [
            'iPhone', 'Samsung', 'MacBook', 'Nike', 'Adidas', 'Dress', 'Shoes', 'Watch', 'Bag', 'Laptop'
        ];
        
        suggestionsDropdown.innerHTML = suggestions.map(suggestion => `
            <div class="suggestion-item" style="padding: 10px 15px; cursor: pointer; border-bottom: 1px solid #f0f0f0;">
                <i class="fas fa-search" style="margin-right: 8px; color: #666;"></i>
                ${suggestion}
            </div>
        `).join('');
        
        suggestionsDropdown.style.display = 'block';
        
        // Add click handlers to suggestions
        suggestionsDropdown.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', function() {
                searchInput.value = this.textContent.trim();
                suggestionsDropdown.style.display = 'none';
                handleSearch();
            });
            
            item.addEventListener('mouseenter', function() {
                this.style.backgroundColor = '#f8f9fa';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.backgroundColor = 'white';
            });
        });
    }
}

// Initialize search suggestions
setupSearchSuggestions();
