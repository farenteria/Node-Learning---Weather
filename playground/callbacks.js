var getUser = (id, callback) =>{
    var user = {
        id: id,
        name: "Fernando"
    };

    setTimeout(() =>{
        callback(user);  
    }, 3000);
};

// Assume that user gets data
getUser(31, (userObject) =>{
    console.log(userObject);
});