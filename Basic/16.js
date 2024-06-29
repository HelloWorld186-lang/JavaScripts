//Function

//SIMPLE FUNCTION
// function consoleFunction(){
//     console.log('Hello world!')
// }
// consoleFunction// this is the refrence of the function 
// consoleFunction()//this excute the function

//DEFAULT PARAMETER AND RETURNING FUNCTION 
// function addTwoNumbers(number1 =0, number2=0){ //number1 and number2 are the parameter 
//     //0 is the default value of the number 1 and 2 
//     return number1 + number2 //return the value 
// }
// console.log(addTwoNumbers(1,2))

//REST PARAMETER //if many input parameter  
function func(a , b , ...c){
    return(c) //return in the form of the array 
} 
console.log(func(1,2,3,4,5,6,7,8,9,10))

//NOTE => parameter can be of any datatype