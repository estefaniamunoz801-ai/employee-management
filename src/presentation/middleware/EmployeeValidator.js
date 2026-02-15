const { body, validationResult } = require("express-validator");

const validateNewEmployee = [
  body("dni")
    .notEmpty()
    .withMessage("DNI is required")
    .isLength({ min: 8, max: 10 })
    .withMessage("DNI must be between 8 and 10 characters"),

  body("fullName")
    .notEmpty()
    .withMessage("Full name is required"),

  body("age")
    .notEmpty()
    .withMessage("Age is required")
    .isInt({ min: 18 })
    .withMessage("Age must be greater than 17"),

  body("gender")
    .notEmpty()
    .withMessage("Gender is required"),

  body("phone")
    .notEmpty()
    .withMessage("Phone is required"),

  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Must be a valid email"),

  body("employeeState")
    .notEmpty()
    .withMessage("Employee state is required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: "Validation failed",
        details: errors.array().map(err => err.msg)
      });
    }
    next();
  },
];


module.exports = {
  validateNewEmployee
};