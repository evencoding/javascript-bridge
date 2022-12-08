const BridgeGame = require('../src/service/BridgeGame');
const Bridge = require('../src/models/Bridge');
const { DIRECTION } = require('../src/constants/direction');
const { BRIDGE_SIZE } = require('../src/constants/bridge');

describe('BridgeGame 테스트', () => {
  let bridgeGame;

  beforeEach(() => {
    bridgeGame = new BridgeGame(BRIDGE_SIZE);
  });

  test('BridgeGame 인스턴스 생성', () => {
    expect(bridgeGame).toBeInstanceOf(BridgeGame);
  });

  test('BridgeGame 인스턴스의 move() 메서드는 Bridge 인스턴스의 getUpdatedMap() 메서드를 호출한다.', () => {
    const spy = jest.spyOn(Bridge.prototype, 'getUpdatedMap');

    bridgeGame.move(DIRECTION.RIGHT);

    expect(spy).toHaveBeenCalled();
  });

  test('BridgeGame 인스턴스의 retry() 메서드는 Bridge 인스턴스의 initBridgeInfo() 메서드를 호출한다.', () => {
    const spy = jest.spyOn(Bridge.prototype, 'initBridgeInfo');

    bridgeGame.retry();

    expect(spy).toHaveBeenCalled();
  });

  test('BridgeGame 인스턴스의 checkUserWin() 메서드는 Bridge 인스턴스의 getBridgeInfo() 메서드를 호출한다.', () => {
    const spy = jest.spyOn(Bridge.prototype, 'getBridgeInfo');

    bridgeGame.checkUserWin();

    expect(spy).toHaveBeenCalled();
  });

  test('BridgeGame 인스턴스의 getResultInfo() 메서드는 Bridge 인스턴스의 getBridgeInfo() 메서드를 호출한다.', () => {
    const spy = jest.spyOn(Bridge.prototype, 'getBridgeInfo');

    bridgeGame.getResultInfo();

    expect(spy).toHaveBeenCalled();
  });
});
