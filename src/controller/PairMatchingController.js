const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');
const Validator = require('../utils/Validator');

class PairMatchingController {
  selectFn() {
    OutputView.printSelectFn();
    InputView.askSelectFn(this.#validateCommand.bind(this));
  }

  #validateCommand(command) {
    try {
      Validator.throwErrorIfInvalidCommand(command);
    } catch ({ message }) {
      OutputView.printError(message);
      this.selectFn();
    }
  }

  matchPair() {}

  checkPair() {}

  initPair() {}

  exit() {}
}

module.exports = PairMatchingController;
