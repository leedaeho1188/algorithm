function solution(park, routes) {
  var answer = [];
  
  let startPoint;
  let obstacles = [];
  let maxPoint = [park.length-1 ,park[0].length - 1];
  
  park.forEach((p, index) => {
      if(p.includes('S')) startPoint = [index, p.indexOf('S')];
      if(p.includes('X')){
          for(let i = 0; i < p.length; i++){
              if(p[i] === 'X') obstacles.push(`${index}_${i}`);
          }
      }
  })

  answer = [...startPoint];
  
  routes.forEach((route) => {
      const [direction, cnt] = route.split(' ');
      if(direction === 'W') {
          if(answer[1] - Number(cnt) < 0) return;
          for(let i = 1; i <= Number(cnt); i++){
              if(obstacles.includes(`${answer[0]}_${answer[1] - i}`)) return;
          }
          return answer[1] -= Number(cnt);
      };
      if(direction === 'E') {
          if(answer[1] + Number(cnt) > maxPoint[1]) return;
          for(let i = 1; i <= Number(cnt); i++){
              if(obstacles.includes(`${answer[0]}_${answer[1] + i}`)) return;
          }
          return answer[1] += Number(cnt);
      }
      if(direction === 'N'){
          if(answer[0] - Number(cnt) < 0) return;  
          for(let i = 1; i <= Number(cnt); i++){
              if(obstacles.includes(`${answer[0] - i}_${answer[1]}`)) return;
          }
          return answer[0] -= Number(cnt);
      } 
      if(direction === 'S'){
          if(answer[0] + Number(cnt) > maxPoint[0]) return;
          for(let i = 1; i <= Number(cnt); i++){
              if(obstacles.includes(`${answer[0] + i}_${answer[1]}`)) return;
          }
          return answer[0] += Number(cnt);
      }
  })
  
  return answer;
}