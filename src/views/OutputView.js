const { Console } = require('@woowacourse/mission-utils');
const { OUTPUT_MESSAGE } = require('../constants/view');

const OutputView = {
  printError(message) {
    Console.print(`[ERROR] ${message}`);
  },

  printSelectFn() {
    Console.print('기능을 선택하세요.');
  },

  printMissionProcess() {
    Console.print(OUTPUT_MESSAGE.MISSION_PROCESS);
  },
};

module.exports = OutputView;
