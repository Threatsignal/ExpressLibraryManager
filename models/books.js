'use strict';
module.exports = (sequelize, DataTypes) => {
  var Books = sequelize.define('Books', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    first_published: DataTypes.INTEGER,
  }, {
  });
  Books.associate = function(models) {
    Books.hasOne(models.Loans);
    // associations can be defined here
  };
  return Books;
};