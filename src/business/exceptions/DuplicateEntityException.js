class DuplicateEntityException extends Error {
    constructor(message = "Entity already exists") {
        super(message);
        this.name = "DuplicateEntityException";
    }
}
module.exports = DuplicateEntityException;
