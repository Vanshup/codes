const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    class: String,
    prn: String,
    name: String,
    email: String,
    marks:{
        subject1: Number,
        subject2: Number,
        subject3: Number,
        subject4: Number,
        subject5: Number,
    }
});
module.exports = mongoose.model('Result', resultSchema);