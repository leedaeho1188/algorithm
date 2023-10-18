//계속 틀림... 

// function solution(babbling) {
//   var answer = 0;

//   const wordArray = ["aya", "ye", "woo", "ma"];

//   babbling.forEach((b) => {
//     let babbleWord = b;

//     wordArray.forEach((w) => {
//       let index = b.indexOf(w);
//       while(index !== -1){
//         const babbleIndex = index;
//         babbleWord = babbleWord.slice(0, babbleIndex) + babbleWord.slice(babbleIndex+w.length);
//         index = babbleWord.indexOf(w);

//         if(index === babbleIndex) index = -1;
//       }
//     })

//     if(!babbleWord) answer++;
//   })

//   return answer;
// }

// replace를 사용 풀이

function solution(babbling) {
  var answer = 0;

  let babbleArray = babbling.map((word) => word.replace(/aya/g,'A').replace(/ye/g,'B').replace(/woo/g,'C').replace(/ma/g,'D'));

  babbleArray = babbleArray.filter((word) => {
    const excludeArray = word.match(/[a-z]/g);
    if(excludeArray) return false;
    else return true;
  })

  babbleArray.forEach((word) => {
    if(word){
      let prevWord = word[0];

      if(word.length === 1) answer++;

      for(let i = 1; i < word.length; i++){
        if(prevWord === word[i]){
          return;
        } 
        
        if(i === word.length-1){
          answer++;
          return;
        }else {
          prevWord = word[i];
          continue;
        }
      }
    }
  })

  return answer;

}

const answer = solution(["aya", "yee", "u"]);

console.log(answer);