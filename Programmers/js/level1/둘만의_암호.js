function solution(s, skip, index) {
  var answer = '';
  const alphabetList = 'abcdefghijklmnopqrstuvwxyz'.split('');

  skip.split('').forEach((ele) => alphabetList.splice(alphabetList.indexOf(ele), 1));

  answer = s.split('').map((ele) => {
    const charIndex = (alphabetList.indexOf(ele) + 1 + index) % (alphabetList.length) === 0 ? alphabetList.length : (alphabetList.indexOf(ele) + 1 + index) % (alphabetList.length);
    return alphabetList[charIndex - 1] ;
  });

  return answer.join('');
}

console.log(solution('aukks', 'wbqd', 5));