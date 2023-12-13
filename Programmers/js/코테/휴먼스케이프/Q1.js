function solution1(arrA, arrB) {
  var answer = false;
    
    const arrAnswer = [...arrA];

    for(let i = 0; i < arrAnswer.length; i++){
      console.log(arrAnswer, 'arrAnswer');
      if(arrAnswer.join(',') === arrB.join(',')) return answer = true;
      
      const lastEle = arrAnswer.pop();
      arrAnswer.unshift(lastEle);
    }

    return answer;
}

const theAnswer = solution1([7, 8, 10], [10, 7, 8]);

console.log(theAnswer, 'theAnswer');


function solution2(movie) {
  const answer = [];
  const movieObject = {};

  for(let i = 0; i < movie.length; i++){
      if(!movieObject[movie[i]]) movieObject[movie[i]] = 1;
      else movieObject[movie[i]]++;
  }

  for (const [key, value] of Object.entries(movieObject)) {
    answer.push({key, value});
  }

  answer.sort((a,b) => {
    if(a.value === b.value) return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
    return b.value - a.value;
  });

  return answer.map((obj) => obj.key);
}

console.log(solution2(["spy", "ray", "spy", "room", "once", "ray", "spy", "once"]))

function solution3(sentence) { 
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabet.split('');
  const alphabetObject = {};
  const answer = [];

  for(let i = 0; i < alphabetArray.length; i++){
    alphabetObject[alphabetArray[i]] = 0;
  }

  for(let i = 0; i < sentence.length; i++){
    const argument = sentence[i].toLowerCase();
    for(let j = 0; j < argument.length; j++){
      const argumentEle = argument[j];
      if(alphabetObject[argumentEle] !== undefined) alphabetObject[argumentEle]++;
    }
  }

  for (const [key, value] of Object.entries(alphabetObject)) {
    if(value === 0) answer.push(key);
  }

  return answer;
}