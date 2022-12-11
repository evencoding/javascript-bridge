const Validator = {
  throwErrorIfInvalidCommand(command) {
    const regex = /^(1|2|3|Q)$/;
    if (!regex.test(command)) throw new Error('올바른 명령어를 입력해주세요.');
  },
};

module.exports = Validator;
