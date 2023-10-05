function solution(participant, completion) {
  var answer = '';

 const completionObj = {};

  for (let i = 0; i < completion.length; i++) {
    completionObj[completion[i]] = completionObj[completion[i]] ? completionObj[completion[i]] + 1 : 1;
  }

  for (let i = 0; i < participant.length; i++) {
    if (completionObj[participant[i]]) {
      completionObj[participant[i]]--;
    } else {
      answer = participant[i];
      console.log(participant[i])
      break;
    }
  }

  console.log(answer, 'ddd');

  return answer;
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);