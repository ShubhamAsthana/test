const mongoose = require('mongoose');
const employee = mongoose.model('Employee', {
    name: {type :String},
    position: {type:String},
    office: {type:String},
    salary: {type: Number}
});
const Country = mongoose.model('Country',{
    name: {type:String}
});
const city = mongoose.model('City',{
    name: {type:String}
});
module.exports = { employee,Country,city};