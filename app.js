const express = require('express');
require('dotenv').config()
const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const ordersRouter = require('./routes/orders');
const auth = require('./middleware/auth');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', auth, (req,res) => res.send(req.user))

app.use(express.json());

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/orders', auth, ordersRouter);

app.listen(PORT, () => console.log('Server working on port ' + PORT + '.'));
