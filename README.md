# MoviesApiBackend 🚀

## Introduction
This project consists of managing a database for a movie rental website, only backend is touched, frontend will be added later.

[GitHub](https://github.com/Agredas/MoviesApiBackend)

[Heroku](https://movies-api-backend.herokuapp.com/)

The technologies used are: 

- Javascript.
- NodeJS.
- Express.
- Sequelize.
- MySQL.
- JWT.
- Postman.
- Git.
- GitHub.
- Heroku.

## Endpoints

- Movies
  - GET /movies -> Get all the movies.
  - GET /movies/:id -> Get movies by Id.
  - GET /movies/title/:title -> Get movies by title.
  - POST /movies -> Create a movie.

- Users
  - POST /users/signup -> User registration.
  - POST /users/login -> User login.
  - GET /users/profile/:email -> User profile.
  - DELETE /users/delete -> User delete.

- Orders
  - GET /orders -> Show all orders.
  - POST /orders -> Create orders.
