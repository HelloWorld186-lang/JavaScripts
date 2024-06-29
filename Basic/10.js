//methode of the number 

const a = new Number (123)
//1methode 
console.log(a.toString())
//2methode 
console.log(a.toFixed(5)) //give the presion to the number 
//3methode
console.log(a.toPrecision(4))  //presize to 4 digit //use roundoff
//4methode 
const b = new Number(123456789)
console.log(b.toLocaleString('en-US'))//convert to money formate of usa  //use usa 
console.log((b.toLocaleString('en-IN'))) //use indian