const db = require("../../data/db-config.js");

module.exports = {

    find() {
        return db("schemes")
    },

    findById(id) {

    },

    findSteps(id) {

    },

    add(scheme) {

    },

    addStep(step) {

    },

    update(changes, id) {

    },

    remove(id) {

    }

};