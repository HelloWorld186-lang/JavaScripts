//Asyn and Await is similar like then and catch of the promise 

//because in the promise //the code is gone to wait for some time 

//similarly async and await is working 

//this not handeled catch 
// const createPromise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let isCorrect = false;
//         if (isCorrect) {
//             let msg = 'Correct is running.';
//             resolve(msg);
//         } else {
//             let msg = 'Incorrect is running.';
//             reject(msg);
//         }
//     }, 2000);
// });
// async function consumePromise() {
//         const response = await createPromise; // because promise is the object 
//         console.log(response);
// }
// consumePromise(); //this important to call the async function 


// we have addition add the catch to hndel the error 
const createPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let isCorrect = false;
        if (isCorrect) {
            let msg = 'Correct is running.';
            resolve(msg);
        } else {
            let msg = 'Incorrect is running.';
            reject(msg);
        }
    }, 2000);
});
async function consumePromise() {
    try {
        const response = await createPromise; // because promise is the object 
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
consumePromise(); //this important to call the async function 

