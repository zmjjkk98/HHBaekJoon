function solution(s, n) {
    let answer = ""
    let char = ""
               
    
    for(let i=0; i<s.length; i++){
        char = s[i]
        
        if(char === " "){
            answer += " "
            continue;
        }
        
        let charCode = s.charCodeAt(i);
        
        if(char >= 'a' && char <= 'z'){
            char = String.fromCharCode((charCode - 97 + n) % 26 + 97);
        }else if(char >= 'A' && char <= 'Z'){
            char = String.fromCharCode((charCode - 65 + n) % 26 + 65);
        }
        
        answer += char
        
        

    }
    return answer
}