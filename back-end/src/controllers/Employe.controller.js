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

    async findByServiceId(req, res) {
        try {
            const employes = await Employe.find({ service_id: req.params.service_id });
            res.status(200).send(employes);
        } catch (err) {
            res.status(500).send({ message: err.message });
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
    
        try {
            const user = await Employe.findOne({ email, password });
    
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
    
            res.status(200).json({
                message: 'Authentication successful',
                user: {
                    _id: user._id,
                    service_id: user.service_id,
                    firstname : user.firstname,
                    lastname : user.lastname,
                    email: user.email,
                    preferences : user.preferences
                }
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
module.exports = new EmployeController();
