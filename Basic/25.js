//for each //map //filter 

//for each in previouse //not return value 

//map is similar as foreach , only chnage is that it return the value //it can return any value false or true 
// Purpose: The map method is used to transform each element of an array and create a new array with the transformed elements.
// Return Value: It returns a new array with the same number of elements as the original array, but with each element transformed by the provided function.
// Function Signature: The callback function you provide takes each element of the array and returns a new value that replaces the original element in the new array.

//filter is similar as foreach , only chnage is that it return the value //it can return any value only true value  
// Purpose: The primary purpose of filter is to selectively include elements from an array based on a condition.
// Return Value: It returns a new array containing only the elements for which the provided function returns true.
// Function Signature: The callback function provided to filter takes three arguments:
// Usage: The callback function returns true to include the element in the new array, or false to exclude it.

//for each 
const coding = ["js", "ruby", "java", "python", "cpp"]
const values = coding.forEach( (item) => {
    return item
} )
console.log(values) //undefined 

//filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return (num > 4) //this is acting as a control flow but return only the element //not the changed element 
} )
// console.log(newNums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userBooks = books.filter( (bk) => (bk.genre === 'History')) //this is condtion only not returning the specific part of the array object element //it cannot give the array object element any key's value 
//   let userBooks = books.filter( (bk) => {return bk.genre === 'History'})
//   console.log(userBooks);


//map
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums2 = myNumers.map( (num) => { return num + 10}) //this is not for getting the filtered value this is only for the give the new array whose element is updated using the function 
// console.log(newNums2)  
// myNumers.forEach( (num) => {return num + 10})  //this is not for updating the value of the array (there is no chnage in the original value of the array ) and not for return new array with the update value lement 


//CHAINING

const newNums3 = myNumers
                .map((num) => num * 10 ) //this apply on the orignial array 
                .map( (num) => num + 1) //this is apply on the updateed array 
                .filter( (num) => num >= 40) //this is apply on the next to updated array 

console.log(newNums3); 
