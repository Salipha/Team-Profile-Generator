const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  describe("Initialization", () => {
    it("Should create object with an id and name", () => {
      const employee = new Employee(123, "Ruth");

      expect(employee.id).toEqual(123);
      expect(employee.name).toEqual("Ruth");
    });
  });
});
