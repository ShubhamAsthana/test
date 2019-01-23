const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {mongoose} = require('./server.js');
const cors = require('cors');
const employeeController = require('./controller/employeecontroller');
const countryController = require('./controller/countryController');
const cityController = require('./controller/cityController');
app.use(bodyParser.json());
app.use(cors());
 app.use('/employees', employeeController);
app.use('/countries',countryController);
app.use('/cities',cityController);
app.listen(3000, () => {
console.log('listening to port 3000')
});

