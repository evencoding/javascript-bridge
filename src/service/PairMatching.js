const Backend = require('../models/Backend');
const Frontend = require('../models/Frontend');

class PairMatching {
  #frontend;
  #backend;
  #failCount;

  constructor() {
    this.#frontend = new Frontend();
    this.#backend = new Backend();
    this.#failCount = 0;
  }

  processHandler = Object.freeze({
    [PROCESS.Frontend]: this.#frontend.setMatchingData.bind(this.#frontend)(
      level,
      mission
    ),
    [PROCESS.Backend]: this.#backend.setMatchingData.bind(this.#backend)(
      level,
      mission
    ),
  });

  matchCrews([process, level, mission]) {
    this.processHandler[process](level, mission);
  }

  initData() {
    this.#frontend.initLevels();
    this.#backend.initLevels();
    this.#failCount = 0;
  }
}

module.exports = PairMatching;
