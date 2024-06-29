//note => this is use to get the same context refrence
//note => this is use to axcess the same object element 
//only work inside the object , not only inside the function
// console.log(this) //give the empty obj //because there is no global variable 
// const person = {
//     name: 'Alice',
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}`);
//       console.log(this) //give the refrence of the object 
//     },
// };
// person.greet()

//many form of function

// 1FORM
function addNumber_1(a , b){
    // console.log(this) //give many things which is related to the functions
    return a + b
}
console.log(addNumber_1(1,2))

//2FORM
const addNumber_2 = function(a , b){ 
    // console.log(this) //give many things which is related to the functions
    return a + b
}
console.log(addNumber_2(3,4))


//VERY IMPORTANT 


//3FORM (arrow function)
const arraowFunc1 = (name)=>{ //() contain all the paramter of the arrowFunctions
    console.log(name)
    console.log(this) //give the empty 
}
// arraowFunc1('Ayush')

//important of the arraow  functions
// const arraowFunc2 = (a , b)=>{  //explecite 
//     return a + b //if currly brackect then have to write the return 
// }
const arraowFunc2 = (a , b)=>(a + b) //implecite 
//if small brackect then not have to write the return 
console.log(arraowFunc2(1 , 9))