function solution(numbers) {
  const all = 45;

  return all - numbers.reduce((acc, cur) => acc + cur, 0);
}
