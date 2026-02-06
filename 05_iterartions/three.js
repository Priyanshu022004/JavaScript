
//FOR OF

//["","",""]
//[{}{}{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings="hello Priyanshu"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
    
}

//Map

const map= new Map()
map.set('IN',"India")
map.set('USA',"United states of america")

console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);   
}

const myobject={'game':'NFS',
    'game2':'spiderman'
}
for (const [key,value] of myobject) {
    console.log(key,':-',value); //error bcz object is not iterable
}

