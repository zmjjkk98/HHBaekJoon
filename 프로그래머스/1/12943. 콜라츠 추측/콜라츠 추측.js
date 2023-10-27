function solution(num) {
    var answer = 0;   
    let count = 0;
    
    if(num === 1) {
        return answer = 0;
    }



   function addOdd(wnum){
       

        if(count > 500) {
            return count = -1; 
        }else if(wnum === 1) {
            return count;
        }


        if(wnum % 2 === 0){
            wnum /= 2;
            
        }else if(wnum % 2 !== 0) {
            wnum = (wnum * 3) + 1         
        }
       
       
        count++;
        addOdd(wnum);    


   } 

   answer = addOdd(num);
   answer = count;
   console.log(answer);
   return answer ;
}
