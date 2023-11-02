const express = require("express");
const router = express.Router();

const savingsGoalsRoutes = require('./savings-goals.routes.js');

router.use('/savings-goals', savingsGoalsRoutes);


module.exports = router;