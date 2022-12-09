const express = require("express");
const bodyParser = require("body-parser");

const PORT = 8000;

const app = express();
const db = require('./config/mongoose');

// setting express body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// setting json parser to read data in post request
app.use(express.json());

// use express router
app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});