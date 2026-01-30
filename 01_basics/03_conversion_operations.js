let points=100
let score="33abc" //string
console.log(typeof points);
console.log(typeof(score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber); //Nan - not number

let temp=null;
console.log(typeof temp); // null is object

// "33"-> 33
//"33abc"-> Nan
 let isloogedIn=1
 let booleanIsLoggedIn= Boolean(isloogedIn);
console.log(booleanIsLoggedIn);
// true means 1
//"" empty strings is false

let some_number=45
let string_number=String(some_number);
console.log(typeof string_number);
console.log(string_number);

//**********operations */
let value =3
let negValue= -value
console.log(negValue);
console.log(2**3); //2 to power 3
console.log(2%3); //remainder

let str1="hello"
let str2 = " priyanshu"
let str3=str1+ str2;
console.log(str3);


console.log("1"+2+2); //122 as string
console.log(1+2+"3"); //returns 33 as string

console.log(true);
console.log(+true);
console.log(+"");

let counter=100
counter++;
console.log(counter);
++counter;
console.log(counter);
