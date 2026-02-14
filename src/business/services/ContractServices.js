// Implements IContractService from Presentation Layer

class ContractServices extends IContractServices {

    constructor(repository) {
        super();
        this.repository = repository;
    }

    //Registrar la finalizacion del contrato
    async updateContract(contract) {
    if (!contract.id) {
        throw new Error("Contract ID is required");
    }
        return await this.repository.edit(contract);
    }
}

module.exports = { ContractServices };
