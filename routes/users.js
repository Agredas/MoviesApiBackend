const router = require('express').Router();
const UserController = require('../conrollers/UserConroller');

router.post('/signup', UserController.signup);

router.post('/login', UserController.login);

router.delete('/delete', UserController.delete);

module.exports = router;