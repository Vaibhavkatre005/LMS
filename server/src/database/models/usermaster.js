'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserMaster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserMaster.belongsTo(models.UserRole, {
        foreignKey: 'role_id',
        as: 'role'
      });
    }
  }
  UserMaster.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: true
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'UserMaster',
  });
  return UserMaster;
};
