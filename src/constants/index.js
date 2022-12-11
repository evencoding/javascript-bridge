const COMMAND = Object.freeze({
  MATCH_PAIR: '1',
  CHECK_PAIR: '2',
  INIT_PAIR: '3',
  EXIT: 'Q',
});

const PROCESS = Object.freeze({
  BACKEND: '백엔드',
  FRONTEND: '프론트엔드',
});

const MISSION = Object.freeze({
  레벨1: ['자동차경주', '로또', '숫자야구게임'],
  레벨2: ['장바구니', '결제', '지하철노선도'],
  레벨3: [],
  레벨4: ['성능개선', '배포'],
  레벨5: [],
});

module.exports = {
  COMMAND,
  PROCESS,
  MISSION,
};
