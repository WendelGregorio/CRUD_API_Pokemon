const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Olá');
})

module.exports = routes;