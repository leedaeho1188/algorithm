function solution(n, m, section) {
  let answer = 1;

  let max = m + section[0];

  section.forEach((ele) => {
    console.log(max);
    if(ele >= max) {
      answer++;
      max = m + ele;
    }
  })

  return answer;
}