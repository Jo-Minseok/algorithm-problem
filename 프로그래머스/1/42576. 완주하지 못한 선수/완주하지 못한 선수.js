function solution(participant, completion) {
    let answer;
    const participantObj = {};
    participant.forEach((human) => {
        participantObj[human]? participantObj[human]++ : participantObj[human] = 1;
    });
    completion.forEach((human) => participantObj[human]--);
    Object.entries(participantObj).forEach(([key,value]) => {if(value){ answer = key}});
    return answer;
}