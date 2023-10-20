function solution(dartResult) {
  var answer = 0;

  const numArray = [];

  let curNum = 0;
  let numIdx = 0;

  for(let i = 0; i < dartResult.length; i++){
    const str = dartResult[i];
    //i idx 문자열이 숫자인경우
    if(!isNaN(str)){
      if(!isNaN(dartResult[i-1]))  curNum = 10;
      else {
        numArray.push(curNum);
        numIdx++;
        curNum = Number(str);
      }
    }
    //숫자가 아닌 경우
    else if('SDT'.includes(str)){
      if(str === 'S') ;
      if(str === 'D') curNum = curNum ** 2;
      if(str === 'T') curNum = curNum ** 3;
    }
    else {
      if(str === '*'){
        curNum = curNum * 2;
        numArray[numIdx - 1] = numArray[numIdx -1] * 2;
      }
      if(str === "#"){
        curNum = curNum * -1;
      }
    }

    if(i === dartResult.length - 1) numArray.push(curNum);
  }

  numArray.forEach((num) => answer += num);

  console.log(numArray, 'numArray');

  return answer;
}

const result = solution('1S*2T*3S');

console.log(result);