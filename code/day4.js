//+++++++++++++++++++Array++++++++++++++++++++++++
//in javascipt it is dynamic memory ,mixed also datatype,zero based indexing,create a shallow copy (change also in parent ,)
const myarr=[1,2,3,4,5,6]
const myarr1=["saktiman","heros"]
const myarr2=new Array(1,2,3,4,5,6,7)

console.log(myarr[0])

//array method 

myarr.push(4)//->add to the last
myarr.push(3)

myarr.pop()//->remove from the last

myarr.unshift(6)//->add to the start 
myarr.shift()//->remive from the start 
console.log(myarr)

console.log(myarr.includes(2))//->check if the 9 is avaible on the arr or not(true/false)

console.log(myarr.indexOf(9))//->used to check the the index if not avaible it show (-1)

const newarr=myarr.join()//->change the type of number value to the string format
console.log()