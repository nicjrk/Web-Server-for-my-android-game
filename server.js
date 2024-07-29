const express = require('express');
const keys = require('./config/keys.js');
const app = express();
const bodyParser = require('body-parser');


//parse aplication
app.use(bodyParser.urlencoded({extended: false}));

// Setting up DB
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI);

// Setup database models
require('./model/Account');
require('./model/HardLevel');
require('./model/EasyWin');
require('./model/EasyLevel');
require('./model/MediumLevel');
require('./model/HardWin');
require('./model/MediumWin');


//const Account = mongoose.model('accounts');

//Setup the routes
require("./routes/authenticationRoutes")(app);

require("./routes/levelRoutes.js")(app);


app.listen(keys.port, () => {
    console.log("Listening on " + keys.port)
});