const Backend = require('../models/Backend');
const Frontend = require('../models/Frontend');

class PairMatching {
  #frontend;
  #backend;

  constructor() {
    this.#frontend = new Frontend();
    this.#backend = new Backend();
  }

  matchCrews([process, level, mission]) {
    console.log(process);
    console.log(level);
    console.log(mission);
  }
}

module.exports = PairMatching;
