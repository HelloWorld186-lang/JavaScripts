// <!-- Promise  -->
// The worlk is no need to done at the same time. Promise is complete in the future not at the same time
// whole concept of the promises 

// Promise // the older version for the promise is 'bluebird' 

// there is the creeation and consuption of the promises 


//promise with the resolve
// creation of the promise //prmoise is the object //conatin call back fuction (function with no name)
        const promiseOne = new Promise(function(resolve , reject){ //pomise contain the resolve(when the promise is done)  //rsject when the promise is gone to reject 
            //this contain asyn task (parallel task)
            //example 
            //data base call 
            setTimeout(function(){ //this is asyn task 
                // console.log("Creation of the promise is completed."); //first 
                resolve() //this may contian some input  //when resolve is done //then is gone to excute  //second 
            } , 1000)
        })
        // consuption of the promise 
        //then is for the resolve it 
        promiseOne.then(function(){ //contain the call back function  //default input for it is the return value of the promise created 
            // console.log('Consuption of the promise is completed.')
        })

        //above can aslo written as 
        // new Promise(function(resolve, reject){
        //     setTimeout(function(){
        //         console.log("Creation of the promise is completed.");
        //         resolve();
        //     }, 1000);
        // }).then(function(){
        //     console.log('Consuption of the promise is completed.');
        // });
        

//prmosie with the input and output 
const promiseTwo = new Promise(function(resolve , reject){
    setTimeout(() => { //this arrow call back function
        // console.log('Started!')
        const obj = {
            name : 'Ayush chaurasia',
            status : 'libary',
        }
        resolve(obj)
    }, 1000);
})
promiseTwo.then(function(obj){
    // console.log(obj.name)
    // console.log(obj.status)
})


// prmise with the reject 
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(() => {
        // console.log('Started!')
        let msg = 'Error : There is error in the code.'
        reject(msg)
    }, 1000);
})
promiseThree.catch(function(msg){ //call back function 
    // console.log(msg)
}) //catch is related to the catch 


//chaining of then 
const promiseFour = new Promise(function(resolve , reject){
    setTimeout(() => {
        // console.log('Started')
        let obj = {
            name : 'Ayush' , 
            fullname : 'Ayush chaurasia',
            college : 'MMM'
        }
        resolve(obj)
    }, 1000);
})
promiseFour
.then(function(obj){ //this take the input of the above 
    // console.log(obj)
    return obj.college
})
.then(function(college){ //this take the input of the above then //this chain is done for long 
    // console.log('College : ' , college)
})
//similar for the error //or the catch 


// finally 
const promiseFive = new Promise(function(resolve , reject){
    setTimeout(() => {
        console.log('Started')
        let booleanValue = false
        if(booleanValue == true){
            let msg = 'Boolean value is true.'
            resolve(msg)
        }
        else{
            let msg = 'Boolean value is false.'
            reject(msg)
        }
    }, 1000);
})
promiseFive
.then(function(msg){ 
    console.log(msg)
})
.catch(function(msg){
    console.log(msg)
})
.finally(function(){
    console.log("Finally always proceed.")
})


//Now we study the concept of asyn and await whcih is same as promise 