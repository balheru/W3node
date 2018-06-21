const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

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
