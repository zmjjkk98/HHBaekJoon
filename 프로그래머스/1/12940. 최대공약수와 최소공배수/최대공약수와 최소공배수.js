function solution(n, m) {
  const answer = [];
  const GCD = (n, m) => (m > 0 ? GCD(m, n % m) : n);
  const LCM = (n, m) => (n * m) / GCD(n, m);
  answer.push(GCD(n, m));
  answer.push(LCM(n, m));

  return answer;
}

