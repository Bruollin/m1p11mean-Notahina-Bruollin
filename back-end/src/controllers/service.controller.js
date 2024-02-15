const Service = require('../models/service.model');

class ServiceController {
    async ajouterService(req, res) {
        try {
            const service = new Service(req.body);
            await service.save();
            res.status(201).send(service);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateService(req, res) {
        try {
            const service = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(service);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const service = await Service.findById(req.params.id);
            res.status(200).send(service);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const services = await Service.find({});
            res.status(200).send(services);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findServiceDispo(req, res) {
        try {
            const services = await Service.find({ etat: true });
            res.status(200).send(services);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new ServiceController();
