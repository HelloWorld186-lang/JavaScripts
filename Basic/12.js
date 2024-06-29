//Dates //the date is in the formate of the milisecond form the 1970

let date = new Date();
//to
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.toISOString())
// console.log(date.toUTCString())
// console.log(date.getTimezoneOffset())

// important 
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString())
//customies things 
let localDateString = date.toLocaleString('default', {
    weekday: 'long',   
    year: 'numeric',    
    month: 'long',      
    day: 'numeric',    
    hour: 'numeric',    
    minute: 'numeric',  
    second: 'numeric', 
    timeZoneName: 'longGeneric' 
});
console.log(localDateString)

// console.log(date.toJSON())
//get 
// console.log(date.getTime())//the date is in the formate of the milisecond form the 1970
//more get realted function



let dateMiliSecond = Date.now() //the date is in the formate of the milisecond form the 1970
// console.log(dateMiliSecond)
// console.log(date.getTime()) //milisecond
//converting the timestamp to date formate 
// let dateDay = new Date(dateMiliSecond)
// console.log(dateDay.toLocaleString())
