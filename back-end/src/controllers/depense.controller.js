const Depense = require('../models/depense.model');

class DepenseController {
    async ajouterDepense(req, res) {
        console.log("kggggggggg");
        try {
            const depense = new Depense(req.body);
            await depense.save();
            res.status(201).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateDepense(req, res) {
        try {
            const depense = await Depense.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const depense = await Depense.findById(req.params.id);
            res.status(200).send(depense);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const depense = await Depense.find({});
            res.status(200).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findDepenseDispo(req, res) {
        try {
            const depense = await Depense.find({ etat: true });
            res.status(200).send(depense);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}

    
module.exports = new DepenseController();
