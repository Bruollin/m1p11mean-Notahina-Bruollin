const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const managerSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Number}
});

module.exports = mongoose.model('Manager', managerSchema);
