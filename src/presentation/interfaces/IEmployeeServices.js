class IEmployeeServices {

    async registerEmployee(employee) {
        throw new Error('Method "registerEmployee" must be implemented');
    }

    async getEmployee(dni) {
        throw new Error('Method "getEmployee" must be implemented');
    }

    async updateEmployee(employee) {
        throw new Error('Method "updateEmployee" must be implemented');
    }
}

module.exports = { IEmployeeServices };