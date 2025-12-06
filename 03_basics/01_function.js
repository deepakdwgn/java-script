function sayMyName (){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}
// sayMyName()

// function addTwoNumber(number1, number2){
// console.log(number1 + number2);
// }
// addTwoNumber(5, 8)

function addTwoNumber(number1, number2)
{
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("Deepak");
    
}

const result = addTwoNumber(5, 8)

// console.log("result: ", result);

function loginUserMassage(username)
{
    if (!username){
        console.log("Please Enter Your Username");
        return
    }
    return '${username} Just Logged In'
}
console.log(loginUserMassage());
