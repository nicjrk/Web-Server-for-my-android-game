const mongoose = require('mongoose');
const { Schema } = mongoose;

const HardLevel = new Schema({
    accountId: { type: Number, default: 0 },
    username: String,
    movesList: String 
});
mongoose.model('hardlevel', HardLevel);
