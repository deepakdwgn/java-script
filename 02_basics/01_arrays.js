// Arrays

const myArrey = [0, 1, 2, 3, 4, 5]

const myGagets = ["mac", "mobile", "iphone"]

const myArrey2 = new Array(1, 2, 3, 4)

// console.log(myArrey[4]);
// console.log(myGagets[2]);
// console.log(myArrey2[2]);


// Arrey method

// myArrey.push(6)
// myArrey.push(8)
// myArrey.pop()

// myArrey.unshift(8)
myArrey.shift()

// console.log(myArrey.includes(9));
// console.log(myArrey.indexOf(19));

newArre = myArrey.join()

// console.log(newArre);
// console.log(typeof newArre);

console.log(myArrey);

// slice, splice

console.log("A", myArrey);


const myn1 = myArrey.slice(1, 3)
console.log("B", myArrey);
console.log(myn1);

const myn2 = myArrey.splice(1, 3)
console.log("C", myArrey);
console.log(myn2);

