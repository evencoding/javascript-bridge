const { Console } = require('@woowacourse/mission-utils');

const BridgeGame = require('../service/BridgeGame');
const Validator = require('../Validator');
const InputView = require('../views/InputView');
const OutputView = require('../views/OutputView');

class BridgeController {
  #bridgeGame;

  constructor() {
    this.#bridgeGame = new BridgeGame();
  }

  #commandHandler = {
    R: this.#gameRetry.bind(this),
    Q: this.#printGameResult.bind(this),
  };

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
      OutputView.printErrorMessage(errorMessage);
      this.#inputRetry();
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

  #gameRetry() {}

  #printGameResult() {
    const gameResult = this.#bridgeGame.getResultInfo();

    OutputView.printResult(gameResult);

    this.#gameExit();
  }

  #gameExit() {
    Console.close();
  }
}

module.exports = BridgeController;
