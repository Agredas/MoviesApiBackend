'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Order, { through: models.OrderMovie, foreignKey: "movieId" }); // Movie can belong to several orders.
    }
  };
  Movie.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: DataTypes.STRING,
    overview: DataTypes.TEXT,
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
}, {
    sequelize,
    modelName: 'Movie',
});
return Movie;
};