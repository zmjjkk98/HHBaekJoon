function divsorCheck(divisor) {
  let count = 0;
  for (let i = 0; i <= divisor; i++) {
    if (divisor % i === 0) {
      count++;
    }
  }

  return count % 2 === 0 ? 1 : -1;
}

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (divsorCheck(i) === -1) {
      answer -= i;
      continue;
    }

    answer += i;
  }

  return answer;
}