const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    num_phone : String,
    address : String,
    gender : String,
    date_insertion: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Utilisateur', userSchema);
