const Bridge = require('../models/Bridge');

class BridgeGame {
  #bridge;

  #triedCount;

  constructor(bridgeSize) {
    this.#bridge = new Bridge(bridgeSize);
    this.#triedCount = 1;
  }

  move(direction) {
    const { bridgeMap, fail } = this.#bridge.getUpdatedMap(direction);

    return { bridgeMap, fail };
  }

  retry() {
    this.#bridge.initBridgeInfo();
    this.#triedCount += 1;
  }

  checkUserWin() {
    const { nextCellIndex, bridgeLength } = this.#bridge.getBridgeInfo();

    return nextCellIndex === bridgeLength;
  }

  getResultInfo() {
    const { bridgeMap, fail } = this.#bridge.getBridgeInfo();

    return {
      bridgeMap,
      isCleared: !fail,
      triedCount: this.#triedCount,
    };
  }
}

module.exports = BridgeGame;
