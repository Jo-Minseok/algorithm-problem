function gcd(numer, denom){
    if(denom == 0){
        return numer;
    }
    return gcd(denom, numer % denom);
}

function solution(numer1, denom1, numer2, denom2) {
    const tmp = denom1;
    numer1 *= denom2;
    denom1 *= denom2;
    numer2 *= tmp;
    denom2 *= tmp;
    numer1 += numer2;
    const num = gcd(numer1, denom1);
    return [numer1 / num, denom1 / num];
}