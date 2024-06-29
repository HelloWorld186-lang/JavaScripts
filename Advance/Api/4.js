//fetch for fetching the data from the api 

//fetch is the prmoise //means it is the basically the object 

//Note :- the fetch handel 404 as the response not as the error 

//using fectch we can get the data but also we can send the data to to the browser //useing its api key 

//Note :- all the async use the queue where all the fucntion use the stack call , the fectch use the priorty queue or the micro task queue , so firstly add to the stack call as compare to the other asyn and function call

//see 2 image //of api folder 

//use fetch with the then and catch system 
const fetchingApi1 = fetch('https://api.github.com/users/hiteshchoudhary'); // create the promise
fetchingApi1 //use the chaining 
    .then(function(response) {
        return response.json(); // call json() method as a function
    })
    .then(function(data) { // handle the parsed JSON response
        console.log(data);
    })
    .catch(function(error) {
        console.error('Error:', error); // log the error
    });

////use fetch with the async and await 
const fetchingApi2 = fetch('https://api.github.com/users/hiteshchoudhary'); // create the promise
async function getResponse() {
    try {
        const response = await fetchingApi2; // wait for the fetch promise to resolve //this because prmoise is the object 
        const responsedData = await response.json(); // call json() method as a function and await its result //jsonify may take some time 
        console.log(responsedData);
    } catch (error) {
        console.error('Error:', error); // log the error
    }
}
getResponse(); // call the async function to get and log the response data

