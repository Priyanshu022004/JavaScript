const name="priyanshu "
const repocount=25

//console.log(name+repocount+"value");

console.log(`Hello my name is ${name} and my age is ${repocount}`);

const gameName= new String('priyanshuH')

console.log(gameName[0]);
console.log(gameName.__proto__); // return object {}

console.log(gameName.length); 
console.log(gameName.toUpperCase());

console.log(gameName.charAt(3)); //takes index
console.log(gameName.indexOf('h'));

const newStr= gameName.substring(0,4); // returns the substring from 0-4
console.log(newStr);

const anotherStr=gameName.slice(-8,4);
console.log(anotherStr);

const someStr="     hitesh      "
console.log(someStr);
console.log(someStr.trim());

const url="https://bye.com/bye%20sharma"

console.log(url.replace('%20','-'));

console.log(url.includes('bye'));

const someVar="hello bro what ra"
console.log(someVar.split(' '));


