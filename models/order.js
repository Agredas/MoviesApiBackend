'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User); // An order only belongs to one user. One to Many inverse relationship.
      this.belongsToMany(models.Movie, {through: models.OrderMovie}); // An order can belongs to many movies.
    }
  };
  Order.init({
    status: DataTypes.STRING,
    returnDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};