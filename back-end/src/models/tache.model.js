const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new mongoose.Schema({
    employee_id: { type: Schema.Types.ObjectId, ref: 'User' },
    designation : String,
    amount: Number,
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Boolean, default: true },
    // autres champs
});

module.exports = mongoose.model('Tache', taskSchema);
