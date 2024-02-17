const Produit = require('../models/produit.model');

class ProduitController {
    async ajouterProduit(req, res) {
        try {
            const produit = new Produit(req.body);
            await produit.save();
            res.status(201).send(produit);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateProduit(req, res) {
        try {
            const produit = await Produit.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(produit);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const produit = await produit.findById(req.params.id);
            res.status(200).send(produit);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const produit = await Produit.find({});
            res.status(200).send(produit);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findProduitDispo(req, res) {
        try {
            const poduit = await Produit.find({ etat: true });
            res.status(200).send(produit);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new ProduitController();
