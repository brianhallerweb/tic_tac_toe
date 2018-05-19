const controller = require("../src/controller.js");
const view = require("../src/view.js");
const board = require("../src/board.js");

describe("controller", () => {
  describe("handleSelectSquare", () => {
    it("should be a function", () => {
      expect(typeof controller.handleSelectSquare).toBe("function");
    });

    it("should call board.selectSquare", () => {
      board.selectSquare = jest.fn();
      view.viewSelectSquare = jest.fn();
      controller.handleSelectSquare();
      expect(board.selectSquare).toHaveBeenCalled();
    });

    it("should call view.viewSelectSquare", () => {
      view.viewSelectSquare = jest.fn();
      controller.handleSelectSquare();
      expect(view.viewSelectSquare).toHaveBeenCalled();
    });

    it("should call board.isWinner", () => {
      board.isWinner = jest.fn();
      controller.handleSelectSquare();
      expect(board.isWinner).toHaveBeenCalled();
    });

    it("should call view.viewWin when a player wins", () => {
      board.isWinner = jest.fn().mockReturnValue(true);
      view.viewWin = jest.fn();
      controller.handleSelectSquare();
      expect(view.viewWin).toHaveBeenCalled();
    });

    it("should call board.changePlayer", () => {
      board.isWinner = jest.fn().mockReturnValue(false);
      board.changePlayer = jest.fn();
      controller.handleSelectSquare();
      expect(board.changePlayer).toHaveBeenCalled();
    });
  });

  describe("handleStartNew", () => {
    it("should be a function", () => {
      expect(typeof controller.handleStartNew).toBe("function");
    });

    it("should call view.viewStartNew", () => {
      view.viewStartNew = jest.fn();
      controller.handleStartNew();
      expect(view.viewStartNew).toHaveBeenCalled();
    });

    it("should reset board.player to 'X'", () => {
      controller.handleStartNew();
      expect(board.player).toBe("X");
    });

    it("should reset board.xBoard to an empty array", () => {
      controller.handleStartNew();
      expect(board.xBoard).toEqual([]);
    });

    it("should reset board.oBoard to an empty array", () => {
      controller.handleStartNew();
      expect(board.oBoard).toEqual([]);
    });
  });
});
