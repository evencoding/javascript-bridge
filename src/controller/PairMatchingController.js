const OutputView = require('../views/OutputView');
const InputView = require('../views/InputView');

class PairMatchingController {
  selectFn() {
    OutputView.printSelectFn();
    InputView.askSelectFn(this.#handleCommand.bind(this));
  }

  #handleCommand(command) {
    console.log(command);
  }

  matchPair() {}

  checkPair() {}

  initPair() {}

  exit() {}
}

module.exports = PairMatchingController;
