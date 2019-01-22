const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {mongoose} = require('./server.js');
const cors = require('cors');
const employeeController = require('./controller/employeecontroller');
const countryController = require('./controller/countryController');
app.use(bodyParser.json());
app.use(cors());
// app.use('/employee', employeeController);
app.use('/country',employeeController);
app.listen(3000, () => {
console.log('listening to port 3000')
});

