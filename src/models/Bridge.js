const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

const { BRIDGE } = require('../constants');

class Bridge {
  #bridge;

  #bridgeMap;

  #nextCellIndex;

  #fail;

  constructor(bridgeSize) {
    this.#bridge = makeBridge(bridgeSize, generate);
    this.initBridgeInfo();
  }

  #directionHandler = {
    U: this.#moveUp.bind(this),
    D: this.#moveDown.bind(this),
  };

  initBridgeInfo() {
    this.#bridgeMap = { U: [], D: [] };
    this.#fail = false;
    this.#nextCellIndex = 0;
  }

  getUpdatedMap(direction) {
    this.#updateMap(direction);

    return this.getBridgeInfo();
  }

  #updateMap(direction) {
    if (direction !== this.#bridge[this.#nextCellIndex]) {
      this.#fail = true;
    }

    this.#directionHandler[direction]();
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

  getBridgeInfo() {
    return {
      bridgeMap: this.#bridgeMap,
      fail: this.#fail,
      nextCellIndex: this.#nextCellIndex,
      bridgeLength: this.#bridge.length,
    };
  }
}

module.exports = Bridge;
