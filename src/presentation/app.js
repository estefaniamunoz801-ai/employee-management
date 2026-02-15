const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
require('dotenv').config();


const { EmployeeRouter } = require("./routes/EmployeeRoutes");
const { ContractRouter } = require("./routes/ContractRoutes");

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());

app.use('/api/employee', EmployeeRouter); //
app.use('/api/contracts', ContractRouter);
app.use(errorHandler);

module.exports = app;