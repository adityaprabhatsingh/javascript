function myname(){
    console.log("a")
    console.log("d")
    console.log("i")
    console.log("t")
    console.log("y")
    console.log("a")

}

//myname()
 
function add(num1,num2){
    //let resut = num2+num1
    console.log(num1+num2)
    //return result 
}

add(4,5)
add(4,"5")
add(4,null)

function add(...num1){
    return num1
}
//->make the all value into the array 
//console.log(add(200,400,500,600))

const user={
    name:"aditya",
    price:299
}

function handleObject(anyobject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}


