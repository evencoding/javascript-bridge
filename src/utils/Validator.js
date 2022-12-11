const { MISSION } = require('../constants');
const { REGEX, ERROR_MESSAGE } = require('../constants/validator');

const Validator = {
  throwErrorIfInvalidCommand(command) {
    if (!REGEX.COMMAND.test(command)) throw new Error(ERROR_MESSAGE.COMMAND);
  },

  throwErrorIfInvalidMissionInfo([process, level, mission = '']) {
    if (!REGEX.PROCESS.test(process)) {
      throw new Error(ERROR_MESSAGE.INVALID_PROCESS);
    }
    if (!REGEX.LEVEL.test(level)) throw new Error(ERROR_MESSAGE.INVALID_LEVEL);
    if (!MISSION[level].includes(mission)) {
      throw new Error(ERROR_MESSAGE.INVALID_MISSION);
    }
  },
};

module.exports = Validator;
