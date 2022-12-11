const PairMatching = require('../service/PairMatching');

const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

const Validator = require('../utils/Validator');
const { COMMAND } = require('../constants');

class PairMatchingController {
  #pairMatching;

  constructor() {
    this.#pairMatching = new PairMatching();
  }

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

    this.#inputMissionInfo();
  }

  #inputMissionInfo() {
    InputView.askMissionInfo(this.#validateMissionInfo.bind(this));
  }

  #validateMissionInfo(missionInfo) {
    const info = missionInfo.split(', ');
    try {
      Validator.throwErrorIfInvalidMissionInfo(info);
    } catch ({ message }) {
      OutputView.printError(message);
      return this.#inputMissionInfo();
    }
    this.#checkAlreadyMatched(info);
  }

  #checkAlreadyMatched(missionInfo) {
    // check
    // this.#startMatching(missionInfo.split(', '));
  }

  #startMatching() {}

  #checkPair() {}

  #initPair() {}

  #exit() {}
}

module.exports = PairMatchingController;
