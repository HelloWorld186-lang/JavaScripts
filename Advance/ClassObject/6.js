//oops of the js is completed till 

//now we study the sytax for it only //all the backside working of all study in the previouse 


// contrutor 

// class user {
//     constructor(name , password){
//         this.name = name,
//         this.password = password
//     }
//     //methode
//     passwordEncryt(){
//         this.password = `jkl${this.password}asdfgh`
//     }
// }
// const obj1 = new user('Ayush' , 'chai')
// console.log(obj1.name)
// console.log(obj1.password)
// obj1.passwordEncryt() //excute this methode  //no need to console it because the function is not returning any things 
// console.log(obj1.password)
//how the above code work behind the scene or backend 
// function user(name , password) { //becuase contructor is just a function  
//     this.name = name, 
//     this.password = password
// }
// user.prototype.passwordEncryt = function (){
//     this.password = `jkl${this.password}asdfgh`
// }
// const obj1 = new user('Ayush' , 'chai')
// console.log(obj1.name)
// console.log(obj1.password)
// obj1.passwordEncryt() 
// console.log(obj1.password)


//inheritance 
class User {
    constructor(username) {
        this.username = username;
    }
    isAvailable() {
        console.log("Yes");
    }
}
class Teacher extends User {
    constructor(username, password) {
        super(username); // this passes username to the superclass (User)
        this.password = password;
    }
    isFree() {
        console.log('No');
    }
}
const obj1 = new Teacher('Ayush', '12345678');
console.log(obj1); // Output: Teacher { username: 'Ayush', password: '12345678' }
obj1.isAvailable(); // Output: Yes
obj1.isFree(); // Output: No
console.log(obj1 instanceof Teacher); // Output: true
console.log(obj1 instanceof User); // Output: true
//instance of is use to get bool of the value that the obj is belong from the particular class 


//STATIC 

//static is use in the class with the methode //if we use the static with the methode then inheritate child class or instacne is not able to use that class 
// for example in the above    static if isFree() {
//                                 console.log('No');
//                             }
//then isfree methode is not axcessable for the obj1 and child class of it 