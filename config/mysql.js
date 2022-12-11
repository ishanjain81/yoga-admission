const mysql = require('mysql');

let con = mysql.createConnection({
    host: process.env.YOGA_Host,
    user: process.env.YOGA_user,
    password: process.env.YOGA_password	
});

con.connect(function(err) {
    if (err){
        console.log(err);
    }
    console.log("Connected!");
    // con.query("CREATE DATABASE IF NOT EXISTS yogaApp", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    // });
    con.query(`USE ${process.env.YOGA_user}`, function (err, result) {
        if (err) throw err;
    });
    let customer = "CREATE TABLE IF NOT EXISTS customers (firstName VARCHAR(255), lastName VARCHAR(255), age INT, timeSlot VARCHAR(255), month VARCHAR(255), amount INT)";
    con.query(customer, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

module.exports = con;