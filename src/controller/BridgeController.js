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
  }
}

module.exports = BridgeController;
