// REDUCE //this give the cummualative value // which is use in making shoping bill 


const myNums = [1, 2, 3]
const initValue = 0 //starting value of accumulator or acc
const myTotal = myNums.reduce(function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return (acc + currval)
}, initValue)
// console.log(`Final sum :- ${myTotal}`)



// shoping cart example 
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);