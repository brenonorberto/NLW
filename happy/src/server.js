// Importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js'); 

// iniciando express
const server = express();
server

// utilizar body do require
.use(express.urlencoded({ extended: true }))

// utilizando arquivos estáticos
.use(express.static('public'))

// Configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Ligar Servidor
server.listen(5500) 