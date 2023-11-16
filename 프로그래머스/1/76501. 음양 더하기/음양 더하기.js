function solution(absolutes, signs) {

    for(let i=0; i<absolutes.length; i++){
        if(signs[i] === false){
            absolutes[i] *= -1 ;
        }
    }
    
    var answer = 0;
    
    for(let i=0; i<absolutes.length; i++){
        answer += absolutes[i];
    }

    return answer;
}
