function solution(price, money, count) {
    let myMoney = money;
    let myCount = 1;
    while (myCount <= count) {
        myMoney -= price * myCount;
        myCount++;
    }
    return myMoney < 0 ? -myMoney : 0;
}