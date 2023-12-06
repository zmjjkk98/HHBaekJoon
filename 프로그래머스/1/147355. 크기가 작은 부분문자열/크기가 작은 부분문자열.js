function solution(t, p) {
  const pLen = p.length;
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    let compare = "";
    compare = t.split("").splice(i, pLen).join("");

    if (compare.length < pLen) {
      break;
    }

    if (Number(compare) <= Number(p)) {
      count++;
    }
  }

  return count;
}
