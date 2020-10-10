const { Order, Movie, User } = require ('../models');

const OrderController = {
  
  async getAll(req,res) {
    try{
      const orders = await Order.findAll({
        attributes : {
          exclude: ['UserId']
        },
        include: [{
          model: Movie,
          attributes: ['title'],
          throught: {
            attributes: []
          }
        }, {
          model: User,
          attributes: {
            exclude: ['name', 'email']
          }
        }]
      });
      res.send(orders);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        error, message: 'There was a problem trying to get the orders.'
      })
    }
  },
  create(req,res) {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + 2)
    Order.create({
      status: 'Order cancelled.',
      returnDate,
      userId: req.user.id
    })
    .then(order => {
      return order.addMovie(req.body.movies);
    })
    .then(() => res.send({
      message:'Order succesfully created.'
    }))
    .catch(error => {
      console.error(error);
      res.status(500).send({
        message: 'There was a problem trying to create the order.'
      })
    })
  }
}

module.exports = OrderController