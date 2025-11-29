// +++ Dates ++++

let toDate = new Date()
// console.log(toDate);
// console.log(toDate.toString());
// console.log(toDate.toDateString());
// console.log(toDate.toISOString());
// console.log(toDate.toJSON());
// console.log(toDate.toLocaleDateString());
// console.log(toDate.toLocaleString());

// console.log(typeof toDate);

// let myNewDate = new Date(2025, 0, 24)
// let myNewDate = new Date(2025, 0, 24, 5, 19)
// let myNewDate = new Date("2025-11-29")
let myNewDate = new Date("11-29-2025")

// console.log(myNewDate.toLocaleString());


let myDateStamp = Date.now()

// console.log(myDateStamp);

// console.log(myNewDate.getTime());

// console.log(Math.floor(Date.now() /1000));

let newDates = new Date()

console.log(newDates);
console.log(newDates.getDate());
console.log(newDates.getDay());
console.log(newDates.getMonth());
console.log(newDates.getTime());


newDates.toLocaleString('default', {
    weekday: "long",
    })