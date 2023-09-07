function solution(name, yearning, photo) {
  let answer = new Array(photo.length).fill(0);
  const nameYearning = {};
  name.forEach((n, index) => nameYearning[n] = yearning[index]);
  
  photo.forEach((p,index) => {
      p.forEach((n) => nameYearning[n] ? answer[index] += nameYearning[n] : null);
  })
  
  return answer;
}
