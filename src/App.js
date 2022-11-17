const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { DIRECTION, MESSAGE, ANSWER } = require('./constant');

class App {
  #size;
  #bridge;
  #curPlace;
  #numberOfAttempts;
  #bridgeMap;
  #success;

  constructor() {
    this.init();
    this.#numberOfAttempts = 1;
    this.#success = false;
  }

  init() {
    this.#bridgeMap = { U: [], D: [] };
    this.#curPlace = 0;
  }

  play() {
    this.gameStart();
  }

  gameStart() {
    Console.print('다시 건너기 게임을 시작합니다.\n');
    this.askBridgeSize();
  }

  askBridgeSize() {
    Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      this.#size = Number(size);
      this.makeBridge();
    });
  }

  makeBridge() {
    this.#bridge = BridgeMaker.makeBridge(this.#size, generate);
    this.askMoveDirection();
  }

  askMoveDirection() {
    console.log(this.#bridge);
    Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
      (answer) => {
        this.movePlayer(Number(DIRECTION[answer]));
      }
    );
  }

  movePlayer(direction) {
    const canCross = direction === Number(this.#bridge[this.#curPlace++]);
    if (canCross) {
      this.#bridgeMap[DIRECTION[direction]].push('O');
    } else {
      this.#bridgeMap[DIRECTION[direction]].push('X');
    }
    this.#bridgeMap[DIRECTION[(direction + 1) % 2]].push(' ');
    this.judge(canCross);
  }

  judge(canCross) {
    this.printBridgeMap();
    canCross ? this.isDone() : this.askRetry();
  }

  printBridgeMap() {
    const bridgeMap = Object.values(this.#bridgeMap);
    bridgeMap.forEach((map, idx) =>
      Console.print(`[ ${map.join(' | ')} ]${idx ? '\n' : ''}`)
    );
  }

  isDone() {}

  askRetry() {}
}

const app = new App();
app.play();

module.exports = App;
