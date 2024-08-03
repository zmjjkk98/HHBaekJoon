function solution(s) {
    let obj = {}
    let count = 0;
    
    function toBinary(number){
        let binary = ""
        let realBinary = ""
        while(number / 2 > 0 ){
            binary = binary + number % 2                 
            number = Math.trunc(number/2)                                       
        }          
        
        for(let i=binary.length-1; i>=0; i-- ){
            realBinary += binary[i] 
        }
        
        return realBinary;
    }
    
    
    while(true){
        for(let i=0; i<s.length; i++){
            obj[s[i]] = (obj[s[i]] || 0) + 1 ; 
        }
        s = toBinary(obj[1]);
        obj[1] = 0 ;
        count++;
        if(s === "1") break;
    }
    
        
    
   
    
    
    return [count, obj[0]];
}