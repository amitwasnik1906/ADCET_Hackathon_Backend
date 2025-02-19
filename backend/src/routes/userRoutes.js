const express = require('express');
const { getAllBuses, getAllRoutes, getBusDetails, getRouteDetails } = require('../controllers/userController');

const router = express.Router();

// Bus routes
router.get('/buses', getAllBuses);
router.get('/routes', getAllRoutes);
router.get('/bus/:id', getBusDetails);
router.get('/route/:id', getRouteDetails);

module.exports = router;
