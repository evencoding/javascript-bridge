const BRIDGE = Object.freeze({
  MIN_SIZE: 3,
  MAX_SIZE: 20,
  UP: 'U',
  DOWN: 'D',
  OK: 'O',
  FAIL: 'X',
  OTHER: ' ',
});

const MESSAGE = {
  ASK_SIZE: '\n다리의 길이를 입력해주세요.\n',
  ASK_DIRECTION: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  ASK_COMMAND:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  GAME_START: '다리를 건너기 게임을 시작합니다.',
  RESULT: '\n최종 게임 결과',
  clear: (isCleared) => `\n게임 성공 여부: ${isCleared ? '성공' : '실패'}`,
  tryCount: (triedCount) => `총 시도한 횟수: ${triedCount}`,
  mapOfRow: (row) => `[ ${row.join(' | ')} ]`,
};

const ERROR_TYPE = Object.freeze({
  SIZE: 'size',
  DIRECTION: 'direction',
  COMMAND: 'command',
});

const REGEX = Object.freeze({
  SIZE: /^[1-9][0-9]*$/,
  DIRECTION: /^U|D$/,
  COMMAND: /^R|Q$/,
});

const ERROR_MESSAGE = Object.freeze({
  SIZE: '다리의 길이는 0으로 시작하지 않는 정수여야 합니다.',
  SIZE_RANGE: '다리의 길이는 3부터 20 사이의 숫자여야 합니다.',
  DIRECTION: 'U와 D 중 하나의 값을 입력해주세요.',
  COMMAND: 'R과 Q 중 하나의 값을 입력해주세요.',
});

const ERROR_FORM = '[ERROR] ';

module.exports = {
  MESSAGE,
  ERROR_TYPE,
  ERROR_FORM,
  REGEX,
  ERROR_MESSAGE,
  BRIDGE,
};
