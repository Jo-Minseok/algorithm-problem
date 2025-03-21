function solution(emergency) {
    return emergency.map((num) => emergency.filter((num2) => num < num2).length+1);
}