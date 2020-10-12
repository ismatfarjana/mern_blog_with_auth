// Pull in validator and is-empty dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");

// Export the function validateLogInput, which takes in data as a parameter (sent from our frontend registration form, which we’ll build in Part 2)
module.exports = function validateLoginInput(data) {
  // Convert all empty fields to an empty string before running validation checks (validator only works with strings)
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // Check for empty fields, valid email formats, password requirements and confirm password equality using validator functions
  //Email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  //passoword chaek
  if (Validator.isEmpty(data.passoword)) {
    errors.password = "Password field is required!";
  }

  // Return our errors object with any and all errors contained as well as an isValid boolean that checks to see if we have any errors
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
