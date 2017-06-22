const expect = require("chai").expect;
const starwars = require("./index");

describe("starwars-names-generator", () => {
  describe("all", () => {
    it("should be an array of strings", () => {
      const isArrayOfStrings = array => {
        return array.every(function(item) {
          return typeof item === "string";
        });
      };

      expect(starwars.all).to.satisfy(isArrayOfStrings);
    });

    it('should contain "Luke Skywalker"', () => {
      expect(starwars.all).to.include("Luke Skywalker");
    });

  });

  describe('random', () => {
    it('should return a random item from the starwars.all', () => {
      const randomItem = starwars.random();
      expect(starwars.all).to.include(randomItem);
    });
    it('should return an array of random items if passes a number', () => {
      let randomItems = starwars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(starwars.all).to.include(item);
      });
    });
  });
});
