const express = require('express');
const router = express.Router();
const cors = require('cors');
const customerRoutes = require('./customerRoutes');
const categoriesRoutes = require('./categoriesRoutes');
const allowedOrigins = require('../config/env').allowedOrigins

//cors
router.use(cors({
    origin: function (origin, callback) {
      // allow requests with no origin 
      // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
            'allow access from the specified Origin.';
            return callback(msg, false);
        }
        return callback(null, true);
    }
}));

router.use('/api/customers', customerRoutes);
router.use('/api/categories', categoriesRoutes);

module.exports = router;