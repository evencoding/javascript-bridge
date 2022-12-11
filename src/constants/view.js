const INPUT_MESSAGE = Object.freeze({
  ASK_FUNCTION: `1. 페어 매칭
2. 페어 조회
3. 페어 초기화
Q. 종료\n`,
});

const OUTPUT_MESSAGE = Object.freeze({
  MISSION_PROCESS: `#############################################
과정: 백엔드 | 프론트엔드
미션:
  - 레벨1: 자동차경주 | 로또 | 숫자야구게임
  - 레벨2: 장바구니 | 결제 | 지하철노선도
  - 레벨3: 
  - 레벨4: 성능개선 | 배포
  - 레벨5: 
############################################`,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
};
