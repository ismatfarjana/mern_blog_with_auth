// Pull in validator and is-empty dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");

// Export the function validateRegisterInput, which takes in data as a parameter (sent from our frontend registration form, which we’ll build in Part 2)
module.exports = function validateRegisterInput(data) {
  // Instantiate our errors object
  let errors = {};

  // Convert all empty fields to an empty string before running validation checks (validator only works with strings)
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Check for empty fields, valid email formats, password requirements and confirm password equality using validator functions
  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  // Return our errors object with any and all errors contained as well as an isValid boolean that checks to see if we have any errors

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
