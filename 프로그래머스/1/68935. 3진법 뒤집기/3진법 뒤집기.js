function solution(n) {
  let str = "";

  while (n > 0) {
    str += n % 3;
    n = Math.floor(n / 3);
  }
  let arr = [...str].reverse();
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * 3 ** i;
  }

  return sum;
}
