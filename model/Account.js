const mongoose = require('mongoose');
const { Schema } = mongoose;
const Counter = require('../routes/Counter'); 

const accountSchema = new Schema({
    accountId: { type: Number, default: 0 },
    username: String,
    password: String,
    salt: String,
    lastAuthentication: Date,
});

mongoose.model('accounts', accountSchema);



/*
const mongoose = require('mongoose');
const { Schema } = mongoose;

const accountSchema = new Schema({
    username: String,
    password: String,
    //adminFlag: Number,
    salt: String,

    lastAuthentication: Date,

});

mongoose.model('accounts', accountSchema);
*/
