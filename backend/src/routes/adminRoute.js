const express = require('express');
const { addBus, deleteBus, updateBus, addRoute, updateRoute, deleteRoute } = require('../controllers/adminController');
const checkAdmin = require('../middlewares/checkAdminMiddleware');

const router = express.Router();

// Bus routes
router.post('/bus', checkAdmin, addBus);
router.delete('/bus/:id', checkAdmin, deleteBus); 
router.put('/bus/:id', checkAdmin,updateBus);

// Route management
router.post('/route', checkAdmin, addRoute);
router.delete('/route/:id', checkAdmin, deleteRoute);
router.put('/route/:id',checkAdmin, updateRoute);

module.exports = router;
