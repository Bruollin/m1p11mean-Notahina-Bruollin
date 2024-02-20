const ProduitService = require('../models/produitservice.model');
const Produit = require('../models/produit.model');

class ProduitServiceController {
    async ajouterProduitService(req, res) {
        try {
            const produitService = new ProduitService(req.body);
            await produitService.save();
            res.status(201).send(produitService);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateProduitService(req, res) {
        try {
            const produitService = await ProduitService.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(produitService);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const produitService = await ProduitService.findById(req.params.id);
            res.status(200).send(produitService);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const produitService = await ProduitService.find({});
            res.status(200).send(produitService);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findProduitServiceDispo(req, res) {
        try {
            const produitService = await ProduitService.find({ etat: true });
            res.status(200).send(produitService);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async getAllProduit(req, res) { // a partir id service
        try {
            const serviceId = req.params.service_id;
            const produitsServices = await ProduitService.find({ service_id: serviceId });
            if (!produitsServices || produitsServices.length === 0) {
                return res.status(404).send({ message: "Aucun produit trouvé pour cet identifiant de service." });
            }
            const produitsIds = produitsServices.map(produitService => produitService.produit_id);
            const produits = await Produit.find({ _id: { $in: produitsIds } });
            res.status(200).send(produits);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new ProduitServiceController();
