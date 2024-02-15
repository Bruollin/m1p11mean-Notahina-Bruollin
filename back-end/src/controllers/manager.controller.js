const Manager = require('../models/manager.model');

class ManagerController {
    async ajouterManager(req, res) {
        try {
            const manager = new Manager(req.body);
            await manager.save();
            res.status(201).send(manager);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateManager(req, res) {
        try {
            const manager = await Manager.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(manager);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const manager = await Manager.findById(req.params.id);
            res.status(200).send(manager);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const manager = await Manager.find({});
            res.status(200).send(manager);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findManagerDispo(req, res) {
        try {
            const manager = await Manager.find({ etat: true });
            res.status(200).send(manager);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new ManagerController();
