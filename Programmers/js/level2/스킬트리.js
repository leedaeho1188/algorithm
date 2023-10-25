function solution(skill, skill_trees) {

  /**
   * answer은 skill_trees에서 올바른 skill set을 가지고있는 element개수; 
   */
  var answer = 0;

  skill_trees.forEach((tree) => {
    //tree element가 skill의 element를 따라 순차적으로 나열되어있는지 확인
    /**
     * skillArray = skill 문자열의 char를 배열의 각 요소로 분리;
     * skillIdx = skillArray의 요소 index로 순차적으로 tree가 skill set을 가지고 있는지 확인;
     * isCorrectSkillSet = 마지막에 tree가 올바른 skillset인지 boolean타입으로 확인;
     */ 
    const skillArray = skill.split('');
    let skillIdx = 0;
    let isCorrectSkillSet = true;

    /**
     * treeIdx = tree의 각 skill이 skillArray에 몇번째 인덱스 위치하는지 확인;
     * treeIdx === skillIdx 는 선행스킬 순서에 맞게 진행되고있다는 뜻 => 다음 스킬을 찾도록 skillIdx++;
     * treeIdx === -1 선행스킬과 상관없는 스킬이기 때문에 continue로 그냥 통과;
     * 그외는 선행스킬과 맞지않는 스킬이기 때문에 tree가 잘못된 skill set을 가지고 있다고 판단 => isCorrectSkillSet을 false할당, for문 break;
     */
    for(let i = 0; i < tree.length; i++){
      const treeIdx = skillArray.findIndex((sk) => sk === tree[i]);
      if(treeIdx === skillIdx) skillIdx++;
      else if(treeIdx === -1) continue;
      else {
        isCorrectSkillSet = false;
        break;
      }
    }

    //isCorrectSkillSet = true이면 tree가 올바른 skillset을 가지고 있다는 뜻 => answer의 값을 +1한다.

    if(isCorrectSkillSet) answer++;
  })

  return answer;
}


const theAnswer = solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);

console.log(theAnswer, 'theAnswer')


//다른 사람 풀이
//RegExp 생성자를 통해서 정규 표현식 객체를 생성;
//제일 간단하고 쉬운 방법인 것 같음;

function solution2(skill, skill_trees) {
  /**
   * regex = skill없는 char가 아닌것을 찾는 정규표현식 객체;
   */
  var regex = new RegExp(`[^${skill}]`, 'g');

  /**
   * 1. skill_trees 각 element에서 skill 포함안된 skill을 없앤다.
   * 2. 그 이후에 각 element가 skill과 같은 순서로 스킬들을 가지고 있거나 아무런 값을 가지고있지 않으면 배열에 값을 가지고 있는다 그렇지 않으면 배열에서 제거한다.
   * 3. 배열의 길이를 반환한다. 배열의 길이가 skill_trees에서 skill과 같은 선행스킬을 순서를 가지고 있는 element의 개수이다.
   */

  return skill_trees
      .map((x) => x.replace(regex, ''))
      .filter((x) => {
          return skill.indexOf(x) === 0 || x === "";
      })
      .length
}

const theAnswer2 = solution2("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);

console.log(theAnswer2, 'theAnswer')