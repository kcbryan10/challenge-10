const employee = require ("./Employee");

class intern extends employee {
    constructor (name, id, email, school) {
        super (name, id, email);

        this.school= schools;
    }

    getSchool () {
        return this.school;
    }

    getRole () {
        return "intern";
    }
}

module.exports = intern;