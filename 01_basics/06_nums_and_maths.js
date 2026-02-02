const score=400;
console.log(score);

const balance= new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //precison value

const otherNumber=23.89453;
console.log(otherNumber.toPrecision(3)); //rounds foo value

const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log("\n\n");

//++++++++++++++++Maths++++++++++++++++++++++++++

console.log(Math); //object
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.2));

console.log(Math.sqrt(625));
console.log(Math.random()); //between 0-1 values
console.log((Math.random()*10) + 1);
console.log(Math.floor((Math.random()*10) + 1));

console.log("min-max-random use ");
const min=10;
const max=20;
// The random values generate between 10 and 20
console.log(Math.floor(Math.random() * (max-min + 1)) + min);

