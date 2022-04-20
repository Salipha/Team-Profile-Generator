const Trainee = require("../lib/Trainee");

describe("Trainee Class", () => {
  describe("Initialization", () => {
    it("Should create an object with an id and name", () => {
      const trainee = new Trainee(123, "ruth");

      expect(trainee.id).toEqual(123);
      expect(trainee.name).toEqual("ruth");
    });
  });
});
