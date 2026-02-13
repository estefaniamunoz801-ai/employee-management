exports.createEmployee = async (req, res) => {
  try {
    const employeeData = req.body;

    const newEmployee = await service.add(employeeData);

    return res.status(201).json({
      message: "Employee created successfully",
      data: newEmployee
    });

  } catch (error) {

    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({
        message: "DNI already exists"
      });
    }

    return res.status(500).json({
      message: "Internal server error",
      error: error.message
    });
  }
};