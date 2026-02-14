class DuplicateEntityException extends Error {
    constructor(message = "Entity already exists") {
        super(message);
        this.name = "DuplicateEntityException";
        this.statusCode = 409;
    }
}
module.exports = { DuplicateEntityException };
