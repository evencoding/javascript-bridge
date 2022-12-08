const Validator = {
  getErrorMessageIfInvalidBridgeSize(bridgeSize) {
    const regex = /^[1-9][0-9]*$/;
    if (!regex.test(bridgeSize)) {
      return '다리의 길이는 0으로 시작하지 않는 정수여야 합니다.';
    }
    if (bridgeSize < 3 || bridgeSize > 20) {
      return '다리의 길이는 3부터 20 사이의 숫자여야 합니다.';
    }

    return '';
  },
};

module.exports = Validator;
