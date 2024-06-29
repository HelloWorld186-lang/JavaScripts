//maths //specially random number 

console.log(Math.abs(-40))
console.log(Math.round(4.56))
console.log(Math.ceil(4.1)) //same floor 
console.log(Math.max(1,2,3,4,5)) //same min

//important random
console.log(Math.random()) //number between

console.log(Math.floor((Math.random()) * 1000) + 1) //now this will give the floor number between 1 to 10 
//first make random number b/w 0 to 1 , then multiply with the 10 , then floor of it , it give the 0 to 9 value , then add 1 to it , then it give the number between 1 to 10 


const mini = 20
const maxi = 45 
//random number between 20 to 45
const rangeOfNumber = maxi - mini + 1 
const randomNumber = Math.floor((Math.random() * (rangeOfNumber))) + mini
console.log(randomNumber)