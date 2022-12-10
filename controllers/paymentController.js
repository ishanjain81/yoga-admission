const Customer = require('../models/customer');

module.exports.CompletePayment = function(req,res){
    Customer.create(req.body,function(err,customer){
        if(err){
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