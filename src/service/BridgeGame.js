const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;

  #nextCellIndex;

  #bridgeMap;

  #fail;

  constructor() {
    this.#nextCellIndex = 0;
    this.#bridgeMap = { U: [], D: [] };
    this.#fail = false;
  }

  #directionHandler = {
    U: this.#moveUp.bind(this),
    D: this.#moveDown.bind(this),
  };

  makeBridge(bridgeSize) {
    this.#bridge = makeBridge(bridgeSize, generate);
  }

  move(direction) {
    if (direction !== this.#bridge[this.#nextCellIndex]) {
      this.#fail = true;
    }
    this.#directionHandler[direction]();

    return { curMap: this.#bridgeMap, fail: this.#fail };
  }

  #moveUp() {
    if (this.#fail) {
      this.#bridgeMap.U.push('X');
      this.#bridgeMap.D.push(' ');
      return;
    }
    this.#bridgeMap.U.push('O');
    this.#bridgeMap.D.push(' ');
    this.#nextCellIndex += 1;
  }

  #moveDown() {
    if (this.#fail) {
      this.#bridgeMap.D.push('X');
      this.#bridgeMap.U.push(' ');
      return;
    }
    this.#bridgeMap.D.push('O');
    this.#bridgeMap.U.push(' ');
    this.#nextCellIndex += 1;
  }

  retry() {}
}

module.exports = BridgeGame;
