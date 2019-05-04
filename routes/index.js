const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);

// To use in app.js
module.exports = router;
