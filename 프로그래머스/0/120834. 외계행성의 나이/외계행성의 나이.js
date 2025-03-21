function solution(age) {
    const a = 'a';
    const asciiCode = a.charCodeAt();
    const ages = [...(age.toString())].map((num) => parseInt(num) + asciiCode).map((alpha) => String.fromCharCode(alpha)).join('');
    
    return ages;
}