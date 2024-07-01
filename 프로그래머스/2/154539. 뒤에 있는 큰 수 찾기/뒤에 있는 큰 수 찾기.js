function solution(numbers) {
    let result = new Array(numbers.length).fill(-1);
    let stack = [];
    
    for(let i=0; i<numbers.length; i++){
        while(stack.length>0 && numbers[stack[stack.length-1]] < numbers[i]){
            result[stack.pop()] = numbers[i];            
        }
        stack.push(i);       
    }    
    
    return result
}