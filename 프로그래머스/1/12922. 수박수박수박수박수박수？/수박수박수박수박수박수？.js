function solution(n) {
    let i=0;
    let su = "수";
    let bak = "박";
    let subak = "";
    
    for(let i=0; i<n; i++){       
        if(i%2 === 0){
            subak += su
        }else{
            subak += bak
        }
    }    
    console.log(subak)
    var answer = subak;
    
    return answer;
}