
/**
 * 매개변수 배열의 요소 값들의 약수를 구한다. 
 * 약수를 구하는 방식은 요소 값의 반을 나누고 그 수보다 작은 값들을 반복문을 돌려서 찾는다.
 * 딱 나누어 떨어지면 최소 공배수 divideNumberArray에 나눈값을 넣는다 만약 이미 같은 값이 배열안에 있다면 넣지 않고 제외한다.
 */

function solution(arr) {
  var answer = 1;
  const numberArray = [...arr];

  for(let i = 0; i < numberArray.length; i++){
    let number = numberArray[i];
    const divideNumbers = new Array(number - 1).fill(0).map((_,idx) => idx+2);  

    for(let j = 0; j < divideNumbers.length; j++){
      const divideNum = divideNumbers[j];
      if(number >= divideNum && number%divideNum === 0){
        number = number/divideNum;
        j--;
        answer *= divideNum;

        for(let k = 0; k < numberArray.length; k++){
          const numberArrayEle = numberArray[k];
          if(numberArrayEle % divideNum === 0){
            numberArray[k] = numberArray[k]/divideNum;
          }
        }
      }
    }
  }

  return answer;
}

const theAnswer = solution([2,6,8,14]);

console.log(theAnswer, 'theAnswer');