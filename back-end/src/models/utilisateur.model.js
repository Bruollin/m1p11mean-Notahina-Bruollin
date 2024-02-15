const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    role: String,
    name: String,
    email: String,
    password: String,
    preferences: Number,
});

module.exports = mongoose.model('Utilisateur', userSchema);
