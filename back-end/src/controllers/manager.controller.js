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
    async login(req, res) {
        const { email, password } = req.body;
    
        try {
            const user = await Manager.findOne({ email, password });
    
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
    
            res.status(200).json({
                message: 'Authentication successful',
                user: {
                    _id: user._id,
                    firstname: String,
                    lastname: String,
                    email: String,
                    password: String,
                }
            });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
}
module.exports = new ManagerController();
