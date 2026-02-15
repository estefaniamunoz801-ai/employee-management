const ContractRouter = require("express").Router();
const { ContractRepository } = require('../../data/repositories/ContractRepository')
const { ContractServices } = require('../../business/services/ContractServices')
const ContractController = require("../controllers/ContractController");

const contractRepository = new ContractRepository()
const contractServices = new ContractServices(contractRepository)
const contractController = ContractController(contractServices)

ContractRouter.put('/:id', contractController.updateContract);

module.exports = { ContractRouter };