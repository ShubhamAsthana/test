const express = require('express');
const router = express.Router();

router.get('/',(req,res) =>{
    country.find((err,docs) =>{
        if(!err)
        res.send(docs);
    });

});
module.export = router;