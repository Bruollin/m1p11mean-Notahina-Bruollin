const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const employeSchema = new mongoose.Schema({
    service_id: { type: Schema.Types.ObjectId, ref: 'Service' },
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    preferences : Number,
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Number}
    
});

module.exports = mongoose.model('employe', employeSchema);
