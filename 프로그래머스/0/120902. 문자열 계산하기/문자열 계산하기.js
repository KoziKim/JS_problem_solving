const calculator = (x, sign, answer) => {
    if (x === '+') {
        sign = 1;
    } else if (x === '-') {
        sign = -1;
    } else {
        answer += sign * x;
    }
    
    return [answer, sign];
}

function solution(my_string) {
    let answer = 0;
    let sign = 1;
    my_string.split(' ').forEach((x) => {
        [answer, sign] = calculator(x, sign, answer);
    });
    return answer;
}