const Record = require('../models/record')
const mongoose = require('mongoose')

function create(req, res, next) {
    let productId = req.body.productId;
    let productName = req.body.productName;
    let productDesc = req.body.productDesc;
    let userId = req.body.userId;
    let record = new Record({
        productId,
        productName,
        productDesc,
        userId,
    })
    record.save().then((data) => {
        res.send({ success: "Saved Record" })
    })
}

function view(req, res, next) {
    Record.find({}).then((data) => {
        res.send({ data: data })
    })
}

function update(req, res, next) {
    Record.findByIdAndUpdate(req.params.id, req.body, (err, record) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Updating the recored " })
        };
        res.send({ success: "Updation successfull"});
    })
}

function remove(req, res, next) {
    Record.findByIdAndDelete(req.params.id, req.body, (err, record) => {
        if (err) {
            return res.status(500).send({ error: "Problem with Updating the recored " })
        };
        res.send({ success: "Deletion successfull" });
    })
}
module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove