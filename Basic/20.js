//IIFE
// immediately invoked function expression 

//function which is automatically run 

//formate (function definitions)(excution of functions)

//name iife 
(function iifeFunction(name){
    console.log(`Say hello to ${name}`)
})('Ayush'); //';' is medentory for the end of iife function //because if ; is not there then the function not known where to stop this function

//non name iife 
((name) => {
    console.log(`Say hello to ${name}`)
})('Aryan');