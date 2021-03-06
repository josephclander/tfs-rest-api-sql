'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Course extends Model {}
  Course.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "'title' is required" },
          notEmpty: { msg: 'Please provide a title' },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "'description' is required" },
          notEmpty: { msg: 'Please provide a description' },
        },
      },
      estimatedTime: { type: DataTypes.STRING },
      materialsNeeded: { type: DataTypes.STRING },
    },
    { sequelize }
  );

  Course.associate = (models) => {
    Course.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Course;
};
