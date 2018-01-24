const request = require("request");
const yargs = require("yargs");
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

debugger;
var encoded = encodeURIComponent(argv.a);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded}`,
    json: true
},(error, response, body) =>{
    if(error){
        console.log("Unable to connect to Google Servers");
    }else if(body.status === "ZERO_RESULTS"){
        console.log("unable to find address");
    }else if(body.status === "OK"){
        // last integer is # of spaces
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});