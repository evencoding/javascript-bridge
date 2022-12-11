const { Random } = require('@woowacourse/mission-utils');

const { frontCrews } = require('../utils/readFile');

class Frontend {
  #crews;
  #data;

  constructor() {
    this.#crews = frontCrews;
    this.initData();
  }

  initData() {
    this.#data = {
      레벨1: {
        자동차경주: [],
        로또: [],
        숫자야구게임: [],
      },
      레벨2: {
        장바구니: [],
        결제: [],
        지하철노선도: [],
      },
      레벨3: [],
      레벨4: {
        성능개선: [],
        배포: [],
      },
      레벨5: [],
    };
  }

  setMatchingData(level, mission) {
    // const suffledCrews = this.#suffleCrews();
    if (mission) {
      this.#data[level][mission] = this.#crews;
    } else {
      this.#data[level] = this.#crews;
    }

    this.getMatchingData(level, mission);
  }

  #suffleCrews() {
    return Random.shuffle(this.#crews);
  }

  getMatchingData(level, mission) {
    if (mission) {
      return this.#data[level][mission];
    }
    return this.#data[level];
  }
}

module.exports = Frontend;
