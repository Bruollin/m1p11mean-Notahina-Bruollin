const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const statistiqueSchema = new mongoose.Schema({
    employe_id: { type: Schema.Types.ObjectId, ref: 'Employe' },
    temps_moyen_travail: Number,
    reservations_par_jour: Number,//reservation par jour
    reservations_par_mois: Number,//reservation par moi
    chiffre_affaires_jour: Number,
    chiffre_affaires_mois: Number,
    benefice_mois: Number,
    depenses: Number,
    date: Date,
    
});


module.exports = mongoose.model('statistique', statistiqueSchema);
