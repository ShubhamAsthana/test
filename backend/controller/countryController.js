const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;
const {employee, Country} = require('../models/employee');

router.get('/',(req,res) =>{
    Country.find((err,docs) =>{
        if(!err)
        res.send(docs);
    });

});

router.get('/:id', (req,res) =>{
    if(!objectId.isValid(req.params.id))
    console.log('No object found with given id');
    Country.findById(req.params.id,(err,doc) =>{
        if(!err)
        res.send(docs);
    })
})
module.exports = router;