const { check, oneOf } = require("express-validator");
const handleValidationErrors = require("./handleValidationErrors");

// Regex patterns from the Mongoose model
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const usernameRegex = /^[a-zA-Z0-9_]+$/;
const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

// validateLoginInput is a combination Express middleware that uses the `check`
// middleware to validate the keys in the body of a request to login a user
const validateLoginInput = [
  oneOf(
    [
      check("email")
        .exists({ checkFalsy: true })
        .matches(emailRegex)
        .withMessage("Email is invalid"),
      check("username")
        .exists({ checkFalsy: true })
        .matches(usernameRegex)
        .withMessage("Username is invalid"),
    ],
    "Must provide either an email address or username"
  ),
  check("password")
    .exists({ checkFalsy: true })
    .matches(passwordRegex)
    .withMessage(
      "Password must be at least 8 characters, include at least one number and one special character"
    ),
  handleValidationErrors,
];

module.exports = validateLoginInput;
