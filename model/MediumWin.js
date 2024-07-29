const mongoose = require('mongoose');
const { Schema } = mongoose;

const MediumWin = new Schema({
    accountId: { type: Number, default: 0 },
    username: String,
    movesList: String 
});
mongoose.model('mediumwin', MediumWin);
