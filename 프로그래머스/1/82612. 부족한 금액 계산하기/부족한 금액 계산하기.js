function solution(price, money, count) {
  let i = 0;
  let fee = 0;
  const firstPrice = price;
  while (i < count) {
    fee += price;
    price += firstPrice;
    i++;
    console.log("price ", price);
    console.log("fee", fee);
  }

  if (fee > money) {
    return fee - money;
  } else return 0;
}