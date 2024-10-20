const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/', function (req, res, next) {
    User.create(req.body)
        .then((user) => {
            res.json({ user: user });
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
});

module.exports = router;