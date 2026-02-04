// const score = 400;
// console.log(score);

// const balance = new Number(1000);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));   //1000.00

// const itherNumber = 123.896
// console.log(itherNumber.toPrecision(4)); //123.9    

// const bigNum = 100000000
// console.log(bigNum.toLocaleString('en-IN'));



////////////// MATH//////////////

console.log(Math)

// console.log(Math.abs(-10))
// console.log(Math.round(4.6)) //5;
// console.log(Math.ceil(4.1)) //5;
// console.log(Math.floor(4.9)) //4;

// console.log(Math.sqrt(25));
  
console.log(Math.random());   // 0-1
console.log((Math.random() * 10) + 1); // 1-10
console.log(Math.floor(Math.random() * 10) + 1); // 1-10

const min  = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10-20