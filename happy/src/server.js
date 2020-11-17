// Importar dependencia
const express = require('express');
const path = require('path');

// iniciando express
const server = express();
server
// utilizando arquivos estaticos
.use(express.static('public'))

// Criando rota
.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'));
})

// Ligar Servidor
server.listen(5500) 