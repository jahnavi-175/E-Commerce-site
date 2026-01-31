const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/create-cod', async (req, res) => {
  try {
    const { userId, items, amount, paymentStatus } = req.body;
    
    const newOrder = new Order({
      userId,
      products: items,
      totalAmount: amount,
      orderId: "ORD-" + Date.now(),
      paymentStatus: paymentStatus || "Pending", 
    });

    await newOrder.save();
    
    res.status(201).json({ 
      success: true, 
      message: "Order placed successfully!", 
      orderId: newOrder.orderId 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
