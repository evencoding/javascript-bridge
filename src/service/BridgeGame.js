const { makeBridge } = require('../BridgeMaker');
const { generate } = require('../BridgeRandomNumberGenerator');

class BridgeGame {
  #bridge;

  makeBridge(bridgeSize) {
    this.#bridge = makeBridge(bridgeSize, generate);
  }

  move() {}

  retry() {}
}

module.exports = BridgeGame;
