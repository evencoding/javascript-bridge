const Validator = require('../src/Validator');

const { ERROR_MESSAGE } = require('../src/constants');

test.each([
  ['2', ERROR_MESSAGE.SIZE_RANGE],
  ['21', ERROR_MESSAGE.SIZE_RANGE],
  ['03', ERROR_MESSAGE.SIZE],
])('다리 사이즈 유효성 검사 테스트', (size, expect) => {
  expect(Validator.getErrorMessageIfInvalidBridgeSize(size)).toBe(expect);
});

test.each([
  ['U', ''],
  ['D', ''],
  ['A', ERROR_MESSAGE.DIRECTION],
])('방향 유효성 검사 테스트', (direction, expect) => {
  expect(Validator.getErrorMessageIfInvalidDirection(direction)).toBe(expect);
});

test.each([
  ['R', ''],
  ['Q', ''],
  ['A', ERROR_MESSAGE.COMMAND],
])('재시작 커맨드 유효성 검사 테스트', (command, expect) => {
  expect(Validator.getErrorMessageIfInvalidCommand(command)).toBe(expect);
});
