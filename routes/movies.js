const router = require('express').Router();
const MovieController = require('../controllers/MovieController');

const auth = require('../middleware/auth');

// Show all the movies.
router.get('/', auth, MovieController.getAll);
// Show movies by Id.
router.get('/:id', MovieController.getById);
// Show movies by title.
router.get('/title/:title', MovieController.getByTitle);
// Create movies.
router.post('/', MovieController.create);


module.exports = router;