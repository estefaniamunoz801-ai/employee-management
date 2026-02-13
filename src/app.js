const express = require("express");
const cors = require("cors");

const employeeRoutes = require("./presentation/routes/employee.routes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);

module.exports = app;