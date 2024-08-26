'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_Quize extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course_Quize.belongsTo(models.Course_Master, {
        foreignKey: 'course_id',
        as: 'course_master'
      });
      Course_Quize.belongsTo(models.Course_Section, {
        foreignKey: 'section_id',
        as: 'course_section'
      });
      Course_Quize.hasMany(models.Course_Quize_Question, {
        foreignKey: 'quize_id',
        as: 'course_section_quize_question'
      });
    }
  }
  Course_Quize.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quize_duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_marks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    passing__marks: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    drip_content: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    no_of_q_retakes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    instruction: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Course_Quize',
  });
  return Course_Quize;
};