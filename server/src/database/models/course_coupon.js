'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course_Coupon.init({
    coupon_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    discount_in_percentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    discount_in_amount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    expired_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Course_Coupon',
  });
  return Course_Coupon;
};