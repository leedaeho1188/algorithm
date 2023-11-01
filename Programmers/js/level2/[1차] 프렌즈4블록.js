function solution(m, n, board) {
  var answer = 0;

  let _board = [...board.map((_, idx) => board[board.length-1-idx].split(''))];

  let prevRow = {};
  let nextRow = {};
  let removableObj = {};

  let isRemovable = true;

  while(isRemovable) {
    isRemovable = false;
    _board.forEach((row, idx) => {
      let char = row[0];
  
      for(let i = 1; i < row.length; i++){
        if(row[i] !== '.' && row[i] === char) {
          if(nextRow[char]) nextRow[char].push(`${i-1}${i}`);
          else nextRow[char] = [`${i-1}${i}`];
        }
        char = row[i];
      }

      // console.log(nextRow, 'nextRow');
      // console.log(prevRow, 'prevRow')

      for(const [key, value] of Object.entries(nextRow)){
        for(const vl of value){
          if(prevRow[key] && prevRow[key].includes(vl)) {
            isRemovable = true;
            removableObj[idx-1] ? removableObj[idx-1].push(...vl.split('')) : removableObj[idx-1] = [...vl.split('')];
            removableObj[idx] ? removableObj[idx].push(...vl.split('')) : removableObj[idx] = [...vl.split('')];
          }
        }
      }

      prevRow = nextRow;
      nextRow = {};
    })

    // console.log(removableObj, 'removableObj');

    for(const [key, value] of Object.entries(removableObj)){
      for(const vl of value){
        if(_board[key][vl] !== '.') {
          _board[key][vl] = '.';
          answer++;
        }
      }
    }


    for(let i = _board.length -1; i >= 0; i--){
      if(i === _board.length-1) continue;
      const value = _board[i];
      for(let j = 0; j < value.length; j++){
        if(value[j] === '.'){
          _board[i][j] = _board[i+1][j];
          _board[i+1][j] = '.';
        }
      }
    }

    // console.log(_board, '_board');

    prevRow = {};
    nextRow = {};
    removableObj = {};

  }


  return answer;
}

const theAnswer = solution(4,	5,	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])

console.log(theAnswer, 'theAnswer');