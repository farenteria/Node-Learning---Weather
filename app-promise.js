const yargs = require("yargs");
const axios = require("axios");
const argv = yargs
    .options({
        address: {
            demand: true,
            alias: "a",
            describe: "Address to fetch weather for",
            string: true
        }
    })
    .help()
    .alias("help", "h")
    .argv;

var encoded = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === "ZERO_RESULTS"){
        throw new Error("Unable to find address");
    }

    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `"https://api.darksky.net/forecast/bb36cfc3ba05344a98c6bbf40d4e0a80/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then(() => {
    var temperature = response.data.currently.temperature;
    var appTemperature = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}. It feels like ${appTemperature}.`);
}).catch((e) => {
    if(e.code === "ENOTFOUND"){
        console.log("Unable to connect to API servers");
    }else{
        console.log(e.message);
    }
});