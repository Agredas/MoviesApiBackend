const { Order, User, Movie } = require ('../models');

const OrderController = {
  async getAll(req,res){
    try{
      const orders = await Order.findAll ({
        attributes: {
          exclude: ['UserId']
        },
        include:[{
          model: Movie,
          attributes: ['title'],
          through: {
            attributes:[]
          }
        },{
          model: User,
          attributes: ['name', 'email']
        }]
      });
      res.send(orders);
    } catch(error){
      console.error(error);
      res.status(500).send({
        error, message: 'There was a problem trying to get the orders.'
      })
    }
  },

  async create(req,res){
    try{
      const returnDate = new Date();
      returnDate.setDate(returnDate.getDate() + 5)
      const order = await Order.create({
        status: 'Rented',
        returnDate,
        UserId:  req.user.id
      });
      //Si en el body no tienes movies, tienes un MovieId
      await order.addMovie(req.body.MovieId)
      res.send({
        message: 'Order succesfully created.'
      })
    } catch (error){
      console.error(error);
      res.status(500).send({
        message: 'There was a problem trying to create an order.'
      })
    }
  }
}

module.exports = OrderController;