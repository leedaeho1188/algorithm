function solution(new_id) {
  let answer = new_id;

  answer = answer.toLowerCase();

  answer = answer.replaceAll(/[^a-z0-9._\-]/g, '');

  answer = answer.replaceAll(/[.]{2,}/g, '.');

  answer[0] === '.' ? answer = answer.slice(1) : null;

  answer === '' ? answer = 'a' : null;

  answer.length >= 16 ? answer = answer.slice(0, 15) : null;

  answer[answer.length - 1] === '.' ? answer = answer.slice(0, answer.length - 1) : null;

  answer.length <= 2 ? new Array(3 - answer.length).fill(answer[answer.length - 1]).forEach((ele) => answer += ele) : null;
  

  return answer;
}

console.log(solution("z-+.^."))