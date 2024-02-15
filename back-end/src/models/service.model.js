const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: String,
    duration: Number,
    price: Number,
    commission_pourcentage: Number,
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Boolean, default: true },
    // autres champs
});


module.exports = mongoose.model('Service', serviceSchema);
