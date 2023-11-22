function solution(s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s.charCodeAt(i));
  }
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(arr[i]);
  }
  return arr.join("");
}