//Pull in our required dependencies (namely express, mongoose and bodyParser)
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expresshandlebars = require("express-handlebars");
require("dotenv").config();

// Initialize our app using express()
const app = express();

// Apply the middleware function for bodyparser so we can use it
//Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//express-handlebars
app.engine("handlebars", expresshandlebars());
app.set("view engine", "handlebars");

// Pull in our MongoURI from our keys.js file and connect to our MongoDB database
const db = process.env.ATLAS_URI;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log("--------------- Connected to DB! 🛢️ ---✌️ -----------")
  )
  .catch(err => console.log(`Error: 👻  ${err} `));

//routes
app.get("/", (req, res) => {
  res.send(
    "welcome to 9090. here we are building a blog website with authentication"
  );
});

// Set the port for our server to run on and have our app listen on this port
const port = process.env.PORT || 9090; //process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () =>
  console.log(`🎉 🎉 🎉 Server is up and running on port ${port}! 🎉 🎉 🎉`)
);
