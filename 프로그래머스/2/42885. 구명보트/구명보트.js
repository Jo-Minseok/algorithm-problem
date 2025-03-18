function solution(people, limit) {
    const peopleSort = people.sort((a,b) => b-a);
    let answer = 0;
    let left = 0, right = peopleSort.length-1;
    while(left < right){
        if(peopleSort[left] + peopleSort[right] <= limit){
            left++;
            right--;
        }
        else{
            left++;
        }
        answer++;
    }
    return left === right ? answer + 1 : answer;
}