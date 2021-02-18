const db = require("../../data/db-config.js");

module.exports = {

    find() {
        return db("schemes");
    },

    findById(id) {
        return db("schemes")
            .where("id", id)
            .first();
    },

    findSteps(id) {
        return db("schemes as sch")
            .join("steps as stp", "stp.scheme_id", "sch.id")
            .where("sch.id", id)
            .select("sch.scheme_name as Scheme", "stp.scheme_id as SchemeId", "stp.step_number as StepNumber", "stp.instructions as Instructions");
    },

    add(scheme) {
        return db("schemes as sch")
            .insert(scheme)
            .then(([id]) => {
                return db('schemes')
                    .where('id', id)
                    .first();
            });
    },

    update(changes, id) {
        const schemeId = id;
        return db("schemes")
            .where("id", id)
            .update(changes)
            .then(() => {
                return db('schemes')
                .where('id', schemeId)
                .first();
            });
    },

    remove(id) {
        return db("schemes")
            .where('id', id)
            .del()
            .then(() => {
                return db('schemes');
            });
    }

};