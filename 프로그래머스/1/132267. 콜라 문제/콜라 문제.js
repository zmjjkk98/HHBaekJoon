function solution(a, b, n) {
    var answer = 0;
    let rest = 0;
    
    while(n>=a){
        rest = n%a
        n = (Math.floor(n/a) * b);
        answer += n
        n += rest
        if(n < a) break;
        
        
    }

    
    
    
    return answer;
}