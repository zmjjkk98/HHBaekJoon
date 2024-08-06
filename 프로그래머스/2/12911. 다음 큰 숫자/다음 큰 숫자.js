function solution(n) {
    //n을 2진수로 했을 때 1의 갯수
    let binaryN = n.toString(2)
    let obj = {}
    let obj2 = {}
    
    
    for(let i=0; i<binaryN.length; i++){
        obj[binaryN[i]] = (obj[binaryN[i]] || 0) + 1;
    }
    
    //문자열안에 1이 몇개가 포함 될까?
    
    while(obj[1] !== obj2[1]){
        n++;
        let k = n.toString(2)
        for(let i=0; i<k.length; i++){
            obj2[k[i]] = (obj2[k[i]] || 0) + 1
        }
        
        if(obj[1] === obj2[1]) break;
        obj2[1] = 0;
        
    }
    
    return n;
    
    
    
    
    
}