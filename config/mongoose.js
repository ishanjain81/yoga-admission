const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/yogaApp`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to database'));

db.once('open',function(){
    console.log('Successfully connected to the database');
});

module.exports = db;

// Data Base set up File