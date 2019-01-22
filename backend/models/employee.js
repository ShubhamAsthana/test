const mongoose = require('mongoose');
const employee = mongoose.model('Employee', {
    name: {type :String},
    position: {type:String},
    office: {type:String},
    salary: {type: Number}
});
const country = mongoose.model('country',{
    name: {type:String}
});
module.exports = {employee, country};