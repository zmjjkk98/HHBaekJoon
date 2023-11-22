function solution(price, money, count) {
  const moneyTopay = ((count * (count + 1)) / 2) * price;

  return moneyTopay - money > 0 ? moneyTopay - money : 0;
}