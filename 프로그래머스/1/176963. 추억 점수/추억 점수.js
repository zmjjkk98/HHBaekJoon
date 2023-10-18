function solution(name, yearning, photo) {
    //name을 key로
    //yearning 을 value로 객체를 생성해보자
    // obj 만든 다음 for문으로 인데스 값에 적용해서 obj에 들어가는지 확인해보자
    const obj = {};

    for (let i = 0; i < name.length; i++) {
        obj[name[i]] = yearning[i];
    }
    

    console.log(obj);
    var answer = [];


    answer = photo.map((arr) => 
        arr.reduce((acc, cur) => acc + (obj[cur] || 0),0)  //obj[cur]이 null일경우, 0
    );
    
    console.log(answer)
    return answer;
}


