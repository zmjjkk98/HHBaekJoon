function solution(arr) {
    let arr2 = arr.reduce((acc, cur) => acc + cur, 0)/ arr.length;
    
    console.log(arr2)
    var answer = arr2;
    return answer;
}