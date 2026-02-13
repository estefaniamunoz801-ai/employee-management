const { Employee } = require('../models')
// Implement ICommonRepository interface from Business Layer
// Implement DuplicateEntityException exception from Utils

class EmployeeRepository extends ICommonRepository {

    async getAll() {
        try {
            return await Employee.findAndCountAll();
        }
        catch(error){
            throw new Error('Error getting all employees in database: ' + error.message)
        }
    };

    async get(numDni) {
        try {
            return await Employee.findOne({ where: {dni: numDni} });
        } 
        catch (error) {
            throw new Error('Error getting employee in database: ' + error.message)
        }
    };

    async add(entity) {
        try {
            const exists = await Employee.findOne({ where: {dni: entity.dni} });
            if(exists) {
                throw new DuplicateEntityException();  //
            }
            return await Employee.create(entity)
        }
        catch (error) {
            throw new Error('Error adding employee in database: ' + error.message)
        }
    };

    async edit(entity) {
        try {
            const employee = await Employee.findOne({ where: {dni: entity.dni} });
            if(!employee) {
                throw new Error("Employee not found")
            }
            await employee.update(entity);
            return employee;
        } 
        catch (error) {
            throw new Error("Error updating employee in database: " + error.message)
        }
    };

    async remove(numDni) {
        try {
            const employee = await Employee.findOne({ where: {dni: numDni} });
            if(!employee) {
                throw new Error("Employee not found")
            }
            return await employee.destroy();
        } 
        catch (error) {
            throw new Error("Error removing employee in database: " + error.message)
        }
    };
}

module.exports = { EmployeeRepository };