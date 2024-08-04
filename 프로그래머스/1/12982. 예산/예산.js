function solution(d, budget) {
    d.sort((a,b) => a-b);
    let pointer = 0;
    let sum = 0;
    let count = 0;
    
    
    while(sum < budget && pointer < d.length){        
        sum += d[pointer];
        if(sum > budget) break;
        count++;
        pointer++;
        
    }
    
    return count;
}