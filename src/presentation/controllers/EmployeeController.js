module.exports = (services) => ({
  registerEmployee: async (req, res, next) => {
    try {
      const employeeData = req.body;
      const newEmployee = await services.registerEmployee(employeeData);
      return res.status(201).json({
        message: "Employee registered successfully",
        data: newEmployee
      });
    }
    catch (error) {
      if (error.name === 'DuplicateUserException') {
        return res.status(409).json({
          message: error.message
        });
      }
      next(error)
    }
  },

  getEmployee: async (req, res, next) => {
    try {
      const dni = req.params.dni;
      const filteredEmployee = await services.getEmployee(dni);
      return res.status(200).json({
        data: filteredEmployee,
        message: 'Employee found successfully',
      });
    }
    catch (error) {
      next(error)
    }
  },

  updateEmployee: async (req, res, next) => {
    try {
      const employeeData = req.body;
      const updatedEmployee = await services.updateEmployee(employeeData);
      return res.status(200).json({
        data: updatedEmployee,
        message: 'Employee STATE updated successfully'
      })
    } catch (error) {
      next(error)
    }
  }
})