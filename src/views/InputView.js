const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../constant/index');
const GameController = require('../GameController');
const Validator = require('../Validator');

const InputView = {
  controller: new GameController(),

  readBridgeSize() {
    Console.readLine(MESSAGE.ASK_BRIDGE_SIZE, (size) => {
      this.sizeCallback(size);
    });
  },

  sizeCallback(size) {
    try {
      Validator.sizeValidityCheck(size);
      this.controller.handleSize(size);
      this.readMoving();
    } catch ({ message }) {
      this.controller.print(message);
      this.readBridgeSize();
    }
  },

  readMoving() {
    Console.readLine(MESSAGE.ASK_SELECT_MOVE_POINT, (direction) => {
      this.moveCallback(direction);
    });
  },

  moveCallback(direction) {
    try {
      Validator.directionValidityCheck(direction);
      const success = this.controller.handleDirection(direction);
      success ? this.doseUserWin() : this.readGameCommand();
    } catch ({ message }) {
      this.controller.print(message);
      this.readMoving();
    }
  },

  doseUserWin() {
    const userWin = this.controller.doseUserWin();
    userWin ? this.controller.gameOver(userWin) : this.readMoving();
  },

  readGameCommand() {
    Console.readLine(MESSAGE.ASK_RETRY, (command) => {
      this.commandCallback(command);
    });
  },

  commandCallback(command) {
    try {
      const sholudRetry = this.controller.handleCommand(command);
      if (sholudRetry) {
        this.controller.retry();
        this.readMoving();
      } else {
        this.controller.gameOver();
      }
    } catch ({ message }) {
      this.controller.print(message);
      this.readGameCommand();
    }
  },

  // catchHandler(message, type) {
  //   OutputView.printMessage(message);
  //   if (type === 'size') this.readBridgeSize();
  //   if (type === 'direction') this.readMoving();
  //   if (type === 'command') this.readGameCommand();
  // },
};

module.exports = InputView;
