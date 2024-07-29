const mongoose = require('mongoose');
const { Schema } = mongoose;

const EasyWin = new Schema({
    accountId: { type: Number, default: 0 },
    username: String,
    movesList: String 
});
mongoose.model('easywin', EasyWin);
