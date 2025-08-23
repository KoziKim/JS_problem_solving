function solution(price, money, count) {
    const myMoney = money - price * count * (count + 1) / 2
    return myMoney > 0 ? 0 : -myMoney;
}