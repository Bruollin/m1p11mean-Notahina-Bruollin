const Statistique = require('../models/statistique.model');

class StatistiqueController {
    async ajouterStatistique(req, res) {
        try {
            const statistique = new Statistique(req.body);
            await statistique.save();
            res.status(201).send(statistique);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateStatistique(req, res) {
        try {
            const statistique = await Statistique.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(statistique);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const statistique = await Statistique.findById(req.params.id);
            res.status(200).send(statistique);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const statistique = await Statistique.find({});
            res.status(200).send(statistique);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findStatistiqueDispo(req, res) {
        try {
            const statistique = await Statistique.find({ etat: true });
            res.status(200).send(statistique);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new StatistiqueController();
