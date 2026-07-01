//const coding =['js','ruby','python','java']

//const values=coding.forEach((item)=>{
   // console.log(item )
   // return item // return undefined
//})

//console.log(values)


const num =[1,2,3,4,5,6,7,8,9,10]

//const newnum=num.filter((num)=>num>4
//{return num>4}.  if we use scope so we have use a return only 
//)



//const newnums=[]

//num.forEach((num)=>{
  //  if(num>4){
     //   newnums.push(num)
   // }
//}).  //if donot want to use a filter we can use this 
//console.log(newnums)


const newnum=num.map((num)=> num*10).map((num)=>num+1)
console.log(newnum)



//reduce 

const arr=[1,2,3,4,5]

const initialvalue=0;

const sumwithinitai=arr.reduce(
    (accumulator,currentvalue) => accumulator+currentvalue,initialvalue
);

console.log(sumwithinitai)