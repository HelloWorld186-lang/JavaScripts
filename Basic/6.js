//type of data on the basis , that how the value is stored and how the value is going to use 
//primitive //refernce (non primitive)


//primitive (call by value)
//string , number , bool , null , undefined , symbol (is use to make something unqiue) , bigint(for very big value)
//example of symbol 
const id1 = Symbol('1')
const id2 = Symbol('1')
console.log(id1 == id2) //but the value and datatype is same 
//example of bigint
const bigNumber = 123456789n //write n in the last of the big number 
console.log(bigNumber)


//refernce type (call by refrence)
//array , object , function

//datatype of the refernce type are 
//object //for function => object function


