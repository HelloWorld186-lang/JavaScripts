//Object 

//singleton //this is then , when the object is created using constructor 
//singleton means this is the unique over all the code 
// const obj = new Object(); //this is the singleton object 

//object literal //this is then , when the object is create as regular 

const Sym = Symbol('Symbole')

const obj = {
    name : "ayush" , 
    'lastname' : 'chaurasia',
    [Sym] : 'New Symbol'
}

// console.log(obj.name) 
// console.log(obj['name'])
// // console.log(obj.'lastname')  //sys error 
// console.log(obj['lastname'])
// console.log(obj.Sym)  //as different varibale 
// console.log(obj[Sym]) //as symbol

//square is very important among both

//adding function to the obj
obj.say = function(){
    // console.log("Hello");
}
// console.log(obj.say) //this is the refrence of the function
// console.log(obj.say()) //this give the fuction

// extra undefined in the termial 


//methods of the object
//methode1
const userData = {
    name : 'Ayush',
}
// console.log(userData?.name) //this is the inmportant syantax because if the name is not found it will return the undefined value 
//methode2
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}
// console.log(Object.assign({} , obj1 , obj2 , obj3)) //where {} is the target object //other the value object 

//methode3
// console.log({...obj1 , ...obj2 , ...obj3}) 

// //methode4
// console.log(Object.keys(obj1))  //give in the array form 

// //methode5
// console.log(Object.values(obj1))  //give in the array form 

//methode6
// console.log(Object.entries(obj1))  //give in the array form 

//methode 7
// console.log(obj1.hasOwnProperty('1')); //return is this key is present or not in the object 





//DESTRUCTURE OF THE OBJECTS 
const data = {
    name: "Hello Duniya",
    age: "1000",
}
// console.log(data.name)
// const {name} = data
// console.log(name) 
// const {name : n} = data //name as n 
// console.log(n) 