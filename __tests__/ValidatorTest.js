test('getErrorMessageIfInvalidBridgeSize 테스트', () => {
  const Validator = require('../src/Validator');
  const errorMessage = Validator.getErrorMessageIfInvalidBridgeSize(0);
  expect(errorMessage).toBe(
    '다리의 길이는 0으로 시작하지 않는 정수여야 합니다.'
  );
});

test.each([['2', ERROR], ['21'], ['03']])(
  'getErrorMessageIfInvalidBridgeSize 테스트',
  (size, expect) => {
    const Validator = require('../src/Validator');
    const errorMessage = Validator.getErrorMessageIfInvalidBridgeSize(0);
    expect(errorMessage).toBe(
      '다리의 길이는 0으로 시작하지 않는 정수여야 합니다.'
    );
  }
);
