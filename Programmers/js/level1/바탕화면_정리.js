function solution(wallpaper) {
  var answer = [];

  const xPoints = [];
  const yPoints = [];

  wallpaper.forEach((ele, y) => {
    for(let x = 0; x < ele.length; x++){
      if(ele[x] === '#') {
        xPoints.push(x);
        yPoints.push(y);
      }
    }
  })

  xPoints.sort((a,b) => a-b);
  yPoints.sort((a,b) => a-b);

  answer = [yPoints[0], xPoints[0], yPoints[xPoints.length-1] + 1, xPoints[yPoints.length-1] + 1];

  return answer;
}


console.log(solution(["..", "#."]));