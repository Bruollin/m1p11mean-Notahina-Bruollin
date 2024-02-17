const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: String,
    duration: Number,
    price: Number,
    commission_pourcentage: Number,
    date_insertion: { type: Date, default: Date.now },
    etat: { type: Boolean, default: true },
});

serviceSchema.pre('save', async function (next) {
    if (!this.id) {
        const lastService = await Service.findOne({}, {}, { sort: { 'id': -1 } });
        this.id = (lastService && lastService.id + 1) || 1;
    }
    next();
});

module.exports = mongoose.model('Service', serviceSchema);
