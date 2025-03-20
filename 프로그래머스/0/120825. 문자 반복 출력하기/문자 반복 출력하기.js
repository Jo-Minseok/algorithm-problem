function solution(my_string, n) {
    return [...my_string].map((alpha) =>alpha.repeat(n)).join('');
}