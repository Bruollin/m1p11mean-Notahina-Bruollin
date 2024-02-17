const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rendezSchema = new mongoose.Schema({
    client_id : { type: Schema.Types.ObjectId, ref: 'User' },
    employee_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    service_id: { type: Schema.Types.ObjectId, ref: 'Service' },
    date_rendez_vous:{ type: Date},
    heure_rendez_vous:{ type: String, default: '00:00' },
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Number}, //1-En attente 2-En cours 3-terminer 4-Annuler
    
});

module.exports = mongoose.model('rendezvous', rendezSchema);
