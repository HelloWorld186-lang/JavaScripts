//js is prototype based language not the object oriented language // class is only for the systax //till all things of the js is done using function isted of the class 

//obejct oriented programming //oop's //class based programing 

// objetc => collection of properties and methode 

// whey use the oops //to create the code shorter 

//part of oops //object literal // simple object as discuss previouse
//constructor //prototype //classess //instances (new , this)

//4 pillar of oops //Abstraction Encapsulation Inheritance Polymorphism



//OBJECT LITERAL 
// object literal 
const user = {
    username : 'Ayush' , 
    usernameFunc : function(){
        //call back fucntion 
        console.log(this.username)
    }
}
// console.log(user.username)
// console.log(user.usernameFunc()) //excute the fuctions  //this console print the empty because the function is not returning some thing 
// user.usernameFunc() //excute the fucntion //fuction get excuted 



//INSTANCES 
//instances 
//this 
//this is use to get the axcess of the current contexts



//CONSTRUCTOR
//if i want to make the user2 keyward the we have to write the whole code again and again
//so use the contructor function //cf provide the 'new instance'  for making new thing 
//so , this is use to make new object from the old object letrale (simple objects)
function userConstrcutor(username){
    this.username = username
    return this
}
const user1 = new userConstrcutor('Ayush chaurasia')
const user2 = new userConstrcutor('Aryan chanurasia')
// console.log(userConstrcutor.constructor) //constructor property give refrence to the self 
// console.log(user1)
// console.log(user2)
//how it work //first //new make empty {} object 
//second //new call the constructor function 
//third this is use to pu the data into that object 
//forth we get the object 