const express = require('express');
const router = express.Router();

const userRoutes = require('./auth.route');
const categoryRoutes = require('./category.route');

router.use("/", userRoutes);
router.use("/category", categoryRoutes);

module.exports = router;