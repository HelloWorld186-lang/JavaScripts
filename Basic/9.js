//Important methode of the string 

// const name = "Ayush chaurasia"
// const say = "Hello!" 
// //best way of writing string 
// console.log(`${name} says to you all ${say}`)


const str = new String ('Hello world! ') //this is because if we use this then we get specify for the string and get the prototype (object of all the protype) of it 
// 1methode
console.log(str.toLowerCase())
//2methode
console.log(str.toUpperCase())
//3methode 
console.log(str.toString())
//4methode
console.log(str.substring(1 , 5)) //first include but the second is not include 
//5methode 
console.log(str.slice(1 , -5))
//6methode 
console.log(str.includes('Hello'))
//7methode
console.log(str.match('world')) //give the first matching index 
console.log(str.match('world').index) //give the first matching index 
//8methode
console.log(str.concat(' means' , ' Hello duniya!'))
//9methode
console.log(str.trim()) //trim the starting and ending white space 
//10methode
console.log(eval('1 + 3'))  //this will evaluate the string which is the mathematicale expersion
//11methode
console.log(str.replace('Hello' , 'Hellooo'))
//12methode
// console.log(str.test("1"));//this is not still working
// 13methode 
console.log(str.repeat(5)) //this will repeat the str 5 times 
// 14methode 
console.log(str.search('zllo')) //return the postion of the first matched string //else give -1 ////same as match 
//15methode
console.log(escape(str)) //convert the string to the another version so it can easily transmitted to diffrent computer
console.log(encodeURI((str))) //we can use the encode inplace of the escape //to make the url 
//16methode 
console.log((encodeURI((str))).split('%20')) //split into the array 
//17methode 
// charAt 