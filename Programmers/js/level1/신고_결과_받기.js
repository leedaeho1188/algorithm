function solution(id_list, report, k) {
  var answer = [];
  
  const reportedCnt = {};
  const reportId = {};

  report.forEach((r) => {
    const [from, to] = r.split(' ');
    const included = reportId[from] && reportId[from].includes(to);

    if(reportedCnt[to]){
      if(included) return;
      reportedCnt[to]++;
    } else reportedCnt[to] = 1;

    if(!reportId[from]) reportId[from] = [to];
    else included || reportId[from].push(to);

  })

  id_list.forEach((id) => {
    let cnt = 0;
    if(!reportId[id]) {
      answer.push(0);
      return;
    }

    reportId[id].forEach((r) => {
      if(reportedCnt[r] >= k) cnt++;
    })
    answer.push(cnt);
  });

  return answer;
}


console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))
