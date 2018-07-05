const express = require('express')
const app = express()
const request = require('request');
const moment = require('moment');
const mysql = require('mysql');
var db = require('./dbConnection');

app.get('/sunrise',(req,res) => {

  let lat = 45.536883
  let lng = -73.674726
  // https://api.sunrise-sunset.org/json?lat=45.536883&lng=-73.674726
  let url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`

  request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {

  let weather = JSON.parse(body);
  let sunvar = weather.results.sunset
  let sunvar2 = weather.results.sunrise

  console.log('sunvar: ' + weather);
  console.log(sunvar2);
    // let msg = `It's ${weather.results['sunrise']} for the sunrise at your location and  ${weather.results['sunset']} for the sunset in your location`
    // console.log(msg)
    // console.log(Object.keys(weather))
  }
  res.send(body)
});
})

app.get('/companies',(req,res)=>{
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
