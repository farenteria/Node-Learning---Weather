const request = require("request");

function geocodeAddress(address, callback){
    var encoded = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
        json: true
    },(error, response, body) =>{
        if(error){
            callback("Unable to connect to Google Servers");
        }else if(body.status === "ZERO_RESULTS"){
            callback("unable to find address");
        }else if(body.status === "OK"){
            // we pass in undefined so that errorMessage isn't populated
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    })
}



module.exports = {
    geocodeAddress
};