function solution(files) {
  var answer = [...files];

  answer.sort((a,b) => {
    
    const splitA = getHeadNumberTail(a);
    const splitB = getHeadNumberTail(b);

    // console.log(splitA, 'splitA');
    // console.log(splitB, 'splitB');

    if(splitA.head > splitB.head) return 1;
    else if(splitA.head < splitB.head) return -1;
    else {
      if(splitA.number !== splitB.number) return splitA.number - splitB.number;
      else return 0;
    }

  })

  return answer;
}

const getHeadNumberTail = (string) => {
  let firstNumIdx;
  let lastNumIdx;

  for(let i = 0; i < string.length; i++){
    //string[i]가 문자이거나 빈 값인 경우
    //빈문자열과 빈공백이 다르다는것 명심!!
    if(isNaN(string[i]) || string[i] === " "){
      if(firstNumIdx) {
        lastNumIdx = i - 1;
        break;
      }
    } 
    //string[i]가 숫자인경우
    else {
      if(!firstNumIdx) {
        firstNumIdx = i;
        if(i === string.length -1){
          lastNumIdx = i;
          break;
        }
      }
      else {
        if(i - firstNumIdx === 4){
          lastNumIdx = i;
          break;
        }
        if(i === string.length -1){
          lastNumIdx = i;
          break;
        }
      }
    }
  }

  const head = string.slice(0, firstNumIdx).toLowerCase();
  const number = Number(string.slice(firstNumIdx, lastNumIdx + 1));

  return {head, number};
}

const theAnswer = solution(["F- 500011 Freedom Fighter", "B- 50 Superfortress", "A-1 Thunderbolt II", "F- 500000 Tomcat", "foo 010", 'muzi1', 'muzi001']);

console.log(theAnswer)


