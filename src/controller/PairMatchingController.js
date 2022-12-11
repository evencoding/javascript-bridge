const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

const Validator = require('../utils/Validator');
const { COMMAND } = require('../constants');

class PairMatchingController {
  commandHandler = Object.freeze({
    [COMMAND.MATCH_PAIR]: this.#matchPair.bind(this),
    [COMMAND.CHECK_PAIR]: this.#checkPair.bind(this),
    [COMMAND.INIT_PAIR]: this.#initPair.bind(this),
    [COMMAND.EXIT]: this.#exit.bind(this),
  });

  selectFn() {
    OutputView.printSelectFn();
    InputView.askSelectFn(this.#validateCommand.bind(this));
  }

  #validateCommand(command) {
    try {
      Validator.throwErrorIfInvalidCommand(command);
    } catch ({ message }) {
      OutputView.printError(message);
      return this.selectFn();
    }
    this.commandHandler[command]();
  }

  #matchPair() {
    OutputView.printMissionProcess();
  }

  #checkPair() {}

  #initPair() {}

  #exit() {}
}

module.exports = PairMatchingController;
