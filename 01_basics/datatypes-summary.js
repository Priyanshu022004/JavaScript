/* the way  data is stored and accessed there are two memory types
1) Primitive and 2)non primitive */

//primitive-  call by value
/* String, Nuumber , Boolean , null ,undefined, Symbol(to make value unique), BigInt*/
const score =100
const scorevalue=100.3
const loogeed_in=false
const outsideTemp= null
let userMail;

const id=Symbol('12344')
const anotherId=Symbol('12344') //both the numbers are same but symbol makes it unique
console.log(id==anotherId);

const bigNumber= 36264375743843746346347n //Big INt repsented by n at last

/*Non Primitive - call by reference  
Array , objects , functions*/

const heros=["superman","batman","marvel"]; //array
console.log(heros);


//Object data type
let myobj={
    name:"priyanshu",
    age:21,
    married:false
}

//Funtions
const myFuction=function(){console.log("\nthis is a function");
}

console.log(typeof bigNumber);
console.log(typeof myFuction); // returns "function" as datatype



//********************************************************* */
// Stack(Primitive datatype)-values of variables are copies , Heap(non-primitive type)- refernce access so direct value change

let myname="Priyanshu"
let anotherName=myname
anotherName="raccon"
console.log(myname);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
 let userTwo=userOne

 userTwo.email="pj@gsosdd.com"
 console.log(userOne.email);
 console.log(userTwo.email); //in heap the actual value changes 
 
 

