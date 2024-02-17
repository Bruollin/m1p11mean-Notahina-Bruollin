const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produitSchema = new mongoose.Schema({
    nanomme : String,
    description : String,
    prix : Number,
    fournisseur : String,
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Boolean, default: true },
});


module.exports = mongoose.model('Produit', produitSchema);
