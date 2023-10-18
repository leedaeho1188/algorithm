function solution(X, Y) {
  let answer = '';

  const xObj = {};
  const yObj = {};

  const xArray = X.split('');
  const yArray = Y.split('');

  xArray.forEach(num => xObj[num] = xObj[num] ? xObj[num] + 1 : 1);
  yArray.forEach(num => yObj[num] = yObj[num] ? yObj[num] + 1 : 1);


  for(const [key, value] of Object.entries(xObj)){
    if(yObj[key]){
      if(value < yObj[key]){
        answer += key.repeat(value);
      }else{
        answer += key.repeat(yObj[key]);
      }
    }
  }

  answer = answer === '' ? "-1" : answer.split('').sort((a, b) => b - a).join('');
  answer = answer[0] === '0' ? '0' : answer;
}