const request = require("request");

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=3301+Ward+Robert+Place+El+Paso",
    json: true
},(error, response, body) =>{
    console.log(body);
});