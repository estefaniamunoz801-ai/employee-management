class ICommonRepository {

  async getAll() {
    throw new Error('Method "getAll" must be implemented');
  }

  async get(id) {
    throw new Error('Method "get" must be implemented');
  }

  async add(entity) {
    throw new Error('Method "add" must be implemented');
  }

  async update(entity) {
    throw new Error('Method "update" must be implemented');
  }

  async delete(id) {
    throw new Error('Method "delete" must be implemented');
  }
}

module.exports = { ICommonRepository };