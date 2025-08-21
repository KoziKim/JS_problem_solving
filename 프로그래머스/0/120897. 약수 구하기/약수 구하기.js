function solution(n) {
    let i = 1;
    const answer = [];
    while (i <= n) {
        if (n % i === 0) answer.push(i);
        i++;
    }
    return answer;
}