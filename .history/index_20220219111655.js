const express = require("express")
const cors = require("cors");
const path = require("path");
const config = require('./startup/config');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const passport = require("passport");

require('./startup/db')();
require('./startup/logging')();
require('./startup/validations')();

const { loginCheck } = require("./auth/passport");
loginCheck(passport);

app.set("view engine", "ejs");

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'oneboy',
    saveUninitialized: true,
    resave: true
  }));


app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use("/", require("./routes/login"));

const PORT = process.env.PORT || 4111;

app.listen(PORT, console.log("Server has started at port " + PORT));