const accountId = 276546
let accountEmail = "deepak@google.com"
var accountPassword = "12345"
accountCity = "Bilaspur"
let accountState;

// accountId = 5 // not allowed

accountEmail = "umesh@google.com"
accountPassword = "54321"
accountCity = "Raipur"

/*
prefer not to use var
becouse of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

