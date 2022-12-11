const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('../constants/view');

const InputView = {
  askSelectFn(callback) {
    Console.readLine(INPUT_MESSAGE.ASK_FUNCTION, callback);
  },
};

module.exports = InputView;
