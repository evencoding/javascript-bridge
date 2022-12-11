const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printError(message) {
    Console.print(`[ERROR] ${message}`);
  },

  printSelectFn() {
    Console.print('기능을 선택하세요.');
  },
};

module.exports = OutputView;
