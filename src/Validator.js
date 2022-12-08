const { ERROR_MESSAGE, BRIDGE, REGEX } = require('./constants');

const Validator = {
  getErrorMessageIfInvalidBridgeSize(bridgeSize) {
    if (!REGEX.SIZE.test(bridgeSize)) return ERROR_MESSAGE.SIZE;
    if (bridgeSize < BRIDGE.MIN_SIZE || bridgeSize > BRIDGE.MAX_SIZE) {
      return ERROR_MESSAGE.SIZE_RANGE;
    }

    return '';
  },

  getErrorMessageIfInvalidDirection(direction) {
    if (!REGEX.DIRECTION.test(direction)) return ERROR_MESSAGE.DIRECTION;

    return '';
  },

  getErrorMessageIfInvalidCommand(command) {
    if (!REGEX.COMMAND.test(command)) return ERROR_MESSAGE.COMMAND;

    return '';
  },
};

module.exports = Validator;
