
var c =300 //global scope

let a=400
if(true){
    let a = 10
    const b=20  //block scope
    var c=30
    console.log("inner:",a);
    
}

//console.log(a); //400
//console.log(b);
//console.log(c); //30

function one(){
    const username="Priyanshu"
    function two(){
        const website="youtube"
        console.log(username);        
    }
    //console.log(website); gives error
    two()
    
}
//one()

if(true){
    const username="hello"
    if(username==="hello")
    {
        const website="yotube"
        console.log(username+website);    //helloyotube 
    }
    //console.log(website);    //error bcz outside scope
}
//console.log(username); //error bcz outside scope

//**********************************Interesting**************** */
//funtion declaration type 1
function addone(num){
    return num+1
}
addone(5) //no output bcz return
console.log(addone(5)); //6


//function declrartion type 2 , also called expression
const addTwo=function(num){
    return num+2
}
addTwo(5) //no output bcz return
