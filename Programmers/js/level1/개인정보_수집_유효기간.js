function solution(today, terms, privacies) {
  var answer = [];
  const todayDate = new Date(today);
  const nameTerm = {};

  terms.forEach((ele) => {
    const [name, term] = ele.split(' ');
    nameTerm[name] = Number(term);
  })

  privacies.forEach((ele, index) => {
    const [date, name] = ele.split(' ');
    const dateDiff = getDifferenceDate(new Date(date), todayDate);
    console.log(dateDiff, nameTerm[name]*28)
    if(dateDiff >= nameTerm[name]*28) answer.push(index + 1);
  })

  return answer;
}

function getDifferenceDate(date1, date2) {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth() + 12 * (year2 - year1);
  const day1 = date1.getDate();
  const day2 = date2.getDate();
  const difference = (month2 - month1) * 28 + (day2 - day1);
  return difference;
}


console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]))