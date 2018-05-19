const view = require("../src/view.js");

describe("view", () => {
  describe("viewSelectSquare", () => {
    it("should be a function", () => {
      expect(typeof view.viewSelectSquare).toBe("function");
    });
  });

  describe("viewStartNew", () => {
    it("should be a function", () => {
      expect(typeof view.viewStartNew).toBe("function");
    });
  });

  describe("viewWin", () => {
    it("should be a function", () => {
      expect(typeof view.viewWin).toBe("function");
    });
  });
});
