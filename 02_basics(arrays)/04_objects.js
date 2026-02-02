//const tinderUser= new Object();
const tinderUser = {}; //another way to declare objects
tinderUser.id="123abc";
tinderUser.name="sam"
tinderUser.isLoogedIn=false
console.log(tinderUser); //{ id: '123abc', name: 'sam', isLoogedIn: false }


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname); // the question marks add option safe : if does not exist then handle s case

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3= Object.assign({},obj1,obj2); //{} confirms that objects are in same {} 
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5= Object.assign({},obj1,obj2,obj4); 
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6={...obj1,...obj2}; //spead operatos
console.log(obj6); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // return an array of keys :[ 'id', 'name', 'isLoogedIn' ]

console.log(Object.values(tinderUser)); //[ '123abc', 'sam', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoogedIn', false ] ]

 console.log(tinderUser.hasOwnProperty('isLoggedIn')); //false

 const course={
    coursename:"js tutorial",
    price:"1000",
    courseInstructor:"hitesh"
 }
 const {courseInstructor: instruc}=course;
 console.log(instruc); //destructure of objects foe cleaner codes 

{
    name:"priyanshu",
    course:"javascript",
    price:"free"
}
 