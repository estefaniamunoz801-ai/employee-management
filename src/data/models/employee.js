'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasMany(models.Contract, {
        foreignKey: 'employeeDni',
        as: 'contracts'
      });
    }
  }
  Employee.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    dni: { 
      type: DataTypes.STRING(10), 
      allowNull: false, 
      unique: true 
    },
    fullName: { 
      type: DataTypes.STRING(100), 
      allowNull: false 
    },
    age: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    gender: 
    { 
      type: DataTypes.STRING(10), 
      allowNull: false 
    },
    phone: { 
      type: DataTypes.STRING(15), 
      allowNull: false 
    },
    email: { 
      type: DataTypes.STRING(100), 
      allowNull: false 
    },
    employeeState: {
      type: DataTypes.STRING(20),
      allowNull: false
    } 
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};