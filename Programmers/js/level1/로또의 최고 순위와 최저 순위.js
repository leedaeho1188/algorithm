function solution(lottos, win_nums) {
  var answer = [];

  const rank = [6, 6, 5, 4, 3, 2, 1];

  let zeroCnt = 0;
  let correctCnt = 0;

  lottos.forEach((num) => {
    if(num === 0)zeroCnt++;
    else if(win_nums.includes(num)) correctCnt++;
  })

  answer = [rank[correctCnt + zeroCnt], rank[correctCnt]];

  return answer;
}

const theAnswer = solution([44, 1, 0, 0, 31, 25],	[31, 10, 45, 1, 6, 19])