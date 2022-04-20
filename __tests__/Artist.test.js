const Artist = require("../lib/Artist");

describe("Artist Class", () => {
  describe("Initialization", () => {
    it("Should create an object with id and name", () => {
      const artist = new Artist(123, "ruth");

      expect(artist.id).toEqual(123);
      expect(artist.name).toEqual("ruth");
    });
  });
});
