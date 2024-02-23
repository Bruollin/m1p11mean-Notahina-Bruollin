const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const depenseSchema = new mongoose.Schema({
    designation: String,
    prix: String,
    date_insertion: Date,
});

module.exports = mongoose.model('depense', depenseSchema);
