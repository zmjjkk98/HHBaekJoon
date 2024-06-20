function solution(participant, completion) {
  let part = {};

  for (person of participant) {
    part[person] = ++part[person] || 1;
  }

  for (let i = 0; i < completion.length; i++) {
    part[completion[i]]--;
  }

  for (p in part) {
    if (part[p] > 0) {
      return p;
    }
  }

}
