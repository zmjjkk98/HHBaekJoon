function solution(s) {
  let newArr = s.split(" ");
  let answer = [];

  for (let i = 0; i < newArr.length; i++) {
    let word = "";
    for (let j = 0; j < newArr[i].length; j++) {
      if (j % 2 === 0) {
        word += newArr[i][j].toUpperCase();
      } else word += newArr[i][j].toLowerCase();
    }
    answer.push(word);
  }

  return answer.join(" ");
}