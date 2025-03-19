function solution(answers) {
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    let score = { 1: 0, 2: 0, 3:0 };
    for(let i=0;i<answers.length;i++){
        if(one[i % one.length] === answers[i]){
            score[1]++;
        }
        if(two[i%two.length] === answers[i]){
            score[2]++;
        }
        if(three[i%three.length] === answers[i]){
            score[3]++;
        }
    }
    const highScore = Object.entries(score).sort((a,b) => b[1] - a[1])[0][1];
    return Object.keys(score).filter((key) => score[key] === highScore).map((num) => parseInt(num));
}