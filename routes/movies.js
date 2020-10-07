const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

const auth = require('../middleware/auth');

router.get('/', auth, MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/title/:title', MovieController.getByTitle);
router.post('/', MovieController.create);


module.exports = router;