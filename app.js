const yargs = require("yargs");
const geocode = require("./geocode/geocode.js");
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

geocode.geocodeAddress(argv.a,(errorMessage, results) =>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(JSON.stringify(results, undefined, 2));
    }
});

const request = require("request");
request({
    url: "https://api.darksky.net/forecast/bb36cfc3ba05344a98c6bbf40d4e0a80/37.8267,-122.4233",
    json: true
}, (error, response, body) =>{
    if(!error && response.statusCode == 200){
        console.log(body.currently.temperature);
    }else{
        console.log("Unable to fetch weather");
    }
});
