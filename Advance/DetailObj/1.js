const objDetail = Object.getOwnPropertyDescriptor(Math , 'PI') //module and then key 
// console.log(objDetail)
//give the all property of the object 
// {                            //so it is constant 
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }



//If want to change the object hidden property 
const chai = {
    name: 'ginger chai',
    //methode
    orderChai: function(){
        console.log("chai nhi bni");
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,'name')) //chai is the object and name is the key 
// {            //so it is changeable 
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
//change the property so the chai is not chnageable 
Object.defineProperty(chai, 'name', { //class then key 
    writable: false,    
})
// console.log(Object.getOwnPropertyDescriptor(chai,'name')) //chai is the object and name is the key 
//now try change the value //but the value is not get chnage 
// chai.name = 'Ayush'
// console.log(chai.name)



//now iterate the object using for loop 
const chai2 = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}
//now iterate the object using for loop 
for (let [key, value] of Object.entries(chai2)) {
    // if (typeof value !== 'function') { //this written not to print the function 
        console.log(`${key} : ${value}`);
    // }
}