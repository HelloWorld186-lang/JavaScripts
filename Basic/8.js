//memory 
//stack and heap 

//stack is use to store the primitive data type 
//make copy of the original varibale 

//heap is use to store the non primitive data type 
//make a reference of the original varibale 


//example for heap 
const obj1 = {
    a : 1,
    b : 2,
}
const obj2 = obj1
obj2.b = 3
console.log(obj1.b)
console.log(obj2.b)
//both have the same value because the refrence got change 
