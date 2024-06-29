//getter and setter written in combine 

//property based getter and setter 

//mordern methode is best 
class user{
    constructor(name , password){
        this.name = name
        this.password = password
    }
    get name(){
        return this._name
    }
    set name(value){
        // this.name = value //in this setter and construnctor both set the value //there is loop of constructor and setter //so the call stack get full 
        // so use the _name oor different name 
        this._name = value.toUpperCase()
    }
}
const obj = new user('Ayush' , '123')
console.log(obj.name)


// //In old day 
// function User(name, password) {
//     this._name = name;
//     this._password = password;

//     Object.defineProperty(this, 'name', {
//         get: function() {
//             return this._name.toUpperCase();
//         },
//         set: function(value) {
//             this._name = value;
//         },
//         enumerable: true, // Make the property enumerable if needed
//         configurable: true // Allow the property to be reconfigured if needed
//     });

//     Object.defineProperty(this, 'password', {
//         get: function() {
//             return this._password;
//         },
//         set: function(value) {
//             this._password = value;
//         },
//         enumerable: true, // Make the property enumerable if needed
//         configurable: true // Allow the property to be reconfigured if needed
//     });
// }
// const obj = new User('Ayush', '123');
// console.log(obj.name); // Output: Ayush
// obj.name = 'New Name';
// console.log(obj.name); 
