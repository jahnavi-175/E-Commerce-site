const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/create-cod', async (req, res) => {
  try {
    const { userId, items, amount, paymentMethod } = req.body;
    
    const newOrder = new Order({
      userId,
      items,
      amount,
      orderId: "ORD-" + Date.now(),
      paymentStatus: paymentMethod === "Online" ? "Success" : "Pending",
    });

    await newOrder.save();
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;