const { Console } = require('@woowacourse/mission-utils');

const { MESSAGE } = require('../constants');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine(MESSAGE.ASK_SIZE, callback);
  },

  readMoving(callback) {
    Console.readLine(MESSAGE.ASK_DIRECTION, callback);
  },

  readGameCommand(callback) {
    Console.readLine(MESSAGE.ASK_COMMAND, callback);
  },
};

module.exports = InputView;
