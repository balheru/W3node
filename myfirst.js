var http = require('http');
var dt = require('./firstmodule');

var url = require('url');
var fs = require('fs');



http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
 fs.readFile('demo.html', function (err,data){
   res.writeHead(200,{'Content-Type':'text/html'});
   res.write(data);
   res.end;
 });
  // var q = url.parse(req.url, true).query;
  // var txt = q.year + " " + q.month;

  // res.write("The date and time are currently: " + dt.myDateTime())
  // res.write(req.url);
  // res.end(txt);
}).listen(8080);
