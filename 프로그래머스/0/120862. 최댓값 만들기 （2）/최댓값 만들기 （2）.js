function solution(numbers) {
    const sortedNumbers = numbers.sort((a,b) => a-b);
    const candidate1 = sortedNumbers[0] * sortedNumbers[1];
    const candidate2 = sortedNumbers.pop() * sortedNumbers.pop();
    
    return Math.max(candidate1, candidate2);
}