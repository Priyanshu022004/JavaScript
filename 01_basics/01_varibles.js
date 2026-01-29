const accountId = 13456;
let accountEmail ="pj@gogo.com"
var accountPass="12345" // not safe in production due to block scope and fuctional scope
accountCity="Bengaluru"
let accountState; //undefined till now 
// accountId=2 const cant be changed in js

console.log(accountId);

accountEmail="jj@emsil.com"
accountPass="9999"
accountCity="Patna"

//prints as table 
console.table([accountId,accountEmail,accountPass,accountCity,accountState])

