const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const products = [

  { name: "The Alchemist", price: 350, category: "Fiction", description: "A classic adventure.", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400", stock: 15 },
  { name: "Atomic Habits", price: 550, category: "Self-Help", description: "Master your habits.", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400", stock: 20 },
  { name: "Science Encyclopedia", price: 899, category: "Science", description: "Deep dive into nature.", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400", stock: 10 },

  { name: "Leather Notebook", price: 450, category: "Stationery", description: "Premium writing pads.", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400", stock: 50 },
  { name: "Luxury Fountain Pen", price: 1200, category: "Stationery", description: "Fine ink experience.", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400", stock: 25 }
];

// Reliable Image URLs (Books & Stationery)
const bookImages = [
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=400"
];

const stationeryImages = [
  "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=400",
  "https://images.unsplash.com/photo-1456735190827-d1261f7add50?auto=format&fit=crop&w=400"
];

for (let i = 1; i <= 45; i++) {
  const isBook = i % 2 !== 0;
  const category = isBook ? "Books" : "Stationery";
  const type = isBook ? "Book" : "Stationery";

  // Pick random image from arrays
  const imageList = isBook ? bookImages : stationeryImages;
  const image = imageList[Math.floor(Math.random() * imageList.length)];

  products.push({
    name: `${type} Item ${i}`,
    price: Math.floor(Math.random() * 900) + 100, // Price between 100-1000
    category: category,
    description: `This is a high-quality ${type.toLowerCase()} suitable for all your needs. Item number ${i} in our catalog.`,
    image: image,
    stock: Math.floor(Math.random() * 50) + 10
  });
}

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`✅ ${products.length} Products Seeded!`);
    process.exit();
  });
