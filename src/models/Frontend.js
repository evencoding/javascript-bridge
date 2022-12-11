const { Random } = require('@woowacourse/mission-utils');

const { frontCrews } = require('../utils/readFile');

class Frontend {
  #crews;
  #levels;

  constructor() {
    this.#crews = frontCrews;
    this.#levels = {};
  }

  setMatchingData([process, level, mission]) {
    const suffledCrews = this.#suffleCrews();
    this.#levels[level][mission] = suffledCrews;
  }

  #suffleCrews() {
    return Random.shuffle(this.#crews);
  }

  getMatchingData(level, mission) {
    return this.#levels[level][mission];
  }
}

module.exports = Frontend;
