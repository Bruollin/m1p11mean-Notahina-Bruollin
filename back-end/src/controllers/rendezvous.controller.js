const Rdv = require('../models/rendezvous.model');

class RdvController {
    async ajouterRdv(req, res) {
        try {
            const rdv = new Rdv(req.body);
            await rdv.save();
            res.status(201).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateRdv(req, res) {
        try {
            const rdv = await Rdv.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const rdv = await Rdv.findById(req.params.id);
            res.status(200).send(rdv);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const rdv = await Rdv.find({});
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findRdvDispo(req, res) {
        try {
            const rdv = await Rdv.find({ etat: true });
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new RdvController();
