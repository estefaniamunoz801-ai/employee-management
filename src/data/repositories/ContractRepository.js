const { Contract } = require('../models')
// Implement ICommonRepository interface from Business Layer
// Implement DuplicateEntityException exception from Utils

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
            return await Contract.findOne({ where: {id: uuid} });
        } 
        catch (error) {
            throw new Error('Error getting contract in database: ' + error.message)
        }
    };

    async add(entity) {
        try {
            const exists = await Contract.findOne({ where: {id: entity.id} });
            if(exists) {
                throw new DuplicateEntityException();  //
            }
            return await Contract.create(entity)
        }
        catch (error) {
            throw new Error('Error adding contract in database: ' + error.message)
        }
    };

    async edit(entity) {
        try {
            const contract = await Contract.findOne({ where: {id: entity.id} });
            if(!contract) {
                throw new Error("Contract not found")
            }
            await contract.update(entity);
            return contract;
        } 
        catch (error) {
            throw new Error("Error updating contract in database : " + error.message)
        }
    };

    async remove(uuid) {
        try {
            const contract = await Contract.findOne({ where: {id: uuid} });
            if(!contract) {
                throw new Error("Contract not found")
            }
            return await contract.destroy();
        } 
        catch (error) {
            throw new Error("Error removing contract in database: " + error.message)
        }
    };
}

module.exports = { ContractRepository };