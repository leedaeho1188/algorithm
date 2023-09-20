function solution(numbers, hand) {
  const answer = [];

  const leftNumbers = [1,4,7];
  const rightNumbers = [3,6,9];
  const middleNumbers = [2,5,8,0];

  let leftHand = [0,3];
  let rightHand = [2,3];
  
  numbers.forEach((ele) => {
    if(leftNumbers.includes(ele)) {
      answer.push('L');
      leftHand = [0, leftNumbers.indexOf(ele)];
    }
    if(rightNumbers.includes(ele)) {
      answer.push('R');
      rightHand = [2, rightNumbers.indexOf(ele)];
    }
    if(middleNumbers.includes(ele)){
      const middleIndex = [1, middleNumbers.indexOf(ele)];
      const leftDistance = Math.abs(leftHand[0] - middleIndex[0]) + Math.abs(leftHand[1] - middleIndex[1]);
      const rightDistance = Math.abs(rightHand[0] - middleIndex[0]) + Math.abs(rightHand[1] - middleIndex[1]);
      if(leftDistance < rightDistance) {
        answer.push('L');
        leftHand = middleIndex;
      } else if(leftDistance > rightDistance) {
        answer.push('R');
        rightHand = middleIndex;
      } else {
        if(hand === 'left') {
          answer.push('L');
          leftHand = middleIndex;
        } else {
          answer.push('R');
          rightHand = middleIndex;
        }
      }
      
    }
  })

  return answer.join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"))