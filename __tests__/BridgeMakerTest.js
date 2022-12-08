const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  let generateRandomNumber;

  const mockRandomNumber = (randoms) => {
    generateRandomNumber = jest.fn();
    randoms.reduce((acc, random) => {
      generateRandomNumber.mockReturnValueOnce(random);

      return acc;
    }, generateRandomNumber);
  };

  it('makeBridge 함수는 size에 해당하는 다리 모양을 반환한다.', () => {
    mockRandomNumber([0, 0, 0, 1, 0, 1, 1, 0, 0, 0]);
    const bridge = BridgeMaker.makeBridge(10, generateRandomNumber);

    expect(bridge).toEqual(['D', 'D', 'D', 'U', 'D', 'U', 'U', 'D', 'D', 'D']);
  });
});
