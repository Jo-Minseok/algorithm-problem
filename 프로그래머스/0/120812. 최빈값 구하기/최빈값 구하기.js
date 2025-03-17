function solution(array) {
    const countObj = {};
    array.forEach(id => {if(!countObj[id]){countObj[id] = 1} else countObj[id]++});
    const list = Object.entries(countObj).sort((a, b) => b[1]-a[1]);
    if(list.length != 1 && list[0][1] === list[1][1]){
        return -1;
    }
    return parseInt(list[0][0]);
}