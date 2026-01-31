const express = require('express');
const router = express.Router();
const PaytmChecksum = require('paytmchecksum');
const Order = require('../models/Order');

router.post('/initiate', async (req, res) => {
  const { amount, userId, items } = req.body;
  const orderId = "ORD" + Date.now();

  const newOrder = new Order({ userId, amount, orderId, items });
  await newOrder.save();

  const paytmParams = {
    body: {
      "requestType": "Payment",
      "mid": process.env.PAYTM_MID,
      "websiteName": "WEBSTAGING",
      "orderId": orderId,
      "callbackUrl": `https://YOUR-RENDER-APP-NAME.onrender.com/api/payment/callback`,
      "txnAmount": { "value": amount.toString(), "currency": "INR" },
      "userInfo": { "custId": userId },
    },
  };

  const checksum = await PaytmChecksum.generateSignature(JSON.stringify(paytmParams.body), process.env.PAYTM_KEY);

  res.json({ 
    signature: checksum, 
    orderId: orderId, 
    mid: process.env.PAYTM_MID
  });
});
router.post('/callback', async (req, res) => {
  const paytmParams = req.body;
  const checksum = paytmParams.CHECKSUMHASH;
  delete paytmParams.CHECKSUMHASH;

  const isVerifySignature = PaytmChecksum.verifySignature(paytmParams, process.env.PAYTM_KEY, checksum);

  if (isVerifySignature) {
    const orderStatus = paytmParams.STATUS;
    const orderId = paytmParams.ORDERID;

    if (orderStatus === "TXN_SUCCESS") {
        await Order.findOneAndUpdate({ orderId }, { paymentStatus: "Success", transactionId: paytmParams.TXNID });
        res.redirect(`http://localhost:5173/thankyou`); 
    } else {
        await Order.findOneAndUpdate({ orderId }, { paymentStatus: "Failed" });
        res.redirect(`http://localhost:5173/cart`);
    }
  } else {
    res.status(500).send("Security Check Failed");
  }
});
module.exports = router;