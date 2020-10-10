const router = require('express').Router();
const OrderController = require('../controllers/OrderController');

// Show all orders.
router.get('/', OrderController.getAll);
// Create orders.
router.post('/', OrderController.create);

module.exports = router;