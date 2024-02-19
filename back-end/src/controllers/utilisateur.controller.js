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

    async login(req, res) {
        const { email, password } = req.body;
    
        try {
            const user = await Utilisateur.findOne({ email, password });
    
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
    
            res.status(200).json({
                message: 'Authentication successful',
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                }
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
module.exports = new UtilisateurController();
