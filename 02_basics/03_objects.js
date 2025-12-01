 // singleton
 // object.create

 // object literals

const mySym = Symbol("mykey")

const jsuser = {
    name: "Deepak",
    "full name": "Deepak Dewangan",
    [mySym]: "myKey1",
    age: 34,
    location: "Bilaspur",
    email: "deepak@google.com",
    isLoggedIn: false,
    lastLoginDate: ["Monday", "Friday"]
}
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "deepak@facebook.com"
// Object.freeze(jsuser)
jsuser.email = "deepak@instagram.com"
// console.log(jsuser);


jsuser.greating = function(){
    console.log("Hello JS User");
    
}

jsuser.greatingTwo = function(){
    console.log('Hello JS User, ${this.location}');
}
console.log(jsuser.greating);
console.log(jsuser.greating());
console.log(jsuser.greatingTwo());
