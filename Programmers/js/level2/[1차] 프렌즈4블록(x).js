// function solution(m, n, board) {
//   var answer = 0;

//   let _board = [...board.map((_, idx) => board[board.length-1-idx].split(''))];

//   let prevRow = {};
//   let nextRow = {};
//   let removableObj = {};

//   let isRemovable = true;

//   while(isRemovable) {
//     isRemovable = false;
//     _board.forEach((row, idx) => {
//       let char = row[0];
  
//       for(let i = 1; i < row.length; i++){
//         if(row[i] !== '.' && row[i] === char) {
//           if(nextRow[char]) nextRow[char].push(`${i-1}${i}`);
//           else nextRow[char] = [`${i-1}${i}`];
//         }
//         char = row[i];
//       }

//       // console.log(nextRow, 'nextRow');
//       // console.log(prevRow, 'prevRow')

//       for(const [key, value] of Object.entries(nextRow)){
//         for(const vl of value){
//           if(prevRow[key] && prevRow[key].includes(vl)) {
//             isRemovable = true;
//             removableObj[idx-1] ? removableObj[idx-1].push(...vl.split('')) : removableObj[idx-1] = [...vl.split('')];
//             removableObj[idx] ? removableObj[idx].push(...vl.split('')) : removableObj[idx] = [...vl.split('')];
//           }
//         }
//       }

//       prevRow = nextRow;
//       nextRow = {};
//     })

//     // console.log(removableObj, 'removableObj');

//     for(const [key, value] of Object.entries(removableObj)){
//       for(const vl of value){
//         if(_board[key][vl] !== '.') {
//           _board[key][vl] = '.';
//           answer++;
//         }
//       }
//     }


//     for(let i = _board.length -1; i >= 0; i--){
//       if(i === _board.length-1) continue;
//       const value = _board[i];
//       for(let j = 0; j < value.length; j++){
//         if(value[j] === '.'){
//           _board[i][j] = _board[i+1][j];
//           _board[i+1][j] = '.';
//         }
//       }
//     }

//     // console.log(_board, '_board');

//     prevRow = {};
//     nextRow = {};
//     removableObj = {};

//   }


//   return answer;
// }


/**
 * 
 * @param {높이} m 
 * @param {폭} n 
 * @param {배치 정보} board 
 * @returns 배치 정보에서 사라지는 캐릭터 총 개수;
 */

function solution(m, n, board) {
  let curBoard = [...board.map(block => [...block])];
  let newBoard = [...board.map(block => [...block])];

  //while문 안에서 따로 break하지 않는 이상 계속 실행
  while (true) { 
      let count = 0;
      for (let x = 0; x < m - 1; x++) {
          for (let y = 0; y < n - 1; y++) {
              //해당 공간이 비어있으면 넘어간다.
              if (curBoard[x][y] === '') continue;
              //해당공간의 옆, 위, 대각선 값이 같으면 newBoard의 해당공간, 옆, 위, 대각선 값을 빈 값으로 변경한다.
              if (curBoard[x][y] === curBoard[x][y + 1] && curBoard[x][y] === curBoard[x + 1][y] && curBoard[x][y] === curBoard[x + 1][y + 1]) {
                  newBoard[x][y] = '';
                  newBoard[x + 1][y] = '';
                  newBoard[x][y + 1] = '';
                  newBoard[x + 1][y + 1] = '';
                  count += 1;
              }
          }
      }


      // 위에서부터 아래로 차례대로 빈칸을 채우면서 내려온다.
      for (let x = 0; x < m - 1; x++) {
          for (let y = 0; y < n; y++) {
            // 빈칸을 채울때는 그 바로 위에 부터 차례대로 내려오게 한다.
              if (newBoard[x + 1][y] === '') {
                  for (let i = x; i >= 0; i--) {
                      newBoard[i + 1][y] = newBoard[i][y];
                      newBoard[i][y] = '';
                  }
              }
          }
      }
      curBoard = [...newBoard.map(block => [...block])];
      if (count === 0) break;
  }

  const allBoards = newBoard.reduce((acc, cur) => acc.concat(cur));

  return allBoards.filter(block => block === '').length;
}

const theAnswer = solution(6,	6,	["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])

console.log(theAnswer, 'theAnswer');