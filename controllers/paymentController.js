module.exports.CompletePayment = function(req,res){
    console.log(req.body);
    return res.status(200).json({
        message: "Payment Done Succesfully!"
    });
}