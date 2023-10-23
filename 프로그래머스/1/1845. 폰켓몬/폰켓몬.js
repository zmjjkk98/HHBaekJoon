function solution(nums) {
    var answer = 0;
    var minimum = nums.length /2 ;
    const set = new Set(nums);    
    
    if(minimum<set.size){
        answer = minimum;
    }else {
        answer = set.size
    }
    


    
    return answer;
}




