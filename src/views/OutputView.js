const { Console } = require('@woowacourse/mission-utils');

const { MESSAGE, ERROR_FORM } = require('../constants');

const OutputView = {
  printGameStartMessage() {
    Console.print(MESSAGE.GAME_START);
  },

  printMap(map) {
    const rows = Object.values(map);
    rows.forEach((row) => {
      Console.print(MESSAGE.mapOfRow(row));
    });
  },

  printResult({ bridgeMap, isCleared, triedCount }) {
    Console.print(MESSAGE.RESULT);
    this.printMap(bridgeMap);

    Console.print(MESSAGE.clear(isCleared));
    Console.print(MESSAGE.tryCount(triedCount));
  },

  printErrorMessage(message) {
    Console.print(`${ERROR_FORM}${message}`);
  },
};

module.exports = OutputView;
