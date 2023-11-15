function solution(a, b) {
  let answer = 0;
  if (a === b) return a;
  if (a > b) {
    let n = a - b;
    for (let i = 0; i < n; i++) {
      answer += b;
      b++;
    }
    return answer + b;
  } else {
    let n = b - a;
    for (let i = 0; i < n; i++) {
      answer += a;
      a++;
    }
    return answer + a;
  }
}
