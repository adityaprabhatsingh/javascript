//object literal

const user={
    name:"aditya",
    age: 20,
    locataion:"delhi",
    lastloginday:["monday","tuesday"]
    

}

console.log(user.name)



user.name='avnesh'

//Object.freeze(user) ///freeze the object so no change occur 

user.greeting=function(){
    console.log("hello world ")

}


console.log(user.greeting())

//declare use of constructor
//singleton object
const tiderUser=new Object()
const tinderUser={}
tinderUser.name='aditya'
tinderUser.login=false

//console.log(tinderUser)




const regularUser={
    email:"aditya@google.com", 
    fullname:{
    name:{
        firstname:"aditya",
        lastname:"prabhat"
    }}

}


console.log(regularUser.fullname.name.firstname )

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj4=Object.assign({},obj1,obj2) // {}. used that this all value into this 
const obj3={obj1,obj2}
const obj5={...obj1,...obj2}
console.log(obj5)






console.log(Object.keys(regularUser))
console.log(Object.values(regularUser))
console.log(Object.entries(regularUser))

///object destructuring

const course={
    coursename:"java learning",
    price:999,
    courseInstructor:"aditya"

}
const {courseInstructor}=course
console.log(courseInstructor)

// learn about api and json more





