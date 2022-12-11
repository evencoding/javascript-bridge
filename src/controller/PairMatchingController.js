const { Console } = require('@woowacourse/mission-utils');

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

  #validateMissionInfo(inputValue) {
    const missionInfos = inputValue.split(', ');
    try {
      Validator.throwErrorIfInvalidMissionInfo(missionInfos);
    } catch ({ message }) {
      OutputView.printError(message);
      return this.#inputMissionInfo();
    }
    this.#checkAlreadyMatched(missionInfos);
  }

  #checkAlreadyMatched(missionInfos) {
    // check
    this.#printResult(missionInfos);
  }

  #printResult(missionInfos) {
    this.#pairMatching.matchCrews(missionInfos);
  }

  #checkPair() {}

  #initPair() {
    this.#pairMatching.initData();
  }

  #exit() {
    Console.close();
  }
}

module.exports = PairMatchingController;
