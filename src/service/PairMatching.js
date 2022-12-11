const Backend = require('../models/Backend');
const Frontend = require('../models/Frontend');

const { PROCESS } = require('../constants');

class PairMatching {
  #frontend;
  #backend;
  #failCount;

  constructor() {
    this.#frontend = new Frontend();
    this.#backend = new Backend();
    this.#failCount = 0;
  }

  matchCrews([process, level, mission]) {
    // this.processSetHandler[process](level, mission);
    let result;
    if (process === PROCESS.FRONTEND) {
      result = this.#frontend.setMatchingData(level, mission);
    }

    return result;
  }

  getMatchingData([process, level, mission = '']) {
    if (process === PROCESS.FRONTEND) {
      this.#frontend.getMatchingData(level, mission);
    }
  }

  initData() {
    this.#frontend.initLevels();
    this.#backend.initLevels();
    this.#failCount = 0;
  }
}

module.exports = PairMatching;
