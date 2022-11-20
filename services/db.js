// const {createPool} = require('mysql');
const mysql = require("mysql");
// const pool = createPool({
//   host: "localhost",
//   user:"root",
//   password: "root8232",
//   database: "dashboard",
//   connectionLimit: 10
// })

// pool.query(`select distinct(newData.dates) from (select substring(createdAt, 1, 10) as dates from Data) as newData;`, (err, result, fields) => {
//   if(err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });

// pool.query(`select substring(createdAt, 1, 10) as dates from Data;`, (err, result, fields) => {
//   if(err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });

const mysqlConntection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root8232",
  database: "dashboard",
  multipleStatements: true
})

mysqlConntection.connect((err) => {
  if(!err) {
    console.log("Connected");
  } else {
    console.log("Connection Failed");
  }
})

module.exports = mysqlConntection;