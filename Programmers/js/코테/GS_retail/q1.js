

//전화번호 유형 파악 함수
//regex를 이용하여 전화번호 유형을 파악한다.
//유형 1: 010-xxxx-xxxx return 1
//유형 2: 010xxxxxxx return 2
//유형 3: +82-10-xxxx-xxxx return 3
function checkPhoneNumberType(phoneNumber) {
  const regex1 = /^010-\d{4}-\d{4}$/;
  const regex2 = /^010\d{8}$/;
  const regex3 = /^\+82-10-\d{4}-\d{4}$/;

  if(regex1.test(phoneNumber)) return 1;
  if(regex2.test(phoneNumber)) return 2;
  if(regex3.test(phoneNumber)) return 3;
  return 0;
} 

function solution3(sentence) { 
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabet.split('');
  const alphabetObject = {};
  const answer = [];

  for(let i = 0; i < alphabetArray.length; i++){
    alphabetObject[alphabetArray[i]] = 0;
  }

  for(let i = 0; i < sentence.length; i++){
    const argument = sentence[i].toLowerCase();
    for(let j = 0; j < argument.length; j++){
      const argumentEle = argument[j];
      if(alphabetObject[argumentEle] !== undefined) alphabetObject[argumentEle]++;
    }
  }

  for (const [key, value] of Object.entries(alphabetObject)) {
    if(value === 0) answer.push(key);
  }

  return answer;
}

//매개변수 teamIDs, additional
//teamIDs는 이미 등록한 팀 아이디 배열이다.
//additional은 추가할 팀 아이디 배열이다.
//additional에 있는 팀 아이디가 teamIDs에 이미 있는 경우는 추가하지 않는다.
//additional에 있는 팀 아이디를 순차적으로 teamIDs에 추가한다.
//additional에서 추가된 순서대로 배열안에 정렬하여 return 한다.
function solution4(teamIDs, additional) {
  const answer = [];
  const teamIDsObject = {};

  for (let i = 0; i < teamIDs.length; i++) {
    const teamIDsEle = teamIDs[i];
    teamIDsObject[teamIDsEle] = true;
  }

  for (let i = 0; i < additional.length; i++) {
    const additionalEle = additional[i];
    if (!teamIDsObject[additionalEle]) {
      teamIDsObject[additionalEle] = true;
      answer.push(additionalEle);
    }
  }

  return answer;
}


//매개변수 birth는 생년월일을 나타내는 문자열을 가진 배열이다.
//birth의 요소가 올바른 형식을 가지고있는지 확인하고 올바른 형식을 가진 요소의 개수를 return 한다.
// 1. 길이가 10인 "YYYY-MM-DD" 형식인지 확인한다.
// 2. YYYY가 1900년 이상 2021년 이하인지 확인한다.
// 3. MM이 01월 이상 12월 이하인지 확인한다.
// 4. MM이 10이하일 떄 앞에 0이 붙어있는지 확인한다.
// 4. DD가 MM이 31일까지 있는 달이면 01일 이상 31일 이하인지 확인한다.
// 5. DD가 MM이 30일까지 있는 달이면 01일 이상 30일 이하인지 확인한다.
// 6. DD가 MM이 28일까지 있는 달이면 01일 이상 28일 이하인지 확인한다.
// 7. DD가 MM이 29일까지 있는 달이면 01일 이상 29일 이하인지 확인한다.
// 8. 1~7번을 모두 통과하면 올바른 형식이다.
function solution5(birth) {
  let answer = 0;
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  for (let i = 0; i < birth.length; i++) {
    const birthEle = birth[i];
    if (regex.test(birthEle)) {
      const year = Number(birthEle.slice(0, 4));
      const month = Number(birthEle.slice(5, 7));
      const day = Number(birthEle.slice(8, 10));

      if (year >= 1900 && year <= 2021) {
        if (month >= 1 && month <= 12) {
          if (day >= 1 && day <= 31) {
            if (month === 2) {
              if (day <= 28) {
                answer++;
              }
            } else if (month === 4 || month === 6 || month === 9 || month === 11) {
              if (day <= 30) {
                answer++;
              }
            } else {
              answer++;
            }
          }
        }
      }
    }
  }

  return answer;
}

const restApiAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
}

const funcAsync = async () => {
  const result1 = await restApiAsync().then(() => 1);
  const result2 = await restApiAsync().then(() => 2);
  const result3 = await restApiAsync().then(() => 3);
  return {result1, result2, result3};
}

const funcAsync2 = async() => {
  const result = await Promise.all([
    restApiAsync().then(() => ["result1", 1]), 
    restApiAsync().then(() => ["result2", 2]), 
    restApiAsync().then(() => ["result3", 3])
  ]);
  return Object.fromEntries(result);
}

const solution6 = () => {
  console.log(new Date(), 'start');
  funcAsync2().then((result) => console.log(new Date(), "finish" ,result, 'result'));
  return 0;
}

solution6();