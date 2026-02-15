class IContractServices {

    async updateContract(contract) {
        throw new Error('Method "updateContract" must be implemented');
    }
}

module.exports = { IContractServices };