function solution(k, tangerine) {

    const obj = {}; 
    let count = 0;
    
    // 귤의 크기 갯수별로 
    tangerine.forEach((x) => {
        obj[x] = (obj[x] || 0) + 1
    });
    
    const tArr = Object.values(obj).sort((a,b) => b-a);
    
      for (const t of tArr) {
    count++;
    if (k > t) k -= t;
    else break;
  }

  return count;

    
   
    
    
    

}