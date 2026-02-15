const express = require("express");
const cors = require("cors");
require('dotenv').config();
// ErrorHandler Middleware
// Validators waiting

const { EmployeeRouter } = require("./routes/EmployeeRoutes");
const { ContractRouter } = require("./routes/ContractRoutes");

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());

app.use('/api/users', EmployeeRouter);
app.use('/api/contracts', ContractRouter);

module.exports = app;