//control flow //if , else if , else

//if(){ //explecite
//}
//else{
//}


//short hand code 
// if () (); //implecite 


//switch 
//this is only for the equality purpose not for the not-equality
// switch(key){
//     case (value):
//         break;
//     case (value):
//         break;
//     default:
//          break;
// }

//falsy value 
// false , 0 , -0 , BigInt 0n, "" , null , undefined , NaN
//truy value 
//other then these all are truy value//specially empty function 

//for checking empty of array , object , string 
//string 
//string , by using if else falsy condition
//array 
// const array = [1,2,3]
// if(array.length == 0){
//     console.log('Array is empty')
// }else{
//     console.log('Array is not empty')
// }

// const obj = {'a' : '1'}
// if(Object.keys(obj).length == 0){
//     console.log('Obj is empty')
// }else{
//     console.log('Obj is not empty')
// }


//NULISH COALESCING OPERATOR (??) : NULL UNDEFINED  //for handeling null and undefined //not get the null or undefined at place of it we get true , false , any value 
let val
// val = null ?? 10
val = undefined ?? 11
console.log(val)


//terniary operator 
// (condition) ? (if) : (else)