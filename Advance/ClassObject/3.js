//Inheritance 
//prototype of one is to axcess by the other 
// old way 
//for example 
const user = {
    name: 'chai'
};
const teacher = {
    makeVideo: true,
    __proto__: user  // teacher inherits from user
};
const TA = {
    idAvailable: true,
    __proto__: teacher  // TA inherits from teacher
};
// Testing the inheritance chain
console.log(TA.name);       // Output: chai
console.log(TA.makeVideo);  // Output: true
console.log(TA.idAvailable); // Output: true
console.log(teacher.name);  // Output: chai
console.log(user.name);     // Output: chai
// or way 
// teacher.__proto__ = user //teacher inheritate the prototype from user to us 
//ta inhertate the prototype from the teacher and teacher inheritate the prototype from the user 

//mordern way for the inheritance 
//for example 

Object.setPrototypeOf(TA , teacher) // TA inherits from teacher