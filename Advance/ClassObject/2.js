//prototype //js script //beacuse behavior of the js is => prototypial behavioure //means js go to parent node when it not getting some things //all methode or the function is conatined inside it 

//see the image 
//behavioure of the js is prototypical behavioure //all thing of the js is object eiter it is any data type or the methode and this object is go inside and inside to null //so all thing of js can axcess as the object either it is object or not //object contain all the fuction //but is depending on the that it take that methode of object or not 

//constructor function
function Thing(name, price) {
    this.name = name;
    this.price = price;
}
// Add methods to the prototype
Thing.prototype.printName = function() {
    // console.log('Name:', this.name);
};
Thing.prototype.printPrice = function() {
    // console.log('Price:', this.price);
};
const chai = new Thing('chai', 25);
// console.log(chai);               // Output: Thing { name: 'chai', price: 25 }
chai.printName();                // Output: Name: chai
chai.printPrice();               // Output: Price: 25
// Note: The following lines were corrected to avoid referencing undefined variable and methods
// console.log(chai.printName);     // Output: [Function: printName]
// console.log(chai.printPrice);    // Output: [Function: printPrice]

//new is use to call the constructor fuction thing which include all new addition added function into it 

//important notes for the new instances  

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

//see image 
//prototype example //how to add the methode to the protype of the function //Notes if we give methode to protype of the array , string or number then this methode is not gone to object //but if we give methode to the prototype of the object , then this is axcess to all of them either it is number , array or string //beacuse all thing like function , array , string is passing through the object 
//array //object
let arrayOfHero = ['Hulk' , "Ironman"]
let objOfHero = {
    hero1 : "Hulk" , 
    hero2 : 'Ironman'
}
//give the prototype to the object 
// if we give methode to the prototype of the object , then this is axcess to all of them either it is number , array or string //beacuse all thing like function , array , string is passing through the object 
Object.prototype.printMe = function(){
    console.log(this)
}
// arrayOfHero.printMe()
// objOfHero.printMe() 
//give the prototype to the Array 
// if we give methode to protype of the array , string or number then this methode is not gone to object
Array.prototype.printMe2 = function(){
    console.log(this)
}
arrayOfHero.printMe2()
// objOfHero.printMe2() //this show the error   //object cannot use the prototype of the array , string or the function //but they can use the protype of the object 