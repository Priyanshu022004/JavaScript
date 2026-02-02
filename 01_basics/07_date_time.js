let mydate=new Date();
console.log(mydate); //output: 2026-01-31T07:54:43.937Z
console.log(mydate.toString()); //Sat Jan 31 2026 13:24:43 GMT+0530 (India Standard Time)
console.log(mydate.toDateString());// Sat Jan 31 2026
console.log(mydate.toISOString()); // 2026-01-31T07:54:43.937Z
console.log(mydate.toLocaleString());// 31/1/2026, 1:24:43 pm

console.log(typeof mydate); //object

let mycreatedDate=new Date(2026,0,31);
console.log(mycreatedDate.toDateString()); //Fri Jan 23 2026
console.log("\n\n");

//let createdDate=new Date("2026-01-31");
let timestamp= Date.now();
console.log(timestamp);// output: 1769846314133 in ms
console.log(mycreatedDate.getTime()); // 1769797800000

let newDate= new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default',
    {weekday:"long"   });


    