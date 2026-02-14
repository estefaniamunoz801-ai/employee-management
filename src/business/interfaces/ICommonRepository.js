class ICommonRepository {

  async getAll() {
    throw new Error('Method "getAll()" must be implemented');
  }

  async get(id) {
    throw new Error('Method "get(id)" must be implemented');
  }

  async add(entity) {
    throw new Error('Method "add(entity)" must be implemented');
  }

  async update(entity) {
    throw new Error('Method "update(entity)" must be implemented');
  }

  async delete(id) {
    throw new Error('Method "delete(id)" must be implemented');
  }
}

module.exports = ICommonRepository;
