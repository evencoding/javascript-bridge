const BridgeGame = require('../service/BridgeGame');
const Validator = require('../Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  gameStart() {
    this.#noticeGameStart();
    this.#inputBridgeSize();
  }

  #noticeGameStart() {
    OutputView.printGameStartMessage();
  }

  #inputBridgeSize() {
    InputView.readBridgeSize(this.#validateBridgeSize.bind(this));
  }

  #validateBridgeSize(bridgeSize) {
    const errorMessage =
      Validator.getErrorMessageIfInvalidBridgeSize(bridgeSize);
    if (errorMessage) {
      OutputView.printErrorMessage(errorMessage);
      this.#inputBridgeSize();
      return;
    }

    this.#handleBridgeSize(bridgeSize);
  }

  #handleBridgeSize(bridgeSize) {
    this.#bridgeGame.makeBridge(Number(bridgeSize));

    this.#inputDirection();
  }

  #inputDirection() {
    InputView.readMoving(this.#validateDirection.bind(this));
  }

  #validateDirection(direction) {
    const errorMessage = Validator.getErrorMessageIfInvalidDirection(direction);
    if (errorMessage) {
      OutputView.printErrorMessage(errorMessage);
      this.#inputDirection();
      return;
    }

    this.#handleDirection(direction);
  }

  #handleDirection(direction) {
    const { curMap, fail } = this.#bridgeGame.move(direction);
    this.#printCurMap(curMap);

    if (fail) {
      this.#inputRetry();
      return;
    }
    this.#checkUserWin();
  }

  #printCurMap(curMap) {
    OutputView.printMap(curMap);
  }
}

module.exports = BridgeController;
