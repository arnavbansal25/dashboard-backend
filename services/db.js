const mysql = require("mysql");

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