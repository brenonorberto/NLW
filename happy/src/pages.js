const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index(require, response) {
        return response.render('index')
    },

    orphanage(require, response) {
        return response.render('orphanage')
    },

    async orphanages(require, response) {
        // Colocar orphanage pelo banco

        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return response.render('orphanages', { orphanages })
        } catch (error) {
            console.log(error)
            return response.send('Erro no banco de dados!')
        }
    },

    createOrphanage(require, response) {
        return response.render('create-orphanage')
    }

}