const { BackCrews } = require('../utils/readFile');

class Backend {
  #crews;
  #levels;

  constructor() {
    this.#crews = BackCrews;
    this.#levels = {};
  }
}

module.exports = Backend;
