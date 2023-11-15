function solution(n) {
  return (
    (n + "")
      .split("")
      .map(Number)
      .sort((a, b) => {
        return b - a;
      })
      .join("") / 1
  );
}
