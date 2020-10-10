const router = require('express').Router();
const UserController = require('../controllers/UserController');

// User registration.
router.post('/signup', UserController.signup);
// User login.
router.post('/login', UserController.login);
// User profile.
/* router.get('/profile/:id', UserController.getById); */
// User delete.
router.delete('/delete', UserController.delete);

module.exports = router;