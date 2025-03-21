function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  const bridge_now = new Array(bridge_length).fill(0);
  let now_weight = 0;

  while (truck_weights.length > 0 || now_weight > 0) {
    answer++;

    now_weight -= bridge_now.shift();
    const now = truck_weights[0];

    if (now + now_weight <= weight) {
      bridge_now.push(now);
      now_weight += now;
      truck_weights.shift();
    } else {
      bridge_now.push(0);
    }
  }
  return answer;
}
