class EmployeeService {
  constructor(commonRepository) {
    //Si no se pasa el repositorio arroja el erorr
    if (!commonRepository) {
      throw new Error("ICommonRepository implementation is required");
    }
    this.repository = commonRepository;
  }

  //Obtener todos
  async getAll() {
    return await this.repository.getAll();
  }

  //Obtener por dni
  async get(dni) {
    if (!dni) {
      throw new Error("DNI is required");
    }

    const employee = await this.repository.get(dni);

    if (!employee) {
      throw new Error("Employee not found");
    }

    return employee;
  }

  //Agregar un empleado
  async add(employeeData) {
    if (!employeeData || !employeeData.dni) {
      throw new Error("Invalid employee data");
    }

    return await this.repository.add(employeeData);
  }

  //Editar un empleado
  async edit(employeeData) {
    if (!employeeData || !employeeData.dni) {
      throw new Error("DNI is required");
    }

    return await this.repository.edit(employeeData);
  }

  //Eliminar un empleado
  async remove(dni) {
    if (!dni) {
      throw new Error("DNI is required");
    }

    return await this.repository.remove(dni);
  }
}

module.exports = EmployeeService;
