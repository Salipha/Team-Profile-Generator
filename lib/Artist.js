const Employee = require('./Employee');

class Artist extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Artist'
    }
}

module.exports = Artist;