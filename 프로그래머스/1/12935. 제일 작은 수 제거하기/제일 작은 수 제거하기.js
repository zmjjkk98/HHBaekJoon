function solution(arr) {
  if (arr.length <= 1) return [-1];

  const minNumber = Math.min(...arr);
  arr.splice(arr.indexOf(minNumber), 1);

  return arr;
}