const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const produitServiceSchema = new mongoose.Schema({
    produit_id : { type: Schema.Types.ObjectId, ref: 'Produit' },
    service_id:{ type: Schema.Types.ObjectId, ref: 'Service' },
});
module.exports = mongoose.model('ProduitService', produitServiceSchema);
