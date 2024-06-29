//closure 
// When a function is defined inside another function, it has access to the outer function's variables and parameters. Even after the outer function has finished executing, the inner function retains access to those variables and parameters. This combination of the function and its lexical environment is called a closure.

// Example
function outerFunction() {
    let outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(outerVariable); // Accessing outer function's variable
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();