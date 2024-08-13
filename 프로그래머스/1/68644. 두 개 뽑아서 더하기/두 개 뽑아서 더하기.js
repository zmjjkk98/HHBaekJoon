function solution(numbers) {
    var answer = [];
    let set = new Set();
    
    
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            let num = numbers[i] + numbers[j]
            set.add(num)
        }
        
    }
    
  
    answer = [...set]
    
    
    return answer.sort((a,b) => a-b)
}