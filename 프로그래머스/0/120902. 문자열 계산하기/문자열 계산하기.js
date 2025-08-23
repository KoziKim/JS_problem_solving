function solution(my_string) {
    let answer = 0;
    let sign = undefined;
    my_string.split(' ').forEach((x) => {
        if (x === '+') {
            sign = 'plus';
        } else if (x === '-') {
            sign = 'minus';
        }
        if (x === '+' || x === '-'){    
        } else if (!sign) {
            answer += Number(x);
        } else if (sign === 'plus') {
            answer += Number(x);
        } else if (sign === 'minus') {
            answer -= Number(x);
        }
    });
    return answer;
}