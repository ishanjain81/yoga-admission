const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController.js');

console.log('Router Loaded');

// route for checking the server
router.get("/", paymentController.check);
// route for checking of the API
router.post("/payment", paymentController.CompletePayment);

module.exports = router;