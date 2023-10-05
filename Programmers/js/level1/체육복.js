function solution(n, lost, reserve) {
  var answer = n;

  const lostArray = lost.sort();

  const reserveArray = [...reserve].sort(); 

  for(let i = 0; i < reserve.length; i++){
    const reserveItem = reserve[i];
    if(lostArray.includes(reserveItem)){
      lostArray.splice(lostArray.indexOf(reserveItem), 1);
      reserveArray.splice(reserveArray.indexOf(reserveItem), 1);
    }
  }

  for(let i = 0; i < reserveArray.length; i++){
    const reserveItem = reserveArray[i];
    if(lostArray.includes(reserveItem - 1)){
      lostArray.splice(lostArray.indexOf(reserveItem - 1), 1);
      continue;
    }
    if(lostArray.includes(reserveItem + 1)){
      lostArray.splice(lostArray.indexOf(reserveItem + 1), 1);
      continue;
    }
  }

  answer = n - lostArray.length;

  return answer;
}

solution(5, [2, 4], [3, 4])