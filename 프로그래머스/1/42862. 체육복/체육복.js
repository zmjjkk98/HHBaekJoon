function solution(n, lost, reserve) {
  let answer = 0;
  let student = [];

  for (let i = 0; i < n; i++) {
    student[i] = 1;
  }

  for (let i = 0; i < lost.length; i++) {
    student[lost[i] - 1]--;
  }

  for (let i = 0; i < reserve.length; i++) {
    student[reserve[i] - 1]++;
  }

  for (let i = 0; i < student.length; i++) {
    if (student[i] > 1 && student[i - 1] === 0) {
      student[i]--;
      student[i - 1]++;
    } else if (student[i] > 1 && student[i + 1] === 0) {
      student[i]--;
      student[i + 1]++;
    }
    // if (student[i] === 0 && student[i - 1] > 1) {
    //   student[i - 1]--;
    //   student[i]++;
    // } else if (student[i] === 0 && student[i + 1] < 1) {
    //   student[i + 1]--;
    //   student[i]++;
    // }
  }
  console.log("student ", student);

  for (let i = 0; i < student.length; i++) {
    if (student[i] >= 1) {
      answer += 1;
    }
  }

  return answer;
}

