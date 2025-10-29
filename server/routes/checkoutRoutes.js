const express = require("express");
const checkout = require("../controllers/checkoutController");
const router = express.Router();

router.post("/", checkout);
export default router;
