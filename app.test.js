const ticTacToe = require("./app.js");
const board = ticTacToe.board;
const isXWinner = board.isXWinner;
const isOWinner = board.isOWinner;

describe("board", () => {
  describe("isWinner", () => {
    afterEach(() => {
      board.isXWinner = isXWinner;
      board.isOWinner = isOWinner;
      board.player = "X";
    });
    it("should be a function", () => {
      expect(typeof board.isWinner).toBe("function");
    });

    it("should call isXWinner if player is X", () => {
      board.player = "X";
      board.isXWinner = jest.fn();
      board.isWinner();

      expect(board.isXWinner).toHaveBeenCalled();
    });

    it("should call isOWinner if player is O", () => {
      board.player = "O";
      board.isOWinner = jest.fn();
      board.isWinner();
      expect(board.isOWinner).toHaveBeenCalled();
    });
  });

  describe("isXWinner", () => {
    it("should be a function", () => {
      expect(typeof board.isXWinner).toBe("function");
    });

    it("should return true if xBoard contains a winning pattern", () => {
      board.winPatterns.forEach(winningPattern => {
        board.xBoard = winningPattern;
        expect(board.isXWinner()).toBe(true);
      });
    });

    it("should return false if xBoard doesn't contain a winning pattern", () => {
      const losingPatterns = [[1, 2], [0, 1, 3, 5, 7]];
      losingPatterns.forEach(losingPattern => {
        board.xBoard = losingPattern;
        expect(board.isXWinner()).toBe(false);
      });
    });
  });

  describe("isOWinner", () => {
    it("should be a function", () => {
      expect(typeof board.isOWinner).toBe("function");
    });

    it("should return true if oBoard contains a winning pattern", () => {
      board.winPatterns.forEach(winningPattern => {
        board.oBoard = winningPattern;
        expect(board.isOWinner()).toBe(true);
      });
    });

    it("should return false if oBoard doesn't contain a winning pattern", () => {
      const losingPatterns = [[1, 2], [0, 1, 3, 5, 7]];
      losingPatterns.forEach(losingPattern => {
        board.oBoard = losingPattern;
        expect(board.isOWinner()).toBe(false);
      });
    });
  });

  describe("changePlayer", () => {
    it("should be a function", () => {
      expect(typeof board.changePlayer).toBe("function");
    });

    it("should change from player X to player O", () => {
      board.player = "X";
      board.changePlayer();
      expect(board.player).toBe("O");
    });

    it("should change from player O to player X", () => {
      board.player = "O";
      board.changePlayer();
      expect(board.player).toBe("X");
    });
  });

  describe("selectSquare", () => {
    afterEach(() => {
      board.player = "X";
      board.xBoard = [];
      board.oBaord = [];
    });
    it("should be a function", () => {
      expect(typeof board.selectSquare).toBe("function");
    });

    it("should push the index of a square to xBoard", () => {
      board.player = "X";
      board.xBoard = [];
      board.selectSquare(0);
      board.selectSquare(1);
      board.selectSquare(2);
      board.selectSquare(3);
      expect(board.xBoard).toContain(0);
      expect(board.xBoard).toContain(1);
      expect(board.xBoard).toContain(2);
      expect(board.xBoard).toContain(3);
    });

    it("should push the index of a square to oBoard", () => {
      board.player = "O";
      board.oBoard = [];
      board.selectSquare(0);
      board.selectSquare(1);
      board.selectSquare(2);
      board.selectSquare(3);
      expect(board.oBoard).toContain(0);
      expect(board.oBoard).toContain(1);
      expect(board.oBoard).toContain(2);
      expect(board.oBoard).toContain(3);
    });
  });
});
