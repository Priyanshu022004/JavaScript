const user={ //object
    username:"priyanshu",
    price:1000,

    welcomeMessg:function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this); //very long output of methods
        
    }
    
}
user.welcomeMessg()

user.username="Sam"
user.welcomeMessg() //this refers to the current context
console.log(this); // output is {} -empty object


/*function chai(){
    let username="priyanshu"
    //console.log(this);  // return too many methds and values 
    //console.log(this.username); //undefined bcz this can't be dire tly under function    
}*/
/* const chai =funtion(){
    let username ="priynashu"
    console.log(this.username);
} */

// Arrow funtion
 const chai= () => {
    let username="hitesh"
    console.log(this.username);
 }
//chai() //undefined output in arrow fuction

/*const addTwo =(num1,num2) =>{
    return num1+num2
}
console.log(addTwo(1,2));*/

//Implicit return function
//const addTwo = (num1,num2) => num1 + num2
const addTwo = (num1,num2) => (num1 + num2) //with paranthesis
console.log(addTwo(3,4));

const addobject = (num1,num2) => ({username:"hitesh"})
console.log(addobject(3,4));//{ username: 'hitesh' }

const myarray=[2,3,4,6,8]
//myarray.forEach(()=>())