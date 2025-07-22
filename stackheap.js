// primitive datatypes (number, string, boolean, null, undefined, symbol, bigint)

const name = "sarvesh"
const score = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')

console.log(typeof score);

// non primitive(reference) [Array, objects, functions]

//const cars = ["Porsche", "Bugatti", "Lamborghini"]

let myObj = {
    name : "Sarvesh",
    age : 21
}

const myFunction = function(){
    console.log("Hello World");
}