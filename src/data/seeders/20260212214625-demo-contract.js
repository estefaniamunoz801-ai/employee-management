'use strict';

const crypto = require('node:crypto');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Contracts",[
      {
        id: crypto.randomUUID(),
        position: "QA",
        salary: 30000,
        typeOfContract: "Indefinite",
        startDate: new Date('2026-01-01'),
        endDate: new Date('2027-01-01'),
        contractState: "ACTIVE",
        employeeDni: "0123456789" 
      },
      {
        id: crypto.randomUUID(),
        position: "Backen Dev",
        salary: 28000,
        typeOfContract: "Indefinite",
        startDate: new Date('2026-01-01'),
        endDate: new Date('2027-01-01'),
        contractState: "ACTIVE",
        employeeDni: "2568935421" 
      },
      {
        id: crypto.randomUUID(),
        position: "Pentester",
        salary: 29500,
        typeOfContract: "Indefinite",
        startDate: new Date('2026-01-01'),
        endDate: new Date('2027-01-01'),
        contractState: "ACTIVE",
        employeeDni: "3478190654" 
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Contracts", null, {})
  }
};
