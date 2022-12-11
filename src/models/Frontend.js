const { Random } = require('@woowacourse/mission-utils');

const { frontCrews } = require('../utils/readFile');

class Frontend {
  #crews;
  #levels;

  constructor() {
    this.#crews = frontCrews;
    this.initLevels();
  }

  initLevels() {
    this.#levels = {};
  }

  setMatchingData(level, mission) {
    const suffledCrews = this.#suffleCrews();
    this.#levels[level][mission] = suffledCrews;

    this.getMatchingData(level, mission);
  }

  #suffleCrews() {
    return Random.shuffle(this.#crews);
  }

  getMatchingData(level, mission) {
    return this.#levels[level][mission];
  }
}

module.exports = Frontend;
