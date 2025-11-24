const name = "Deepak"
const age = 34

// console.log(name + age + " Value");

console.log('hello my name is ${name} and my age is ${age}');

const gameName = new String('deepak-dk-com')

console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('p'));


const newString = gameName.substring(0, 4)
console.log(newString);
const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring);

const newStringOne = "   Deepak   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://apklust.com/en/animal-company-mods%20apk"

console.log(url.replace('%20', '-'));

console.log(url.includes('lust'));
console.log(url.includes('lord'));

console.log(gameName.split('-'));

