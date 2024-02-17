const ProduitService = require('../models/produitservice.model');

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
}
module.exports = new ProduitServiceController();
