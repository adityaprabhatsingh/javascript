//for of 


const arr=[1,2,3,4,5]


//for(iterator of object){}
for(const i of arr){
    console.log(i)

}

const s="aditya"

for(const i of s){
    console.log(`each char is ${i}`)
}



//map   ->unique and orderes value 
 const map =new Map()
 map.set('IN',"india ")
 map.set('US',"united state")

 console.log(map)

 for(const [key,value] of map){
    console.log(key,':-',value)
 }
 
  const myobj={
    game2: 'spiderman',
    game2: 'ironman'
  }

 // for(const [key,value] of myobj){//-> myobj is not iternable 
   // console.log(i)
  //}
  // so for in loop is use

  for(const key in myobj){
    console.log(key)
    console.log(myobj[key])
  }

  const programming =['js','python','ruby']

  for(const key in programming){
    console.log(key )
    console.log(programming[key 

    ])

  }


  //for each 

  const coding =['js','python','ruby','java','cpp']


  coding.forEach( function(item ){

    //we can write any function here     function leke aa rha ha value arr me se

    console.log(item)


  })


  coding.forEach(greet =()=>{
    console.log(item)

  })



  function printme(item,index,arr){
    console.log(item,index,arr)
  }
  coding.forEach(printme)




  mycoding.forEach((item)=>{
    console.log(item)
  }

)



 
