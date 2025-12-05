const facebookuser = new Object()

facebookuser.id = "356hdy"
facebookuser.name = "Prabhash"
facebookuser.isLoggedIn = false

// console.log(facebookuser);

const newuser = {
    email: "deepak@gmail.com",
    userName:{
        fullname: {
            firstName: "Deepak",
            lastName: "Dewangan"
        }
    }
}
// console.log(newuser.userName.fullname.lastName);

const obj1 = {1: "A", 2: "B"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "aa", 6: "bb"}
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const user = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 2,
        email: "hel@gamil.com"
    },
    {
        id: 3,
        email: "he@gamil.com"
    }
]
user[2].email 
console.log(facebookuser);

console.log(Object.keys(facebookuser));
// console.log(Object.values(facebookuser.name));
console.log(Object.values(facebookuser));
console.log(Object.entries(facebookuser));

console.log(facebookuser.hasOwnProperty('isLoggedIn'));
