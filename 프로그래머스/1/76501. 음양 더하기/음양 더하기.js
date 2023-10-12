function solution(absolutes, signs) {
    
    //절댓값 정수 배열 absolutes
    //boolean 타입 부호 배열 signs



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
