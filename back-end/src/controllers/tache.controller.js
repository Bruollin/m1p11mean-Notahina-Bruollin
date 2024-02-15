const Tache = require('../models/tache.model');

class TacheController {
    async ajouterTache(req, res) {
        try {
            const tache = new Tache(req.body);
            await tache.save();
            res.status(201).send(tache);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateTache(req, res) {
        try {
            const tache = await Tache.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(tache);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const tache = await Tache.findById(req.params.id);
            res.status(200).send(tache);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const tache = await Tache.find({});
            res.status(200).send(tache);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findTacheDispo(req, res) {
        try {
            const tache = await tache.find({ etat: true });
            res.status(200).send(tache);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new TacheController();
