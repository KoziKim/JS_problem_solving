function solution(n) {
    return String(n).split('').reduce((prev, curr) => +prev + +curr, 0);
}