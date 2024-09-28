function solution(n, left, right) {
    let result = [];
    
    for(let idx=left; idx<=right; idx++){
        const col = Math.floor(idx/n);
        const row = idx%n;
        result.push(Math.max(col, row) + 1);            
        
    }
    
    return result;
    
    
}