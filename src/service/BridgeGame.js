const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');
const { BRIDGE } = require('../constants');

class BridgeGame {
  #bridge;

  #nextCellIndex;

  #bridgeMap;

  #fail;

  #triedCount;

  constructor() {
    this.#triedCount = 1;
    this.#initGameProcess();
  }

  #initGameProcess() {
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
      this.#bridgeMap.U.push(BRIDGE.FAIL);
      this.#bridgeMap.D.push(BRIDGE.OTHER);
      return;
    }
    this.#bridgeMap.U.push(BRIDGE.OK);
    this.#bridgeMap.D.push(BRIDGE.OTHER);
    this.#nextCellIndex += 1;
  }

  #moveDown() {
    if (this.#fail) {
      this.#bridgeMap.D.push(BRIDGE.FAIL);
      this.#bridgeMap.U.push(BRIDGE.OTHER);
      return;
    }
    this.#bridgeMap.D.push(BRIDGE.OK);
    this.#bridgeMap.U.push(BRIDGE.OTHER);
    this.#nextCellIndex += 1;
  }

  retry() {
    this.#initGameProcess();
    this.#triedCount += 1;
  }

  checkUserWin() {
    return this.#nextCellIndex === this.#bridge.length;
  }

  getResultInfo() {
    return {
      bridgeMap: this.#bridgeMap,
      isCleared: !this.#fail,
      triedCount: this.#triedCount,
    };
  }
}

module.exports = BridgeGame;
