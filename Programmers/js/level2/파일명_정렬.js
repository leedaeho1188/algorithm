function solution(files) {
  var answer = [...files];

  answer.sort((a,b) => {
    
    const splitA = getHeadNumberTail(a);
    const splitB = getHeadNumberTail(b);

    if(splitA.head > splitB.head){
      return 1;
    }
    else if(splitA.head < splitB.head){
      return -1;
    }
    else {
      if(splitA.number !== splitB.number){
        return splitA.number - splitB.number;
      } 
      else {
        return 0;
      }
    }

  })

  return answer;
}

const getHeadNumberTail = (string) => {
  let firstNumIdx;
  let lastNumIdx;

  for(let i = 0; i < string.length; i++){
    if(isNaN(string[i]) || string[i] === ''){
      if(firstNumIdx) {
        lastNumIdx = i - 1;
        break;
      }
    } else {
      if(!firstNumIdx) firstNumIdx = i;
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

const theAnswer = solution(["F-500001 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-500000 Tomcat"]);

console.log(theAnswer)


