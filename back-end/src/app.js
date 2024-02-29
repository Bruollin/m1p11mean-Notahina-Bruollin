const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors()); 
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://noutahiana01:bruollinNouta123@cluster0.5crr7cl.mongodb.net/Cluster0?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connexion à MongoDB établie avec succès');
    })
    .catch((err) => {
        console.error('Erreur de connexion à MongoDB :', err);
    });

// Gestion des événements de connexion
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.on('disconnected', () => {
    console.log('Déconnecté de MongoDB');
});


const serviceRoutes = require('./routes/service.routes');
const utilisateurRoutes = require('./routes/utilisateur.routes');
const tacheRoutes = require('./routes/tache.routes');
const rdvRoutes = require('./routes/rendezvous.routes');
const manager = require('./routes/manager.routes');
const employe = require('./routes/employe.routes');
const produit = require('./routes/produit.routes');
const produitservice = require('./routes/produitservice.routes');
const statistique = require('./routes/statistique.routes');
const depense = require('./routes/depense.routes');
app.use('/services', serviceRoutes);
app.use('/utilisateurs', utilisateurRoutes);
app.use('/taches', tacheRoutes);
app.use('/rendezvous', rdvRoutes);
app.use('/manager', manager);
app.use('/employe', employe);
app.use('/produit', produit);
app.use('/produitservice', produitservice);
app.use('/statistique', statistique);
app.use('/depense', depense);




app.use(express.static(path.join(__dirname, 'front')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
