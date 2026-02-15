const EmployeeRouter = require("express").Router();
const { EmployeeRepository } = require('../../data/repositories/EmployeeRepository')
const { EmployeeServices } = require('../../business/services/EmployeeServices')
const EmployeeController = require("../controllers/EmployeeController");

const employeeRepository = new EmployeeRepository()
const employeeServices = new EmployeeServices(employeeRepository)
const employeeController = EmployeeController(employeeServices)

EmployeeRouter.get('/:dni', employeeController.getEmployee);
EmployeeRouter.post('/', employeeController.registerEmployee);
EmployeeRouter.put('/:dni', employeeController.updateEmployee);

module.exports = { EmployeeRouter };