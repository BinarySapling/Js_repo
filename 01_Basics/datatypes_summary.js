//primitive
//7 types :String, Number, Boolean, null,undefined,Symbol
//BigInt  
//reference type(Non Primitive)


const score=null;//Js is dynamically typed because data type is determined at runtime based on the value
//Array ,Objects,Functions

const id= Symbol('123')

//both are different
const anotherid=Symbol('123')
const myFUnction=function(){
    console.log("Hello World")
    }
console.table([id,anotherid,id==anotherid,typeof(myFUnction),typeof score,typeof heroes,typeof id])

myFUnction();
