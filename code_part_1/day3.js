let number=400
console.log(number)

number =new Number(100)
console.log(number)

console.log(number.toString().length)
console.log(number.toFixed(2))
///learn more about the number function used and we can also conver t number onto string and appy the functino of the string


//+++++++++++++++++++++Math+++++++++++++++++==++++++++++++
console.log(Math.random());
console.log((Math.random()*10)+1)


const max=20
const min=10

console.log(Math.floor(Math.random() * (max-min+1))+min)

//learn more during revision 


//+++++++++++++++++++++date and time+++++++++++++++++++++
let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())

console.log(typeof myDate) //object

//let myCreatedDate=new Date(2026,2,22)//  month start with 0.  jan-> 0

let mycreateddate=new Date("2026-02-22")
console.log(mycreateddate.toDateString())
console.log(mycreateddate.toLocaleString())

let timestamp=Date.now()
console.log(timestamp);
console.log(timestamp.getTime())
console.log(mycreateddate.getDay)
console.log(mycreateddate.getMonth)


mycreateddate.toLocaleDateString('default',{
    weekday:"long"
    //can used to change the local date format and learn more
})
