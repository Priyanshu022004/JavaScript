//used to perform the repetitive tasks

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("U");
    console.log("L");  
}
sayMyName(); //funtion call

console.log("\n");

function addNumber(num1,num2){
    console.log(num1 + num2);
    
}
addNumber(4,5);

let result=addNumber(3,7); //10 undefined
console.log(result);


function addTwoNumber(num1,num2){
    let res=num1+num2; //return num1+ num2;
    return res;
    
}
let x=addTwoNumber(4,5);
console.log(x);


function loginUserMessage(username="sam") //default parameter
{
    if(username===undefined) //if(!username)
    {
        console.log("Please enter a username!!!");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Priyanshu")); //Priyanshu just logged in
console.log(loginUserMessage()); //Please enter a username!!! -undefined
// with default paramter sam just logged in


function calcCartPrice(val1,val2,...num1) //rest operator
{
    return num1;
}
//console.log(calcCartPrice(200,400,500,2000));
console.log("\n");


const user={
    username:"priynshu",
    price:200
}
function handleObject(anyobject) //anyobject is generic for all objects
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user); //Username is priynshu and price is 200

handleObject(
    {
        username:"Sam",
        price:400
    }
); //Username is Sam and price is 400

const mynewarray=[200,400,300,600]

function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(mynewarray)); //400
console.log(returnSecondValue([100,300,400])); //300


