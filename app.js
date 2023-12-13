const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const { Usuarios } = require('./modulo/tonyPizzaria.js');

const app = express();

app.use((request, response, next) => {
    response.header('Acess-Control-Allow-Origin', '*');
    response.header('Acess-Control-Allow-Methods', 'GET');
    app.use(cors())

    next();
})

app.get('/usuarios', cors(), async function(request, response, next) {

    let usuario = require('./modulo/main.js');
    let Usuarios = usuario.verUsuarios();

    response.json(Usuarios);
    response.status(200);

})

app.get('/categoria', cors(), async function(request, response, next) {

    let categoria = require('./modulo/main.js');
    let Categorias = categoria.verPizzaria();

    response.json(Categorias);
    response.status(200);

})


app.listen('8080', function() {
    console.log('API FUNCIONANDO')
})