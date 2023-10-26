function solution(s) {
    let len = s.length/2;
    var answer = '';
    
    answer = s.length % 2 === 0 ? s.substring(len-1, len+1) : s.substring(len, len+1);


    console.log(answer);
    return answer;
}


