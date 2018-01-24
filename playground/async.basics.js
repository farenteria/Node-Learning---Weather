console.log("Starting app");

setTimeout(() => {
    console.log("Inside of Callback");
}, 2000);

setTimeout(() =>{
    console.log("Second callback")
}, 0);

console.log("Finishing App");