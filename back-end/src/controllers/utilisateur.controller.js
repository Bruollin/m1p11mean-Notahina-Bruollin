const Utilisateur = require('../models/utilisateur.model');

class UtilisateurController {
    async ajouterUtilisateur(req, res) {
        try {
            const utilisateur = new Utilisateur(req.body);
            await utilisateur.save();
            res.status(201).send(utilisateur);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async updateUtilisateur(req, res) {
        try {
            const utilisateur = await Utilisateur.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.status(200).send(utilisateur);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findById(req, res) {
        try {
            const utilisateur = await Utilisateur.findById(req.params.id);
            res.status(200).send(utilisateur);
        } catch (err) {
            res.status(404).send({ message: err.message });
        }
    }

    async findAll(req, res) {
        try {
            const utilisateurs = await Utilisateur.find({});
            res.status(200).send(utilisateurs);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }

    async findUtilisateurDispo(req, res) {
        try {
            const utilisateurs = await Utilisateur.find({ etat: true });
            res.status(200).send(utilisateurs);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
}
module.exports = new UtilisateurController();
