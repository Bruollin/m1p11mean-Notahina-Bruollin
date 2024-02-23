const Rdv = require('../models/rendezvous.model');
const Service = require('../models/service.model');
const Utilisateur = require('../models/utilisateur.model');

const employe = require('../models/employe.model');

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
            const rdv = await Rdv.find({}).populate({
                path: 'service_id',
                model: 'Service'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: '-password'
            }).populate({
                path: 'employe_id',
                model: 'employe',
                select: '-password'
            });
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
    async  findAllRdvWithClientId(req, res) {
        try {
            
            const client_id = req.params.client_id;
            const rdv = await Rdv.find({ client_id }).populate({
                path: 'service_id',
                model: 'Service'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: '-password'
            }).populate({
                path: 'employee_id',
                model: 'employe',
                select: '-password'
            });
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async  findRdvByEmployeId(req, res) {
        try {
            const { employe_id } = req.params;

            const rdv = await Rdv.find({ employe_id }).populate({
                path: 'service_id',
                model: 'Service'
            }).populate({
                path: 'client_id',
                model: 'Utilisateur',
                select: '-password'
            }).populate({
                path: 'employe_id',
                model: 'employe',
                select: '-password'
            });
    
            res.status(200).send(rdv);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    
    
}
module.exports = new RdvController();
