// Data Types

// 1. Premitive
// 7 Types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

const score = 100
const scoreValue = 100.5

const isloggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 346385668726426836n

// 2. Referance (Non Primitive)
// Array, object, function. 

const heros = ["Shaktiman", "Aryamaan", "Naagraj", "Doga"]

let myObjective = {
    name: "Deepak",
    age: "34"
}

const myFunction = function(){
console.log("Hello World");

}