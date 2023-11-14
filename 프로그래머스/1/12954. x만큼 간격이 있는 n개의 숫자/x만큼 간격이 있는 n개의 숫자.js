function solution(x, n) {
  var answer = [];
  const initX = x;
  while (answer.length < n) {
    answer.push(x);
    x += initX;
  }

  return answer;
}
