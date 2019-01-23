const express = require('express');
const router = express.Router();
const { employee, Country } = require('../models/employee');
const objectId = require('mongoose').Types.ObjectId;
router.get('/', (req, res) => {
    employee.find((err, docs) => {
        if (!err)
            res.send(docs);
        else
            console.log('Error' + JSON.stringify(err, undefined, 2));
    });

    router.get('/:id', (req, res) => {
        if (!objectId.isValid(req.params.id))
            return res.status(400).send('no object with given id');
        employee.findById(req.params.id, (err, doc) => {
            if (!err)
                res.send(doc);

        })
    })

});
router.post('/', (req, res) => {
    const emp = new employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if (!err)
            res.send(doc);
    });
})
router.put('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        console.log('id not found');
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary

    }
    employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, docs) => {
        if (!err)
            res.send(docs);
    });
});
router.delete('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send('no object found with the given id');
    employee.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err)
            res.send(docs);
    });
})
module.exports = router;