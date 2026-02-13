const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employee.controller");
const employeeValidator = require("../validators/employee.validator");

router.post(
  "/",
  employeeValidator.createEmployee,
  employeeController.createEmployee
);

module.exports = router;