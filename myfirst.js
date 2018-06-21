const express = require('express')
const app = express()
let request = require('request');
var moment = require('moment');


app.get('/', (req, res) => res.send('Hello World!'))



let lat = 45.536883
let lng = -73.674726
// https://api.sunrise-sunset.org/json?lat=45.536883&lng=-73.674726
let url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`

app.get('/sunrise',(req,res) => {

  request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {

  let weather = JSON.parse(body);
    let msg = `It's ${weather.results['sunrise']} for the sunrise at your location and  ${weather.results['sunset']} for the sunset in your location`
    console.log(msg)
  }
  res.send(body)
});

})

// simple post request
app.post('/', function(req, res) {
  res.send('Got a POST request')
})

// simple put request
app.put('/user', function(req, res) {
  res.send('Got a PUT request at /user')
})

// simple delete request
app.delete('/user', function(req, res) {
  res.send('Got a DELETE request at /user')
})

//simple get request with params
app.get('/users/:userId', function(req, res) {
  res.send(req.params)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
