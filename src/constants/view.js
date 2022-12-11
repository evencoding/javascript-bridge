const { PROCESS, MISSION } = require('.');

const INPUT_MESSAGE = Object.freeze({
  ASK_FUNCTION: `1. 페어 매칭
2. 페어 조회
3. 페어 초기화
Q. 종료\n`,
  ASK_MISSION_INFO: `과정, 레벨, 미션을 선택하세요.
ex) 백엔드, 레벨1, 자동차경주\n`,
});

const MISSION_LIST = Object.entries(MISSION).map(
  ([level, missions]) => `  - ${level}: ${missions.join(' | ')}`
);

const OUTPUT_MESSAGE = Object.freeze({
  MISSION_PROCESS: `\n#############################################
과정: ${PROCESS.BACKEND} | ${PROCESS.FRONTEND}
미션:
  - 레벨1: ${MISSION.레벨1.join(' | ')}
  - 레벨2: ${MISSION.레벨2.join(' | ')}
  - 레벨3: ${MISSION.레벨3.join(' | ')}
  - 레벨4: ${MISSION.레벨4.join(' | ')}
  - 레벨5: ${MISSION.레벨5.join(' | ')}
############################################`,
});

module.exports = {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
};
