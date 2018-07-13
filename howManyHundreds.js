function howManyHundreds(num) {
  return Math.floor(num / 100);
}

console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(55), "=?", 0);
console.log(howManyHundreds(100), "=?", 1);
console.log(howManyHundreds(200), "=?", 2);
console.log(howManyHundreds(123456), "=?", 1234);