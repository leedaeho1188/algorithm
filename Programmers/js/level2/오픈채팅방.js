function solution(record) {
  const user = {};

  /**
   * record 배열을 반복문 돌리면서 각 요소를 split해서 action, uid, name으로 구조분해 할당한다. 
   * uid별로 마지막에 어떤 name이 할당되는지 확인한다. 단, action이 Leave일 때는 name이 주어지지 않기 때문에 그때만 uid에 name을 할당하지 않는다.
   */

  record.forEach((ele) => {
    const [, uid, name] = ele.split(' ');
    name ? user[uid] = name : undefined;
  })

  /**
   * filter를 사용해서 action이 Change를 제외한 나머지만 map을 사용해서 user객체에 저장되어있는 uid별 name을 불러와서 답안을 완성하고 return 한다.
   */

  return record
    .filter((ele) => {
      const [action] = ele.split(' ');

      if(action === 'Change') return false;
      else return true;
    })
    .map((ele) => {
      const [action, uid] = ele.split(' ');

      if(action === 'Enter') return `${user[uid]}님이 들어왔습니다.`;
      else return `${user[uid]}님이 나갔습니다.`
    })
}


const theAnswer = solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]);

console.log(theAnswer);