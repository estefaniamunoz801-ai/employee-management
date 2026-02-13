'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    static associate(models) {
      Contract.belongsTo(models.Employee, {
        foreignKey: 'employeeDni',
        as: 'employee'
      });
    }
  }
  Contract.init({
    id: { 
      type: DataTypes.UUID, 
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true
    },
    position: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    typeOfContract: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    contractState: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    employeeDni: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    timestamps: false,
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};