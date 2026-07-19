function getResult(x, y) {
  return String(x ** y)
    .split("")
    .map(Number)
    .reduce((acc, num) => acc + num, 0);
}

console.log(getResult(4, 8));
console.log(getResult(2, 5));
