function solution(n) {
  const arr = String(n).split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i] + 0;
  }

  return sum;
}
