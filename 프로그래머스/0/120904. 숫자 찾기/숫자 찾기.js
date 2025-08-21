function solution(num, k) {
    const candidates = [...String(num)].map((a, idx) => {if (Number(a) === k) return idx + 1});
    for (const candidate of candidates) {
        if (candidate !== undefined) return candidate;
    }
    return -1;
}