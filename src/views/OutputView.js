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

  printAlreadyMatched() {
    Console.print('매칭 정보가 있습니다. 다시 매칭하시겠습니까?');
  },

  printMatchingData(result) {
    Console.print('\n페어 매칭 결과입니다.');
    for (let i = 0; i < result.length; i += 2) {
      if (result.slice(i).length === 3) {
        Console.print(`${result[i]} : ${result[i + 1]} : ${result[i + 2]}`);
      } else Console.print(`${result[i]} : ${result[i + 1]}`);
    }
    Console.print('');
  },
};

module.exports = OutputView;
