function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    
    
    for (let i=0; i<db.length; i++) {
        if(id === db[i][0] && pw === db[i][1]) return "login"
        else if(id === db[i][0]) return "wrong pw"        
    }
    
    
    
    return "fail";
}