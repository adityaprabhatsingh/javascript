const name ="aditya"
const age=19

console.log(name+" age is "+age)

console.log(`hello my name is ${name} and age is ${age}`)


const gameName=new String('adity prabhat')
console.log(gameName)

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.toUpperCase)

console.log(gameName.charAt(2))

const newstring=gameName.substring(0,3)// no negative no if give than it count as 0
console.log(newstring)

const slicestring=gameName.slice(-1,3)// it sllow the negative digit and well count also 
console.log(slicestring)


const ssstring="     aditya       "

console.log(ssstring)
console.log(ssstring.trim()) ///remove the all the extra spaces 

const url ="https://probable-computing-machine-5gx5w5gpq9w434659.github.dev"

console.log(url.replace('probable','hello'))
console.log(url)
console.log(url.includes('hello'))
// learn a method of the string in depth 
