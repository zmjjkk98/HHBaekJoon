function solution(x) {
    var answer = true;
    


    let n = x.toString().split("").reduce((a, b) => +b + +a);

    answer = x % n == 0 ? true : false;

    return answer;
}