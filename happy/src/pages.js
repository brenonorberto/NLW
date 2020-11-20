const orphanages = require('./database/fakedata.js');

module.exports = {

    index(require, response) {
        return response.render('index')
    },

    orphanage(require, response) {
        return response.render('orphanage')
    },

    orphanages(require, response) {
        return response.render('orphanages', { orphanages })
    },

    createOrphanage(require, response) {
        return response.render('create-orphanage')
    }

}