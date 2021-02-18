const db = require("../../data/db-config.js");

module.exports = {

    findSteps(id) {
        return db("schemes as sch")
            .join("steps as stp", "stp.scheme_id", "sch.id")
            .select("sch.scheme_name as Scheme", "stp.scheme_id as SchemeId", "stp.step_number as StepNumber", "stp.instructions as Instructions")
            .where("sch.id", id);
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