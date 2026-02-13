const { Employee } = require('../models')
// Implement ICommonRepository interface from Business Layer
// Implement DuplicateEntityException exception from Utils
// Review 'UserEntity' in returns

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
            const found = await Employee.findOne({ where: {dni: numDni} });
            return found ? new UserEntity(found) : null //
        } 
        catch (error) {
            throw new Error('Error getting employee in database: ' + error.message)
        }
    };

    async add(entity) {
        try {
            const entityExists = await Employee.findOne({ where: {dni: entity.dni} });
            if(entityExists) {
                throw new DuplicateEntityException();  //
            }
            const created = await Employee.create(entity)
            return new UserEntity(created) //
        }
        catch (error) {
            throw new Error('Error adding employee in database: ' + error.message)
        }
    };

    async edit(entity) {
        try {
            const entityExists = await Employee.findOne({ where: {dni: entity.dni} });
            if(entityExists == null) {
                throw new Error("Employee not found")
            }
            const updated = Employee.update(entity, { where: {dni: entity.dni} });
            return new UserEntity(updated) //
        } 
        catch (error) {
            throw new Error("Error updating employee in database: " + error.message)
        }
    };

    async remove(numDni) {
        try {
            const entityExists = await Employee.findOne({ where: {dni: numDni} });
            if(entityExists == null) {
                throw new Error("Employee not found")
            }
            return await Employee.destroy({ where: {dni: numDni} });
        } 
        catch (error) {
            throw new Error("Error removing employee in database: " + error.message)
        }
    };
}

module.exports = { EmployeeRepository };