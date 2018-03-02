const request = require("request");

var geocodeAddress = (address) => {
    return new Promise((resolve, rejeect) => {
        var encoded = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
            json: true
        },(error, response, body) =>{
            if(error){
                reject("Unable to connect to Google Servers");
            }else if(body.status === "ZERO_RESULTS"){
                reject("unable to find address");
            }else if(body.status === "OK"){
                // we pass in undefined so that errorMessage isn't populated
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress("00000").then((location) =>{
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});