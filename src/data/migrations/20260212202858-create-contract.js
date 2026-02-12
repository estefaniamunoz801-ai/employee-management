'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contracts', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
      },
      position: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      salary: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      typeOfContract: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      endDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      contractState: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      employeeDni: {
        type: Sequelize.STRING(10),
        allowNull: false,
        references: {
          model: 'Employees',
          key: 'dni',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Contracts');
  }
};