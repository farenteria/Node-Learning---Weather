const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=3301+Ward+Robert+Place+El+Paso",
    json: true
},(error, response, body) =>{
    // last integer is # of spaces
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});