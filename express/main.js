import express from 'express';
import path from 'path';
import helmet from 'helmet';
import models from './models'; // const models = require('./models');

const app = express();

// middleware
app.use(helmet());
app.use((req, res, next) => {
    console.log(`Request URL: ${req.url}`);
    next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/product', (req, res) => {
    const products = [
        { id: 1, name: "Pomme", price: 12.90 },
        { id: 2, name: "Cerise", price: 0.99 },
        { id: 3, name: "Poire", price: 5 },
    ];

    res.json(products);
});
app.get('/product/:id', (req, res) => {
    const products = [
        { id: 1, name: "Pomme", price: 12.90 },
        { id: 2, name: "Cerise", price: 0.99 },
        { id: 3, name: "Poire", price: 5 },
        { id: 10, name: "Banane", price: 10 }
    ];

    const id = req.params.id;

    const product = products.find( (p) => {
        return p.id == id;
    });

    if (!product) {
        res.status(404).json({'message': `La ressource n'existe pas`});
        return;
    }

    res.json(product);
});

app.get('/client', async (req, res) => {
    try {
        const clients = await models.Client.findAll();
        res.json(clients);
    } catch(e) {
        res.status(400).json({ message: e.message });
    }
});
app.get('/client/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const client = await models.Client.findByPk(id);

        if(!client) {
            res.status(404).json({'message': `La ressource n'existe pas`});
            return;
        }

        res.json(client);
    } catch(e) {
        res.status(400).json({ message: e.message });
    }
});
app.post('/client', async (req, res) => {
    // const data = { nom: "Doe", prenom: "John", mail: "john.doe@gmail.com" };
    const data = req.body;

    try {
        const client = await models.Client.create( data );
        res.status(201).json(client);
    } catch(e) {
        res.status(400).json({ message: e.message });
    }
});
app.delete('/client/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await models.Client.destroy({ where: { id } }); // { id } = { id: id }

        res.status(204).json();
    } catch(e) {
        res.status(400).json({ message: e.message });
    }
});
app.put('/client/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        await models.Client.update(data, { where: { id } }); // { id } = { id: id }

        res.status(204).json();
    } catch(e) {
        res.status(400).json({ message: e.message });
    }
});

const port = 3200;
app.listen(port, 'localhost', () => {
    console.log(`Personal Node Server is Listening on http://localhost:${port}`);
    console.log('Shutdown Node Server with CTRL + C');
});