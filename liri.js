require("dotenv").config();;
require("./keys.js")
var axios = require('axios');
const omdb = "http://www.omdbapi.com/?t=";
const spotify = require("node-spotify-api");

axios.all([
  axios.get('http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy'),
  axios.get('https://api.spotify.com')
]).then(axios.spread((omdb, spotify) => {
  console.log(spotify, "epmd")
  console.log(omdb, "sandlot");

})).catch(error => {
  console.log(error);
});

// https.get('"http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy"', (resp) => {
// let data = 'band, song';
// resp.on('data', (chunk) => {
//   data += chunk;
// });

// // The whole response has been received. Print out the result.
// resp.on('end', () => {
//   console.log(JSON.parse(data).explanation);
// });

// }).on("error", (err) => {
// console.log("Error: " + err.message);
// });

// https.get('https://api.spotify.com', (resp) => {
// let data = 'type, query';
// const spotify = ""           
//  spotify.search({
//     type: '',
//     query: ''
// }, function (err, data) {
//     if (err) {
//         return console.log('Error occurred: ' + err);
//     }
   
//     console.log(data.tracks.items[0].album.artists[0].name)
// })
// }



//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });

//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });

// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });