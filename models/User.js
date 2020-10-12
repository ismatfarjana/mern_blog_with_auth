// Pull in our required dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Schema to represent a User, defining fields and types as objects of the Schema
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  password2: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Export the model so we can access it outside of this file
module.exports = User = mongoose.model("users", UserSchema);
