const input = (require("fs").readFileSync("dev/stdin") + '');

solution(input);

function solution(input){
    const answer = [];
    if (input === 1) {
        return;
    }

    const num = Math.sqrt(input);

    while (input > 1) {
        let tmp = input;
        for (let i = 2; i <= num; i++) {
            if (input % i === 0) {
                answer.push(i);
                input /= i;
                break;
            }
        }
        if (tmp === input) {
            answer.push(input);
            break;
        }
    }
    answer.map(x => console.log(x));
}