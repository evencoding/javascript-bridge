const { Console } = require('@woowacourse/mission-utils');

const BridgeGame = require('../service/BridgeGame');

const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

const Validator = require('../Validator');
const { ERROR_TYPE } = require('../constants');

class BridgeController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

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
    this.#handleError(errorMessage, ERROR_TYPE.SIZE);

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
    this.#handleError(errorMessage, ERROR_TYPE.DIRECTION);

    this.#handleDirection(direction);
  }

  #handleDirection(direction) {
    const { curMap, fail } = this.#bridgeGame.move(direction);
    this.#printCurMap(curMap);

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
    this.#handleError(errorMessage, ERROR_TYPE.COMMAND);

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
    if (message) {
      OutputView.printErrorMessage(message);
      this.#errorHandler[type]();
    }
  }
}

module.exports = BridgeController;
