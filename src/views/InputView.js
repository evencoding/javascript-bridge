const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE } = require('./viewConstant');

const InputView = {
  askSelectFn(callback) {
    Console.readLine(INPUT_MESSAGE.ASK_FUNCTION, callback);
  },
};

module.exports = InputView;
