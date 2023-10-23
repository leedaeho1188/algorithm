function solution(N, stages) {
  var answer = [];

  const NArray = new Array(N).fill(0).map((_, index) => index + 1);

  //객체 형식으로 완료하지 못한 stage(key) 개수(value)로 정리;
  const stagesObject = {};

  let sortedStages = [...stages].sort();

  //NArray로 각 stage 실패율을 stageObejct에 key(stage) value(실패율) 형태로 저장한다.
  NArray.forEach((stage) => {
    let count = 0;
    sortedStages.forEach((ele) => ele === stage && count++);

    const failRate =  count / sortedStages.length;

    stagesObject[stage] = failRate;
    sortedStages = sortedStages.filter((ele) => ele !== stage);
  })

  NArray.sort((a,b) => stagesObject[b] - stagesObject[a]);

  console.log(NArray, 'NArray');

  return answer;
}

const theAnswer = solution(5, [2, 1, 2, 6, 2, 4, 3, 3])