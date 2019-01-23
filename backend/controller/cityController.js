const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;
const {city} = require('../models/employee');

router.get('/',(req,res) =>{
    city.find((err,docs) =>{
        if(!err)
        res.send(docs);
    });

});
router.get('/:name', (req,res) =>{
   
    city.find(({city_id:req.params.name}),(err,doc) =>{
        if(!err)
        res.send(doc);
    })
})
module.exports = router;    