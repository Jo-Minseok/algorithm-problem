function solution(number) {
    var answer = 0;
    number.sort((a,b) => a-b);
    for(let i=0;i<number.length-2;i++){
        for(let j=i+1;j<number.length-1;j++){
            for(let k=number.length-1;k>j;k--){
                if(number[i] + number[j] + number[k] < 0){
                    break;
                }
                number[i] + number[j] + number[k] === 0 ? answer++ : null;
            }
        }
    }
    return answer;
}