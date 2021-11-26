const express = require('express');
const cors = require('cors')
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
require('dotenv').config()

//Rotas
const adicionalRoute = require('./routes/adicionalRoute');
const clienteRoute = require('./routes/clienteRoute');
const coreRoute = require('./routes/coreRoute');
const enderecoRoute = require('./routes/enderecoRoute');
const formaPgtoRoute = require('./routes/formaPgtoRoute');
const grupoRoute = require('./routes/grupoRoute');
const index = require('./routes/index');
const menuRoute = require('./routes/menuRoute');
const opcaoRoute = require('./routes/opcaoRoute');
const pedidoRoute = require('./routes/pedidoRoute');
const pedidosProdutosRoute = require('./routes/pedidosProdutosRoute');
const produtoRoute = require('./routes/produtoRoute');


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,   Content-Type, X-Codingpedia, Authorization');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/', index);
app.use('/api/core', coreRoute);
app.use('/api/menu', menuRoute);
app.use('/api/grupo', grupoRoute);
app.use('/api/formaPgto', formaPgtoRoute);
app.use('/api/produto', produtoRoute);
app.use('/api/opcao', opcaoRoute);
app.use('/api/pedido', pedidoRoute);
app.use('/api/pedidosProdutos', pedidosProdutosRoute);
app.use('/api/adicional', adicionalRoute);
app.use('/api/cliente', clienteRoute);
app.use('/api/endereco', enderecoRoute);
app.use('/api/adicional', adicionalRoute);

module.exports = app;