const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  printGameStartMessage() {
    Console.print('다리 건너기 게임을 시작합니다.');
  },

  printMap(map) {
    const rows = Object.values(map);
    rows.forEach((row) => {
      Console.print(`[ ${row.join(' | ')} ]`);
    });
  },

  printResult({ bridgeMap, isCleared, triedCount }) {
    Console.print('\n최종 게임 결과');
    this.printMap(bridgeMap);

    Console.print(`\n게임 성공 여부: ${isCleared ? '성공' : '실패'}`);
    Console.print(`총 시도한 횟수: ${triedCount}`);
  },

  printErrorMessage(message) {
    Console.print(`[ERROR] ${message}`);
  },
};

module.exports = OutputView;
