const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products); // This array fills your friend's 'All Items' page
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};