//SCOPE 

//let and const act as a block scope or global scope 
//var act as a global scope only

//globale scope //block scope
// let a = 300
// if(true){
//     a = 30 //global scope 
//     console.log(a)//print 300
//     let a = 30 //block scope
//     console.log(a)//print 30
// }
// console.log(a)//print 300


//call of function and funnction is stored inside the stack 


//make variable of functions
function addNumber_1(a , b){
    return a + b
}
console.log(addNumber_1(1,2))
const addNumber_2 = function(a , b){ //fuction axess by the name of varibale name 
    return a + b
}
console.log(addNumber_2(3,4))