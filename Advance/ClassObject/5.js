//passing of context useing ''.call''

// function setUserName(username){
//     this.username = username
//     // console.log(this) //here this is the context for the global //in  node this is empty  
// }
// function createAccount (username , password){
//     setUserName(username)
//     this.password = password
// }
// const user = new createAccount('Ayush' , '12345')
// console.log(user) //this will not contain the username //becuase function is js is working  in formate of stack //so when the function is gone to excute this gone to delete //so when the first function is gone to run then it get delet form the stack and 'this' also get deleted 
// //so we have to give the refrence of second function to the above fucntion 'use :- .call

function setUserName(username){
    this.username = username
}
function createAccount (username , password){
    setUserName.call(this , username) //passing the refrence of the second function to the first function //useig call (this is the refrence of second function context)
    this.password = password
}
const user = new createAccount('Ayush' , '12345')
console.log(user) //this contain the username and password 
