//시간 초과되는 오류가 있음.

// function solution(X, Y) {
//   var answer = '';

//   let Ystring = Y;

//   const commonArray = [];

//   for(let i = 0; i < X.length; i++){
//     const XItem = X[i];
//     const index = Ystring.indexOf(XItem);
//     if(index !== -1){
//       Ystring = Ystring.slice(0, index) + Ystring.slice(index + 1);
//       commonArray.push(XItem);
//     }
//   }

//   commonArray.sort((a, b) => b - a);

//   //ERROR: X, Y가 3000000만자리 수일 수 있기 때문에 생성자 Number는 사용할 수 없다. 

//   const commonNumber = commonArray.length === 0 ? "-1" : commonArray[0] === "0" ? "0" : commonArray.join('');

//   answer = commonNumber;

//   return answer;
// }

//X,Y 각각 객체 형식으로 각 숫자가 몇개가 있는지 구하고 최솟값으로 숫자를 만들어야한다.

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

  return answer;
}

const theAnswer = solution("100", "234500");



