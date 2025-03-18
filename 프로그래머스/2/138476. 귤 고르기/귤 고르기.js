function solution(k, tangerine) {
    const countObj = {};
    tangerine.forEach((num) => {if(countObj[num]) {countObj[num]++} else {countObj[num]=1} });
    const arr = Object.entries(countObj).sort((a,b) => b[1] - a[1])
    let answer = 0;
    let various = k;
    for(let i=0;various>0;i++){
        various -= arr[i][1]; 
        answer++;
    }
    return answer;
}