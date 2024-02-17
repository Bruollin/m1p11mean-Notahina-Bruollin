const Employe = require('../models/employe.model');

class EmployeController {
    async ajouterEmploye(req, res) {
        try {
            const employe = new Employe(req.body);
            await employe.save();
            res.status(201).send(employe);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateEmploye(req, res) {
        try {
            const employe = await Employe.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(employe);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const employe = await Employe.findById(req.params.id);
            res.status(200).send(employe);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const employe = await Employe.find({});
            res.status(200).send(employe);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findEmployeDispo(req, res) {
        try {
            const employe = await Employe.find({ etat: true });
            res.status(200).send(employe);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new EmployeController();
