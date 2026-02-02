const myarr=[11,22,33,45,5,6,"true", "yes"];
console.log(myarr[3]);

const myheros=["superman","spiderman","toji"];
console.log(myheros);

const myarr2= new Array(2,3,5,3,7);
console.log(myarr2[1]);//3
console.log(myarr2.length); //5 is the length
myarr.push(78); // append at last
console.log(myarr);
myarr.pop();
console.log(myarr);

console.log("\nUpshift operation:");

myarr.unshift(9);//adds elements at first
console.log(myarr);

console.log(myarr.includes(9));//true
console.log(myarr.indexOf(19));// -1 in this case

const new_arr= myarr.join();
console.log(myarr);
console.log(new_arr); //string type return
console.log("\n\n");

//Slice . splice

console.log("A ",myarr);

const myn1=myarr.slice(1,3);

console.log(myn1);
console.log("B ",myarr); /* B  [9,11,22,33, 45,5,6,'true', 'yes']*/
console.log("\n");

const myn2=myarr.splice(1,3);//manipulate the original array - takes out the part of the array
console.log("C ",myarr); //C  [ 9, 45, 5, 6, 'true', 'yes' ]
console.log(myn2);// [ 11, 22, 33 ]


