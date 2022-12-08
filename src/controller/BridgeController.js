const { Console } = require('@woowacourse/mission-utils');

const BridgeGame = require('../service/BridgeGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../Validator');
const { ERROR_TYPE } = require('../constants');

class BridgeController {
  #bridgeGame;

  #commandHandler = Object.freeze({
    R: this.#gameRetry.bind(this),
    Q: this.#printGameResult.bind(this),
  });

  #errorHandler = Object.freeze({
    size: this.#inputBridgeSize.bind(this),
    direction: this.#inputDirection.bind(this),
    command: this.#inputRetry.bind(this),
  });

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
      this.#handleError(errorMessage, ERROR_TYPE.SIZE);
      return;
    }

    this.#handleBridgeSize(bridgeSize);
  }

  #handleBridgeSize(bridgeSize) {
    this.#bridgeGame = new BridgeGame(bridgeSize);

    this.#inputDirection();
  }

  #inputDirection() {
    InputView.readMoving(this.#validateDirection.bind(this));
  }

  #validateDirection(direction) {
    const errorMessage = Validator.getErrorMessageIfInvalidDirection(direction);
    if (errorMessage) {
      this.#handleError(errorMessage, ERROR_TYPE.DIRECTION);
      return;
    }

    this.#handleDirection(direction);
  }

  #handleDirection(direction) {
    const { bridgeMap, fail } = this.#bridgeGame.move(direction);
    this.#printCurMap(bridgeMap);

    if (fail) {
      this.#inputRetry();
      return;
    }
    this.#checkGameState();
  }

  #printCurMap(curMap) {
    OutputView.printMap(curMap);
  }

  #inputRetry() {
    InputView.readGameCommand(this.#validateGameCommand.bind(this));
  }

  #validateGameCommand(command) {
    const errorMessage = Validator.getErrorMessageIfInvalidCommand(command);
    if (errorMessage) {
      this.#handleError(errorMessage, ERROR_TYPE.COMMAND);
      return;
    }

    this.#commandHandler[command]();
  }

  #checkGameState() {
    const doesUserWin = this.#bridgeGame.checkUserWin();

    if (doesUserWin) {
      this.#printGameResult();
      return;
    }

    this.#inputDirection();
  }

  #gameRetry() {
    this.#bridgeGame.retry();

    this.#inputDirection();
  }

  #printGameResult() {
    const gameResult = this.#bridgeGame.getResultInfo();

    OutputView.printResult(gameResult);

    this.#gameExit();
  }

  #gameExit() {
    Console.close();
  }

  #handleError(message, type) {
    OutputView.printErrorMessage(message);
    this.#errorHandler[type]();
  }
}

module.exports = BridgeController;
