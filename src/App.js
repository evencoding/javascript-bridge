const PairMatchingController = require('./controller/PairMatchingController');

class App {
  #pairMatchingCtrl;

  constructor() {
    this.#pairMatchingCtrl = new PairMatchingController();
  }

  play() {
    this.#pairMatchingCtrl.selectFn();
  }
}

const app = new App();
app.play();

module.exports = App;
