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
      // define association here
    }
  };
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    poster_path: DataTypes.STRING,
    overview: DataTypes.TEXT,
    release_date: DataTypes.DATE,
    vote_average: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};