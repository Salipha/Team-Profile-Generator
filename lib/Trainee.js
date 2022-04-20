const Employee = require("./Employee");

class Trainee extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Trainee";
  }
}

module.exports = Trainee;
