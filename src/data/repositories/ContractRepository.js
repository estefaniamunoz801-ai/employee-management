const { Contract } = require('../models')
// Implement ICommonRepository interface from Business Layer
// Implement DuplicateEntityException exception from Utils
// Review 'UserEntity' in returns

class ContractRepository extends ICommonRepository {

    async getAll() {
        try {
            return await Contract.findAndCountAll();
        }
        catch(error){
            throw new Error('Error getting all contracts in database: ' + error.message)
        }
    };

    async get(uuid) {
        try {
            const found = await Contract.findOne({ where: {id: uuid} });
            return found ? new UserEntity(found) : null //
        } 
        catch (error) {
            throw new Error('Error getting contract in database: ' + error.message)
        }
    };

    async add(entity) {
        try {
            const entityExists = await Contract.findOne({ where: {id: entity.id} });
            if(entityExists) {
                throw new DuplicateEntityException();  //
            }
            const created = await Contract.create(entity)
            return new UserEntity(created) //
        }
        catch (error) {
            throw new Error('Error adding contract in database: ' + error.message)
        }
    };

    async edit(entity) {
        try {
            const entityExists = await Contract.findOne({ where: {id: entity.id} });
            if(entityExists == null) {
                throw new Error("Contract not found")
            }
            const updated = Contract.update(entity, { where: {id: entity.id} });
            return new UserEntity(updated) //
        } 
        catch (error) {
            throw new Error("Error updating contract in database : " + error.message)
        }
    };

    async remove(uuid) {
        try {
            const entityExists = await Contract.findOne({ where: {id: uuid} });
            if(entityExists == null) {
                throw new Error("Contract not found")
            }
            return await Contract.destroy({ where: {id: uuid} });
        } 
        catch (error) {
            throw new Error("Error removing contract in database: " + error.message)
        }
    };
}

module.exports = { ContractRepository };