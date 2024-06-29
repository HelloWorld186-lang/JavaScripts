//Lexical scope and closure 

// function inside varibale have not axcess of the outer //but inner have the refrence for it  

// for example 

//LEXICAL SCOPIGN 
// function funcOuter(){
//     let name = 'Ayush'
//     function funcInner(){
//         console.log(name , 'inner working.') //can axcess the varible of the outer function //LEXICAL SCOPE //this is known as 
//     }
//     funcInner()
// }
// funcOuter() 
// console.log(name , 'outer working') //outer is not working 


//FOR CLOSURE 
funcOuter() 
function funcOuter() {
    let name = 'Ayush';
    function funcInner() {
        console.log(name, 'inner working.');
    }
    return funcInner; // Return the reference to the inner function //ref of the function pass 
    //diretly send the ref // but due to lexical scoping or close the variable 'name' also pass 
}

const innerFunction = funcOuter(); // Call funcOuter and get the reference to funcInner
innerFunction(); // Call the returned inner function //excute the function 
