function solution(number) {
    //삼중 포문?
    let count = 0;


    for(let i =0; i<number.length-2; i++){
        for(let j=i+1; j<number.length-1; j++){
            for(let k=j+1; k<number.length; k++){
                if (number[i] + number[j] + number[k] == 0) {
                    count++
                }

            }
        }
    
    }

    console.log(count);
    var answer = count;
    return answer;
}

