function solution(s) {
  let answer = 0;
  let words = s;
  let firstLetter = '';
  let firstLetterCnt = 0;
  let otherLetterCnt = 0;

  for(let i = 0; i < words.length; i++){
    if(!firstLetter){
      answer++;
      firstLetter = words[i];
      firstLetterCnt++;
      continue;
    }else {
      if(firstLetter === words[i]){
        firstLetterCnt++;
      }else {
        otherLetterCnt++;
        if(otherLetterCnt === firstLetterCnt) {
          firstLetter = '';
          firstLetterCnt = 0;
          otherLetterCnt = 0;
        }
      }
    }
  }

  return answer;
}