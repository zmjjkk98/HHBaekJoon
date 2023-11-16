function solution(arr, divisor) {
  let answer = [];

  arr.forEach((e) => {
    if (e % divisor === 0) {
      answer.push(e);
    }
  });
  return answer.length < 1 ? [-1] : answer.sort((a, b) => a - b);
}
