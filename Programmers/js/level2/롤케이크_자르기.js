function solution(topping) {
  var answer = 0;

  //topping의 길이가 1000000이기 때문에 반복문안에서 O(n) 시간복잡도 로직을 넣으면 안된다.

  const A = new Map();
  const B = new Set();

  for(i of topping){
    value = A.get(i);
    if(A.has(i)) {
      const value = A.get(i)+1;
      A.set(i, value);
    }
    else A.set(i, 1);
  }

  for(i of topping){
    const value = A.get(i)-1;
    A.set(i, value);
    B.add(i);

    if(A.get(i) === 0) A.delete(i);

    if(A.size === B.size) answer++;
  }

  return answer;
}

const theAnswer = solution([1, 2, 1, 3, 1, 4, 1, 2]);