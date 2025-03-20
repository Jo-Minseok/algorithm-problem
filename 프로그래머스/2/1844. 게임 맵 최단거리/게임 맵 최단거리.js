function solution(maps) {
    let answer = 0;
    const y_max = maps.length, x_max = maps[0].length;
    const direct = [[-1,0],[1,0],[0,-1],[0,1]];
    const queue = [[0,0,1]];
    while(queue.length > 0){
        const [y,x,distance] = queue.shift();
        if(y === y_max - 1 && x === x_max - 1){
            return distance;
        }
        for(const dir of direct){
            if(y+dir[0] >=0 && y+dir[0] < y_max && x+dir[1] >= 0 && x+dir[1] < x_max && maps[y+dir[0]][x+dir[1]] === 1){
            queue.push([y + dir[0], x+dir[1],distance+1]);
            maps[y+dir[0]][x+dir[1]] = 0;
            }
        }
    }
    return -1;
}