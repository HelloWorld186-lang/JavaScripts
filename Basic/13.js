//Array Methode
//array is non primitive type or refrence data type 
//array can differnt type of data type in it //it can be primitve or the non primitive datatype
//arary of js resizeable 

// const myArray = [0,1,2,3,4,5] 
const myArray = new Array(0,1,2,3,4,5)

//methode 

//1methode 
// myArray.push(6) //add last 
// myArray.pop() //remove last 

//2methode 
// myArray.unshift(6) //add first
// myArray.shift() //remove first

//3methode 
// console.log(myArray.includes(2))

// //4methode 
// console.log(myArray.indexOf(2))

// //5methode 
// console.log(myArray.join()) //return the joined string of the array using comma join

//6methode 
// console.log(myArray.slice(1,3)) //exclude the last ones // and no change in the orginal array 
// console.log(myArray)

// //7methode
// console.log(myArray.splice(1,3)) //include the last ones //and chnage in the orginaal array is that orginal array only contain those element which is not include in the new ones 
// console.log(myArray)

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
//8methode 
//give the array of all the element of these two array 
// console.log(marvel_heros.concat(dc_heros)) //limitations is that it only deal with the two array only 
//9methode  
// console.log([...marvel_heros, ...dc_heros]) //deal with many array //spread function 


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//9methode //deal with the array which contain many subarray 
// console.log(another_array.flat(Infinity)) //inplace infinity we write the depth up to which we want to go inside 

//ARRAY 

//10methode 
// console.log(Array.isArray("Ayush"))
//11methode 
// console.log(Array.from("Ayush")) //make array of all element of the string 
//12methode 
// console.log(Array.from({name: "hitesh"})) //this return the null //first we have to specify the inner value 


let score1 = 100
let score2 = 200
let score3 = 300
//13methode 
console.log(Array.of(score1, score2, score3)); //make the array of all the varible //these varibale can be of any type 
