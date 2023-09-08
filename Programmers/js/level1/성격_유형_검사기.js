function solution(survey, choices) {
  var answer = [];

  const indicatorArr = ["RT", "CF", "JM", "AN"];
  const indicatorObj = {
    "R": 0,
    "T": 0,
    "C": 0,
    "F": 0,
    "J": 0,
    "M": 0,
    "A": 0,
    "N": 0,
  }

  survey.forEach((ele, index) => {
    const [first, second] = ele.split('');
    if(choices[index] < 4) indicatorObj[first] = indicatorObj[first] - (choices[index] - 4);
    if(choices[index] > 4) indicatorObj[second] = indicatorObj[second] + (choices[index] - 4);
  })

  indicatorArr.forEach((ele) => {
    const [first, second] = ele.split('');
    if(indicatorObj[first] >= indicatorObj[second]) answer.push(first);
    else answer.push(second);
  });


  return answer.join('');
}

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));