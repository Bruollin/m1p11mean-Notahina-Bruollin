const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const rendezSchema = new mongoose.Schema({
    client_id : { type: Schema.Types.ObjectId, ref: 'User' },
    employee_id:{ type: Schema.Types.ObjectId, ref: 'User' },
    service_id: { type: Schema.Types.ObjectId, ref: 'Service' },
    date_insertion: { type: Date, default: Date.now },
    status: String,
    price: Number,
    etat: { type: Boolean, default: true },
    
});


module.exports = mongoose.model('rendezvous', rendezSchema);
