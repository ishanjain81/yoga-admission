const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true
    },
    timeSlot:{
        type: String,
        required: true
    },
    month:{
        type: String,
        required: true
    },
    amount:{
        type: Number,
        required: true
    }
});

const Customer = mongoose.model('Customer',customerSchema);

module.exports = Customer;