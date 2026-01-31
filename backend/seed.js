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

for (let i = 6; i <= 40; i++) {
  const type = i % 2 === 0 ? "Book" : "Stationery Item";
  products.push({
    name: `${type} ${i}`,
    price: Math.floor(Math.random() * 800) + 100,
    category: i % 2 === 0 ? "Books" : "Stationery",
    description: `High quality ${type} for daily use.`,
    image: `https://images.unsplash.com/photo-${1500000000000 + (i * 1000)}?auto=format&fit=crop&w=400`,
    stock: 30
  });
}

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("✅ 40 Products Seeded!");
    process.exit();
  });