const con = require('../config/mysql');

module.exports.check = function(req,res){
    return res.status(200).json({
        message: "Server is up and Running!"
    });
}

module.exports.CompletePayment = function(req,res){
    let sql = `INSERT INTO customers (firstName, lastName,age,timeSlot,month,amount) VALUES 
                ("${req.body.firstName}"," ${req.body.lastName}", ${req.body.age}, "${req.body.timeSlot}", "${req.body.month}", ${req.body.amount})`;
    con.query(sql, function (err, result) {
        if (err){
            console.log(err);
            return res.status(200).json({
                message: "Internal Server Error!"
            });
        }
        return res.status(200).json({
            message: "Payment Done Succesfully!"
        });
    });
}