

function solution(dirs) {
  var answer = 0;

  const lineArray = [];

  const point = {x:0,y:0};

  const prevPoint = {x:0,y:0};

  for(let i = 0; i < dirs.length; i++){
    if(dirs[i] === 'U'){
      if(point['y'] === 5) continue;
      point['y']++;
    }else if(dirs[i] === 'D'){
      if(point['y'] === -5) continue;
      point['y']--;
    }else if(dirs[i] === 'R'){
      if(point['x'] === 5) continue;
      point['x']++;
    }else if(dirs[i] === 'L'){
      if(point['x'] === -5) continue;
      point['x']--;
    }

    
    const line = `${prevPoint['x']}${prevPoint['y']}${point['x']}${point['y']}`;
    const oppositeLine = `${point['x']}${point['y']}${prevPoint['x']}${prevPoint['y']}`;
    
    prevPoint['x'] = point['x'];
    prevPoint['y'] = point['y'];
    
    if(!lineArray.includes(line) && !lineArray.includes(oppositeLine)){
      answer++;
      lineArray.push(line);
    }
  }


  return answer;
}

const theAnswer = solution("LULLLLLLU");

console.log(theAnswer);