const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // .env file se MONGO_URI fetch karega
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Agar connection fail ho toh server stop kar dega
    process.exit(1); 
  }
};

module.exports = connectDB;