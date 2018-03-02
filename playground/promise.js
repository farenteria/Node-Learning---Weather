// If call is succesful, we will use resolve to complete work
// Else we will reject
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        // we can only resolve or reject once. we can't do both actions successively, or the same one twice
        //resolve("Hey. It worked");
        reject("Unable to fulfill promise");
    }, 2500);
});

// first parameter will only get called is somePromise is successful
// second is for reject
somePromise.then((message) =>{
    console.log("Success", message);
}, (errorMessage) =>{
    console.log("Error: ", errorMessage)
});

