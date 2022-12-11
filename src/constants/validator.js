const REGEX = Object.freeze({
  COMMAND: /^(1|2|3|Q)$/,
  PROCESS: /^(백엔드|프론트엔드)$/,
  LEVEL: /^(레벨[1-5])$/,
});

const ERROR_MESSAGE = Object.freeze({
  INVALID_COMMAND: '유효하지 않은 명령입니다.',
  INVALID_PROCESS: '유효하지 않은 프로세스입니다.',
  INVALID_LEVEL: '유효하지 않은 레벨입니다.',
  INVALID_MISSION: '유효하지 않은 미션입니다.',
});

module.exports = {
  REGEX,
  ERROR_MESSAGE,
};
