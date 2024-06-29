// form of the for loop //these are array specific loop 

//for of //apply on the array or string or map 
const array = [1,2,3,4,5]
for (const value of array) {
    // console.log(value)
}

//maps
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); //map has the unique key value not depending on the value of key's value
for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);
}

//object //we can use the forof loop for the object 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
} //this show that object is no iterable 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// use for in loop 
//for in loop is use for :- array , object , not for the map 
for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for (const key in map) {
//     console.log(key); //this show nothing //becuase the forin loop is not for the map
// }


//for each loop //specially use for array //not for the other 
const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach(THIS CONTAIN THE CALL BACK FUNCTION (it has no name))
// coding.forEach(function(element){console.log(element)})
// coding.forEach((item)=>(console.log(item))) //call back function can be in the form of the any form of the funtions 

coding.forEach( (item, index, arr)=> {
    //     console.log(item, index, arr); //for each loop give element , index and arraylist
} )

//for each is VERY IMPORTANT //
const APIDate = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
// APIDate.forEach((obj)=>(console.log(`${obj.languageName} :- ${obj.languageFileName}`)))

//VERY  ITRESTING CONCEPT
// const coding = ["js", "ruby", "java", "python", "cpp"]
function printMe(item , index){ //this is function 
    console.log(`${index} :- ${item}`);
}
coding.forEach(printMe)//for each loop automatically take the item , index and arraylist