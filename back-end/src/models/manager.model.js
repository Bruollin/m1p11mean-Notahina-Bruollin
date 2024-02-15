const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const managerSchema = new mongoose.Schema({
    manager_id: { type: Schema.Types.ObjectId, ref: 'User' },
    average_work_time: Number,//temps de travail moyen
    reservations_per_day: Number,//reservation par jour
    reservations_per_month: Number,//reservation par moi
    revenue_per_day: Number,
    revenue_per_month: Number,
    profit_per_month: Number,
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Boolean, default: true },
});


module.exports = mongoose.model('Manager', managerSchema);
