const express = require('express');

const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users')

const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log('Server working on port ' + PORT + '.'));

app.use(express.json());

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);