const { IEmployeeServices } = require('../../presentation/interfaces/IEmployeeServices')

class EmployeeServices extends IEmployeeServices {

  constructor(repository) {
    super();
    this.repository = repository;
  }

  //Registrar un empleado
  async registerEmployee(employee) {
    if (!employee) {
      throw new Error("Invalid employee data");
    }
    return await this.repository.add(employee);
  }

  //Consultar informacion del empleado (por dni)
  async getEmployee(dni) {
    if (!dni) {
      throw new Error("DNI is required");
    }
    const employee = await this.repository.get(dni);
    if (!employee) {
      throw new Error("Employee not found");
    }
    return employee;
  }

  //Actualizar el estado de un empleado
  async updateEmployee(employee) {
    if (!employee.dni) {
      throw new Error("DNI is required");
    }
    return await this.repository.edit(employee);
  }
}

module.exports = { EmployeeServices };