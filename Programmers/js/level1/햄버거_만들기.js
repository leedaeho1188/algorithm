
// ERROR 시간 초과
// function solution(ingredient) {
//   var answer = 0;
//   let ingredientStr = ingredient.join('');

//   let status = true;

//   while(status) {
//     status = false;
//     const index = ingredientStr.indexOf('1231');
//     if(index !== -1){
//       status = true;
//       answer ++;
//       ingredientStr = ingredientStr.slice(0, index) + ingredientStr.slice(index + 4);
//       console.log(ingredientStr)
//     }
//   }

//   return answer;
// }

function solution(ingredient) {
  var answer = 0;

  const stack = [];

  ingredient.forEach((ele) => {

    stack.push(ele);
    if(stack.length >= 4){
      if(stack.slice(stack.length - 4).join('') === '1231'){
        stack.splice(stack.length - 4, 4);
        answer++;
      }
    }
  });


  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1]))