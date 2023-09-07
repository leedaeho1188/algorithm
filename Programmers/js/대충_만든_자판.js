


function solution(keymap, targets) {
  var answer = [];

  const keymapObj = {};

  keymap.forEach((ele) => {
    for(let i = 0; i < ele.length; i++){
      keymapObj[ele[i]] = keymapObj[ele[i]] <= i + 1 ? keymapObj[ele[i]] : i + 1;
    }
  })

  targets.forEach((ele) => {
    let cnt = 0;
    for(let i = 0; i < ele.length; i++){
      cnt += keymapObj[ele[i]];
    }
    answer.push(cnt ? cnt : -1);
  });

  return answer;
}


console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"]));