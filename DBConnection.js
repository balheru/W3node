var mysql = require('mysql');
var settings = require('./settings.json');
var db;

function connectDatabase() {
    if (!db) {
        db = mysql.createConnection(settings);

        db.connect(function(err){
            if(!err) {
                console.log('Database is connected!');
            } else {
                console.log('Error connecting database!');
            }
        });
    }
    return db;
}

module.exports = connectDatabase();





// var con = mysql.createConnection({
//   host: "rds-mysql-10mval.cn7hthmsur2l.us-east-2.rds.amazonaws.com",
//   user: "val",
//   password: "val",
//   database:"BlancaZuluGZ"
// });
//
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("show tables", function (err, result) {
//    if (err) throw err;
//    console.log("Result: " + JSON.stringify(result));
//  });
// });
