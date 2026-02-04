//Immediatel Invoked function Expression(IIFE)
//imdiately executes the file and to mitigate the pollution caused by global variable

//here the funtion is wrapped in (funtion xyz())()
(function chai(){
    console.log(`DB CONECTED`);
    
})();

((name) => {
    console.log(`DB CONNECTEDT TWO ${name}`);  
})('priyanshu');


