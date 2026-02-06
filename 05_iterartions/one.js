// for

for(let inde =0;inde<=10;inde++){
    const ele=inde;
    console.log(ele);
    
}

/*for (let i = 1; i <=5; i++) {
    for (let j = 1; j <=5; j++) {
        console.log(i+ ' * ' + j + '= ' + i*j);      
    }
    console.log("\n");
    
}*/

let myarray=['flash','batman','catman'];
for (let i = 0; i < myarray.length; i++) {
    const element = myarray[i];
    console.log(element);
    
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}