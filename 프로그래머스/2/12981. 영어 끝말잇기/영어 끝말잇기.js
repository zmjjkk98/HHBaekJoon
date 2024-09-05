function solution(n, words) {
    var answer = [];
    let obj = {};
    //[번호, 차례]
    
    obj[words[0]] = 1;
    
    
    for(let i=1; i<words.length; i++){
        if(words[i-1].slice(-1) !== words[i][0]) {
            return [i%n+1, Math.floor(i/n)+1]
        }
        
        if(obj[words[i]]) {
            //fail   
            return [i%n+1, Math.floor(i/n)+1]
        }
        obj[words[i]] = (obj[words[i]] || 0) + 1
    
    }    
    

    return [0, 0];
}