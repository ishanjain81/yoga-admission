module.exports.CompletePayment = function(req,res){
    return res.status(200).json({
        message: "Payment Done Succesfully!"
    });
}