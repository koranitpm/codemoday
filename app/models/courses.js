'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      models.belongsTo(models.Teacher, {
        foreignKey: 'teacherId',
        onDelete: 'CASCADE', //delete teacher will delete courses too
      });
    }
  };
  Courses.init({
    course_name: DataTypes.STRING,
    course_description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};