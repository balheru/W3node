var mysql = require('mysql');

var con = mysql.createConnection({
  host: "rds-mysql-10mval.cn7hthmsur2l.us-east-2.rds.amazonaws.com",
  user: "val",
  password: "val",
  database:"BlancaZuluGZ"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("show tables", function (err, result) {
//    if (err) throw err;
//    console.log("Result: " + JSON.stringify(result));
//  });
// });

//get companies
con.connect(function(err) {

con.query("SELECT * FROM Company", function(err, results){
  if (err) throw err
  let col1 = results[0].id
  let col2 = results[0].company_name
  let col3 = results[0].application_status


  let col11 = results[1].id
  let col21 = results[1].company_name
  let col31 = results[1].application_status

  console.log('company')
  console.log( ` ${col1} ${col2} ${col3}`)
  console.log( ` ${col11} ${col21} ${col31}`)
  console.log(JSON.stringify(results))
});
});
//
// connection.query('SELECT * FROM people', function(err, results) {
//         if (err) throw err
//         console.log(results[0].id)
//         console.log(results[0].name)
//         console.log(results[0].age)
//         console.log(results[0].address)
//       })
